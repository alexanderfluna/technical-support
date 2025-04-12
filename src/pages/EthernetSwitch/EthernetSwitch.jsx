import EthernetSwitchTroubleshooting from './EthernetSwitchTroubleshooting'
import EthernetSwitchSelectorTool from './EthernetSwitchSelectorTool'
import EthernetSwitchFAQ from './EthernetSwitchFAQ'
import '../../styles/Pages.css'

const EthernetSwitch = () => {
  return (
    <div>
      <main className="faq-container">
        {<EthernetSwitchTroubleshooting />}
        {<EthernetSwitchFAQ />}
        {<EthernetSwitchSelectorTool />}
      </main>
    </div>
  );
};

export default EthernetSwitch;