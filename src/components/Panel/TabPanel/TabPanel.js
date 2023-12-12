import { Dashicon } from '@wordpress/components';
import React from 'react';
import { FaCircleHalfStroke } from 'react-icons/fa6';
import './tabpanel.scss';
const TabPanel = ({ tab, setTab }) => {
  return (
    <div className="tab-panel-container">
      <div
        onClick={() => setTab('content')}
        className={`single-tab ${
          tab === 'content'
            ? 'is-tab-active active-tab-color'
            : 'deActive-tab-color'
        }`}
      >
        <Dashicon icon="edit" />
        <span>Content</span>
      </div>
      <div
        onClick={() => setTab('style')}
        className={`single-tab ${
          tab === 'style'
            ? 'is-tab-active active-tab-color'
            : 'deActive-tab-color'
        }`}
      >
        <FaCircleHalfStroke style={{ paddingBottom: '4px', fontSize: '20px' }} />
        <span>Style</span>
      </div>
    </div>
  );
};

export default TabPanel;
