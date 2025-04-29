export const razberiTroubleshooting = {
    "server power": `How to Troubleshoot a Server With Powering Issues:
[1] Document if the server boots up at all or how frequently it powers on and off.
[2] Confirm the AC outlet is producing 100 - 120VAC.
[3] If a UPS is in use, bypass it temporarily to test with direct wall power.
[4] Replace the power cord.
[5] Check for any error messages that may indicate why the server is powering off.
  - Check Event Viewer.
  - Check Razberi Monitor.
[6] On an SS32X server, confirm the following settings in BIOS:
  - Check that the boot order is correct. Windows Boot Manager should be option #1.
  - In "Advanced" -- "ACPI Settings", make sure "Enable Hibernation" is disabled.
  - In "Advanced" -- "ACPI Settings", make sure "ACPI Sleep State" is set to "Suspend Disabled"
  - In "Chipset" -- "PCH-IO Configuration" -- "SATA and RST Configuration", make sure all the hard drives are detected.
  - In "Chipset" -- "Board Configuration", make sure "PWR-On After PWR-Fail" is set to "Last state" or "On".
[7] On a Core server, enter the System Setup when booting into the server:
  - Change the Thermal Profile to Minimum Power (Performance per Watt Optimized).
  - The power of the server can be capped by specifying the watts, BTU/hr, and by a percentage.
[8] Perform a recovery of the OS.
[9] If the issue persists, there may be an issue with the hardware. Please contact technical support for further assistance.`,

  "server poe": `How to Troubleshoot a Server Switch with PoE Issues:
[1] Confirm the AC outlet is producing 100 - 120VAC.
[2] If a UPS is in use, bypass it temporarily to test with direct wall power.
[3] Replace the power cord.
[4] Try pinging the switch from the command prompt on the server.
[5] Confirm that the powered devices are IEEE 802.3af/at compliant.
[6] Verify that the switch is not producing more PoE than its PoE budget allows.
[7] Disable and enable PoE on the port in the switch's web interface.
[8] While the server is powered on, default the switch by placing a jumper between ports 1 and 2.`,

  "server raid": `How to Troubleshoot a Server with RAID Issues:
[1] Take note of the RAID configuration requirements:
  - RAID 0 requires at least 2 drives. One drive failing corrupts the entire RAID.
  - RAID 1 requires at least 2 drives and allows for the loss of half.
  - RAID 5 requires at least 3 drives and allows for the loss of one.
  - RAID 6 requires at least 4 drives and allows for the loss of two.
  - RAID 10 requires at least 4 drives and allows for the loss of half.
[2] Using one of the following technologies, confirm the current RAID configuration:
  - BIOS
  - Razberi Monitor Cloud
  - Razberi Monitor > System Info
  - Device Manager
  - Intel Rapid Storage Technology
  - iDRAC
  - Diskpart
[3] Contact technical support to check the server's warranty status.
[4] If the RAID is corrupted, delete the virtual disk, create a new virtual disk with each HDD selected, and format the volume as NTFS using:
  - BIOS
  - Disk Management
  - Intel Rapid Storage Technology
  - iDRAC`,

  "server nic": `How to Troubleshoot a Server with NIC Issues:
[1] Enter "View network status and tasks" in the Windows search box.
[2] Click "Change adapter settings".
[3] Disable and enable the NIC
[4] Diagnose the NIC connection
[5] In Device Manager, verify the NIC has the necessary drivers.`,

  "server os": `How to Troubleshoot a Server with OS Issues:
[1] Check the Razberi Monitor alert logs.
[2] Check the Event Viewer alert logs.
[3] Check the iDRAC alert logs.
[4] Check the CPU utilization and processes in Task Manager
[5] Confirm there is only one OS partition in Disk Management.
[6] In PowerShell, type: Get-CimInstance -ClassName Win32_OperatingSystem | Select-Object InstallDate
[7] Perform a recovery of the OS.`,

  "server rdp": `How to Set Up a Remote Desktop Connection:
[1] Enable Remote Desktop in the server's settings.
[2] Connect a PC to a NIC on the server.
[3] Open the Remote Desktop Connection software on the PC.
[4] Enter the IP address of the server's NIC.
[5] Enter the server's Windows username and password.`,

  "server registration": `How to Skip the Razberi Monitor Registration:
While on the registration page, hold down: Ctrl + Shift + Alt + F11.`,

  "server camera defense": `How to Set Up Camera Defense:
Device Binding:
  - Master Device Binding: Enable or Disable All
  - Bind a specific port to the MAC address of the connected device.

Device Groups:
  - A device group is a set of similar devices assigned the same security policies.
  - By default, all active ports are assigned to the "Cameras" device group.
  - Create new device groups or modify existing ones as needed.

Firewall:
  - Select HTTP, HTTPS, and RTSP services for camera groups.
  - Disable discovery services: Ping, DHCP, NTP, Telnet, DNS, FTP, TFTP, SSH, SMTP, Bonjour.

Internet Protection:
  - Use Internet Protection to prevent devices from reaching routable networks.
  - Or specify allowed networks using sub-masks/IP addresses.

Password Protection:
  - Enable Password Monitoring to check for default/common passwords.`,

  "server password": `What to do if the Windows Password is Forgotten:
There is no way to reset the Windows password. A recovery of the operating system will need to be performed. Contact technical support for the Windows recovery procedure.`,
};

export const razberiInfo = {
    "computing terminology": `Computing Terminology:
  CPU (Central Processing Unit): The brain of the system that executes instructions.
  CPU Cache (L1, L2, L3): High-speed memory for frequently accessed data.
  CPU Cores: Independent processing units within a CPU.
  CPU Threads: Sequences of instructions a core can execute.
  
  Example CPUs:
  - Intel Core i9-14900K: 24 cores, 32 threads
  - AMD Ryzen 9 7950X: 16 cores, 32 threads
  
  GPU (Graphical Processing Unit): Specialized for parallel processing and graphics.
  
  Memory:
  - DRAM: Volatile memory for active data
  - DIMM/SODIMM: Memory module form factors
  - DDR Memory: DDR5 offers speeds >6000 MT/s
  
  Storage:
  - NVMe SSDs: Fast PCIe-based storage
  - M.2 NVMe: Compact form factor
  - SATA SSDs: Slower but widely compatible
  - BOSS: Boot Optimized Storage Solution
    - BOSS-N1: NVMe-based
    - BOSS-S1: SATA-based
  
  RAID (Redundant Array of Independent Disks):
  - RAID 0: 2+ drives, no redundancy
  - RAID 1: 2+ drives, mirroring
  - RAID 5: 3+ drives, single parity
  - RAID 6: 4+ drives, dual parity
  - RAID 10: 4+ drives, mirrored stripes
  
  Other Terms:
  - Hertz: Frequency measurement (MHz, GHz)
  - Bandwidth/Throughput/Latency
  - iDRAC: Dell's remote management solution`,
  
    "power over ethernet": `Power Over Ethernet (PoE):
  - PoE Standards:
    - IEEE 802.3af (PoE): 15.4W
    - IEEE 802.3at (PoE+): 30W
    - IEEE 802.3bt (PoE++): 60W/100W
  
  - PoE Classes:
    - Class 0: Default, 0.44-12.94W
    - Class 1: 0.44-3.84W
    - Class 2: 3.84-6.49W
    - Class 3: 6.49-12.95W
    - Class 4: 12.95-25.5W (PoE+)
    - Class 5-8: Higher power (PoE++)
  
  - PoE Pinouts:
    - Mode A: Power on data pairs (1-2, 3-6)
    - Mode B: Power on spare pairs (4-5, 7-8)
  
  - PoE Budget: Total power a switch can provide to connected devices.`
  };