import React from 'react'

const SurgeSuppression = () => {
  return (
    <div>
      <h1 className="faq-title">Surge Suppression</h1>
      <p><strong>Surge suppression</strong> is the process of protecting electrical devices from voltage spikes, or "surges," which are sudden increases in electrical current. These surges can come from lightning strikes, power grid fluctuations, or even internal sources like large appliances cycling on and off. A surge suppressor (or surge protector) works by diverting excess voltage away from connected devices, preventing damage to sensitive electronics.</p>
      <p>At the heart of every quality surge protector are several critical components that work together to safeguard your electronics. The <strong>Metal Oxide Varistor (MOV)</strong> is the primary defense—a semiconductor that absorbs excess voltage by diverting it away from your devices, sacrificing itself over time with each surge it stops. The <strong>Joule Rating</strong> tells you how much energy the protector can handle before it fails; think of it like a "surge budget"—higher ratings (e.g., 1000+ joules) mean longer-lasting protection against larger or repeated spikes. <strong>Clamping Voltage</strong> determines when the suppressor activates; a lower clamping voltage (under 300V) means it reacts sooner, preventing even minor surges from reaching sensitive electronics. Speed matters too: <strong>Response Time</strong>, measured in nanoseconds (good models respond in under 1 nanosecond), ensures near-instant reaction to sudden spikes. Finally, <strong>EMI/RFI Filtering</strong> tackles electrical "noise"—interference from motors, radios, or other devices—by smoothing out the current, which is especially important for audio/video equipment and precision electronics. Together, these features create layered protection, but remember: no surge protector lasts forever. MOVs degrade with use, so replacing the protector every few years (or after a major surge) is crucial for maintaining safety.</p>
    </div>
  )
}

export default SurgeSuppression