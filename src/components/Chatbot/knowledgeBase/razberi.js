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

  "ssd": `How to Troubleshoot a Server with a Bad mSATA:
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

export const razberiInfo = {
  "computing terminology": `Computing Terminology:
CPU (Central Processing Unit): The central processing unit (CPU) is the primary component of a computer responsible for executing instructions and performing computations. It acts as the brain of the system, handling everything from running operating system processes to executing user applications. The efficiency of a CPU is determined by factors such as clock speed, core count, cache size, and instruction set architecture.

CPU Cache (L1, L2, L3): The CPU cache is a small amount of high-speed memory located within the processor, designed to store frequently accessed data and instructions. L1 cache is the smallest but fastest, situated closest to the processing cores. L2 cache is slightly larger but slower, while L3 cache is the largest and shared among multiple cores, improving overall efficiency by reducing the need to fetch data from main memory.

CPU Cores: Modern processors contain multiple cores, each functioning as an independent processing unit capable of executing its own set of instructions. A dual-core processor has two cores, a quad-core has four, etc. More cores enable better multitasking and improved performance in multi-threaded applications.

CPU Threads: A CPU thread represents a sequence of instructions that a core can execute. Modern CPUs support simultaneous multithreading (SMT), commonly referred to as hyper-threading in Intel processors. This allows a single core to handle multiple threads at once, improving efficiency by maximizing core utilization.

(CPU Example #1) Intel Core i9-14900K: This high-performance Intel processor features 24 cores and 32 threads, using a hybrid architecture that combines performance and efficiency cores. It is designed for demanding tasks like gaming, video editing, and software development.

(CPU Example #2) AMD Ryzen 9 7950X: A powerful AMD processor with 16 cores and 32 threads, optimized for high-performance computing, gaming, and content creation. It features a high clock speed and advanced power management for energy efficiency.

GPU (Graphical Processing Unit): A GPU is a specialized processor designed for parallel processing, making it ideal for handling complex graphics rendering and compute-intensive tasks. Unlike CPUs, which focus on sequential task execution, GPUs excel at processing multiple data streams simultaneously. This makes them essential for gaming, 3D rendering, AI training, and scientific simulations. Modern GPUs are equipped with dedicated hardware for video decoding and encoding, allowing them to compress and decompress video files efficiently. This reduces the load on the CPU, improving overall system performance. Popular video codecs, such as H.264 and H.265, are commonly supported by GPUs for smooth playback of high-definition and ultra-high-definition (UHD) content.

DRAM (Dynamic Random Access Memory): DRAM is a type of volatile memory that temporarily stores data that a CPU actively uses. It requires continuous power to retain data and is significantly faster than traditional storage devices like hard drives and SSDs.

DIMM (Dual In-Line Memory Module): A DIMM is the standard form factor for RAM in desktops and servers, providing high-capacity and high-speed memory modules.

SODIMM (Small Outline Dual In-Line Memory Module): SODIMM modules are smaller versions of DIMMs, primarily used in laptops and compact computing devices.

DDR (Double Data Rate) Memory: DDR memory technology allows for high-speed data transfer by transmitting data on both the rising and falling edges of the clock cycle, effectively doubling the memory bandwidth. DDR5, the latest generation, offers speeds starting at 4800 MT/s and exceeding 6000 MT/s in high-end configurations.

MT/s (Mega Transfers per Second): This metric measures how many millions of transfers occur per second, providing a more accurate representation of memory performance compared to clock speed.

PCH (Platform Controller Hub): The PCH is a chipset developed by Intel that acts as an intermediary between the CPU and various system peripherals. It manages communication with I/O devices, such as USB ports, SATA storage interfaces, and PCIe expansion slots, ensuring efficient data flow across the system.

PCIe (Peripheral Component Interconnect Express): PCIe is the standard interface for connecting high-speed internal components to a computer's motherboard. It enables fast communication between the CPU and peripherals like graphics cards, storage devices, and network adapters. PCIe 5.0 is the latest generation of PCIe offers speeds of 32 GT/s (gigatransfers per second), with each lane providing up to 4 GB/s of bandwidth.

NVMe (Non-Volatile Memory Express) SSDs: NVMe SSDs use the PCIe interface to deliver extremely fast storage speeds compared to traditional SATA SSDs. By bypassing older storage controllers, NVMe drives significantly reduce latency and increase throughput.

M.2 NVMe SSDs: These compact SSDs connect directly to a motherboard's M.2 slot, eliminating the need for cables and offering high-speed storage for modern computers.

SATA (Serial ATA) SSDs: Typically, a SATA (Serial ATA) SSD is a 2.5-inch solid-state drive or an mSATA module designed for compact setups. The SATA interface is a widely adopted standard for connecting storage devices to the motherboard, relying on separate data and power cables to establish the connection. Although newer, faster storage technologies exist, SATA remains a viable option due to its broad compatibility across various systems. SATA devices connect to dedicated SATA ports on the motherboard, which makes them universally supported. However, unlike NVMe drives, which connect directly to the motherboard via M.2 slots, SATA drives require cabling, which can contribute to system clutter and potential airflow restrictions. One of the key advantages of SATA SSDs is their widespread support across both older and newer computer systems. This compatibility makes them a great choice for upgrading legacy machines that lack NVMe support while still offering a significant performance boost over traditional hard drives. SATA SSDs are ideal for budget-friendly builds, secondary storage, or systems that do not support NVMe storage solutions. Although they offer lower speeds compared to NVMe SSDs, their affordability and reliability make them a popular choice for general computing tasks.

BOSS (Boot Optimized Storage Solution): The Boot Optimized Storage Solution (BOSS) is a dedicated storage controller designed specifically for booting a server's operating system. It uses two mirrored M.2 SATA SSDs in a RAID 1 configuration, ensuring redundancy and data protection. By offloading boot storage to a dedicated module, BOSS helps free up primary storage slots for higher-capacity or high-performance drives used for applications and data. NVMe-based M.2 SSDs utilized in BOSS-N1 offer much lower latency and higher bandwidth, making them more suitable for modern, high-performance servers. This upgrade allows servers to boot faster and perform system operations more efficiently.

BOSS-N1: The BOSS-N1 is the NVMe-based version of the Boot Optimized Storage Solution. Unlike its SATA-based counterpart, it leverages NVMe (Non-Volatile Memory Express) technology, which significantly improves read and write speeds compared to traditional SATA drives. Overall, the BOSS-N1 provides higher performance than the BOSS-S1, making it a preferred choice for workloads that require fast boot times and enhanced reliability.

BOSS-S1: The BOSS-S1 is the SATA-based version of the Boot Optimized Storage Solution. Unlike the BOSS-N1, which utilizes NVMe technology, the BOSS-S1 relies on SATA-based M.2 SSDs. This makes it a cost-effective solution for boot drives while maintaining redundancy through RAID 1 mirroring. While BOSS-S1 offers reliable performance for booting a server's operating system, it does not provide the same speed advantages as NVMe-based solutions. However, its affordability and compatibility with older systems make it a practical choice for many server configurations. Overall, BOSS-S1 is a lower-performance alternative to BOSS-N1 but remains a dependable solution for managing boot drives in server environments.

PERC (PowerEdge RAID Controller): The PowerEdge RAID Controller (PERC) is a hardware RAID controller used in Dell servers to manage RAID configurations. It provides redundancy, performance optimization, and data protection by allowing multiple hard drives or SSDs to be configured in RAID arrays. By handling RAID operations at the hardware level, PERC reduces the processing load on the CPU and improves storage efficiency. It supports various RAID levels, including RAID 0 (striping), RAID 1 (mirroring), RAID 5 (striping with parity), and RAID 10 (a combination of mirroring and striping), among others. PERC ensures that critical server data remains accessible even in the event of a drive failure, making it an essential component in enterprise-level storage management.

iDRAC (Integrated Dell Remote Access Controller): iDRAC is Dell's proprietary remote management solution for servers, allowing administrators to monitor, configure, and troubleshoot systems remotely.

RAID (Redundant Array of Independent Disks): A data storage technology that combines multiple physical hard drives or SSDs into a single logical unit. Depending on the RAID level used, it can improve performance, provide redundancy, or achieve both. Different RAID levels offer varying benefits. For instance, RAID 0 uses disk striping to increase performance but lacks redundancy, while RAID 1 mirrors data across two drives to ensure fault tolerance. RAID 5 and RAID 6 incorporate parity data for redundancy while still maintaining good performance. RAID 10 (a combination of RAID 1 and RAID 0) offers both speed and redundancy, making it a popular choice for enterprise applications. RAID technology is widely used in servers, data centers, and high-performance computing environments to enhance storage reliability and efficiency. It plays a crucial role in safeguarding data against drive failures while optimizing read and write operations.

RAID Level Comparison:
- RAID 0: At least 2 drives | Total storage
- RAID 1: At least 2 drives | Half the # of drives
- RAID 5: At least 3 drives | Minus 1 drive
- RAID 6: At least 4 drives | Minus 2 drives
- RAID 10: At least 4 drives | Half the # of drives

Hertz: A hertz (Hz) is the fundamental unit of frequency in the International System of Units (SI), representing one cycle per second. In computing and electronics, it refers to the number of oscillations or clock cycles occurring in one second. For instance, a CPU with a frequency of 3 GHz (gigahertz) executes three billion cycles per second. This measurement is crucial in determining the speed and efficiency of processors and other digital circuits.

Megahertz: A megahertz (MHz) equals one million hertz or one million cycles per second. It is commonly used to measure the clock speed of older processors, memory modules, and radio frequencies. In earlier computing generations, processors operated in the range of tens to hundreds of megahertz, whereas modern systems function in the gigahertz range.

Gigahertz: A gigahertz (GHz) equals one billion hertz or one billion cycles per second. Most modern processors, whether for desktops, laptops, or servers, operate in the multi-gigahertz range, with clock speeds typically between 2 GHz and 5 GHz. The higher the clock speed, the more instructions a processor can execute per second, though overall performance depends on other factors like core count and architecture.

Bandwidth: Bandwidth refers to the maximum amount of data that can be transmitted over a network connection or data bus in a given period. It is measured in bits per second (bps), with common units including megabits per second (Mbps) and gigabits per second (Gbps). High bandwidth is essential for tasks that involve transferring large amounts of data, such as streaming high-definition videos or running data-intensive applications.

Throughput: While bandwidth represents the theoretical maximum data transfer rate, throughput refers to the actual rate at which data is successfully transmitted and received. Factors like network congestion, protocol overhead, and hardware limitations affect throughput. For example, a 1 Gbps internet connection may only achieve an actual throughput of 800 Mbps due to network inefficiencies.

Latency: Latency measures the delay between sending and receiving data, often expressed in milliseconds (ms). It is a crucial factor in applications like gaming, video conferencing, and financial transactions. Lower latency means faster response times, which is essential for real-time communication. High latency can be caused by network congestion, long physical distances between devices, or inefficient routing.`,

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