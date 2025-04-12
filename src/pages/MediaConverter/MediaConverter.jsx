import MediaConverterTroubleshooting from './MediaConvererTroubleshooting';
import MediaConverterSelectorTool from './MediaConverterSelectorTool';
import MediaConverterFAQ from './MediaConverterFAQ';
import '../../styles/Pages.css'

const MediaConverter = () => {
  return (
    <div>
      <main className="faq-container">
        <MediaConverterTroubleshooting/>
        <MediaConverterFAQ />
        <MediaConverterSelectorTool />
      </main>
    </div>
  );
};

export default MediaConverter;