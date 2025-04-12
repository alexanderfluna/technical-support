import React from 'react';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import OSI from '../../relevant-information/OSI';

function WirelessFrequentlyAskedQuestions() {
  const wifiStandards = [
    { standard: '802.11', frequency: '2.4 GHz', maxDataRate: '2 Mbps', channelBandwidth: '22 MHz', date: '1997' },
    { standard: '802.11a', frequency: '5 GHz', maxDataRate: '54 Mbps', channelBandwidth: '20 MHz', date: '1999' },
    { standard: '802.11b', frequency: '2.4 GHz', maxDataRate: '11 Mbps', channelBandwidth: '22 MHz', date: '1999' },
    { standard: '802.11g', frequency: '2.4 GHz', maxDataRate: '54 Mbps', channelBandwidth: '20 MHz', date: '2003' },
    { standard: '802.11n', frequency: '2.4 GHz / 5 GHz', maxDataRate: '600 Mbps', channelBandwidth: '20/40 MHz', date: '2009' },
    { standard: '802.11ac', frequency: '5 GHz', maxDataRate: '1.3 Gbps', channelBandwidth: '20/40/80/160 MHz', date: '2013' },
    { standard: '802.11ax', frequency: '2.4 GHz / 5 GHz / 6 GHz', maxDataRate: '9.6 Gbps', channelBandwidth: '20/40/80/160 MHz', date: '2019' },
  ];

  return (
    <div className="faq-list">
      <h1 className="faq-title">Relevant Wireless Ethernet Information</h1>

      <div className="table-of-contents">
        <h1>Table of Contents</h1>
        <li><a href="#wireless">Wireless Ethernet</a></li>
        <li><a href="#poe">Power Over Ethernet</a></li>
        <li><a href="#osi">The OSI Model</a></li>
      </div>

      <div className="faq-answer" id="wireless">
        <h1>Wireless Ethernet</h1>
        <p>The <strong>Extended Service Set Identifier (ESSID)</strong> is the broadcast name of a wireless network, allowing devices to identify and connect to the correct access point. It serves as a unique identifier within a wireless network, ensuring seamless roaming between multiple access points when configured correctly.</p>
        <p>The <strong>Pre-Shared Key (PSK)</strong> is the password required to join a secured wireless network. This key is an essential component of WPA and WPA2 encryption protocols, ensuring that only authorized users can access the network. A strong PSK helps protect against unauthorized access and potential security threats.</p>
        <p><strong>Antenna gain</strong> measures how effectively an antenna directs or concentrates radio frequency (RF) energy in a particular direction compared to a reference antenna. Higher gain antennas focus energy more efficiently, increasing signal range and strength while reducing interference from unwanted directions.</p>
        <p>Gain is typically referenced in <strong>decibels isotropic (dBi)</strong>, which represents the gain relative to an <strong>isotropic radiator</strong>—a theoretical antenna that radiates power uniformly in all directions. An antenna with a positive dBi value directs energy more efficiently than an isotropic source, making it ideal for focused, long-range wireless communications.</p>
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
        <p><strong>Wireless Security Features:</strong> The access point and client(s) are bound together by a shared ESSID and PSK. It is recommended to change the IP addresses, ESSID, and PSK of the wireless radios, as this information is public. Hiding the ESSID prevents it from appearing in Wi-Fi scans. Additionally, wireless communication is encrypted using WPA2 for enhanced security.</p>
      </div>

      <div className="faq-answer" id="poe"><PowerOverEthernet /></div>
      <div className="faq-answer" id="osi"><OSI /></div>
    </div>
  );
}

export default WirelessFrequentlyAskedQuestions;
