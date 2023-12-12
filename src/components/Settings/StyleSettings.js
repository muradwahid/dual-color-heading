import {
  __experimentalBoxControl as BoxControl,
  PanelBody,
  PanelRow,
  RangeControl,
  SelectControl,
  __experimentalUnitControl as UnitControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { Fragment } from 'react';
import { Typography } from '../../../../Components';
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
  const { content } = attributes;
  return (
    <Fragment>
      <PanelBody
        initialOpen={true}
        title={__('Dual Heading Style', 'dual-color-heading')}
      >
        <PanelCustomColorControl
          label="Background Color"
          value={content.bgColor}
          onChange={(value) =>
            setAttributes({ content: { ...content, bgColor: value } })
          }
        />

        <div
          style={{
            marginTop: '20px',
            position: 'relative',
          }}
        >
          <Device
            device={content.paddingDevice}
            style={{ position: 'absolute', left: '60px', top: '-3px' }}
            onChange={(value) =>
              setAttributes({ content: { ...content, paddingDevice: value } })
            }
          />
          {content.paddingDevice === 'desktop' && (
            <BoxControl
              label="Padding"
              values={content.padding.desktop}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    padding: { ...content.padding, desktop: value },
                  },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {content.paddingDevice === 'tablet' && (
            <BoxControl
              label="Padding"
              values={content.padding.tablet}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    padding: { ...content.padding, tablet: value },
                  },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {content.paddingDevice === 'mobile' && (
            <BoxControl
              label="Padding"
              values={content.padding.mobile}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    padding: { ...content.padding, mobile: value },
                  },
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
            device={content.marginDevice}
            style={{ position: 'absolute', left: '60px', top: '-3px' }}
            onChange={(value) =>
              setAttributes({ content: { ...content, marginDevice: value } })
            }
          />
          {content.marginDevice === 'desktop' && (
            <BoxControl
              label="Margin"
              values={content.margin.desktop}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    margin: { ...content.margin, desktop: value },
                  },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {content.marginDevice === 'tablet' && (
            <BoxControl
              label="Margin"
              values={content.margin.tablet}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    margin: { ...content.margin, tablet: value },
                  },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {content.marginDevice === 'mobile' && (
            <BoxControl
              label="Margin"
              values={content.margin.mobile}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    margin: { ...content.margin, mobile: value },
                  },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
        </div>
        <PanelRow>
          <span>Border Type</span>
          <SelectControl
            className="bpdch-custom-style"
            value={content.border}
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
              setAttributes({ content: { ...content, border: value } })
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
            device={content.borderDevice}
            style={{ position: 'absolute', left: '90px', top: '-3px' }}
            onChange={(value) =>
              setAttributes({ content: { ...content, borderDevice: value } })
            }
          />
          {content.borderDevice === 'desktop' && (
            <BoxControl
              label="Border Width"
              values={content.borderWidth.desktop}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    borderWidth: { ...content.borderWidth, desktop: value },
                  },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {content.borderDevice === 'tablet' && (
            <BoxControl
              label="Border Width"
              values={content.borderWidth.tablet}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    borderWidth: { ...content.borderWidth, tablet: value },
                  },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
          {content.borderDevice === 'mobile' && (
            <BoxControl
              label="Border Width"
              values={content.borderWidth.mobile}
              resetValues={{
                left: '0px',
                right: '0px',
                top: '0px',
                bottom: '0px',
              }}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    borderWidth: { ...content.borderWidth, mobile: value },
                  },
                })
              }
              units={__('px', 'em', '%')}
            />
          )}
        </div>
        <PanelColorPicker
          color={content.borderColor}
          label="Border Color"
          value={content.borderColor}
          renderFunction={(value) =>
            setAttributes({ content: { ...content, borderColor: value } })
          }
        />
        <div style={{ marginTop: '10px' }}>
          <RangeControl
            label="Border Radius"
            value={content.borderRadius}
            onChange={(value) =>
              setAttributes({ content: { ...content, borderRadius: value } })
            }
          />
        </div>
        <PanelShadow
          label="Box Shadow"
          value={content.shadow}
          onChange={(value) =>
            setAttributes({ content: { ...content, shadow: value } })
          }
        />
      </PanelBody>
      {content.showIcon && (
        <PanelBody
          initialOpen={false}
          title={__('Icon Style', 'dual-color-heading')}
        >
          <RangeControl
            label={__('Icon Size', 'dual-color-heading')}
            value={content.iconSize}
            min={10}
            max={550}
            onChange={(value) =>
              setAttributes({ content: { ...content, iconSize: value } })
            }
          />
          <PanelColorPicker
            label="Icon Color"
            color={content.iconColor}
            value={content.iconColor}
            renderFunction={(value) =>
              setAttributes({ content: { ...content, iconColor: value } })
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
          color={content.title.mainColor}
          value={content.title.mainColor}
          label={__('Main Color', 'dual-color-heading')}
          renderFunction={(value) =>
            setAttributes({
              content: {
                ...content,
                title: { ...content.title, mainColor: value },
              },
            })
          }
        />
        <PanelRow>
          <span>Dual Color</span>
          <SelectControl
            className="bpdch-custom-style"
            value={content.title.dualColor}
            options={dualColorOptions}
            onChange={(value) =>
              setAttributes({
                content: {
                  ...content,
                  title: { ...content.title, dualColor: value },
                },
              })
            }
          />
        </PanelRow>
        {content.title.dualColor === 'solid' && (
          <PanelColorPicker
            color={content.title.solidColor}
            value={content.title.solidColor}
            label={__('Solid Color', 'dual-color-heading')}
            renderFunction={(value) =>
              setAttributes({
                content: {
                  ...content,
                  title: { ...content.title, solidColor: value },
                },
              })
            }
          />
        )}
        {content.title.dualColor === 'gradient' && (
          <PanelGradientPicker
            label={__('Gradient Color', 'dual-color-heading')}
            value={content.title.gradientColor}
            onChange={(value) =>
              setAttributes({
                content: {
                  ...content,
                  title: { ...content.title, gradientColor: value },
                },
              })
            }
          />
        )}
        <Typography
          value={content.title.typhography}
          onChange={(value) =>
            setAttributes({
              content: {
                ...content,
                title: { ...content.title, typhography: value },
              },
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
          color={content.subTitle.color}
          value={content.subTitle.color}
          label={__('Color', 'dual-color-heading')}
          renderFunction={(value) =>
            setAttributes({
              content: {
                ...content,
                subTitle: { ...content.subTitle, color: value },
              },
            })
          }
        />
        <Typography
          value={content.subTitle.typhography}
          onChange={(value) =>
            setAttributes({
              content: {
                ...content,
                subTitle: { ...content.subTitle, typhography: value },
              },
            })
          }
        />
      </PanelBody>
      <PanelBody
        initialOpen={false}
        title={__('Separator', 'dual-color-heading')}
      >
        {content.separatorType === 'line' && (
          <Fragment>
            <span>Alignment</span>
            <Alignment
              value={content.separator.alignment}
              render={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    separator: { ...content.separator, alignment: value },
                  },
                })
              }
            />
            <PanelRow>
              <span>Distance Between Lines</span>
              <UnitControl
                className="bpdch-custom-style"
                style={{ width: '90px' }}
                min={0}
                max={1000}
                step={5}
                value={content.separator.separatorDistance}
                onChange={(value) =>
                  setAttributes({
                    content: {
                      ...content,
                      separator: {
                        ...content.separator,
                        separatorDistance: value,
                      },
                    },
                  })
                }
              />
            </PanelRow>
            <div style={{ marginTop: '10px' }}>
              <BoxControl
                label="Margin"
                resetValues={marginResetValues}
                values={content.separator.margin}
                onChange={(value) =>
                  setAttributes({
                    content: {
                      ...content,
                      separator: { ...content.separator, margin: value },
                    },
                  })
                }
              />
            </div>
            <IncludeExClude
              options={['Left Line', 'Right Line']}
              value={content.separator.widthOption}
              renderFunction={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    separator: { ...content.separator, widthOption: value },
                  },
                })
              }
            />

            <PanelRow>
              <span>Width</span>
              {content.separator.widthOption === 'Left Line' && (
                <UnitControl
                  className="bpdch-custom-style"
                  style={{ width: '90px' }}
                  min={0}
                  max={content.separator.widthLeft.includes('%') ? 100 : 1000}
                  step={1}
                  value={content.separator.widthLeft}
                  onChange={(value) =>
                    setAttributes({
                      content: {
                        ...content,
                        separator: { ...content.separator, widthLeft: value },
                      },
                    })
                  }
                />
              )}
              {content.separator.widthOption === 'Right Line' && (
                <UnitControl
                  className="bpdch-custom-style"
                  style={{ width: '90px' }}
                  min={0}
                  max={content.separator.widthRight.includes('%') ? 100 : 1000}
                  step={1}
                  value={content.separator.widthRight}
                  onChange={(value) =>
                    setAttributes({
                      content: {
                        ...content,
                        separator: { ...content.separator, widthRight: value },
                      },
                    })
                  }
                />
              )}
            </PanelRow>
            <PanelRow>
              <span>Height</span>
              {content.separator.widthOption === 'Left Line' && (
                <UnitControl
                  className="bpdch-custom-style"
                  style={{ width: '90px' }}
                  min={0}
                  max={content.separator.heightLeft.includes('%') ? 100 : 1000}
                  step={1}
                  value={content.separator.heightLeft}
                  onChange={(value) =>
                    setAttributes({
                      content: {
                        ...content,
                        separator: { ...content.separator, heightLeft: value },
                      },
                    })
                  }
                />
              )}
              {content.separator.widthOption === 'Right Line' && (
                <UnitControl
                  className="bpdch-custom-style"
                  style={{ width: '90px' }}
                  min={0}
                  max={content.separator.heightRight.includes('%') ? 100 : 1000}
                  step={1}
                  value={content.separator.heightRight}
                  onChange={(value) =>
                    setAttributes({
                      content: {
                        ...content,
                        separator: { ...content.separator, heightRight: value },
                      },
                    })
                  }
                />
              )}
            </PanelRow>

            {content.separator.widthOption === 'Left Line' && (
              <>
                <BoxControl
                  label={__('Border Radius', 'dual-color-heading')}
                  values={content.separator.radiusLeft}
                  resetValues={borderRadiusResetValues}
                  onChange={(value) =>
                    setAttributes({
                      content: {
                        ...content,
                        separator: { ...content.separator, radiusLeft: value },
                      },
                    })
                  }
                />
                <PanelCustomColorControl
                  label="Background Color"
                  value={content.separator.firstColor}
                  onChange={(value) =>
                    setAttributes({
                      content: {
                        ...content,
                        separator: { ...content.separator, firstColor: value },
                      },
                    })
                  }
                />
              </>
            )}
            {content.separator.widthOption === 'Right Line' && (
              <>
                <BoxControl
                  label={__('Border Radius', 'dual-color-heading')}
                  values={content.separator.radiusRight}
                  resetValues={borderRadiusResetValues}
                  onChange={(value) =>
                    setAttributes({
                      content: {
                        ...content,
                        separator: { ...content.separator, radiusRight: value },
                      },
                    })
                  }
                />
                <PanelCustomColorControl
                  label="Background Color"
                  value={content.separator.secondColor}
                  onChange={(value) =>
                    setAttributes({
                      content: {
                        ...content,
                        separator: { ...content.separator, secondColor: value },
                      },
                    })
                  }
                />
              </>
            )}
          </Fragment>
        )}
        {content.separatorType === 'icon' && (
          <Fragment>
            <RangeControl
              value={content.separator.iconSize}
              label={__('Icon Size', 'dual-color-heading')}
              min={0}
              max={300}
              step={1}
              onChange={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    separator: { ...content.separator, iconSize: value },
                  },
                })
              }
            />
            <PanelColorPicker
              label="Icon Color"
              color={content.separator.iconColor}
              value={content.separator.iconColor}
              renderFunction={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    separator: { ...content.separator, iconColor: value },
                  },
                })
              }
            />
            <span>Alignment</span>
            <Alignment
              value={content.separator.alignment}
              render={(value) =>
                setAttributes({
                  content: {
                    ...content,
                    separator: { ...content.separator, alignment: value },
                  },
                })
              }
            />
            <div style={{ marginTop: '10px' }}>
              <BoxControl
                label="Margin"
                resetValues={marginResetValues}
                values={content.separator.margin}
                onChange={(value) =>
                  setAttributes({
                    content: {
                      ...content,
                      separator: { ...content.separator, margin: value },
                    },
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
