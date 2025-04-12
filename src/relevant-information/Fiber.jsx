import React from 'react';

const Fiber = () => {
  const standards = [
    { standard: "1000BASE-SX", wavelength: "850nm", distance: "0.55km" },
    { standard: "1000BASE-LX", wavelength: "1310nm", distance: "10km" },
    { standard: "1000BASE-LH", wavelength: "1310nm", distance: "20km" },
    { standard: "1000BASE-EX", wavelength: "1550nm", distance: "40km" },
    { standard: "1000BASE-ZX", wavelength: "1550nm", distance: "80km" },
    { standard: "1000BASE-BXU", wavelength: "1310nm TX / 1550nm RX", distance: "10km" },
    { standard: "1000BASE-BXD", wavelength: "1550nm TX / 1310nm RX", distance: "10km" },
  ];

  const data = [
    { dbm: -40, mW: "0.0001", microwatts: "0.1" },
    { dbm: -30, mW: "0.001", microwatts: "1" },
    { dbm: -20, mW: "0.01", microwatts: "10" },
    { dbm: -10, mW: "0.1", microwatts: "100" },
    { dbm: -3, mW: "0.5", microwatts: "500" },
    { dbm: 0, mW: "1", microwatts: "1,000" },
    { dbm: 10, mW: "10", microwatts: "10,000" },
    { dbm: 20, mW: "100", microwatts: "100,000" },
    { dbm: 30, mW: "1,000", microwatts: "1,000,000" },
    { dbm: 40, mW: "10,000", microwatts: "10,000,000" },
  ];

  return (
    <div>
      <h1>Fiber Optics</h1>
      <p>The <strong>glass composition</strong> of  fiber makes it resistant to electromagnetic interference (EMI). The core and cladding of the fiber work together to transmit light signals efficiently while minimizing signal loss. The fiber's design ensures reliable data transmission even in environments with high electromagnetic interference, which is crucial for maintaining the integrity of data in communication networks.</p>

      <img src="photos/Fiber/Fiber.jpg" alt="Fiber optics cross-section" style={{width: "50%"}}/>

      <p><strong>Multimode fiber</strong> covers shorter distances than single mode, typically up to 2 miles at 100 Mbps. <strong>OM1 multimode fiber,</strong>  which has a 62.5 micron core and 125 micron cladding, supports distances of 275 meters at 1 Gbps. <strong>OM2 and higher multimode fibers,</strong> with a 50 micron core and 125 micron cladding, can extend up to 550 meters at 1 Gbps. These fibers are suitable for applications where the transmission distances are not as long, such as within buildings or across campuses.</p>

      <p><strong>Modal dispersion</strong> occurs in multimode fibers due to the existence of multiple light paths (modes) through the fiber core. Light traveling in different modes, such as straight through the center versus bouncing at angles along the core, takes slightly different times to reach the end of the fiber. This variation in travel time can limit the data transmission speed and efficiency, making it a significant factor in multimode fiber design and performance.</p>

      <p><strong>Single mode fiber,</strong> on the other hand, is capable of covering much longer distances than multimode fiber, often upwards of 70 miles and more. The smaller core of single mode fiber (9 microns) allows only one mode of light to travel, which significantly reduces the risk of modal dispersion and allows for higher performance over long distances. <strong>OS1 single mode fiber</strong> is designed for shorter ranges, while <strong>OS2 single mode fiber</strong> is optimized for longer ranges.</p>

      <p><strong>Chromatic dispersion</strong> is another phenomenon that occurs in both single mode and multimode fibers. It arises due to the variation in the speed of light for different wavelengths in the fiber material. As different wavelengths of light travel at slightly different speeds, this results in signal distortion over long distances. This effect can impact the quality of the signal and is more pronounced in longer transmissions.</p>

      <p>Common wavelengths used in fiber optics include <strong>850nm, 1310nm, and 1550nm</strong>. These wavelengths are chosen based on their ability to minimize loss and distortion as they travel through the fiber. The specific wavelength selected can influence the performance and distance capabilities of the fiber link.</p>

      <p><strong>Spectral width</strong> refers to the margin of error for the wavelength, which can affect the accuracy and efficiency of signal transmission. A narrower spectral width generally allows for more precise wavelength control and better performance, especially in high-speed communications and long-distance links.</p>

      <p><strong>Wavelength Division Multiplexing (WDM)</strong> is a technology that enables the simultaneous transmission of multiple signals over a single optical fiber. It achieves this by using different wavelengths of light, effectively allowing the fiber to carry multiple data streams without interference. WDM significantly increases the capacity of fiber-optic networks, making it an essential technology for modern communication systems.</p>

      <p>There are four primary types of lasers used in fiber optics: <strong>LED (Light Emitting Diode), VCSL (Vertical-Cavity Surface-Emitting Laser), FP (Fabry-Pérot), and DFB (Distributed Feedback)</strong>. Each type of laser has its own characteristics that make it suitable for different applications, from short-range communication to long-distance transmission.</p>

      <p><strong>dBm, or decibel-milliwatts,</strong> is a unit of measurement used to express the power level of a signal in optical networks. A value of 0 dBm corresponds to 1 milliwatt (1000 microwatts) of power. A decrease of 3 dBm represents a halving of the power output, so -3 dBm would correspond to 500 microwatts of power. Understanding dBm is crucial for evaluating the performance and loss in optical networks.</p>

      <p>The table below shows the relationship between <strong>dBm, milliwatts (mW), and microwatts (µW) of power</strong>. This conversion is useful for engineers and technicians working with optical networks to assess signal strength and quality.</p>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ backgroundColor: "rgb(13, 128, 173)", color: "white" }}>
          <tr>
            <th style={{ padding: "10px", textAlign: "left" }}>dBm</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Power (mW)</th>
            <th style={{ padding: "10px", textAlign: "left" }}>Power (µW)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "#f9f9f9" }}>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>{row.dbm}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>{row.mW}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd", textAlign: "left" }}>{row.microwatts}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>The following table shows the fiber standards, including the corresponding wavelength and the distance each can support. This information is crucial for selecting the right fiber type for a particular application or project.</p>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "18px", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "rgb(13, 128, 173)", color: "#fff" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Standard</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Wavelength</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Distance</th>
          </tr>
        </thead>
        <tbody>
          {standards.map((item, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f2f2f2" : "#fff" }}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.standard}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.wavelength}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{item.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Fiber;
