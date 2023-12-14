import {
  __experimentalInputControl as InputControl,
  PanelBody,
  PanelRow,
  SelectControl,
  ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from 'react';
import { SortableControl } from '../../../../Components';
import svgIcon from '../../../assets/icons/christmas-star-icon.svg';
import oktaIconSvg from '../../../assets/icons/okta-icon.svg';
import { htmlTags } from '../../utils/options';
import Alignment from '../Panel/Alignment/Alignment';
import Device from '../Panel/Device/Device';
import MediaArea from '../Panel/MediaArea/MediaArea';
import TinyEditor from '../Panel/TinyEditor/TinyEditor';
const ContentSettings = ({ attributes, setAttributes }) => {
  const {
    sortElements,
    heading,
    icon,
    separator,
    subHeading,
    alignment,
  } = attributes;
  //   const updateObject = (attr, property, value, nestProperty = false) => {
  //   const newAttr = produce(attributes[attr], (draft) => {
  //     if (nestProperty !== false) {
  //       draft[property][nestProperty] = value;
  //     } else {
  //       draft[property] = value;
  //     }
  //   });
  //   setAttributes({ [attr]: newAttr });
  // };
  return (
    <Fragment>
      <PanelBody
        className="bPlPanelBody"
        initialOpen={true}
        title={__('Content Settings', 'dual-color-heading')}
      >
        <SortableControl
          label={__('Sort Elements:')}
          value={sortElements}
          onChange={(val) => setAttributes({ sortElements: val })}
        />
        <PanelRow>
          <ToggleControl
            label={__('Show Icon', 'dual-color-heading')}
            checked={icon.show}
            onChange={(value) =>
              setAttributes({ icon: { ...icon, show: value } })
            }
          />
        </PanelRow>
        <ToggleControl
          label={__('Show Separator', 'dual-color-heading')}
          checked={separator.show}
          onChange={(value) =>
            setAttributes({ separator: { ...separator, show: value } })
          }
        />
        <div
          style={{
            borderTop: '1px solid #ccc',
            paddingTop: '10px',
            marginTop: '10px',
          }}
        >
          {icon.show&& (
            <Fragment>
              <p>Icon</p>
              <MediaArea
                default={oktaIconSvg}
                image={icon.img}
                renderFunction={(value) =>
                  setAttributes({ icon: { ...icon, img: value } })
                }
              />
            </Fragment>
          )}
        </div>
        <PanelRow className="">
          <span className="">{__('HTML Tag', 'table-of-contents')}</span>
          <SelectControl
            value={heading.tag}
            onChange={(value) =>
              setAttributes({ heading: { ...heading, tag: value } })
            }
            options={htmlTags}
          />
        </PanelRow>
        <InputControl
          style={{ margin: '10px 0' }}
          label={__('Title (First Part)', 'dual-color-heading')}
          value={heading.first.text}
          onChange={(value) =>
            setAttributes({
              heading: { ...heading, first: { ...heading.first, text: value } },
            })
          }
        />
        <InputControl
          label={__('Title (Last Part)', 'dual-color-heading')}
          value={heading.last.text}
          onChange={(value) =>
            setAttributes({
              heading: { ...heading, last: { ...heading.last, text: value } },
            })
          }
        />

        <p style={{ marginBottom: '5px' }}>Sub Text</p>
        <TinyEditor
          height={220}
          value={subHeading.text}
          onChange={(value) =>
            setAttributes({ subHeading: { ...subHeading, text: value } })
          }
        />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Alignment</span>
            <Device
              device={alignment.device}
              onChange={(value) =>
                setAttributes({
                  alignment: { ...alignment, device: value },
                })
              }
            />
          </div>
          {alignment.device === 'desktop' && (
            <Alignment
              value={alignment.desktop}
              render={(value) =>
                setAttributes({
                  alignment: { ...alignment, desktop: value },
                })
              }
            />
          )}
          {alignment.device === 'tablet' && (
            <Alignment
              value={alignment.tablet}
              render={(value) =>
                setAttributes({
                  alignment: { ...alignment, tablet: value },
                })
              }
            />
          )}
          {alignment.device === 'mobile' && (
            <Alignment
              value={alignment.mobile}
              render={(value) =>
                setAttributes({
                  alignment: { ...alignment, mobile: value },
                })
              }
            />
          )}
        </div>
      </PanelBody>
      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__('Separator', 'dual-color-heading')}
      >
        <PanelRow>
          <span>Separator Type</span>
          <SelectControl
            value={separator.type}
            options={[
              { label: 'Line', value: 'line' },
              { label: 'Icon', value: 'icon' },
            ]}
            onChange={(value) =>
              setAttributes({
                separator: { ...separator, type: value },
              })
            }
          />
        </PanelRow>
        {separator.type === 'icon' && (
          <div>
            <p>Icon</p>
            <MediaArea
              image={separator.icon}
              default={svgIcon}
              className="dual-color-heading-icon"
              renderFunction={(value) =>
                setAttributes({ separator: { ...separator, icon: value } })
              }
            />
          </div>
        )}
      </PanelBody>
    </Fragment>
  );
};

export default ContentSettings;
