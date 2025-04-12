import React from 'react';
import Fiber from '../../relevant-information/Fiber';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';

function EthernetSwitchFrequentlyAskedQuestions() {
    return (
        <div className="faq-list">
            <h1 className="faq-title">Relevant Ethernet Switch Information</h1>

            <div className="table-of-contents">
                <h1>Table of Contents</h1>
                <li><a href="#switch">Ethernet Switches</a></li>
                <li><a href="#switch-protocols">Ethernet Switch Protocols</a></li>
                <li><a href="#fiber">Fiber Optics</a></li>
                <li><a href="#poe">Power Over Ethernet</a></li>
                <li><a href="#osi">The OSI Model</a></li>
            </div>

            <div id="switch" className="faq-answer">
                <h1>Ethernet Switches</h1>
                <p>Ethernet switches are used to connect end devices like PCs, printers, servers, and other networking devices within a <strong>local area network (LAN)</strong>. Their role is to switch packets of data from one device to another. This is achieved by examining the destination <strong>MAC address</strong> in the Ethernet frame and forwarding the packet to the appropriate port on the switch that is connected to the destination device.</p>
            </div>

            <div id="switch-protocols" className="faq-answer">
                <h1>Ethernet Switch Protocols</h1>
                <p><strong>ARP (Address Resolution Protocol)</strong> is used to map an IP address to a MAC address. It allows devices on the same local network to find each other and communicate effectively by resolving IP addresses to their corresponding physical hardware addresses.</p>
                <p><strong>LLDP (Link Layer Discovery Protocol)</strong> is a protocol used by network devices to discover and exchange information about each other on a local network. It helps network administrators manage their network by providing details about connected devices and their capabilities.</p>
                <p><strong>NTP (Network Time Protocol)</strong> is used to synchronize the clocks of computers and devices over a network. It ensures that all devices within a network have consistent time, which is crucial for activities like logging, data timestamps, and scheduled tasks.</p>
                <p><strong>VLAN (Virtual Local Area Network)</strong> using 802.1Q is a protocol that allows network administrators to create virtual networks within a physical network. VLANs help segment traffic, improve network performance, and enhance security by isolating different groups of devices.</p>
                <p><strong>LACP (Link Aggregation Control Protocol)</strong> is a protocol used to combine multiple network links into a single logical link. This increases the bandwidth and provides redundancy in case of a link failure, improving network reliability and performance.</p>
                <p><strong>STP (Spanning Tree Protocol)</strong> is a network protocol that ensures there are no loops in Ethernet networks. It does this by creating a tree-like structure of the network where redundant paths are blocked, ensuring efficient communication without looping.</p>
                <p><strong>RSTP (Rapid Spanning Tree Protocol)</strong> is a network protocol designed to prevent loops in Ethernet networks. It provides faster convergence compared to the older STP, making network recovery more efficient in case of topology changes.</p>
                <p><strong>MSTP (Multiple Spanning Tree Protocol)</strong> is an enhancement of STP that allows multiple spanning tree instances to exist within a single network. This enables more efficient use of network resources and helps in optimizing traffic flow.</p>
                <p><strong>IGMP (Internet Group Management Protocol)</strong> is used by devices to join or leave multicast groups in IP networks. It is essential for managing the delivery of multicast traffic to a group of receivers without flooding the entire network.</p>
                <p><strong>QoS (Quality of Service)</strong> refers to a set of technologies used to manage network traffic and ensure the performance of critical applications. It helps prioritize important data, such as voice or video, over less critical traffic like email or file transfers.</p>
                <p><strong>SNMP (Simple Network Management Protocol)</strong> is used to manage and monitor network devices. It allows network administrators to gather information about the status and performance of devices, and it can also be used to configure network devices remotely.</p>
                <p><strong>Telnet</strong> is a network protocol that allows users to access remote devices over a network. However, it is not secure, as it transmits data, including passwords, in plain text. For secure remote access, SSH is generally preferred over Telnet.</p>
                <p><strong>SSH (Secure Shell)</strong> is a cryptographic network protocol used for secure communication between devices. It allows administrators to access and manage remote systems securely over an unsecured network, replacing older, insecure protocols like Telnet.</p>
                <p><strong>RADIUS (Remote Authentication Dial-In User Service)</strong> and <strong>TACACS+ (Terminal Access Controller Access-Control System Plus)</strong> are network protocols used for authentication, authorization, and accounting. They help secure network access by ensuring only authorized users can connect and that their activities are monitored.</p>
            </div>

            <div id="fiber" className="faq-answer">
                <Fiber />
            </div>

            <div id="poe" className="faq-answer">
                <PowerOverEthernet />
            </div>

            <div id="osi" className="faq-answer">
                <OSI />
            </div>
        </div>
    );
}

export default EthernetSwitchFrequentlyAskedQuestions;
