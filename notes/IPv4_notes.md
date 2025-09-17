# 🌐 IPv4 Addressing – Study Notes

IPv4 (Internet Protocol version 4) is the most widely used addressing method in networks.  
It uses **32-bit addresses**, written as 4 decimal numbers separated by dots (e.g., `192.168.1.1`).  

---

## 📌 Structure
- **32 bits total** → divided into 4 octets (8 bits each).  
- Each octet ranges from **0 to 255**.  
- Example: `11000000.10101000.00000001.00000001` → `192.168.1.1`  

---

## 📌 Address Types
1. **Unicast** – One-to-one communication.  
2. **Broadcast** – One-to-all (e.g., `255.255.255.255`).  
3. **Multicast** – One-to-many (e.g., `224.0.0.0 – 239.255.255.255`).  

---

## 📌 Private vs Public IPs
- **Private Ranges** (used inside LANs, not routable on the internet):  
  - `10.0.0.0 – 10.255.255.255`  
  - `172.16.0.0 – 172.31.255.255`  
  - `192.168.0.0 – 192.168.255.255`  

- **Public IPs** – Assigned by ISPs, routable on the internet.  

---

## 📌 Subnet Mask
- Used to separate **network portion** and **host portion** of an IP.  
- Example:  
  - IP: `192.168.1.10`  
  - Subnet Mask: `255.255.255.0`  
  - Network: `192.168.1.0`  
  - Host Range: `192.168.1.1 – 192.168.1.254`  

---

## 📌 Special Addresses
- **0.0.0.0** – Default route / unknown host.  
- **127.0.0.1** – Loopback (localhost).  
- **169.254.x.x** – APIPA (assigned when DHCP fails).  

---

✅ **Next Step:** Learn **subnetting** (CIDR notation, calculating subnets, usable hosts).
