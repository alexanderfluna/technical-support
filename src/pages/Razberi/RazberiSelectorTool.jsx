import { useState } from 'react';

const RazberiSelectorTool = () => {
  const [selected, setSelected] = useState("");
  const [selectorTool, setSelectorTool] = useState("");

  const handleClick = () => {
    setSelectorTool(!selectorTool);
  }

  return (
    <div className="tool-container">
        <h1 className="faq-title" onClick={handleClick}>Selector Tool<span className="dropdown-chevron"></span></h1>
        {selectorTool && (
          <>
            <div className="selector-placeholder" >
              <div className="selector-options" style={{width: "50%"}}>
                <button
                  className={`selector-button ${selected === "Server Switch" ? "selected" : ""}`}
                  onClick={() => setSelected("Server Switch")}
                >
                  Server Switch
                </button>
                <span className="separator"></span>
                <button
                  className={`selector-button ${selected === "Server" ? "selected" : ""}`}
                  onClick={() => setSelected("Server")}
                >
                  Server
                </button>
              </div>

              {selected && (
                <div>
                  {selected === "Server Switch" && (
                    <div>
                      <p style={{paddingTop: "10px"}}>The Razberi server switch includes a high-performance 32-port PoE switch, featuring <strong>28 x 1GbE IEEE 802.3at ports (up to 30W per port)</strong> and <strong>4 x 1GbE IEEE 802.3at 4-pair ports (up to 60W per port)</strong>, with a <strong>total PoE output of up to 450W</strong>. It also offers <strong>3 x SFP+ 10GbE ports</strong> for high-speed connectivity, <strong>2 x USB 3.1 ports</strong>, and <strong>2 x HDMI 1.4 ports</strong> supporting 4096x2160 resolution at 30Hz. For network management, it includes <strong>1 x RJ45 1GbE port with AMT support (i219LM)</strong>, <strong>1 x RJ45 2.5GbE port (i225V)</strong>, and an additional <strong>internal RJ45 2.5GbE port</strong> for switch communication.</p>
                      <p style={{paddingTop: "30px", textDecoration: "underline"}}>The following customization options are available:</p>
                      <p style={{paddingTop: "10px"}}><strong>CPU:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— Intel® Core™ I5-10500TE</p>
                      <p style={{paddingLeft: "10px"}}>— Intel® Xeon™ W-1270TE</p>
                      <p style={{paddingTop: "20px"}}><strong>Memory:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— 16 GB</p>
                      <p style={{paddingLeft: "10px"}}>— 32 GB</p>
                      <p style={{paddingTop: "20px"}}><strong>Storage:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— Up to 88 TB</p>
                      <p style={{paddingTop: "20px"}}><strong>Raid Card:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— SS-R4</p>
                      <p style={{paddingTop: "20px"}}><strong>RAID Configuration:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— JBOD</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 0</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 1</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 5</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 6</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 10</p>
                      <p style={{paddingTop: "20px"}}><strong>GPU:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— GPU-T400</p>
                      <p style={{paddingLeft: "10px"}}>— GPU-T1000</p>
                      <p style={{paddingLeft: "10px"}}>— GPU-A400</p>
                      <p style={{paddingLeft: "10px"}}>— GPU-A1000</p>
                      <p style={{paddingTop: "20px"}}><strong>Operating System:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— Windows 10</p>
                      <p style={{paddingLeft: "10px"}}>— Windows 11</p>
                      <p style={{paddingLeft: "10px"}}>— Server 2019</p>
                      <p style={{paddingLeft: "10px"}}>— Server 2022</p>
                    </div>
                  )}
                  {selected === "Server" && (
                    <div>
                      <p style={{paddingTop: "10px"}}>The <strong>Razberi recording server</strong> delivers reliable, scalable, and high-performance video storage, making it an intelligent investment for security applications. Powered by a robust <strong>Xeon processor</strong>, it ensures long-term durability, ideal for continuous surveillance operations. A <strong>dual Xeon configuration</strong> enhances processing power, enabling accelerated video handling, seamless performance, and superior multitasking capabilities. The integrated <strong>PERC card</strong> supports RAID configurations for critical data protection, safeguarding continuous recording and extended storage needs. With <strong>live drive</strong> support, these servers provide rapid data access, while seamless compatibility with leading <strong>video management software (VMS)</strong> ensures effortless integration. Additionally, remote management tools such as Dell <strong>iDRAC</strong> simplify monitoring and maintenance, minimizing downtime and optimizing operational efficiency.</p>                      <p style={{paddingTop: "30px", textDecoration: "underline"}}>The following customization options are available:</p>
                      <p style={{paddingTop: "10px"}}><strong>CPU:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— Intel Xeon Silver 4410Y</p>
                      <p style={{paddingLeft: "10px"}}>— Dual Intel Xeon Silver 4410Y</p>
                      <p style={{paddingTop: "20px"}}><strong>Memory:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— 16 GB</p>
                      <p style={{paddingLeft: "10px"}}>— 32 GB</p>
                      <p style={{paddingLeft: "10px"}}>— 64 GB</p>
                      <p style={{paddingLeft: "10px"}}>— 128 GB</p>
                      <p style={{paddingLeft: "10px"}}>— 256 GB</p>
                      <p style={{paddingTop: "20px"}}><strong>Storage:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— Up to 528 TB</p>
                      <p style={{paddingTop: "20px"}}><strong>RAID Configuration:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— JBOD</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 0</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 1</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 5</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 6</p>
                      <p style={{paddingLeft: "10px"}}>— RAID 10</p>
                      <p style={{paddingTop: "20px"}}><strong>SSD (Live Drive):</strong></p>
                      <p style={{paddingLeft: "10px"}}>— S512</p>
                      <p style={{paddingLeft: "10px"}}>— S1000</p>
                      <p style={{paddingLeft: "10px"}}>— S2000</p>
                      <p style={{paddingLeft: "10px"}}>— S4000</p>
                      <p style={{paddingLeft: "10px"}}>— S8000</p>
                      <p style={{paddingTop: "20px"}}><strong>GPU:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— GPU-T400</p>
                      <p style={{paddingLeft: "10px"}}>— GPU-T1000</p>
                      <p style={{paddingLeft: "10px"}}>— GPU-A400</p>
                      <p style={{paddingLeft: "10px"}}>— GPU-A1000</p>
                      <p style={{paddingTop: "20px"}}><strong>Operating System:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— Server 2019</p>
                      <p style={{paddingLeft: "10px"}}>— Server 2022</p>
                      <p style={{paddingTop: "20px"}}><strong>Additional Network Options:</strong></p>
                      <p style={{paddingLeft: "10px"}}>— 4 x 1GbE RJ45 ports</p>
                      <p style={{paddingLeft: "10px"}}>— 2 x 10GbE RJ45 ports</p>
                      <p style={{paddingLeft: "10px"}}>— 2 x 10GbE SFP+ ports</p>
                      <p style={{paddingLeft: "10px"}}>— 2 x 25GbE SFP+ ports</p>
                    </div>
                  )}
                </div>
              )}
              {!selected && <p className="placeholder-text"></p>}
            </div>
          </>
        )}
    </div>
  )
}

export default RazberiSelectorTool