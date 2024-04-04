import {
  __experimentalInputControl as InputControl,
  PanelBody,
  PanelRow,
  SelectControl,
  ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Label, SortableControl } from '../../../../Components';
import svgIcon from '../../../assets/icons/christmas-star-icon.svg';
import oktaIconSvg from '../../../assets/icons/okta-icon.svg';
import { htmlTags } from '../../utils/options';
import MediaArea from '../Panel/MediaArea/MediaArea';
import { TinyEditor } from '../Panel/TinyEditor/TinyEditor';
const ContentSettings = ({ attributes, setAttributes }) => {
  const { sortElements, heading, icon, separator, subHeading } = attributes;
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
    <>
      <PanelBody
        className="bPlPanelBody"
        initialOpen={true}
        title={__('Elements', 'dual-color-heading')}
      >
        <SortableControl
          label={__('Sort Elements:')}
          value={sortElements}
          onChange={(val) => setAttributes({ sortElements: val })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__('Heading', 'dual-color-heading')}
      >
        <PanelRow>
          <Label className="">{__('HTML Tag', 'table-of-contents')}</Label>
          <SelectControl
            value={heading.tag}
            onChange={(value) =>
              setAttributes({ heading: { ...heading, tag: value } })
            }
            options={htmlTags}
          />
        </PanelRow>

        {['first', 'last'].map((part) => (
          <InputControl
            key={part}
            className="mt20"
            label={__(`${part} Part`, 'dual-color-heading')}
            value={heading[part].text}
            onChange={(value) =>
              setAttributes({
                heading: {
                  ...heading,
                  [part]: { ...heading[part], text: value },
                },
              })
            }
          />
        ))}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__('Separator', 'dual-color-heading')}
      >
        <ToggleControl
          label={__('Show Separator', 'dual-color-heading')}
          checked={separator.show}
          onChange={(value) =>
            setAttributes({ separator: { ...separator, show: value } })
          }
        />

        {separator.show && (
          <>
            <PanelRow>
              <Label className="">Type</Label>
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
              <>
                <Label>Icon</Label>
                <MediaArea
                  types="image/svg+xml"
                  value={separator.icon}
                  default={svgIcon}
                  className="dual-color-heading-icon"
                  onChange={(value) =>
                    setAttributes({ separator: { ...separator, icon: { url: value.url, alt: value.alt, title: value.title } } })
                  }
                />
              </>
            )}
          </>
        )}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__('Sub Heading', 'dual-color-heading')}
      >
        <TinyEditor
          height={220}
          value={subHeading.text}
          onChange={(value) =>
            setAttributes({ subHeading: { ...subHeading, text: value } })
          }
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__('Icon', 'dual-color-heading')}
      >
        <ToggleControl
          label={__('Show Icon', 'dual-color-heading')}
          checked={icon.show}
          onChange={(value) =>
            setAttributes({ icon: { ...icon, show: value } })
          }
        />

        {icon.show && (
          <>
            <Label>{__('Icon', 'dual-color-heading')}</Label>
            <MediaArea
              types="image/svg+xml"
              default={oktaIconSvg}
              value={icon.img}
              onChange={(value) =>
                setAttributes({ icon: { ...icon, img: { url: value.url, alt: value.alt, title: value.title } } })
              }
            />
          </>
        )}
      </PanelBody>
    </>
  );
};

export default ContentSettings;
