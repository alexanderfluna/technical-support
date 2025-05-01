export const razberiTroubleshooting = {
  "server power": `How to Troubleshoot a Server With Powering Issues:
[1] Document if the server boots up at all or how frequently it powers on and off.
[2] Verify that the AC outlet is producing 100 - 120VAC.
[3] If a UPS is in use, bypass it temporarily to test with direct wall power.
[4] Replace the power cord with another known-working one.
[5] Check for any error messages that may indicate why the server is powering off.
[5.1] Check for error messages in Event Viewer.
[5.2] Check for error messages in Razberi Monitor.
[6] On an SS32X server, confirm the following settings in BIOS:
[6.1] In "Advanced" -- "ACPI Settings", make sure "Enable Hibernation" is disabled.
[6.2] In "Advanced" -- "ACPI Settings", make sure "ACPI Sleep State" is set to "Suspend Disabled"
[6.3] In "Chipset" -- "Board Configuration", make sure "PWR-On After PWR-Fail" is set to "Last state" or "On".
[6.4] In "Chipset" -- "PCH-IO Configuration" -- "SATA and RST Configuration", make sure all the hard drives are detected. There should be 4 of them (but it will show up as 0, 1, 2, and 3).
[6.5] Check that the boot order is correct. Windows Boot Manager should be option #1.
[7] On a Core server, enter System Setup when booting into the server:
[7.1] Change the Thermal Profile to Minimum Power (Performance per Watt Optimized).
[7.2] The power of the server can be capped by specifing the watts, BTU/hr, and by a percentage. A lower power consumption typically means lower heat output, which can reduce cooling requirements. The fans may run at a lower speed, making the server quieter. Lower power usage can also reduce the thermal stress, potentially extending the life of components like CPUs and power supplies.
[8] If all other options are exhausted, perform a recovery of the OS.
[9] If the issue still persists, there may be an issue with the hardware. Please contact technical support for further assistance.`,

  "no poe": `How to Troubleshoot a Server Switch That is Not Providing PoE:
[1] Verify that the AC outlet is producing 100 - 120VAC.
[2] If a UPS is in use, bypass it temporarily to test with direct wall power.
[3] Replace the power cord with a known-working one.
[4] Confirm that the powered device is IEEE 802.3af/at compliant by looking up its data sheet.
[5] Verify that the switch is not producing more PoE than its PoE budget allows.
[6] Try pinging the switch from the server's command prompt.
[7] If the switch is accessible, disable and enable PoE on the port in the switch's web interface.
[8] If the switch is still not providing PoE, default the switch by placing a jumper between ports 1 and 2.
[9] If the issue still persists, there may be an issue with the hardware. Please contact technical support for further assistance.`,

  "raid": `How to Troubleshoot a Server with a Bad Drive or RAID:
[1] Take note of the following RAID configurations.
- RAID 0 requires at least 2 drives. One drive failing corrupts the entire RAID.
- RAID 1 requires at least 2 drives and can lose up to half the drives. Replacing the drive(s) should automatically rebuild the RAID.
- RAID 5 requires at least 3 drives and can lose up to one drive. Replacing the drive should automatically rebuild the RAID.
- RAID 6 requires at least 4 drives and can lose up to two. Replacing the drive(s) should automatically rebuild the RAID.
- RAID 10 requires at least 4 drives and can lose up to half the drives. Replacing the drive(s) should automatically rebuild the RAID.
[2] Using one of the following, confirm the server's current RAID configuration and which HDD has failed.
- Razberi Monitor Cloud
- Razberi Monitor -- System Info
- BIOS
- Device Manager
- Intel Rapid Storage Technology
- iDRAC
- Diskpart
[3] Contact technical support to check the server's warranty status. Covered drives receive free replacements. Out-of-warranty drives must be purchased separately.
[4] If the RAID is corrupted, delete the virtual disk, create a new virtual disk with each HDD selected, and format the volume as NTFS using one the following.
- BIOS
- Disk Management
- Intel Rapid Storage Technology
- iDRAC`,

  "msata": `How to Troubleshoot a Server with a Bad mSATA:
[Option #1] Ship the server to us, and we can re-image the unit.
[Option #2] We can ship out a new mSATA with our image on it.
[Option #3] Purchase a new mSATA, install the OS, and we can provide the necessary drivers and software.`,

  "nic": `How to Troubleshoot a Server with NIC Issues:
[1] Document if (1) the LEDs illuminate on the NIC when an Ethernet connection is made and (2) whether the NIC can be successfully pinged.
[2] Enter "View network connections" in the Windows search box.
[3] In Network Connections, disable and reenable the NIC.
[4] Select the 'Diagnose this connection' option for the NIC to diagnose the issue.
[5] In Device Manager, verify what drivers the NIC has. Contact technical support to determine if all of the necessary drivers are installed for the NIC.`,

  "os": `How to Troubleshoot a Server Experiencing Issues with the OS:
[1] Determine the OS image installation date. In PowerShell, type the command Get-CimInstance -ClassName Win32_OperatingSystem | Select-Object InstallDate. Make sure this matches what is in Razberi Monitor Cloud.
[2] Open Disk Management to confirm there is only one OS partition and that the RAID is healthy.
[3] Review the server's alert logs to identify the cause of the OS issue.
[3.1] Check the Razberi Monitor alert logs.
[3.2] Check the Event Viewer alert logs.
[3.3] Check the iDRAC alert logs.
[4] Open Task Manager and review the the CPU and memory utilization. If either are high, determine what processes are using the most resources and what services are being used by those processes.
[5] If the OS is not accessible, or if all other options are exhausted, perform a recovery of the OS. Please note it is recommended to back up all of the data on the server as all of the storage will be lost.
[6] If the OS is still experiencing issues after a recovery, contact technical support.`,

  "rdp": `How to Set Up a Remote Desktop Connection:
[1] Enable Remote Desktop in the server's settings.
[2] Connect a PC to a NIC on the server.
[3] Open the Remote Desktop Connection software on the PC.
[4] Enter the IP address of the server's NIC.
[5] Enter the server's Windows username and password.`,

  "registration": `How to Skip the Razberi Monitor Registration:
While on the registration page, hold down: Ctrl + Shift + Alt + F11.`,

  "camera defense": `How to Set Up Camera Defense:
[1] Set up Device Binding
- Master Device Binding: Enable or Disable All
- Bind a specific port to the MAC address of the connected device.
[2] Set up the Device Groups
- A device group is a set of similar devices assigned the same security policies.
- By default, all active ports are assigned to the "Cameras" device group.
- Create a new device group or modify existing device group(s).
- Add or modify the ports to be associated with each device group.
[3] Set up the Firewall
- Select HTTP, HTTPS, and RTSP services for device groups with cameras.
- Disable discovery services: Ping, DHCP, NTP, Telnet, DNS, FTP, TFTP, SSH, SMTP, Bonjour
[4] Set up the Internet Protection
- Use Internet Protection to prevent devices from reaching routable networks.
- Or specify allowed networks using sub-masks/IP addresses.
[5] Set up the Password Protection
- Enable Password Monitoring to check for default/common passwords.`,

  "password": `What to do if the Windows Password is Forgotten:
Try resetting the password. If the server does not allow for a reset of the Windows password, a recovery of the operating system will need to be performed. Contact technical support for the Windows recovery procedure.`
};