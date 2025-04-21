import React, { useEffect } from 'react';

const RazberiTroubleshooting = ({ activeSubSection }) => {
  useEffect(() => {
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
}

export default RazberiTroubleshooting;