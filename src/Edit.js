import { InspectorControls } from '@wordpress/block-editor';
import { useEffect, useState } from 'react';
import ContentSettings from './components/Settings/ContentSettings';
import StyleSettings from './components/Settings/StyleSettings';
import DualColorHeading from './theme/DualColorHeading/DualColorHeading';
import { TabPanel } from './components/Panel/TabPanel/TabPanel';
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  const { cId } = attributes;
  const [tab, setTab] = useState('content');
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId

  return (
    <div className={className} id={`dch-dual-color-heading-${cId}`}>
      <InspectorControls>
        <TabPanel value={tab} onChange={value=>setTab(value)} />
        {tab === 'content' && (
          <ContentSettings
            attributes={attributes}
            setAttributes={setAttributes}
          />
        )}
        {tab === 'style' && (
          <StyleSettings
            attributes={attributes}
            setAttributes={setAttributes}
          />
        )}
      </InspectorControls>

      <DualColorHeading attributes={attributes} />
    </div>
  );
};
export default Edit;
