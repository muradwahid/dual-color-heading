import { InspectorControls } from '@wordpress/block-editor';
import { produce } from 'immer';
import { useEffect, useState } from 'react';

import TabPanel from './components/Panel/TabPanel/TabPanel';
import ContentSettings from './components/Settings/ContentSettings';
import StyleSettings from './components/Settings/StyleSettings';
import DualColorHeading from './theme/DualColorHeading/DualColorHeading';
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  const { cId } = attributes;
  const [tab, setTab] = useState('content');
  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId



  return (
    <div className={className} id={`bpdch-dual-color-heading-${cId}`}>
      <InspectorControls>
        <TabPanel tab={tab} setTab={setTab} />
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
