import {
  __experimentalInputControl as InputControl,
  PanelBody,
  PanelRow,
  SelectControl,
  ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from 'react';
import { htmlTags } from '../../utils/options';
import Alignment from '../Panel/Alignment/Alignment';
import MediaArea from '../Panel/MediaArea/MediaArea';
import TinyEditor from '../Panel/TinyEditor/TinyEditor';
import Device from '../Panel/Device/Device';
import svgIcon from '../../../assets/icons/christmas-star-icon.svg'
import oktaIconSvg from '../../../assets/icons/okta-icon.svg';
const ContentSettings = ({ attributes, setAttributes }) => {
  const { content } = attributes;
  return (
    <Fragment>
      <PanelBody
        initialOpen={true}
        title={__('Content Settings', 'dual-color-heading')}
      >
        <PanelRow>
          <span>Content Style</span>
          <SelectControl
            className="bpdch-custom-style"
            value={content.contentStyle}
            options={[
              { label: 'Default', value: 'default' },
              { label: 'Icon on top', value: 'iconontop' },
              { label: 'Icon & sub-text on top', value: 'iconsubtexttop' },
              { label: 'Sub-text on top', value: 'subtextontop' },
            ]}
            onChange={(value) =>
              setAttributes({ content: { ...content, contentStyle: value } })
            }
          />
        </PanelRow>
        <PanelRow>
          <ToggleControl
            label={__('Show Icon', 'dual-color-heading')}
            checked={content.showIcon}
            onChange={(value) =>
              setAttributes({ content: { ...content, showIcon: value } })
            }
          />
        </PanelRow>
        <ToggleControl
          label={__('Show Separator', 'dual-color-heading')}
          checked={content.showSeparator}
          onChange={(value) =>
            setAttributes({ content: { ...content, showSeparator: value } })
          }
        />
        <div
          style={{
            borderTop: '1px solid #ccc',
            paddingTop: '10px',
            marginTop: '10px',
          }}
        >
          {content.showIcon && (
            <Fragment>
              <p>Icon</p>
              <MediaArea
                default={oktaIconSvg}
                image={content.icon}
                renderFunction={(value) =>
                  setAttributes({ content: { ...content, icon: value } })
                }
              />
            </Fragment>
          )}
        </div>
        <PanelRow className="">
          <span className="">{__('HTML Tag', 'table-of-contents')}</span>
          <SelectControl
            className="bpdch-custom-style"
            value={content.titleTag}
            onChange={(value) =>
              setAttributes({ content: { ...content, titleTag: value } })
            }
            options={htmlTags}
          />
        </PanelRow>
        <InputControl
          label={__('Title (First Part)', 'dual-color-heading')}
          value={content.titleFirst}
          onChange={(value) =>
            setAttributes({ content: { ...content, titleFirst: value } })
          }
        />
        <InputControl
          label={__('Title (Last Part)', 'dual-color-heading')}
          value={content.titleSecond}
          onChange={(value) =>
            setAttributes({ content: { ...content, titleSecond: value } })
          }
        />

        <p style={{ marginBottom: '5px' }}>Sub Text</p>
        <TinyEditor
          height={220}
          value={content.subContent}
          onChange={(value) =>
            setAttributes({ content: { ...content, subContent: value } })
          }
        />
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>Alignment</span>
            <Device
              device={content.alignmentDevice}
              onChange={(value) =>
                setAttributes({
                  content: { ...content, alignmentDevice: value },
                })
              }
            />
          </div>
          {content.alignmentDevice === 'desktop' && (
            <Alignment
              value={content.alignment.desktop}
              render={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    alignment: { ...content.alignment, desktop: value },
                  },
                })
              }
            />
          )}
          {content.alignmentDevice === 'tablet' && (
            <Alignment
              value={content.alignment.tablet}
              render={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    alignment: { ...content.alignment, tablet: value },
                  },
                })
              }
            />
          )}
          {content.alignmentDevice === 'mobile' && (
            <Alignment
              value={content.alignment.mobile}
              render={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    alignment: { ...content.alignment, mobile: value },
                  },
                })
              }
            />
          )}
        </div>
      </PanelBody>
      <PanelBody
        initialOpen={false}
        title={__('Separator', 'dual-color-heading')}
      >
        <PanelRow>
          <span>Separator Position</span>
          <SelectControl
            className="bpdch-custom-style"
            value={content.separatorPotition}
            options={[
              { label: 'Before Title', value: 'before' },
              { label: 'After Title', value: 'after' },
            ]}
            onChange={(value) =>
              setAttributes({
                content: { ...content, separatorPotition: value },
              })
            }
          />
        </PanelRow>
        <PanelRow>
          <span>Separator Type</span>
          <SelectControl
            className="bpdch-custom-style"
            value={content.separatorType}
            options={[
              { label: 'Line', value: 'line' },
              { label: 'Icon', value: 'icon' },
            ]}
            onChange={(value) =>
              setAttributes({
                content: { ...content, separatorType: value },
              })
            }
          />
        </PanelRow>
        {content.separatorType === 'icon' && (
          <div>
            <p>Icon</p>
            <MediaArea
              image={content.separatorIcon}
              default={svgIcon}
              className="dual-color-heading-icon"
              renderFunction={(value) =>
                setAttributes({ content: { ...content, separatorIcon: value } })
              }
            />
          </div>
        )}
      </PanelBody>
    </Fragment>
  );
};

export default ContentSettings;
