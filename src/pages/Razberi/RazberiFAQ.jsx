import { useState, useEffect } from 'react';
import PowerOverEthernet from '../../relevant-information/PowerOverEthernet';
import SurgeSuppression from '../../relevant-information/SurgeSuppression';


const RazberiFAQ = ({ activeSubSection }) => {
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
        <div className="faq-list">  
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
                      <p>The <strong>Platform Controller Hub (PCH)</strong> serves as Intel's central traffic controller, managing data flow between the CPU and peripherals like USB ports, PCIe slots, and <strong>SATA (Serial ATA)</strong> storage devices. SATA remains a widely compatible interface standard, with <strong>SATA 3.0</strong> offering 6Gb/s bandwidth - sufficient for both SATA SSDs (typically 2.5" or mSATA form factors) and traditional SATA HDDs. While slower than NVMe alternatives, SATA SSDs maintain popularity through their universal motherboard support via dedicated SATA ports, using the AHCI (Advanced Host Controller Interface) protocol for communication. This makes them ideal for budget builds, legacy system upgrades, or secondary storage, offering significant performance gains over mechanical HDDs without requiring modern M.2 slots. Though SATA's separate data/power cables can create cable management challenges, its broad compatibility across generations ensures continued relevance in diverse computing environments.</p>
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
    );
};

export default RazberiFAQ;