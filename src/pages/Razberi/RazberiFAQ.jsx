import { useState, useEffect } from 'react';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import SurgeSuppression from '../../relevant-information/SurgeSuppression';

const RazberiFAQ = ({ activeSubSection }) => {
    const [expandedFAQs, setExpandedFAQs] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length === 0) {
        setSearchResults([]);
        return;
    }

    const allFAQItems = Array.from(document.querySelectorAll('.faq-title'));
    const results = allFAQItems.filter(item => 
        item.textContent.toLowerCase().includes(query)
    ).map(item => ({
        id: item.parentElement.id,
        text: item.textContent
    }));

    setSearchResults(results);
    };

    const handleResultClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
        if (!expandedFAQs.includes(id)) {
        setExpandedFAQs(prev => [...prev, id]);
        }
        element.scrollIntoView({ behavior: 'smooth' });
        setSearchQuery('');
        setSearchResults([]);
    }
    };
  
    const toggleFAQ = (sectionID) => {
      setExpandedFAQs(prev => {
        if (prev.includes(sectionID)) {
          return prev.filter(id => id !== sectionID);
        } else {
          return [...prev, sectionID];
        }
      });
    }

    const isFAQExpanded = (sectionID) => {
      return expandedFAQs.includes(sectionID);
    }

    

    useEffect(() => {
      if (window.location.hash) {
        const element = document.getElementById(window.location.hash.substring(1));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
      
      if (activeSubSection) {
        const element = document.getElementById(activeSubSection);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
          if (!expandedFAQs.includes(activeSubSection)) {
            setExpandedFAQs(prev => [...prev, activeSubSection]);
          }
        }
      }
    }, [activeSubSection]);

    return (
        <div>
            <div className="search-container" style={{ marginBottom: '20px' }}>
            <input
                type="text"
                className="search-input"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={handleSearch}
            />
            {searchResults.length > 0 && (
                <div className="search-results">
                {searchResults.map((result, index) => (
                    <div 
                    key={index}
                    className="search-result-item"
                    onClick={() => handleResultClick(result.id)}
                    >
                    {result.text}
                    </div>
                ))}
                </div>
            )}
            </div>
            <div className="faq-list"> 
                <div id="server-power" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("server-power")}>
                        How to Troubleshoot a Server With Powering Issues
                        <span className={`dropdown-chevron ${isFAQExpanded("server-power") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("server-power") && (
                        <>
                            <p><strong>1.</strong> Document if the server boots up at all or how frequently it powers on and off.</p>
                            <p><strong>2.</strong> Verify that the AC outlet is producing 100 - 120VAC.</p>
                            <p><strong>3.</strong> If a UPS is in use, bypass it temporarily to test with direct wall power.</p>
                            <p><strong>4.</strong> Replace the power cord with another known-working one.</p>
                            <p><strong>5.</strong> Check for any error messages that may indicate why the server is powering off.</p>
                            <p style={{paddingLeft: "60px"}}><strong>5.1.</strong> Check for error messages in Event Viewer.</p>
                            <p style={{paddingLeft: "60px"}}><strong>5.2.</strong> Check for error messages in Razberi Monitor.</p>
                            <p><strong>6.</strong> On an <strong>SS32X server</strong>, confirm the following settings in BIOS.</p>
                            <p style={{paddingLeft: "60px"}}><strong>6.1.</strong> In "Advanced" -- "ACPI Settings", make sure "Enable Hibernation" is disabled.</p>
                            <p style={{paddingLeft: "60px"}}><strong>6.2.</strong> In "Advanced" -- "ACPI Settings", make sure "ACPI Sleep State" is set to "Suspend Disabled"</p>
                            <p style={{paddingLeft: "60px"}}><strong>6.3.</strong> In "Chipset" -- "Board Configuration", make sure "PWR-On After PWR-Fail" is set to "Last state" or "On".</p>
                            <p style={{paddingLeft: "60px"}}><strong>6.4.</strong> In "Chipset" -- "PCH-IO Configuration" -- "SATA and RST Configuration", make sure all the hard drives are detected. There should be 4 of them (but it will show up as 0, 1, 2, and 3).</p>
                            <p style={{paddingLeft: "60px"}}><strong>6.5.</strong> Check that the boot order is correct. Windows Boot Manager should be option #1.</p>
                            <p><strong>7.</strong> On a <strong>Core server</strong>, enter System Setup when booting into the server.</p>
                            <p style={{paddingLeft: "60px"}}><strong>7.1.</strong> Change the <strong>Thermal Profile</strong> to <strong>Minimum Power (Performance per Watt Optimized).</strong></p>
                            <p style={{paddingLeft: "60px"}}><strong>7.2.</strong> The power of the server can be capped by specifing the <strong>watts</strong>, <strong>BTU/hr</strong>, and by a <strong>percentage</strong>. A lower power consumption typically means lower heat output, which can reduce cooling requirements. The fans may run at a lower speed, making the server quieter. Lower power usage can also reduce the thermal stress, potentially extending the life of components like CPUs and power supplies. </p>
                            <p><strong>8.</strong> If all other options are exhausted, perform a recovery of the OS.</p>
                            <p><strong>9.</strong> If the issue still persists, there may be an issue with the hardware. Please contact technical support for further assistance.</p>
                        </>
                    )}
                </div>

                <div id="no-poe" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("no-poe")}>
                        How to Troubleshoot a Server Switch That Will Not Provide PoE
                        <span className={`dropdown-chevron ${isFAQExpanded("no-poe") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("no-poe") && (
                        <>
                            <p><strong>1.</strong> Verify that the AC outlet is producing 100 - 120VAC.</p>
                            <p><strong>2.</strong> If a UPS is in use, bypass it temporarily to test with direct wall power.</p>
                            <p><strong>3.</strong> Replace the power cord with a known-working one.</p>
                            <p><strong>4.</strong> Confirm that the powered device is IEEE 802.3af/at compliant by looking up its data sheet.</p>
                            <p><strong>5.</strong> Verify that the switch is not producing more PoE than its PoE budget allows.</p>
                            <p><strong>6.</strong> Try pinging the switch from the server's command prompt.</p>
                            <p><strong>7.</strong> If the switch is accessible, disable and enable PoE on the port in the switch's web interface.</p>
                            <p><strong>8.</strong> If the switch is still not providing PoE, default the switch by placing a jumper between ports 1 and 2.</p>
                            <p><strong>9.</strong> If the issue still persists, there may be an issue with the hardware. Please contact technical support for further assistance.</p>
                        </>
                    )}
                </div>

                <div id="raid" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("raid")}>
                        How to Troubleshoot a Server with a Bad HDD or RAID
                        <span className={`dropdown-chevron ${isFAQExpanded("raid") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("raid") && (
                        <>
                            <p><strong>1.</strong> Take note of the following RAID configurations.</p>
                            <p style={{paddingLeft: "60px"}}>— <strong>RAID 0</strong> requires at least 2 drives. One drive failing corrupts the entire RAID.</p>
                            <p style={{paddingLeft: "60px"}}>— <strong>RAID 1</strong> requires at least 2 drives and can lose up to half the drives. Replacing the drive(s) should automatically rebuild the RAID.</p>
                            <p style={{paddingLeft: "60px"}}>— <strong>RAID 5</strong> requires at least 3 drives and can lose up to one drive. Replacing the drive should automatically rebuild the RAID.</p>
                            <p style={{paddingLeft: "60px"}}>— <strong>RAID 6</strong> requires at least 4 drives and can lose up to two. Replacing the drive(s) should automatically rebuild the RAID.</p>
                            <p style={{paddingLeft: "60px"}}>— <strong>RAID 10</strong> requires at least 4 drives and can lose up to half the drives. Replacing the drive(s) should automatically rebuild the RAID.</p>
                            <p><strong>2.</strong> Using one of the following, confirm the server's current RAID configuration and which HDD has failed. </p>
                            <p style={{paddingLeft: "60px"}}>— Razberi Monitor Cloud</p>
                            <p style={{paddingLeft: "60px"}}>— Razberi Monitor -- System Info</p>
                            <p style={{paddingLeft: "60px"}}>— BIOS</p>
                            <p style={{paddingLeft: "60px"}}>— Device Manager</p>
                            <p style={{paddingLeft: "60px"}}>— Intel Rapid Storage Technology</p>
                            <p style={{paddingLeft: "60px"}}>— iDRAC</p>
                            <p style={{paddingLeft: "60px"}}>— Diskpart</p>
                            <p><strong>3.</strong> Contact technical support to check the server's warranty status. Covered drives receive free replacements. Out-of-warranty drives must be purchased separately.</p>
                            <p><strong>4.</strong> If the RAID is corrupted, delete the virtual disk, create a new virtual disk with each HDD selected, and format the volume as NTFS using one the following. </p>
                            <p style={{paddingLeft: "60px"}}>— BIOS</p>
                            <p style={{paddingLeft: "60px"}}>— Disk Management</p>
                            <p style={{paddingLeft: "60px"}}>— Intel Rapid Storage Technology</p>
                            <p style={{paddingLeft: "60px"}}>— iDRAC</p>
                        </>
                    )}
                </div>

                <div id="ssd" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("ssd")}>
                        How to Troubleshoot a Server with a Bad OS Drive
                        <span className={`dropdown-chevron ${isFAQExpanded("ssd") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("ssd") && (
                        <>
                            <p>Please contact technical support regarding one of the following options.</p>
                            <p><strong>[Option #1]</strong> Ship the server to us, and we can re-image the unit.</p>
                            <p><strong>[Option #2]</strong> We can ship out a new OS drive with our image on it.</p>
                            <p><strong>[Option #3]</strong> Purchase a new OS drive, install the OS, and we can provide the necessary drivers and software.</p>
                        </>
                    )}
                </div>

                <div id="nic" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("nic")}>
                        How to Troubleshoot a Server with a Bad NIC
                        <span className={`dropdown-chevron ${isFAQExpanded("nic") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("nic") && (
                        <>
                            <p><strong>1.</strong> Check if the NIC's LEDs illuminate when an Ethernet connection is made.</p>
                            <p><strong>2.</strong> Verify if the NIC can be pinged successfully.</p>
                            <p><strong>3.</strong> Enter "View network connections" in the Windows search box.</p>
                            <p><strong>4.</strong> In Network Connections, disable and reenable the NIC.</p>
                            <p><strong>5.</strong> Select the 'Diagnose this connection' option for the NIC to diagnose the issue.</p>
                            <p><strong>6.</strong> In Device Manager, verify what drivers the NIC has. Contact technical support to determine if all of the necessary drivers are installed for the NIC.</p>
                        </>
                    )}
                </div>

                <div id="os" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("os")}>
                        How to Troubleshoot a Server Experiencing Issues with the OS
                        <span className={`dropdown-chevron ${isFAQExpanded("os") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("os") && (
                        <>
                            <p><strong>1.</strong> As needed, to determine the OS image installation date, type the command <strong>Get-CimInstance -ClassName Win32_OperatingSystem | Select-Object InstallDate</strong> in PowerShell, and verify this matches in Razberi Monitor Cloud. </p>
                            <p><strong>2.</strong> Open Disk Management to confirm there is only one OS partition and that the RAID is healthy.</p>
                            <p><strong>3.</strong> Review the server's alert logs to identify the cause of the OS issue.</p>
                            <p style={{paddingLeft: "60px"}}><strong>3.1.</strong> Check the Razberi Monitor alert logs.</p>
                            <p style={{paddingLeft: "60px"}}><strong>3.2.</strong> Check the Event Viewer alert logs.</p>
                            <p style={{paddingLeft: "60px"}}><strong>3.3.</strong> Check the iDRAC alert logs.</p>
                            <p><strong>4.</strong> Open Task Manager and review the the CPU and memory utilization. If either are high, determine what processes are using the most resources and what services are being used by those processes.</p>
                            <p><strong>5.</strong> If the OS is not accessible, or if all other options are exhausted, perform a recovery of the OS. Please note it is recommended to back up all of the data on the server as all of the storage may be lost.</p>
                        </>
                    )}
                </div>

                <div id="rdp" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("rdp")}>
                        How to Set Up a Remote Desktop Connection
                        <span className={`dropdown-chevron ${isFAQExpanded("rdp") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("rdp") && (
                        <>
                            <p><strong>1.</strong> Confirm that port 3389 is not blocked on the PC or server.</p>
                            <p><strong>2.</strong> Enable Remote Desktop in the server's Settings.</p>
                            <p><strong>3.</strong> Connect the PC to a NIC on the server.</p>
                            <p><strong>4.</strong> Open the Remote Desktop Connection software on the PC.</p>
                            <p><strong>5.</strong> Enter the IP address of the server's NIC.</p>
                            <p><strong>6.</strong> Enter the server's Windows username and password.</p>
                        </>
                    )}
                </div>

                <div id="registration" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("registration")}>
                        How to Skip the Razberi Monitor Registration
                        <span className={`dropdown-chevron ${isFAQExpanded("registration") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("registration") && (
                        <>
                            <p>While on the registration page, hold down: Ctrl + Shift + Alt + F11.</p>
                        </>
                    )}
                </div>

                <div id="password" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("password")}>
                        What to do if the Windows Password is Forgotten
                        <span className={`dropdown-chevron ${isFAQExpanded("password") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("password") && (
                        <>
                            <p>Try resetting the password. If the server does not allow for a reset of the Windows password, a recovery of the operating system will need to be performed. Contact technical support for the Windows recovery procedure.</p>
                        </>
                    )}
                </div>

                <div id="camera-defense" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("camera-defense")}>
                        Gain a Better Understanding of Camera Defense
                        <span className={`dropdown-chevron ${isFAQExpanded("camera-defense") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("camera-defense") && (
                        <div>
                            <p><strong>1. Set up Device Binding</strong></p>
                            <p style={{paddingLeft: "60px"}}>Configure port-level security by binding specific ports to connected devices' MAC addresses. The master toggle enables/disables this feature globally for all ports, while individual port bindings provide granular control.</p>

                            <p><strong>2. Set up the Device Groups</strong></p>
                            <p style={{paddingLeft: "60px"}}>Organize connected devices into logical groups sharing common security policies:</p>
                            <p style={{paddingLeft: "60px"}}>- All active ports default to the "Cameras" group</p>
                            <p style={{paddingLeft: "60px"}}>- Create/modify groups with descriptive names as needed</p>
                            <p style={{paddingLeft: "60px"}}>- Assign ports to appropriate groups</p>
                            <p style={{paddingLeft: "60px"}}>- <em>Important:</em> Renaming groups creates new configurations, while deletions remove associated firewall/whitelist rules</p>

                            <p><strong>3. Set up the Firewall</strong></p>
                            <p style={{paddingLeft: "60px"}}>Implement service-level restrictions per device group:</p>
                            <p style={{paddingLeft: "60px"}}>- Camera groups: Enable HTTP/HTTPS/RTSP for video streaming</p>
                            <p style={{paddingLeft: "60px"}}>- Security hardening: Disable discovery services (Ping, DHCP, SSH, etc.)</p>
                            <p style={{paddingLeft: "60px"}}>- Custom services: Add exceptions by specifying protocol/port combinations</p>

                            <p><strong>4. Set up the Internet Protection</strong></p>
                            <p style={{paddingLeft: "60px"}}>Control external communications through:</p>
                            <p style={{paddingLeft: "60px"}}>- Default internet blocking (recommended)</p>
                            <p style={{paddingLeft: "60px"}}>- Whitelist customization using subnet masks/IP addresses</p>
                            <p style={{paddingLeft: "60px"}}>- Alert configuration for unauthorized access attempts</p>

                            <p><strong>5. Set up the Password Protection</strong></p>
                            <p style={{paddingLeft: "60px"}}>Enforce credential security via:</p>
                            <p style={{paddingLeft: "60px"}}>- Default password monitoring (enabled by default)</p>
                            <p style={{paddingLeft: "60px"}}>- NIST Bad Password List integration</p>
                            <p style={{paddingLeft: "60px"}}>- Custom prohibited password list (up to 48 entries)</p>

                            <p style={{paddingLeft: "60px"}}><em>Implementation Note:</em> Review all settings before finalizing. Changes take effect immediately upon saving.</p>
                        </div>
                    )}
                </div>


                <div id="advantage" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("advantage")}>
                        What Advantages Does the Razberi Image Provide?
                        <span className={`dropdown-chevron ${isFAQExpanded("advantage") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("advantage") && (
                        <>
                            <p>1. Preinstalled with the appropriate hardware drivers tailored to your specific configuration.</p>
                            <p>2. Windows Recovery image initialized, with an initial system backup captured immediately following the Out-of-Box Experience.</p>
                            <p>3. Cylance anti-virus software integrated into each system image to proactively detect vulnerabilities and block potential security threats.</p>
                            <p>4. Cryptographic best practices implemented to enhance overall system security. These practices are continuously updated in our images as new standards emerge. (Note: Once the unit is shipped, further control over this configuration is no longer possible.)</p>
                            <p>5. Razberi Monitor Agent preinstalled to enable remote hardware monitoring and facilitate advanced network management capabilities.</p>
                            <p>6. Hardware and software RAID configurations prebuilt in accordance with your specified requirements.</p>
                            <p>7. For ServerSwitch models, the internal network interface connecting the server to the integrated switch is configured as an isolated local network. This setup improves efficiency by segmenting internal communications from broader network traffic.</p>
                            <p>8. For Windows 10 and Windows 11 systems, the activation key is embedded directly into the hardware, eliminating the need for manual activation.</p>
                        </>
                    )}
                </div>

                <div id="cpu" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("cpu")}>
                        Gain a Better Understanding of the Central Processing Unit (CPU)
                        <span className={`dropdown-chevron ${isFAQExpanded("cpu") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("cpu") && (
                        <>
                        <p>The <strong>Central Processing Unit (CPU)</strong>  is the main chip in a computer, handling all the tasks needed to run programs and the operating system. Its speed depends on things like how many cores it has, its clock speed, and the size of its cache memory. The cache is super fast memory built into the CPU: L1 is the smallest and quickest, L2 is a bit slower but bigger, and L3 is shared between cores to cut down on delays. More cores mean the CPU can do more at once—like a quad-core chip handling four tasks simultaneously. Many CPUs also support threads, which let each core work on multiple jobs at the same time (Intel calls this Hyper-Threading). For example, the <strong>Intel Core i5-10500TE</strong>—a 10th-generation processor (indicated by the "10" in its model number)—operates at 2.3 GHz with 6 cores and 12 threads. The "i5" denotes its mid-range performance tier, while the "TE" suffix identifies it as a power-efficient variant. In contrast, the <strong>Intel Xeon Silver 4410Y</strong> runs at a lower 2.0 GHz but features 12 cores and 24 threads, prioritizing parallel processing for demanding workloads.</p>
                        </>
                    )}
                </div>

                <div id="memory" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("memory")}>
                        Gain a Better Understanding of Memory (RAM)
                        <span className={`dropdown-chevron ${isFAQExpanded("memory") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("memory") && (
                        <>
                        <p><strong>DRAM (Dynamic Random Access Memory)</strong> serves as a computer's temporary working memory, storing active data for quick CPU access. Unlike permanent storage, DRAM is volatile - it loses data when powered off but operates far faster than SSDs or hard drives. Modern systems use DDR (Double Data Rate) memory, which doubles bandwidth by transferring data on both clock cycle edges. The latest DDR5 standard delivers speeds starting at 4800 MT/s (Mega Transfers per second), with high-end modules reaching 7200 MT/s - where MT/s more accurately represents real-world performance than clock speed alone. These memory chips come mounted on DIMMs (Dual In-Line Memory Modules) for desktops and servers, while compact devices use scaled-down SODIMMs (Small Outline DIMMs). The DIMM form factor provides greater capacity and performance, whereas SODIMMs prioritize space efficiency for laptops and small form factor systems.</p>
                        </>
                    )}
                </div>

                <div id="gpu" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("gpu")}>
                        Gain a Better Understanding of the Graphical Processing Unit (GPU)
                        <span className={`dropdown-chevron ${isFAQExpanded("gpu") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("gpu") && (
                        <>
                        <p><strong>The Graphical Processing Unit (GPU)</strong> is a specialized processor designed for parallel processing, making it ideal for handling complex graphics rendering and compute-intensive tasks. Unlike CPUs, which focus on sequential task execution, GPUs excel at processing multiple data streams simultaneously. This makes them essential for gaming, 3D rendering, AI training, and scientific simulations. Modern GPUs are equipped with dedicated hardware for video decoding and encoding, allowing them to compress and decompress video files efficiently. This reduces the load on the CPU, improving overall system performance. Popular video codecs, such as H.264 and H.265, are commonly supported by GPUs for smooth playback of high-definition and ultra-high-definition (UHD) content.</p>
                        </>
                    )}
                </div>

                <div id="sata" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("sata")}>
                        Gain a Better Understanding of SATA
                        <span className={`dropdown-chevron ${isFAQExpanded("sata") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("sata") && (
                        <>
                        <p>The <strong>Platform Controller Hub (PCH)</strong> serves as Intel's central traffic controller, managing data flow between the CPU and peripherals like USB ports, PCIe slots, and <strong>SATA (Serial ATA)</strong> storage devices. SATA remains a widely compatible interface standard, with <strong>SATA 3.0</strong> offering 6Gb/s bandwidth - sufficient for both SATA SSDs (typically 2.5" or mSATA form factors) and traditional SATA HDDs (typically 3.5"). While slower than NVMe alternatives, SATA SSDs maintain popularity through their universal motherboard support via dedicated SATA ports, using the AHCI (Advanced Host Controller Interface) protocol for communication. This makes them ideal for budget builds, legacy system upgrades, or secondary storage, offering significant performance gains over mechanical HDDs without requiring modern M.2 slots. Though SATA's separate data/power cables can create cable management challenges, its broad compatibility across generations ensures continued relevance in diverse computing environments.</p>
                        </>
                    )}
                </div>

                <div id="pcie" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("pcie")}>
                        Gain a Better Understanding of PCIe
                        <span className={`dropdown-chevron ${isFAQExpanded("pcie") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("pcie") && (
                        <>
                        <p>The <strong>Platform Controller Hub (PCH)</strong> serves as Intel's central hub, coordinating data flow between the CPU and peripherals including USB ports, SATA devices, and <strong>PCIe (Peripheral Component Interconnect Express)</strong> slots. PCIe has become the gold standard for high-speed component connections, with <strong>PCIe 5.0</strong> delivering speeds up to 32 GT/s (4 GB/s per lane). This bandwidth is particularly transformative for storage technology, where <strong>NVMe (Non-Volatile Memory Express)</strong> SSDs leverage PCIe to achieve speeds far surpassing SATA drives by eliminating legacy controller bottlenecks. The most efficient implementation comes in M.2 NVMe SSDs - compact, cable-free modules that slot directly into motherboards, combining PCIe's raw speed with NVMe's optimized protocol for maximum performance in minimal space. These M.2 drives have become the preferred choice for modern systems where fast boot times and rapid data access are prioritized.</p>
                        </>
                    )}
                </div>

                            <div id="raid" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("raid")}>
                        Gain a Better Understanding of RAID
                        <span className={`dropdown-chevron ${isFAQExpanded("raid") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("raid") && (
                        <>
                            <p><strong>RAID (Redundant Array of Independent Disks)</strong> is a data storage technology that combines multiple physical hard drives or SSDs into a single logical unit. Depending on the RAID level used, it can improve performance, provide redundancy, or achieve both. Different RAID levels offer varying benefits. For instance, RAID 0 uses disk striping to increase performance but lacks redundancy, while RAID 1 mirrors data across two drives to ensure fault tolerance. RAID 5 and RAID 6 incorporate parity data for redundancy while still maintaining good performance. RAID 10 (a combination of RAID 1 and RAID 0) offers both speed and redundancy, making it a popular choice for enterprise applications. RAID technology is widely used in servers, data centers, and high-performance computing environments to enhance storage reliability and efficiency. It plays a crucial role in safeguarding data against drive failures while optimizing read and write operations.</p>
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
                        </>
                    )}
                </div>

                <div id="dell" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("dell")}>
                        Gain a Better Understanding of Razberi's Core servers
                        <span className={`dropdown-chevron ${isFAQExpanded("dell") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("dell") && (
                        <>
                        <p><strong>Boot Optimized Storage Solution (BOSS)</strong> represents a dedicated approach to server boot management, offering two distinct implementations. The <strong>BOSS-S1</strong> version utilizes mirrored SATA-based M.2 SSDs in RAID 1 configuration, providing cost-effective boot redundancy while freeing primary storage bays for application data. Its successor, the <strong>BOSS-N1</strong>, upgrades to NVMe technology, delivering significantly faster boot times and lower latency through PCIe connectivity. Both solutions integrate with Dell's PowerEdge RAID Controller (PERC), a hardware-based RAID system supporting multiple configurations (including RAID 0, 1, 5, and 10) to optimize storage performance and fault tolerance. These components work in concert with <strong>Dell's iDRAC (Integrated Dell Remote Access Controller)</strong>, which enables remote server management, allowing administrators to configure storage arrays, monitor drive health, and troubleshoot issues without physical access.</p>
                        </>
                    )}
                </div>

                <div id="power-over-ethernet" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("power-over-ethernet")}>
                        Gain a Better Understanding of Power Over Ethernet
                        <span className={`dropdown-chevron ${isFAQExpanded("power-over-ethernet") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("power-over-ethernet") && (
                        <PowerOverEthernet />
                    )}
                </div>

                <div id="technical" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("technical")}>
                        Gain a Better Understanding of Other Technical Terms
                        <span className={`dropdown-chevron ${isFAQExpanded("technical") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("technical") && (
                        <>
                        <p>A <strong>hertz (Hz)</strong>  is the fundamental unit of frequency in the International System of Units (SI), representing one cycle per second. In computing and electronics, it refers to the number of oscillations or clock cycles occurring in one second. For instance, a CPU with a frequency of 3 GHz (gigahertz) executes three billion cycles per second. This measurement is crucial in determining the speed and efficiency of processors and other digital circuits.</p>
                        <p style={{paddingTop: "10px"}}>A <strong>megahertz (MHz)</strong> equals one million hertz or one million cycles per second. It is commonly used to measure the clock speed of older processors, memory modules, and radio frequencies. In earlier computing generations, processors operated in the range of tens to hundreds of megahertz, whereas modern systems function in the gigahertz range.</p>
                        <p style={{paddingTop: "10px"}}>A <strong>gigahertz (GHz)</strong> equals one billion hertz or one billion cycles per second. Most modern processors, whether for desktops, laptops, or servers, operate in the multi-gigahertz range, with clock speeds typically between 2 GHz and 5 GHz. The higher the clock speed, the more instructions a processor can execute per second, though overall performance depends on other factors like core count and architecture.</p>
                        <p style={{paddingTop: "10px"}}><strong>Bandwidth</strong> refers to the maximum amount of data that can be transmitted over a network connection or data bus in a given period. It is measured in bits per second (bps), with common units including megabits per second (Mbps) and gigabits per second (Gbps). High bandwidth is essential for tasks that involve transferring large amounts of data, such as streaming high-definition videos or running data-intensive applications.</p>
                        <p style={{paddingTop: "10px"}}>While bandwidth represents the theoretical maximum data transfer rate, <strong>throughput</strong> refers to the actual rate at which data is successfully transmitted and received. Factors like network congestion, protocol overhead, and hardware limitations affect throughput. For example, a 1 Gbps internet connection may only achieve an actual throughput of 800 Mbps due to network inefficiencies.</p>
                        <p style={{paddingTop: "10px"}}><strong>Latency</strong> measures the delay between sending and receiving data, often expressed in milliseconds (ms). It is a crucial factor in applications like gaming, video conferencing, and financial transactions. Lower latency means faster response times, which is essential for real-time communication. High latency can be caused by network congestion, long physical distances between devices, or inefficient routing.</p>
                        </>
                    )}
                </div>

                <div id="surge" className="faq-answer">
                    <h1 className="faq-title" onClick={() => toggleFAQ("surge")}>
                    Gain a Better Understanding of Surge Suppression
                    <span className={`dropdown-chevron ${isFAQExpanded("surge") ? 'expanded' : ''}`}></span>
                    </h1>
                    {isFAQExpanded("surge") && (
                    <>
                        <SurgeSuppression />
                    </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default RazberiFAQ;