import React, { useEffect, useState } from 'react';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';

const WirelessFAQ = ({ activeSubSection }) => {
    const [expandedFAQs, setExpandedFAQs] = useState([]);
    const wifiStandards = [
        { standard: '802.11', frequency: '2.4 GHz', maxDataRate: '2 Mbps', channelBandwidth: '22 MHz', date: '1997' },
        { standard: '802.11a', frequency: '5 GHz', maxDataRate: '54 Mbps', channelBandwidth: '20 MHz', date: '1999' },
        { standard: '802.11b', frequency: '2.4 GHz', maxDataRate: '11 Mbps', channelBandwidth: '22 MHz', date: '1999' },
        { standard: '802.11g', frequency: '2.4 GHz', maxDataRate: '54 Mbps', channelBandwidth: '20 MHz', date: '2003' },
        { standard: '802.11n', frequency: '2.4 GHz / 5 GHz', maxDataRate: '600 Mbps', channelBandwidth: '20/40 MHz', date: '2009' },
        { standard: '802.11ac', frequency: '5 GHz', maxDataRate: '1.3 Gbps', channelBandwidth: '20/40/80/160 MHz', date: '2013' },
        { standard: '802.11ax', frequency: '2.4 GHz / 5 GHz / 6 GHz', maxDataRate: '9.6 Gbps', channelBandwidth: '20/40/80/160 MHz', date: '2019' },
    ];

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
            <div id="bom" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("bom")}>
                    How to Design a Wireless Application
                    <span className={`dropdown-chevron ${isFAQExpanded("bom") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("bom") && (
                    <>
                        <p><strong>Take note of the following information before creating a Bill of Materials.</strong></p>
                        <p>[1] An RF site survey is strongly recommended to ensure the suitability of Wi-Fi radios for use at this site.</p>
                        <p>[2] Determine which locations will be point-to-point or point-to-multipoint.</p>
                        <p>[3] Confirm that the wireless radios have a clear line of sight and there is no obstruction in the fresnel zone.</p>
                        <p>[4] Confirm that the client radios are placed within the beamwidth of the access point radio.</p>
                        <p>[5] Confirm that 120 VAC power will be available at each location for use by the Comnet device(s) at that location.</p>
                        <p>[6] Confirm the PoE requirements of each powered device.</p>
                        <p><strong>Start creating a Bill of Materials by location.</strong></p>
                        <p>[1] One of the following wireless radios.</p>
                        <li>NW1</li>
                        <li>NW1/M</li>
                        <li>NW1/M/IA870</li>
                        <li>NW9</li>
                        <p>[2] One articulating bracket.</p>
                        <li>NWBKT</li>
                        <p>[3] One or more of the following PoE switches or midspans.</p>
                        <li>CNGE1IPS</li>
                        <li>CN1IPSBT-DC</li>
                        <li>CNGE6FX2TX4MSP</li>
                        <li>CNGE11FX3TX8MSPOE</li>
                        <p>[4] One of the following 48 VDC power supplies for the PoE switch as needed.</p>
                        <li>PS48VDC-5A</li>
                        <p>[5] One enclosure as needed.</p>
                        <li>CNEE2</li>
                    </>
                )}
            </div>

            <div id="wireless" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("wireless")}>
                    Wireless Ethernet
                    <span className={`dropdown-chevron ${isFAQExpanded("wireless") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("wireless") && (
                    <>
                        <p>The <strong>Extended Service Set Identifier (ESSID)</strong> is the broadcast name of a wireless network, allowing devices to identify and connect to the correct access point. It serves as a unique identifier within a wireless network, ensuring seamless roaming between multiple access points when configured correctly.</p>
                        <p>The <strong>Pre-Shared Key (PSK)</strong> is the password required to join a secured wireless network. This key is an essential component of WPA and WPA2 encryption protocols, ensuring that only authorized users can access the network. A strong PSK helps protect against unauthorized access and potential security threats.</p>
                        <p><strong>Antenna gain</strong> measures how effectively an antenna directs or concentrates radio frequency (RF) energy in a particular direction compared to a reference antenna. Higher gain antennas focus energy more efficiently, increasing signal range and strength while reducing interference from unwanted directions.</p>
                        <p>Gain is typically referenced in <strong>decibels isotropic (dBi)</strong>, which represents the gain relative to an <strong>isotropic radiator</strong>—a theoretical antenna that radiates power uniformly in all directions. An antenna with a positive dBi value directs energy more efficiently than an isotropic source, making it ideal for focused, long-range wireless communications.</p>
                        <p><strong>Wireless Security Features:</strong> The access point and client(s) are bound together by a shared ESSID and PSK. It is recommended to change the IP addresses, ESSID, and PSK of the wireless radios, as this information is public. Hiding the ESSID prevents it from appearing in Wi-Fi scans. Additionally, wireless communication is encrypted using WPA2 for enhanced security.</p>
                        <p>The <strong>Received Signal Strength Indicator (RSSI)</strong> measures the power level of a received wireless signal, serving as an indicator of connection quality between an access point and a client device. RSSI values are measured in negative decibels (dBm), with higher values (closer to zero) representing stronger signals.</p>
                        <p>The <strong>Wi-Fi standards</strong> can be observed in the table below.</p>
                        <table
                            style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                            }}
                        >
                            <thead
                                style={{
                                    backgroundColor: 'rgb(13, 128, 173)',
                                    color: 'white',
                                }}
                            >
                                <tr>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Standard</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Frequency Band</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Max Data Rate</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Channel Bandwidth</th>
                                    <th style={{ padding: '10px', textAlign: 'left' }}>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wifiStandards.map((row, index) => (
                                    <tr
                                        key={index}
                                        style={{
                                            backgroundColor: index % 2 === 0 ? 'white' : '#f9f9f9',
                                        }}
                                    >
                                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.standard}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.frequency}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.maxDataRate}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.channelBandwidth}</td>
                                        <td style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'left' }}>{row.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}
            </div>

            <div id="poe" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("poe")}>
                    Power Over Ethernet
                    <span className={`dropdown-chevron ${isFAQExpanded("poe") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("poe") && <PowerOverEthernet />}
            </div>

            <div id="osi" className="faq-answer">
                <h1 className="faq-title" onClick={() => toggleFAQ("osi")}>
                    The OSI Model
                    <span className={`dropdown-chevron ${isFAQExpanded("osi") ? 'expanded' : ''}`}></span>
                </h1>
                {isFAQExpanded("osi") && <OSI />}
            </div>
        </div>
    );
}

export default WirelessFAQ;