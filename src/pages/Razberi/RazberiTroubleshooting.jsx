import React from 'react';

const RazberiTroubleshooting = () => {
  return (
    <div className="faq-list">
      <h1 className="faq-title">Troubleshooting Razberi Servers</h1>

      <div className="table-of-contents">
        <h1>Table of Contents</h1>
        <li><a href="#power-ss32x">How to Troubleshoot Power Issues on a Server Switch</a></li>
        <li><a href="#power-core">How to Troubleshoot Power Issues on a Core Server</a></li>
        <li><a href="#no-poe">How to Troubleshoot a Server Switch with PoE Issues</a></li>
        <li><a href="#raid">How to Troubleshoot Issues with the RAID</a></li>
        <li><a href="#nic">How to Troubleshoot Issues with the NIC</a></li>
        <li><a href="#os">How to Troubleshoot Issues with the OS</a></li>
        <li><a href="#rdp">How to Set Up a Remote Desktop Connection</a></li>
        <li><a href="#registration">How to Skip the Razberi Monitor Registration</a></li>
        <li><a href="#camera-defense">How to Set Up Camera Defense</a></li>
        <li><a href="#password">What to do if the Windows Password is Fogotten</a></li>
        <li><a href="#ping-ssiq24">Pinging the Server Switch</a></li>
      </div>

      <div id="power-ss23x" className="faq-answer">
        <h1>How to Troubleshoot Power Issues on a Server Switch</h1>
        <p><strong>[1]</strong> Determine if the unit boots up at all or how frequently the unit powers off.</p>
        <p><strong>[2]</strong> Verify the unit is receiving 100-120VAC.</p>
        <p><strong>[3]</strong> If a UPS is in use, consider removing it to see if the issue persists and try replacing the power cable to rule it out.</p>
        <p><strong>[4]</strong> Verify a healthy OS, RAID, and switch.</p>
        <p><strong>[5]</strong> Confirm the following settings in BIOS.</p>
        <li style={{paddingLeft: "60px"}}>Check that the boot order is correct. Windows Boot Manager should be option #1.</li>
        <li style={{paddingLeft: "60px"}}>In "Advanced" -- "ACPI Settings", make sure "Enable Hibernation" is disabled.</li>
        <li style={{paddingLeft: "60px"}}>In "Advanced" -- "ACPI Settings", make sure "ACPI Sleep State" is set to "Suspend Disabled"</li>
        <li style={{paddingLeft: "60px"}}>In "Chipset" -- "PCH-IO Configuration" -- "SATA and RST Configuration", make sure all the hard drives are detected. There should be 4 of them (but it will show up as 0, 1, 2, and 3).</li>
        <li style={{paddingLeft: "60px"}}>In "Chipset" -- "Board Configuration", make sure "PWR-On After PWR-Fail" is set to "Last state" or "On".</li>
        <p><strong>[6]</strong> Perform a recovery of the OS.</p>
        <p><strong>[7]</strong> If the issue persists, there may be an issue with the power supply or CPU board. Please contact technical support for further assistance.</p>
      </div>

        <div id="power-core" className="faq-answer">
          <h1>How to Troubleshoot Power Issues on a Core Server</h1>
          <p><strong>[1]</strong> Determine if the unit boots up at all or how frequently the unit powers off.</p>
          <p><strong>[2]</strong> Verify the unit is receiving 100-120VAC.</p>
          <p><strong>[3]</strong> If a UPS is in use, consider removing it to see if the issue persists and try replacing the power cable to rule it out.</p>
          <p><strong>[4]</strong> Verify a healthy OS and RAID.</p>
          <p><strong>[5]</strong> Enter the System Setup when booting into the server.</p>
          <li>Change the <strong>Thermal Profile</strong> to <strong>Minimum Power (Performance per Watt Optimized).</strong></li>
          <li>The power of the server can be capped by specifing the watts, BTU/hr, and by a percentage. A lower power consumption typically means lower heat output, which can reduce cooling requirements. The fans may run at a lower speed, making the server quieter. Lower power usage can also reduce the thermal stress, potentially extending the life of components like CPUs and power supplies. However, if the server is power capped too aggressively, the CPU and memory performance may be throttled to stay within the limit.</li>
          <p><strong>[6]</strong> Perform a recovery of the OS.</p>
          <p><strong>[7]</strong> Perform a hardware diagnostic on the server. This can be done in the <strong>Lifecycle Controller</strong> under the <strong>Hardware Diagnostics</strong> tab and <strong>Run Hardware Diagnostics</strong> button.</p>
          <p><strong>[8]</strong> If the issue persists, there may be an issue with the power supply or CPU board. Please contact technical support for further assistance.</p>
        </div>

        <div id="no-poe" className="faq-answer">
          <h1>How to Troubleshoot a Server Switch with PoE Issues</h1>
          <p><strong>[1]</strong> Verify the unit is receiving 100-120VAC.</p>
          <p><strong>[2]</strong> If a UPS is in use, consider removing it to see if the issue persists and try replacing the power cable to rule it out.</p>
          <p><strong>[3]</strong> Confirm the powered devices are 802.3af/at compliant.</p>
          <p><strong>[4]</strong> Ensure the switch is not producing more PoE than the PoE budget allows.</p>
          <p><strong>[5]</strong> Disable and enable PoE on the port.</p>
          <p><strong>[6]</strong> While the server is powered on, default the switch by placing a jumper between ports 1 and 2.</p>
          <p><strong>[7]</strong> Attempt pinging the switch from the command prompt on the server.</p>
        </div>

        <div id="raid" className="faq-answer">
          <h1>How to Troubleshoot Issues with the RAID</h1>
          <p><strong>[1]</strong> Confirm that the HDD or RAID has failed and what the current RAID configuration is using one of the following:</p>
          <li style={{paddingLeft: "60px"}}>Razberi Monitor Cloud</li>
          <li style={{paddingLeft: "60px"}}>Razberi Monitor: System Info</li>
          <li style={{paddingLeft: "60px"}}>Device Manager</li>
          <li style={{paddingLeft: "60px"}}>Intel Rapid Storage Technology</li>
          <li style={{paddingLeft: "60px"}}>iDRAC</li>
          <li style={{paddingLeft: "60px"}}>Diskpart</li>
          <li style={{paddingLeft: "60px"}}>BIOS</li>
          <p><strong>[2]</strong> If a HDD has failed, contact technical support to determine if the unit is under warranty. If so, a replacement HDD can be sent. Otherwise, a new HDD will need to be purchased. Please note:</p>
          <li style={{paddingLeft: "60px"}}>RAID 0 requires at least 2 drives. One drive failing corrupts the entire RAID.</li>
          <li style={{paddingLeft: "60px"}}>RAID 1 requires at least 2 drives and allows for the loss of half. Replacing the drive(s) should automatically rebuild the RAID.</li>
          <li style={{paddingLeft: "60px"}}>RAID 5 requires at least 3 drives and allows for the loss of one. Replacing the drive should automatically rebuild the RAID.</li>
          <li style={{paddingLeft: "60px"}}>RAID 6 requires at least 4 drives and allows for the loss of two. Replacing the drive(s) should automatically rebuild the RAID.</li>
          <li style={{paddingLeft: "60px"}}>RAID 10 requires at least 4 drives and allows for the loss of half. Replacing the drive(s) should automatically rebuild the RAID.</li>
          <p><strong>[3]</strong> If the RAID is corrupted, delete the virtual disk, create a new virtual disk, and format the volume as NTFS using the following: </p>
          <li style={{paddingLeft: "60px"}}>BIOS</li>
          <li style={{paddingLeft: "60px"}}>Disk Management</li>
          <li style={{paddingLeft: "60px"}}>Intel Rapid Storage Technology</li>
          <li style={{paddingLeft: "60px"}}>iDRAC</li>
        </div>

        <div id="nic" className="faq-answer">
          <h1>How to Troubleshoot Issues with the NIC</h1>
          <p><strong>[1]</strong> Enter "View network status and tasks" in the Windows search box.</p>
          <p><strong>[2]</strong> Click "Change adapter settings".</p>
          <p><strong>[3]</strong> Disable and enable the NIC</p>
          <p><strong>[4]</strong> Diagnose the NIC connection</p>
          <p><strong>[5]</strong> In Device Manager, verify the NIC has the necessary drivers.</p>
        </div>

        <div id="os" className="faq-answer">
          <h1>How to Troubleshoot Issues with the OS</h1>
          <p><strong>[1]</strong> Review the Razberi Monitor Alert Logs.</p>
          <p><strong>[2]</strong> Review the errors in Event Viewer.</p>
          <p><strong>[3]</strong> Review the iDRAC alert logs</p>
          <p><strong>[4]</strong> Review the CPU utilization and processes in Task Manager</p>
          <p><strong>[5]</strong> Perform a recovery of the operaitng system.</p>
        </div>

        <div id="RDP" className="faq-answer">
          <h1>How to Set Up a Remote Desktop Connection</h1>
          <p><strong>[1]</strong> Enable Remote Desktop in the server's settings.</p>
          <p><strong>[2]</strong> Connect a laptop to a NIC on the server.</p>
          <p><strong>[3]</strong> Open the Remote Desktop Connection software on the laptop.</p>
          <p><strong>[4]</strong> Enter the IP address of the server's NIC.</p>
          <p><strong>[5]</strong> Enter the Windows username and password.</p>
       </div>

      <div id="registration" className="faq-answer">
          <h1>How to Skip the Razberi Monitor Registration</h1>
          <p>While on the registration page, hold down: Ctrl + Shift + Alt + F11.</p>
      </div>

      <div id="camera-defense" className="faq-answer">
        <h1>How to Set Up Camera Defense</h1>
        <p><strong>Device Binding</strong></p>
        <li>Master Device Binding: Enable or Disable All</li>
        <li>Bind a specific port to the MAC address of the connected device.</li>
        <p><strong>Device Groups</strong></p>
        <li>A device group is a set of similar devices assigned the same security policies. By default, all active ports are assigned to the "Cameras" device group. If cameras are the only devices connected to the SSIQ then hit "Save" to save the settings, otherwise:</li>
        <li>Create a new device group or modify existing device group(s) giving each device group a unique name.</li>
        <li>Add or modify the ports to be associated with each device group.</li>
        <li>Review all changes and then hit "Save" to save the settings.</li>
        <li>Note: Deleting an existing device group removes its firewall and whitelist settings. Changing the name of an existing device group causes that device group to be deleted and a new device group to be created.</li>
        <p><strong>Firewall</strong></p>
        <li>Use the firewall feature to limit traffic to video services and to disable discovery services. For each device group:</li>
        <li>Select HTTP, HTTPS, and RTSP (Real-Time Streaming Protocol) services for device groups with cameras.</li>
        <li>Disable discovery services to prevent cyber attackers from finding devices: Ping, DHCP, NTP, Telnet, DNS, FTP, TFTP, SSH, SMTP, Bonjour</li>
        <li>Allow additional services as needed providing the name, protocol, and port.</li>
        <p><strong>Internet Protection</strong></p>
        <li>A whitelist limits traffic to specified networks by device group. The default option of Internet Protection prevents devices from communicating over routable networks such as the Internet.</li>
        <li>Use Internet Protection to prevent devices from reaching routable networks, otherwise</li>
        <li>Specify the allowed networks using sub-masks and/or individual IP addresses.</li>
        <li>Enable alerts for devices that attempt to communicate outside of the whitelist.</li>
        <p><strong>Password Protection</strong></p>
        <li>Enable Password Monitoring: This feature monitors your devices to ensure they are not using default, user prohibited, or common passwords found on the NIST Bad Password List. By default, Password Protection is enabled.</li>
        <li>Device default and common passwords are tested by default. You can optionally add additional prohibited passwords below. (Limit 48)</li>
      </div>

      <div id="password "className="faq-answer">
        <h1>What to do if the Windows Password is Fogotten</h1>
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

export default RazberiTroubleshooting