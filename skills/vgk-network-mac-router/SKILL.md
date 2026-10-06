---
name: vgk-network-mac-router
description: Bypassing VAN 152/9003 ban via router MAC address change on OpenWrt -- UCI commands, interface restart, ARP flush. When to use vs NIC MAC spoof.
---

# Router MAC Change (OpenWrt) for VAN 152/9003

VAN error codes 152 and 9003 indicate a ban on the network level -- specifically the MAC address that the ISP/router reports to Riot's infrastructure (not the local NIC MAC).

In NAT environments, VGC receives the WAN MAC (router) via DHCP option 61 or via Riot's service fingerprinting. Changing the local NIC MAC does NOT fix this -- the router's WAN interface MAC is what Riot sees.

## When Router MAC Is the Issue

- NIC MAC spoofed (registry change) -> still banned: router WAN MAC is tracked.
- ISP assigns IP based on router MAC (DHCP MAC binding) -> MAC change also gets a fresh IP lease.
- VAN 152 after reinstalling Windows + new NIC MAC -> MAC is OK but router MAC is still old.

## OpenWrt: Change WAN MAC via UCI

OpenWrt stores network config in `/etc/config/network`. UCI is the CLI interface.

### Step 1: Generate a new MAC

Use a locally-administered, unicast MAC (bit 1 of first octet = 1, bit 0 = 0):
First octet should be `x2`, `x6`, `xA`, or `xE`.

```sh
# Example: random MAC
python3 -c "import random; o=[random.randint(0,255) for _ in range(6)]; o[0]=(o[0]&0xFC)|0x02; print(':'.join('%02x'%b for b in o))"
```

Or just pick one manually: `02:11:22:33:44:55`

### Step 2: Set MAC on WAN interface

```sh
# SSH into router
ssh root@192.168.1.1

# Check current WAN interface name
uci show network.wan
# Usually: network.wan.ifname='eth1' or 'wan' or 'eth0.2'

# Set new MAC
uci set network.wan.macaddr='02:11:22:33:44:55'
uci commit network
```

### Step 3: Restart interface + flush ARP

```sh
ifdown wan
ifup wan

# Force ARP flush so router gets a new IP from ISP DHCP
ip neigh flush all

# Alternatively: restart networking
/etc/init.d/network restart
```

### Step 4: Verify

```sh
ip link show $(uci get network.wan.ifname)
# Should show new MAC in "link/ether" line
```

From a PC on the LAN:
```cmd
ipconfig /all
```
External IP check: curl ifconfig.me -- if DHCP re-assigned, external IP may also change.

## Combined Approach

For a full HWID reset:
1. Change router WAN MAC (this method).
2. Spoof local NIC MAC (registry `NetworkAddress`).
3. Spoof disk serial, SMBIOS, GPU UUID.
4. Fresh Windows install or at minimum: delete MachineGuid, delete USN journal.
5. New Riot account.

## Limitations

- ISPs that use PPPoE (username/password) track by credentials, not MAC. MAC change alone insufficient.
- If your ISP uses static IP assignment tied to account: contact ISP to update registered MAC.
- Some ISPs take up to 24h to update DHCP binding.