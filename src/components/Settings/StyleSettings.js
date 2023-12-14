import {
  __experimentalBoxControl as BoxControl,
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment, useState } from 'react';
import { Background, Typography } from '../../../../Components';
import {
  borderRadiusResetValues,
  dualColorOptions,
  marginResetValues,
} from '../../utils/options';
import Alignment from '../Panel/Alignment/Alignment';
import Device from '../Panel/Device/Device';
import IncludeExClude from '../Panel/IncludeExClude/IncludeExClude';
import PanelColorPicker from '../Panel/PanelColorPicker/PanelColorPicker';
import PanelCustomColorControl from '../Panel/PanelCustomColorControl/PanelCustomColorControl';
import PanelGradientPicker from '../Panel/PanelGradientPicker/PanelGradientPicker';
import PanelShadow from '../Panel/PanelShadow/PanelShadow';
const StyleSettings = ({ attributes, setAttributes }) => {
  const {
    content,
    background,
    padding,
    margin,
    border,
    shadow,
    icon,
    heading,
    subHeading,
    separator,
  } = attributes;
  const [paddingDevice, setPaddingDevice] = useState('desktop');
  const [marginDevice, setMarginDevice] = useState('desktop');
  const [borderDevice, setBorderDevice] = useState('desktop');
  const [changeTab, setChangeTab] = useState('Left Line');
  return (
    <Fragment>
      <PanelBody
        initialOpen={true}
        title={__('Dual Heading Style', 'dual-color-heading')}
      >
        <Background
          label={__('Background', 'dual-color-heading')}
          value={background}
          onChange={(val) => setAttributes({ background: val })}
        />
        <div
          style={{
            marginTop: '20px',
            position: 'relative',
          }}
        >
          <Device
            device={paddingDevice}
            style={{ position: 'absolute', left: '60px', top: '-3px' }}
            onChange={(value) => setPaddingDevice(value)}
          />

          {paddingDevice === 'desktop' && (
            <BoxControl
              label="Padding"
              values={padding.desktop}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  padding: { ...padding, desktop: value },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {paddingDevice === 'tablet' && (
            <BoxControl
              label="Padding"
              values={padding.tablet}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  padding: { ...padding, tablet: value },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {paddingDevice === 'mobile' && (
            <BoxControl
              label="Padding"
              values={padding.mobile}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  padding: { ...padding, mobile: value },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
        </div>
        <div
          style={{
            marginTop: '20px',
            position: 'relative',
          }}
        >
          <Device
            device={marginDevice}
            style={{ position: 'absolute', left: '60px', top: '-3px' }}
            onChange={(value) => setMarginDevice(value)}
          />
          {marginDevice === 'desktop' && (
            <BoxControl
              label="Margin"
              values={margin?.desktop}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  margin: { ...margin, desktop: value },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {marginDevice === 'tablet' && (
            <BoxControl
              label="Margin"
              values={margin.tablet}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  margin: { ...margin, tablet: value },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {marginDevice === 'mobile' && (
            <BoxControl
              label="Margin"
              values={margin.mobile}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  margin: { ...margin, mobile: value },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
        </div>
        <PanelRow>
          <span style={{ marginBottom: '10px' }}>Border Type</span>
          <SelectControl
            value={border.type}
            options={[
              { label: 'Default', value: 'default' },
              { label: 'None', value: 'none' },
              { label: 'Solid', value: 'solid' },
              { label: 'Double', value: 'double' },
              { label: 'Dotted', value: 'dotted' },
              { label: 'Dashed', value: 'dashed' },
              { label: 'Groove', value: 'groove' },
            ]}
            onChange={(value) =>
              setAttributes({ border: { ...border, type: value } })
            }
          />
        </PanelRow>
        <div
          style={{
            marginTop: '20px',
            position: 'relative',
          }}
        >
          <Device
            device={borderDevice}
            style={{ position: 'absolute', left: '90px', top: '-3px' }}
            onChange={(value) => setBorderDevice(value)}
          />
          {borderDevice === 'desktop' && (
            <BoxControl
              label="Border Width"
              values={border.desktop}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({ border: { ...border, desktop: value } })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {borderDevice === 'tablet' && (
            <BoxControl
              label="Border Width"
              values={border.tablet}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({ border: { ...border, tablet: value } })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {borderDevice === 'mobile' && (
            <BoxControl
              label="Border Width"
              values={border.mobile}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({ border: { ...border, mobile: value } })
              }
              units={__('px', 'em', '%')}
            />
          )}
        </div>
        <PanelColorPicker
          color={border.color}
          label="Border Color"
          value={border.color}
          renderFunction={(value) =>
            setAttributes({ border: { ...border, color: value } })
          }
        />
        <div style={{ marginTop: '10px' }}>
          <RangeControl
            label="Border Radius"
            value={border.radius}
            onChange={(value) =>
              setAttributes({ border: { ...border, radius: value } })
            }
          />
        </div>
        <PanelShadow
          label="Box Shadow"
          value={shadow}
          onChange={(value) => setAttributes({ shadow: value })}
        />
      </PanelBody>
      {icon.show && (
        <PanelBody
          initialOpen={false}
          title={__('Icon Style', 'dual-color-heading')}
        >
          <RangeControl
            label={__('Icon Size', 'dual-color-heading')}
            value={icon.size}
            min={10}
            max={550}
            onChange={(value) =>
              setAttributes({ icon: { ...icon, size: value } })
            }
          />
          <PanelColorPicker
            label="Icon Color"
            color={icon.color}
            value={icon.color}
            renderFunction={(value) =>
              setAttributes({ icon: { ...icon, color: value } })
            }
          />
        </PanelBody>
      )}

      <PanelBody
        initialOpen={false}
        title={__('Typography', 'dual-color-heading')}
      >
        <div style={{ margin: '10px 0' }}>
          <strong>Title Style</strong>
        </div>
        <PanelColorPicker
          color={heading.last.color}
          value={heading.last.color}
          label={__('Main Color', 'dual-color-heading')}
          renderFunction={(value) =>
            setAttributes({
              heading: {
                ...heading,
                last: { ...heading.last, color: value },
              },
            })
          }
        />
        <PanelRow>
          <span>Dual Color</span>
          <SelectControl
            value={heading.colorType}
            options={dualColorOptions}
            onChange={(value) =>
              setAttributes({
                heading: {
                  ...heading,
                  colorType: value,
                },
              })
            }
          />
        </PanelRow>
        {heading.colorType === 'solid' && (
          <PanelColorPicker
            color={heading.first.color}
            value={heading.first.color}
            label={__('Solid Color', 'dual-color-heading')}
            renderFunction={(value) =>
              setAttributes({
                heading: {
                  ...heading,
                  first: { ...heading.first, color: value },
                },
              })
            }
          />
        )}
        {heading.colorType === 'gradient' && (
          <PanelGradientPicker
            label={__('Gradient Color', 'dual-color-heading')}
            value={heading.first.gradient}
            onChange={(value) =>
              setAttributes({
                heading: {
                  ...heading,
                  first: { ...heading.first, gradient: value },
                },
              })
            }
          />
        )}
        <Typography
          value={heading.typography}
          onChange={(value) =>
            setAttributes({
              heading: { ...heading, typography: value },
            })
          }
        />
        <div
          style={{
            borderTop: '1px solid #ccc',
            marginTop: '10px',
            paddingTop: '10px',
          }}
        >
          <strong>Sub-title Style</strong>
        </div>
        <PanelColorPicker
          color={subHeading.color}
          value={subHeading.color}
          label={__('Color', 'dual-color-heading')}
          renderFunction={(value) =>
            setAttributes({ subHeading: { ...subHeading, color: value } })
          }
        />
        <Typography
          value={subHeading.typography}
          onChange={(value) =>
            setAttributes({
              subHeading: { ...subHeading, typography: value },
            })
          }
        />
      </PanelBody>
      <PanelBody
        initialOpen={false}
        title={__('Separator', 'dual-color-heading')}
      >
        {separator.type === 'line' && (
          <Fragment>
            <span>Alignment</span>
            <Alignment
              value={separator.alignment}
              render={(value) =>
                setAttributes({
                  separator: { ...separator, alignment: value },
                })
              }
            />
            <PanelRow>
              <span style={{ marginBottom: '10px' }}>
                Distance Between Lines
              </span>
              <UnitControl
                style={{ width: '90px' }}
                min={0}
                max={1000}
                step={5}
                value={separator.distance}
                onChange={(value) =>
                  setAttributes({
                    separator: { ...separator, distance: value },
                  })
                }
              />
            </PanelRow>
            <div style={{ marginTop: '10px' }}>
              <BoxControl
                label="Margin"
                resetValues={marginResetValues}
                values={separator.margin}
                onChange={(value) =>
                  setAttributes({
                    separator: { ...separator, margin: value },
                  })
                }
              />
            </div>
            <IncludeExClude
              options={['Left Line', 'Right Line']}
              value={changeTab}
              renderFunction={(value) => setChangeTab(value)}
            />
            <PanelRow>
              <span>Width</span>
              {changeTab === 'Left Line' && (
                <UnitControl
                  style={{ width: '90px' }}
                  min={0}
                  max={separator.left.width.includes('%') ? 100 : 1000}
                  step={1}
                  value={separator.left.width}
                  onChange={(value) =>
                    setAttributes({
                      separator: {
                        ...separator,
                        left: { ...separator.left, width: value },
                      },
                    })
                  }
                />
              )}
              {changeTab === 'Right Line' && (
                <UnitControl
                  style={{ width: '90px' }}
                  min={0}
                  max={separator.right.width.includes('%') ? 100 : 1000}
                  step={1}
                  value={separator.right.width}
                  onChange={(value) =>
                    setAttributes({
                      separator: {
                        ...separator,
                        right: { ...separator.right, width: value },
                      },
                    })
                  }
                />
              )}
            </PanelRow>
            <PanelRow>
              <span>Height</span>
              {changeTab === 'Left Line' && (
                <UnitControl
                  style={{ width: '90px' }}
                  min={0}
                  max={separator.left.height.includes('%') ? 100 : 1000}
                  step={1}
                  value={separator.left.height}
                  onChange={(value) =>
                    setAttributes({
                      separator: {
                        ...separator,
                        left: { ...separator.left, height: value },
                      },
                    })
                  }
                />
              )}
              {changeTab === 'Right Line' && (
                <UnitControl
                  style={{ width: '90px' }}
                  min={0}
                  max={separator.right.height.includes('%') ? 100 : 1000}
                  step={1}
                  value={separator.right.height}
                  onChange={(value) =>
                    setAttributes({
                      separator: {
                        ...separator,
                        right: { ...separator.right, height: value },
                      },
                    })
                  }
                />
              )}
            </PanelRow>

            {changeTab === 'Left Line' && (
              <>
                <BoxControl
                  label={__('Border Radius', 'dual-color-heading')}
                  values={separator.left.bRadius}
                  resetValues={borderRadiusResetValues}
                  onChange={(value) =>
                    setAttributes({
                      separator: {
                        ...separator,
                        left: { ...separator.left, bRadius: value },
                      },
                    })
                  }
                />
                <PanelCustomColorControl
                  label="Background"
                  value={separator.left.color}
                  onChange={(value) =>
                    setAttributes({
                      separator: {
                        ...separator,
                        left: { ...separator.left, color: value },
                      },
                    })
                  }
                />
              </>
            )}
            {changeTab === 'Right Line' && (
              <>
                <BoxControl
                  label={__('Border Radius', 'dual-color-heading')}
                  values={separator.right.bRadius}
                  resetValues={borderRadiusResetValues}
                  onChange={(value) =>
                    setAttributes({
                      separator: {
                        ...separator,
                        right: { ...separator.right, bRadius: value },
                      },
                    })
                  }
                />
                <PanelCustomColorControl
                  label="Background"
                  value={separator.right.color}
                  onChange={(value) =>
                    setAttributes({
                      separator: {
                        ...separator,
                        right: { ...separator.right, color: value },
                      },
                    })
                  }
                />
              </>
            )}
          </Fragment>
        )}
        {separator.type === 'icon' && (
          <Fragment>
            <RangeControl
              value={separator.iconSize}
              label={__('Icon Size', 'dual-color-heading')}
              min={0}
              max={300}
              step={1}
              onChange={(value) =>
                setAttributes({
                  separator: { ...separator, iconSize: value },
                })
              }
            />
            <PanelColorPicker
              label="Icon Color"
              color={separator.iconColor}
              value={separator.iconColor}
              renderFunction={(value) =>
                setAttributes({
                  separator: { ...separator, iconColor: value },
                })
              }
            />
            <span>Alignment</span>
            <Alignment
              value={separator.alignment}
              render={(value) =>
                setAttributes({
                  separator: { ...separator, alignment: value },
                })
              }
            />
            <div style={{ marginTop: '10px' }}>
              <BoxControl
                label="Margin"
                resetValues={marginResetValues}
                values={separator.margin}
                onChange={(value) =>
                  setAttributes({
                    separator: { ...separator, margin: value },
                  })
                }
              />
            </div>
          </Fragment>
        )}
      </PanelBody>
    </Fragment>
  );
};

export default StyleSettings;
