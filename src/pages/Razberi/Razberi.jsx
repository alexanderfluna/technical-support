import React, { useState, useRef, useEffect } from 'react';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import RazberiSelectorTool from './RazberiSelectorTool';
import Navbar from '../../components/Navigation/Navbar';

const Razberi = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [activeSubSection, setActiveSubSection] = useState(null);
  
  // Create refs for each content section
  const troubleshootingRef = useRef(null);
  const relevantInfoRef = useRef(null);
  const selectorToolRef = useRef(null);

  const handleSectionClick = (content) => {
    setSelectedContent(prevContent => prevContent === content ? '' : content);
    setActiveSubSection(null);
    
    if (selectedContent !== content) {
      setTimeout(() => {
        if (content === "razberi-selector-tool" && selectorToolRef.current) {
          selectorToolRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  const handleSubSectionClick = (sectionId) => {
    setActiveSubSection(sectionId);
    
    // Find the element and scroll to it
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const RazberiTroubleshooting = ({ activeSubSection }) => {
    useEffect(() => {
      if (activeSubSection) {
        const element = document.getElementById(activeSubSection);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }, [activeSubSection]);
  
    return (
      <div className="faq-list">
        <h1 className="faq-title">Troubleshooting Servers</h1>
  
        <div id="server-power" className="faq-answer">
          <h1>How to Troubleshoot a Server With Powering Issues</h1>
          <p><strong>[1]</strong> Document if the server boots up at all or how frequently it powers on and off.</p>
          <p><strong>[2]</strong> Confirm the AC outlet is producing 100 - 120VAC.</p>
          <p><strong>[3]</strong> If a UPS is in use, bypass it temporarily to test with direct wall power.</p>
          <p><strong>[4]</strong> Replace the power cord.</p>
          <p><strong>[5]</strong> Check for any error messages that may indicate why the server is powering off.</p>
          <li style={{paddingLeft: "60px"}}>Check Event Viewer.</li>
          <li style={{paddingLeft: "60px"}}>Check Razberi Monitor.</li>
          <p><strong>[6]</strong> On an <strong>SS32X server</strong>, confirm the following settings in BIOS.</p>
          <li style={{paddingLeft: "60px"}}>Check that the boot order is correct. Windows Boot Manager should be option #1.</li>
          <li style={{paddingLeft: "60px"}}>In "Advanced" -- "ACPI Settings", make sure "Enable Hibernation" is disabled.</li>
          <li style={{paddingLeft: "60px"}}>In "Advanced" -- "ACPI Settings", make sure "ACPI Sleep State" is set to "Suspend Disabled"</li>
          <li style={{paddingLeft: "60px"}}>In "Chipset" -- "PCH-IO Configuration" -- "SATA and RST Configuration", make sure all the hard drives are detected. There should be 4 of them (but it will show up as 0, 1, 2, and 3).</li>
          <li style={{paddingLeft: "60px"}}>In "Chipset" -- "Board Configuration", make sure "PWR-On After PWR-Fail" is set to "Last state" or "On".</li>
          <p><strong>[7]</strong> On a <strong>Core server</strong>, enter the System Setup when booting into the server.</p>
          <li style={{paddingLeft: "60px"}}>Change the <strong>Thermal Profile</strong> to <strong>Minimum Power (Performance per Watt Optimized).</strong></li>
          <li style={{paddingLeft: "60px"}}>The power of the server can be capped by specifing the <strong>watts</strong>, <strong>BTU/hr</strong>, and by a <strong>percentage</strong>. A lower power consumption typically means lower heat output, which can reduce cooling requirements. The fans may run at a lower speed, making the server quieter. Lower power usage can also reduce the thermal stress, potentially extending the life of components like CPUs and power supplies. </li>
          <p><strong>[8]</strong> Perform a recovery of the OS.</p>
          <p><strong>[9]</strong> If the issue persists, there may be an issue with the hardware. Please contact technical support for further assistance.</p>
        </div>
  
          <div id="no-poe" className="faq-answer">
            <h1>How to Troubleshoot a Server Switch with PoE Issues</h1>
            <p><strong>[1]</strong> Confirm the AC outlet is producing 100 - 120VAC.</p>
            <p><strong>[2]</strong> If a UPS is in use, bypass it temporarily to test with direct wall power.</p>
            <p><strong>[3]</strong> Replace the power cord.</p>
            <p><strong>[4]</strong> Try pinging the switch from the command prompt on the server.</p>
            <p><strong>[4]</strong> Confirm that the powered devices are IEEE 802.3af/at compliant.</p>
            <p><strong>[5]</strong> Verify that the switch is not producing more PoE than its PoE budget allows.</p>
            <p><strong>[6]</strong> Disable and enable PoE on the port in the switch's web interface.</p>
            <p><strong>[7]</strong> While the server is powered on, default the switch by placing a jumper between ports 1 and 2.</p>
          </div>
  
          <div id="raid" className="faq-answer">
            <h1>How to Troubleshoot a Server with RAID Issues</h1>
            <p><strong>[1]</strong> Take note of the following.</p>
            <li style={{paddingLeft: "60px"}}>RAID 0 requires at least 2 drives. One drive failing corrupts the entire RAID.</li>
            <li style={{paddingLeft: "60px"}}>RAID 1 requires at least 2 drives and allows for the loss of half. Replacing the drive(s) should automatically rebuild the RAID.</li>
            <li style={{paddingLeft: "60px"}}>RAID 5 requires at least 3 drives and allows for the loss of one. Replacing the drive should automatically rebuild the RAID.</li>
            <li style={{paddingLeft: "60px"}}>RAID 6 requires at least 4 drives and allows for the loss of two. Replacing the drive(s) should automatically rebuild the RAID.</li>
            <li style={{paddingLeft: "60px"}}>RAID 10 requires at least 4 drives and allows for the loss of half. Replacing the drive(s) should automatically rebuild the RAID.</li>
            <p><strong>[2]</strong> Using one of the following technologies, confirm the current RAID configuration and that the HDD or RAID has failed. </p>
            <li style={{paddingLeft: "60px"}}>BIOS</li>
            <li style={{paddingLeft: "60px"}}>Razberi Monitor Cloud</li>
            <li style={{paddingLeft: "60px"}}>Razberi Monitor > System Info</li>
            <li style={{paddingLeft: "60px"}}>Device Manager</li>
            <li style={{paddingLeft: "60px"}}>Intel Rapid Storage Technology</li>
            <li style={{paddingLeft: "60px"}}>iDRAC</li>
            <li style={{paddingLeft: "60px"}}>Diskpart</li>
            <p><strong>[3]</strong> Contact technical support to check the server's warranty status. Covered drives receive free replacements. Out-of-warranty drives must be purchased separately.</p>
            <p><strong>[4]</strong> If the RAID is corrupted, delete the virtual disk, create a new virtual disk with each HDD selected, and format the volume as NTFS using the following: </p>
            <li style={{paddingLeft: "60px"}}>BIOS</li>
            <li style={{paddingLeft: "60px"}}>Disk Management</li>
            <li style={{paddingLeft: "60px"}}>Intel Rapid Storage Technology</li>
            <li style={{paddingLeft: "60px"}}>iDRAC</li>
          </div>
  
          <div id="nic" className="faq-answer">
            <h1>How to Troubleshoot a Server with NIC Issues</h1>
            <p><strong>[1]</strong> Enter "View network status and tasks" in the Windows search box.</p>
            <p><strong>[2]</strong> Click "Change adapter settings".</p>
            <p><strong>[3]</strong> Disable and enable the NIC</p>
            <p><strong>[4]</strong> Diagnose the NIC connection</p>
            <p><strong>[5]</strong> In Device Manager, verify the NIC has the necessary drivers.</p>
          </div>
  
          <div id="os" className="faq-answer">
            <h1>How to Troubleshoot a Server with OS Issues</h1>
            <p><strong>[1]</strong> Check the Razberi Monitor alert logs.</p>
            <p><strong>[2]</strong> Check the Event Viewer alert logs.</p>
            <p><strong>[3]</strong> Check the iDRAC alert logs.</p>
            <p><strong>[4]</strong> Check the CPU utilization and processes in Task Manager</p>
            <p><strong>[5]</strong> Confirm there is only one OS partition in Disk Management.</p>
            <p><strong>[6]</strong> In PowerShell, type the command <strong>Get-CimInstance -ClassName Win32_OperatingSystem | Select-Object InstallDate</strong> to find the OS image installation date. </p>
            <p><strong>[7]</strong> Perform a recovery of the OS.</p>
          </div>
  
          <div id="rdp" className="faq-answer">
            <h1>How to Set Up a Remote Desktop Connection</h1>
            <p><strong>[1]</strong> Enable Remote Desktop in the server's settings.</p>
            <p><strong>[2]</strong> Connect a PC to a NIC on the server.</p>
            <p><strong>[3]</strong> Open the Remote Desktop Connection software on the PC.</p>
            <p><strong>[4]</strong> Enter the IP address of the server's NIC.</p>
            <p><strong>[5]</strong> Enter the server's Windows username and password.</p>
         </div>
  
        <div id="registration" className="faq-answer">
            <h1>How to Skip the Razberi Monitor Registration</h1>
            <p>While on the registration page, hold down: Ctrl + Shift + Alt + F11.</p>
        </div>
  
        <div id="camera-defense" className="faq-answer">
          <h1>How to Set Up Camera Defense</h1>
          <p><strong>Device Binding</strong></p>
          <li style={{paddingLeft: "60px"}}>Master Device Binding: Enable or Disable All</li>
          <li style={{paddingLeft: "60px"}}>Bind a specific port to the MAC address of the connected device.</li>
          <p><strong>Device Groups</strong></p>
          <li style={{paddingLeft: "60px"}}>A device group is a set of similar devices assigned the same security policies. By default, all active ports are assigned to the "Cameras" device group. If cameras are the only devices connected to the SSIQ then hit "Save" to save the settings, otherwise:</li>
          <li style={{paddingLeft: "60px"}}>Create a new device group or modify existing device group(s) giving each device group a unique name.</li>
          <li style={{paddingLeft: "60px"}}>Add or modify the ports to be associated with each device group.</li>
          <li style={{paddingLeft: "60px"}}>Review all changes and then hit "Save" to save the settings.</li>
          <li style={{paddingLeft: "60px"}}>Note: Deleting an existing device group removes its firewall and whitelist settings. Changing the name of an existing device group causes that device group to be deleted and a new device group to be created.</li>
          <p><strong>Firewall</strong></p>
          <li style={{paddingLeft: "60px"}}>Use the firewall feature to limit traffic to video services and to disable discovery services. For each device group:</li>
          <li style={{paddingLeft: "60px"}}>Select HTTP, HTTPS, and RTSP (Real-Time Streaming Protocol) services for device groups with cameras.</li>
          <li style={{paddingLeft: "60px"}}>Disable discovery services to prevent cyber attackers from finding devices: Ping, DHCP, NTP, Telnet, DNS, FTP, TFTP, SSH, SMTP, Bonjour</li>
          <li style={{paddingLeft: "60px"}}>Allow additional services as needed providing the name, protocol, and port.</li>
          <p><strong>Internet Protection</strong></p>
          <li style={{paddingLeft: "60px"}}>A whitelist limits traffic to specified networks by device group. The default option of Internet Protection prevents devices from communicating over routable networks such as the Internet.</li>
          <li style={{paddingLeft: "60px"}}>Use Internet Protection to prevent devices from reaching routable networks, otherwise</li>
          <li style={{paddingLeft: "60px"}}>Specify the allowed networks using sub-masks and/or individual IP addresses.</li>
          <li style={{paddingLeft: "60px"}}>Enable alerts for devices that attempt to communicate outside of the whitelist.</li>
          <p><strong>Password Protection</strong></p>
          <li style={{paddingLeft: "60px"}}>Enable Password Monitoring: This feature monitors your devices to ensure they are not using default, user prohibited, or common passwords found on the NIST Bad Password List. By default, Password Protection is enabled.</li>
          <li style={{paddingLeft: "60px"}}>Device default and common passwords are tested by default. You can optionally add additional prohibited passwords below. (Limit 48)</li>
        </div>
  
        <div id="password" className="faq-answer">
          <h1>What to do if the Windows Password is Forgotten</h1>
          <p>There is no way to reset the Windows password. A recovery of the operating system will need to be performed. Contact technical support for the Windows recovery procedure.</p>
        </div>
  
        <div id="ping-ssiq24" className="faq-answer">
          <h1>Pinging the Server Switch</h1>
          <p>On an SSIQ24 unit:</p>
          <li>The switch can be pinged from any port on the switch.</li>
          <li>The switch can be pinged from the U1 Uplink port.</li>
          <li>The switch cannot be pinged from the U2 Uplink port.</li>
        </div>
      </div>
    )
  };

  const RazberiFAQ = ({ activeSubSection }) => {
    useEffect(() => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
      
      // Scroll to active subsection if it exists
      if (activeSubSection) {
        const element = document.getElementById(activeSubSection);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }, [activeSubSection]);
  
    return (
      <div className="faq-list">
        <h1 className="faq-title">Relevant Server Information</h1>
  
        <div id="computing" className="faq-answer">
          <h1>Computing Terminology</h1>
          <p><strong>CPU (Central Processing Unit):</strong> The central processing unit (CPU) is the primary component of a computer responsible for executing instructions and performing computations. It acts as the brain of the system, handling everything from running operating system processes to executing user applications. The efficiency of a CPU is determined by factors such as clock speed, core count, cache size, and instruction set architecture.</p>
          <p><strong>CPU Cache (L1, L2, L3):</strong> The CPU cache is a small amount of high-speed memory located within the processor, designed to store frequently accessed data and instructions. L1 cache is the smallest but fastest, situated closest to the processing cores. L2 cache is slightly larger but slower, while L3 cache is the largest and shared among multiple cores, improving overall efficiency by reducing the need to fetch data from main memory.</p>
          <p><strong>CPU Cores:</strong> Modern processors contain multiple cores, each functioning as an independent processing unit capable of executing its own set of instructions. A dual-core processor has two cores, a quad-core has four, etc. More cores enable better multitasking and improved performance in multi-threaded applications.</p>
          <p><strong>CPU Threads:</strong> A CPU thread represents a sequence of instructions that a core can execu modern CPUs support simultaneous multithreading (SMT), commonly referred to as hyper-threading in Intel processors. This allows a single core to handle multiple threads at once, improving efficiency by maximizing core utilization.</p>
          <p><strong>(CPU Example #1) Intel Core i9-14900K:</strong> This high-performance Intel processor features 24 cores and 32 threads, using a hybrid architecture that combines performance and efficiency cores. It is designed for demanding tasks like gaming, video editing, and software development.</p>
          <p><strong>(CPU Example #2) AMD Ryzen 9 7950X:</strong> A powerful AMD processor with 16 cores and 32 threads, optimized for high-performance computing, gaming, and content creation. It features a high clock speed and advanced power management for energy efficiency.</p>
          <p><strong>GPU (Graphical Processing Unit):</strong> A GPU is a specialized processor designed for parallel processing, making it ideal for handling complex graphics rendering and compute-intensive tasks. Unlike CPUs, which focus on sequential task execution, GPUs excel at processing multiple data streams simultaneously. This makes them essential for gaming, 3D rendering, AI training, and scientific simulations. Modern GPUs are equipped with dedicated hardware for video decoding and encoding, allowing them to compress and decompress video files efficiently. This reduces the load on the CPU, improving overall system performance. Popular video codecs, such as H.264 and H.265, are commonly supported by GPUs for smooth playback of high-definition and ultra-high-definition (UHD) content.</p>
          <p><strong>DRAM (Dynamic Random Access Memory):</strong> DRAM is a type of volatile memory that temporarily stores data that a CPU actively uses. It requires continuous power to retain data and is significantly faster than traditional storage devices like hard drives and SSDs.</p>
          <p><strong>DIMM (Dual In-Line Memory Module):</strong> A DIMM is the standard form factor for RAM in desktops and servers, providing high-capacity and high-speed memory modules.</p>
          <p><strong>SODIMM (Small Outline Dual In-Line Memory Module):</strong> SODIMM modules are smaller versions of DIMMs, primarily used in laptops and compact computing devices.</p>
          <p><strong>DDR (Double Data Rate) Memory:</strong> DDR memory technology allows for high-speed data transfer by transmitting data on both the rising and falling edges of the clock cycle, effectively doubling the memory bandwidth. DDR5, the latest generation, offers speeds starting at 4800 MT/s and exceeding 6000 MT/s in high-end configurations.</p>
          <p><strong>MT/s (Mega Transfers per Second):</strong> This metric measures how many millions of transfers occur per second, providing a more accurate representation of memory performance compared to clock speed.</p>
          <p><strong>PCH (Platform Controller Hub):</strong> The PCH is a chipset developed by Intel that acts as an intermediary between the CPU and various system peripherals. It manages communication with I/O devices, such as USB ports, SATA storage interfaces, and PCIe expansion slots, ensuring efficient data flow across the system.</p>
          <p><strong>PCIe (Peripheral Component Interconnect Express):</strong> PCIe is the standard interface for connecting high-speed internal components to a computer's motherboard. It enables fast communication between the CPU and peripherals like graphics cards, storage devices, and network adapters. <strong>PCIe 5.0</strong> is the latest generation of PCIe offers speeds of 32 GT/s (gigatransfers per second), with each lane providing up to 4 GB/s of bandwidth.</p>
          <p><strong>NVMe (Non-Volatile Memory Express) SSDs:</strong> NVMe SSDs use the PCIe interface to deliver extremely fast storage speeds compared to traditional SATA SSDs. By bypassing older storage controllers, NVMe drives significantly reduce latency and increase throughput.</p>
          <p><strong>M.2 NVMe SSDs:</strong> These compact SSDs connect directly to a motherboard's M.2 slot, eliminating the need for cables and offering high-speed storage for modern computers.</p>
          <p><strong>SATA (Serial ATA) SSDs:</strong> Typically, a SATA (Serial ATA) SSD is a 2.5-inch solid-state drive or an mSATA module designed for compact setups. The SATA interface is a widely adopted standard for connecting storage devices to the motherboard, relying on separate data and power cables to establish the connection. Although newer, faster storage technologies exist, SATA remains a viable option due to its broad compatibility across various systems. SATA devices connect to dedicated SATA ports on the motherboard, which makes them universally supported. However, unlike NVMe drives, which connect directly to the motherboard via M.2 slots, SATA drives require cabling, which can contribute to system clutter and potential airflow restrictions. One of the key advantages of SATA SSDs is their widespread support across both older and newer computer systems. This compatibility makes them a great choice for upgrading legacy machines that lack NVMe support while still offering a significant performance boost over traditional hard drives. SATA SSDs are ideal for budget-friendly builds, secondary storage, or systems that do not support NVMe storage solutions. Although they offer lower speeds compared to NVMe SSDs, their affordability and reliability make them a popular choice for general computing tasks.</p>
          <p><strong>BOSS (Boot Optimized Storage Solution):</strong> The Boot Optimized Storage Solution (BOSS) is a dedicated storage controller designed specifically for booting a server's operating system. It uses two mirrored M.2 SATA SSDs in a RAID 1 configuration, ensuring redundancy and data protection. By offloading boot storage to a dedicated module, BOSS helps free up primary storage slots for higher-capacity or high-performance drives used for applications and data. NVMe-based M.2 SSDs utilized in BOSS-N1 offer much lower latency and higher bandwidth, making them more suitable for modern, high-performance servers. This upgrade allows servers to boot faster and perform system operations more efficiently.</p>
          <p><strong>BOSS-N1: </strong> The BOSS-N1 is the NVMe-based version of the Boot Optimized Storage Solution. Unlike its SATA-based counterpart, it leverages NVMe (Non-Volatile Memory Express) technology, which significantly improves read and write speeds compared to traditional SATA drives. Overall, the BOSS-N1 provides higher performance than the BOSS-S1, making it a preferred choice for workloads that require fast boot times and enhanced reliability.</p>
          <p><strong>BOSS-S1:</strong> The BOSS-S1 is the SATA-based version of the Boot Optimized Storage Solution. Unlike the BOSS-N1, which utilizes NVMe technology, the BOSS-S1 relies on SATA-based M.2 SSDs. This makes it a cost-effective solution for boot drives while maintaining redundancy through RAID 1 mirroring. While BOSS-S1 offers reliable performance for booting a server's operating system, it does not provide the same speed advantages as NVMe-based solutions. However, its affordability and compatibility with older systems make it a practical choice for many server configurations. Overall, BOSS-S1 is a lower-performance alternative to BOSS-N1 but remains a dependable solution for managing boot drives in server environments.</p>
          <p><strong>PERC (PowerEdge RAID Controller): </strong> The PowerEdge RAID Controller (PERC) is a hardware RAID controller used in Dell servers to manage RAID configurations. It provides redundancy, performance optimization, and data protection by allowing multiple hard drives or SSDs to be configured in RAID arrays. By handling RAID operations at the hardware level, PERC reduces the processing load on the CPU and improves storage efficiency. It supports various RAID levels, including RAID 0 (striping), RAID 1 (mirroring), RAID 5 (striping with parity), and RAID 10 (a combination of mirroring and striping), among others. PERC ensures that critical server data remains accessible even in the event of a drive failure, making it an essential component in enterprise-level storage management.</p>
          <p><strong>RAID (Redundant Array of Independent Disks): </strong> A data storage technology that combines multiple physical hard drives or SSDs into a single logical unit. Depending on the RAID level used, it can improve performance, provide redundancy, or achieve both. Different RAID levels offer varying benefits. For instance, RAID 0 uses disk striping to increase performance but lacks redundancy, while RAID 1 mirrors data across two drives to ensure fault tolerance. RAID 5 and RAID 6 incorporate parity data for redundancy while still maintaining good performance. RAID 10 (a combination of RAID 1 and RAID 0) offers both speed and redundancy, making it a popular choice for enterprise applications. RAID technology is widely used in servers, data centers, and high-performance computing environments to enhance storage reliability and efficiency. It plays a crucial role in safeguarding data against drive failures while optimizing read and write operations.</p>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "18px",
              textAlign: "left",
            }}
          >
            <thead>
              <tr style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff" }}>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>RAID Level</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Minimum Required Drives</th>
                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Total Storage</th>
              </tr>
            </thead>
            <tbody>
              {[
                { level: "RAID 0", drives: "At least 2", storage: "Total storage" },
                { level: "RAID 1", drives: "At least 2", storage: "Half the # of drives" },
                { level: "RAID 5", drives: "At least 3", storage: "Minus 1 drive" },
                { level: "RAID 6", drives: "At least 4", storage: "Minus 2 drives" },
                { level: "RAID 10", drives: "At least 4", storage: "Half the # of drives" },
              ].map((item, index) => (
                <tr
                  key={index}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff",
                  }}
                >
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.level}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.drives}</td>
                  <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.storage}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p><strong>Hertz:</strong> A hertz (Hz) is the fundamental unit of frequency in the International System of Units (SI), representing one cycle per second. In computing and electronics, it refers to the number of oscillations or clock cycles occurring in one second. For instance, a CPU with a frequency of 3 GHz (gigahertz) executes three billion cycles per second. This measurement is crucial in determining the speed and efficiency of processors and other digital circuits.</p>
          <p><strong>Megahertz:</strong> A megahertz (MHz) equals one million hertz or one million cycles per second. It is commonly used to measure the clock speed of older processors, memory modules, and radio frequencies. In earlier computing generations, processors operated in the range of tens to hundreds of megahertz, whereas modern systems function in the gigahertz range.</p>
          <p><strong>Gigahertz:</strong> A gigahertz (GHz) equals one billion hertz or one billion cycles per second. Most modern processors, whether for desktops, laptops, or servers, operate in the multi-gigahertz range, with clock speeds typically between 2 GHz and 5 GHz. The higher the clock speed, the more instructions a processor can execute per second, though overall performance depends on other factors like core count and architecture.</p>
          <p><strong>Bandwidth:</strong> Bandwidth refers to the maximum amount of data that can be transmitted over a network connection or data bus in a given period. It is measured in bits per second (bps), with common units including megabits per second (Mbps) and gigabits per second (Gbps). High bandwidth is essential for tasks that involve transferring large amounts of data, such as streaming high-definition videos or running data-intensive applications.</p>
          <p><strong>Throughput:</strong> While bandwidth represents the theoretical maximum data transfer rate, throughput refers to the actual rate at which data is successfully transmitted and received. Factors like network congestion, protocol overhead, and hardware limitations affect throughput. For example, a 1 Gbps internet connection may only achieve an actual throughput of 800 Mbps due to network inefficiencies.</p>
          <p><strong>Latency:</strong> Latency measures the delay between sending and receiving data, often expressed in milliseconds (ms). It is a crucial factor in applications like gaming, video conferencing, and financial transactions. Lower latency means faster response times, which is essential for real-time communication. High latency can be caused by network congestion, long physical distances between devices, or inefficient routing.</p>
          <p><strong>iDRAC (Integrated Dell Remote Access Controller):</strong> iDRAC is Dell's proprietary remote management solution for servers, allowing administrators to monitor, configure, and troubleshoot systems remotely.</p>
        </div>
  
        <div id="power-over-ethernet" className="faq-answer">
          <PowerOverEthernet />
        </div>
      </div>
    )
  };

  return (
    <div>
      <Navbar/>
      <div className="page">
        <div className="table-of-contents2">
          <p onClick={() => handleSectionClick("razberi-troubleshooting")}>Troubleshooting</p>
          {selectedContent === "razberi-troubleshooting" && (
            <>
              <li 
                className={activeSubSection === "server-power" ? "active" : ""}
                onClick={() => handleSubSectionClick("server-power")}
              >
                How to Troubleshoot a Server With Powering Issues
              </li>
              <li 
                className={activeSubSection === "no-poe" ? "active" : ""}
                onClick={() => handleSubSectionClick("no-poe")}
              >
                How to Troubleshoot a Server Switch with PoE Issues
              </li>
              <li 
                className={activeSubSection === "raid" ? "active" : ""}
                onClick={() => handleSubSectionClick("raid")}
              >
                How to Troubleshoot a Server with RAID Issues
              </li>
              <li 
                className={activeSubSection === "nic" ? "active" : ""}
                onClick={() => handleSubSectionClick("nic")}
              >
                How to Troubleshoot a Server with NIC Issues
              </li>
              <li 
                className={activeSubSection === "os" ? "active" : ""}
                onClick={() => handleSubSectionClick("os")}
              >
                How to Troubleshoot a Server with OS Issues
              </li>
              <li 
                className={activeSubSection === "rdp" ? "active" : ""}
                onClick={() => handleSubSectionClick("rdp")}
              >
                How to Set Up a Remote Desktop Connection
              </li>
              <li 
                className={activeSubSection === "registration" ? "active" : ""}
                onClick={() => handleSubSectionClick("registration")}
              >
                How to Skip the Razberi Monitor Registration
              </li>
              <li 
                className={activeSubSection === "camera-defense" ? "active" : ""}
                onClick={() => handleSubSectionClick("camera-defense")}
              >
                How to Set Up Camera Defense
              </li>
              <li 
                className={activeSubSection === "password" ? "active" : ""}
                onClick={() => handleSubSectionClick("password")}
              >
                What to do if the Windows Password is Forgotten
              </li>
              <li 
                className={activeSubSection === "ping-ssiq24" ? "active" : ""}
                onClick={() => handleSubSectionClick("ping-ssiq24")}
              >
                Pinging the Server Switch
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("razberi-relevant-information")}>Relevant Information</p>
          {selectedContent === "razberi-relevant-information" && (
            <>
              <li 
                className={activeSubSection === "computing" ? "active" : ""}
                onClick={() => handleSubSectionClick("computing")}
              >
                Computing Terminology
              </li>
              <li 
                className={activeSubSection === "power-over-ethernet" ? "active" : ""}
                onClick={() => handleSubSectionClick("power-over-ethernet")}
              >
                Power Over Ethernet
              </li>
            </>
          )}
          
          <p onClick={() => handleSectionClick("razberi-selector-tool")}>Selector Tool</p>
        </div>

        <div className="main-content">
          <div 
            id="razberi-troubleshooting" 
            ref={troubleshootingRef}
            className="troubleshooting"
          >
            <RazberiTroubleshooting activeSubSection={activeSubSection} />
          </div>

          <div 
            id="razberi-relevant-information" 
            ref={relevantInfoRef}
            className="relevant-information"
          >
            <RazberiFAQ activeSubSection={activeSubSection} />
          </div>

          <div 
            id="razberi-selector-tool" 
            ref={selectorToolRef}
            className="selector-tool"
          >
            <RazberiSelectorTool />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Razberi;