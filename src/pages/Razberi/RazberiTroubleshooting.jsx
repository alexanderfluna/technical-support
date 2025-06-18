import React, { useState, useEffect } from 'react';

const RazberiTroubleshooting = ({ activeSubSection }) => {
    const [expandedFAQs, setExpandedFAQs] = useState([]);
  
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
        <div className="faq-list">
            <div id="server-power" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("server-power")}>
                    How to Troubleshoot a Server With Powering Issues
                    <span className={`dropdown-chevron ${isFAQExpanded("server-power") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("server-power") && (
                    <>
                        <p><strong>[1]</strong> Document if the server boots up at all or how frequently it powers on and off.</p>
                        <p><strong>[2]</strong> Verify that the AC outlet is producing 100 - 120VAC.</p>
                        <p><strong>[3]</strong> If a UPS is in use, bypass it temporarily to test with direct wall power.</p>
                        <p><strong>[4]</strong> Replace the power cord with another known-working one.</p>
                        <p><strong>[5]</strong> Check for any error messages that may indicate why the server is powering off.</p>
                        <p style={{paddingLeft: "60px"}}><strong>[5.1]</strong> Check for error messages in Event Viewer.</p>
                        <p style={{paddingLeft: "60px"}}><strong>[5.2]</strong> Check for error messages in Razberi Monitor.</p>
                        <p><strong>[6]</strong> On an <strong>SS32X server</strong>, confirm the following settings in BIOS.</p>
                        <p style={{paddingLeft: "60px"}}><strong>[6.1]</strong> In "Advanced" -- "ACPI Settings", make sure "Enable Hibernation" is disabled.</p>
                        <p style={{paddingLeft: "60px"}}><strong>[6.2]</strong> In "Advanced" -- "ACPI Settings", make sure "ACPI Sleep State" is set to "Suspend Disabled"</p>
                        <p style={{paddingLeft: "60px"}}><strong>[6.3]</strong> In "Chipset" -- "Board Configuration", make sure "PWR-On After PWR-Fail" is set to "Last state" or "On".</p>
                        <p style={{paddingLeft: "60px"}}><strong>[6.4]</strong> In "Chipset" -- "PCH-IO Configuration" -- "SATA and RST Configuration", make sure all the hard drives are detected. There should be 4 of them (but it will show up as 0, 1, 2, and 3).</p>
                        <p style={{paddingLeft: "60px"}}><strong>[6.5]</strong> Check that the boot order is correct. Windows Boot Manager should be option #1.</p>
                        <p><strong>[7]</strong> On a <strong>Core server</strong>, enter System Setup when booting into the server.</p>
                        <p style={{paddingLeft: "60px"}}><strong>[7.1]</strong> Change the <strong>Thermal Profile</strong> to <strong>Minimum Power (Performance per Watt Optimized).</strong></p>
                        <p style={{paddingLeft: "60px"}}><strong>[7.2]</strong> The power of the server can be capped by specifing the <strong>watts</strong>, <strong>BTU/hr</strong>, and by a <strong>percentage</strong>. A lower power consumption typically means lower heat output, which can reduce cooling requirements. The fans may run at a lower speed, making the server quieter. Lower power usage can also reduce the thermal stress, potentially extending the life of components like CPUs and power supplies. </p>
                        <p><strong>[8]</strong> If all other options are exhausted, perform a recovery of the OS.</p>
                        <p><strong>[9]</strong> If the issue still persists, there may be an issue with the hardware. Please contact technical support for further assistance.</p>
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
                        <p><strong>[1]</strong> Verify that the AC outlet is producing 100 - 120VAC.</p>
                        <p><strong>[2]</strong> If a UPS is in use, bypass it temporarily to test with direct wall power.</p>
                        <p><strong>[3]</strong> Replace the power cord with a known-working one.</p>
                        <p><strong>[4]</strong> Confirm that the powered device is IEEE 802.3af/at compliant by looking up its data sheet.</p>
                        <p><strong>[5]</strong> Verify that the switch is not producing more PoE than its PoE budget allows.</p>
                        <p><strong>[6]</strong> Try pinging the switch from the server's command prompt.</p>
                        <p><strong>[7]</strong> If the switch is accessible, disable and enable PoE on the port in the switch's web interface.</p>
                        <p><strong>[8]</strong> If the switch is still not providing PoE, default the switch by placing a jumper between ports 1 and 2.</p>
                        <p><strong>[9]</strong> If the issue still persists, there may be an issue with the hardware. Please contact technical support for further assistance.</p>
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
                        <p><strong>[1]</strong> Take note of the following RAID configurations.</p>
                        <li style={{paddingLeft: "60px"}}><strong>RAID 0</strong> requires at least 2 drives. One drive failing corrupts the entire RAID.</li>
                        <li style={{paddingLeft: "60px"}}><strong>RAID 1</strong> requires at least 2 drives and can lose up to half the drives. Replacing the drive(s) should automatically rebuild the RAID.</li>
                        <li style={{paddingLeft: "60px"}}><strong>RAID 5</strong> requires at least 3 drives and can lose up to one drive. Replacing the drive should automatically rebuild the RAID.</li>
                        <li style={{paddingLeft: "60px"}}><strong>RAID 6</strong> requires at least 4 drives and can lose up to two. Replacing the drive(s) should automatically rebuild the RAID.</li>
                        <li style={{paddingLeft: "60px"}}><strong>RAID 10</strong> requires at least 4 drives and can lose up to half the drives. Replacing the drive(s) should automatically rebuild the RAID.</li>
                        <p><strong>[2]</strong> Using one of the following, confirm the server's current RAID configuration and which HDD has failed. </p>
                        <li style={{paddingLeft: "60px"}}>Razberi Monitor Cloud</li>
                        <li style={{paddingLeft: "60px"}}>Razberi Monitor -- System Info</li>
                        <li style={{paddingLeft: "60px"}}>BIOS</li>
                        <li style={{paddingLeft: "60px"}}>Device Manager</li>
                        <li style={{paddingLeft: "60px"}}>Intel Rapid Storage Technology</li>
                        <li style={{paddingLeft: "60px"}}>iDRAC</li>
                        <li style={{paddingLeft: "60px"}}>Diskpart</li>
                        <p><strong>[3]</strong> Contact technical support to check the server's warranty status. Covered drives receive free replacements. Out-of-warranty drives must be purchased separately.</p>
                        <p><strong>[4]</strong> If the RAID is corrupted, delete the virtual disk, create a new virtual disk with each HDD selected, and format the volume as NTFS using one the following. </p>
                        <li style={{paddingLeft: "60px"}}>BIOS</li>
                        <li style={{paddingLeft: "60px"}}>Disk Management</li>
                        <li style={{paddingLeft: "60px"}}>Intel Rapid Storage Technology</li>
                        <li style={{paddingLeft: "60px"}}>iDRAC</li>
                    </>
                )}
            </div>

            <div id="ssd" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("ssd")}>
                    How to Troubleshoot a Server with a Bad mSATA
                    <span className={`dropdown-chevron ${isFAQExpanded("ssd") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("ssd") && (
                    <>
                        <p>Please contact technical support regarding one of the following options.</p>
                        <p><strong>[Option #1]</strong> Ship the server to us, and we can re-image the unit.</p>
                        <p><strong>[Option #2]</strong> We can ship out a new mSATA with our image on it.</p>
                        <p><strong>[Option #3]</strong> Purchase a new mSATA, install the OS, and we can provide the necessary drivers and software.</p>
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
                        <p><strong>[1]</strong> Document if (1) the LEDs illuminate on the NIC when an Ethernet connection is made and (2) whether the NIC can be successfully pinged.</p>
                        <p><strong>[2]</strong> Enter "View network connections" in the Windows search box.</p>
                        <p><strong>[3]</strong> In Network Connections, disable and reenable the NIC.</p>
                        <p><strong>[4]</strong> Select the 'Diagnose this connection' option for the NIC to diagnose the issue.</p>
                        <p><strong>[5]</strong> In Device Manager, verify what drivers the NIC has. Contact technical support to determine if all of the necessary drivers are installed for the NIC.</p>
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
                        <p><strong>[1]</strong> Determine the OS image installation date. In PowerShell, type the command <strong>Get-CimInstance -ClassName Win32_OperatingSystem | Select-Object InstallDate</strong>. Make sure this matches what is in Razberi Monitor Cloud. </p>
                        <p><strong>[2]</strong> Open Disk Management to confirm there is only one OS partition and that the RAID is healthy.</p>
                        <p><strong>[3]</strong> Review the server's alert logs to identify the cause of the OS issue.</p>
                        <p style={{paddingLeft: "60px"}}><strong>[3.1]</strong> Check the Razberi Monitor alert logs.</p>
                        <p style={{paddingLeft: "60px"}}><strong>[3.2]</strong> Check the Event Viewer alert logs.</p>
                        <p style={{paddingLeft: "60px"}}><strong>[3.3]</strong> Check the iDRAC alert logs.</p>
                        <p><strong>[4]</strong> Open Task Manager and review the the CPU and memory utilization. If either are high, determine what processes are using the most resources and what services are being used by those processes.</p>
                        <p><strong>[5]</strong> If the OS is not accessible, or if all other options are exhausted, perform a recovery of the OS. Please note it is recommended to back up all of the data on the server as all of the storage will be lost.</p>
                        <p><strong>[6]</strong> If the OS is still experiencing issues after a recovery, contact technical support.</p>
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
                        <p><strong>[1]</strong> Enable Remote Desktop in the server's settings.</p>
                        <p><strong>[2]</strong> Connect a PC to a NIC on the server.</p>
                        <p><strong>[3]</strong> Open the Remote Desktop Connection software on the PC.</p>
                        <p><strong>[4]</strong> Enter the IP address of the server's NIC.</p>
                        <p><strong>[5]</strong> Enter the server's Windows username and password.</p>
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
                    Get a Better Understanding of Camera Defense
                    <span className={`dropdown-chevron ${isFAQExpanded("camera-defense") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("camera-defense") && (
                    <>
                        <p><strong>[1] Set up Device Binding</strong></p>
                        <li style={{paddingLeft: "60px"}}>Master Device Binding: Enable or Disable All</li>
                        <li style={{paddingLeft: "60px"}}>Bind a specific port to the MAC address of the connected device.</li>
                        <p><strong>[2] Set up the Device Groups</strong></p>
                        <li style={{paddingLeft: "60px"}}>A device group is a set of similar devices assigned the same security policies. By default, all active ports are assigned to the "Cameras" device group. If cameras are the only devices connected to the SSIQ then hit "Save" to save the settings, otherwise:</li>
                        <li style={{paddingLeft: "60px"}}>Create a new device group or modify existing device group(s) giving each device group a unique name.</li>
                        <li style={{paddingLeft: "60px"}}>Add or modify the ports to be associated with each device group.</li>
                        <li style={{paddingLeft: "60px"}}>Review all changes and then hit "Save" to save the settings.</li>
                        <li style={{paddingLeft: "60px"}}>Note: Deleting an existing device group removes its firewall and whitelist settings. Changing the name of an existing device group causes that device group to be deleted and a new device group to be created.</li>
                        <p><strong>[3] Set up the Firewall</strong></p>
                        <li style={{paddingLeft: "60px"}}>Use the firewall feature to limit traffic to video services and to disable discovery services. For each device group:</li>
                        <li style={{paddingLeft: "60px"}}>Select HTTP, HTTPS, and RTSP (Real-Time Streaming Protocol) services for device groups with cameras.</li>
                        <li style={{paddingLeft: "60px"}}>Disable discovery services to prevent cyber attackers from finding devices: Ping, DHCP, NTP, Telnet, DNS, FTP, TFTP, SSH, SMTP, Bonjour</li>
                        <li style={{paddingLeft: "60px"}}>Allow additional services as needed providing the name, protocol, and port.</li>
                        <p><strong>[4] Set up the Internet Protection</strong></p>
                        <li style={{paddingLeft: "60px"}}>A whitelist limits traffic to specified networks by device group. The default option of Internet Protection prevents devices from communicating over routable networks such as the Internet.</li>
                        <li style={{paddingLeft: "60px"}}>Use Internet Protection to prevent devices from reaching routable networks, otherwise</li>
                        <li style={{paddingLeft: "60px"}}>Specify the allowed networks using sub-masks and/or individual IP addresses.</li>
                        <li style={{paddingLeft: "60px"}}>Enable alerts for devices that attempt to communicate outside of the whitelist.</li>
                        <p><strong>[5] Set up the Password Protection</strong></p>
                        <li style={{paddingLeft: "60px"}}>Enable Password Monitoring: This feature monitors your devices to ensure they are not using default, user prohibited, or common passwords found on the NIST Bad Password List. By default, Password Protection is enabled.</li>
                        <li style={{paddingLeft: "60px"}}>Device default and common passwords are tested by default. You can optionally add additional prohibited passwords below. (Limit 48)</li>
                    </>
                )}
            </div>
        </div>
    );
};

export default RazberiTroubleshooting;