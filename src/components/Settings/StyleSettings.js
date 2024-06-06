import {
  GradientPicker,
  PanelBody,
  PanelRow,
  RangeControl,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { Fragment, useState } from "react";
import { } from "@wordpress/block-editor"
import {
  BColor,
  Background,
  BorderControl,
  BtnGroup,
  Label,
  MultiShadowControl,
  Typography,
} from "../../../../Components";
import { bgTypes, gradients } from "../../../../Components/utils/options";
import {
  aligns,
  borderRadiusResetValues,
  marginResetValues,
} from "../../utils/options";
import { Device } from "../Panel/Device/Device";
import IncludeExClude from "../Panel/IncludeExClude/IncludeExClude";
import PanelColorPicker from "../Panel/PanelColorPicker/PanelColorPicker";
import PanelCustomColorControl from "../Panel/PanelCustomColorControl/PanelCustomColorControl";
import { BBoxControl } from "../Panel/BBoxControl/BBoxControl";
const StyleSettings = ({ attributes, setAttributes, device }) => {
  const {
    alignment,
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

  const [sepTab, setSepTab] = useState("left");
  return (
    <Fragment>
      <PanelBody
        initialOpen={true}
        title={__("Wrapper/Container", "dual-color-heading")}
      >
        <PanelRow style={{ position: "relative" }}>
          <Label className="">{__("Alignment:", "dual-color-heading")}</Label>
          <Device />
        </PanelRow>
        <BtnGroup
          value={alignment[device]}
          onChange={(val) =>
            setAttributes({
              alignment: { ...alignment, [device]: val },
            })
          }
          options={aligns}
          isIcon={true}
        />

        <Background
          label={__("Background", "dual-color-heading")}
          value={background}
          onChange={(val) => setAttributes({ background: val })}
        />

        <div
          style={{
            marginTop: "20px",
            position: "relative",
          }}
        >
          <Device style={{ position: "absolute", left: "60px" }} />
          <BBoxControl
            label="Padding"
            values={padding[device]}
            resetValues={{
              left: "0px",
              right: "0px",
              top: "0px",
              bottom: "0px",
            }}
            onChange={(value) =>
              setAttributes({
                padding: { ...padding, [device]: value },
              })
            }
            units={[
              { label: "px", value: "px" },
              { label: "%", value: "%" },
              { label: "em", value: "em" },
            ]}
          />
        </div>

        <div
          style={{
            marginTop: "20px",
            position: "relative",
          }}
        >
          <Device style={{ position: "absolute", left: "60px" }} />
          <BBoxControl
            label="Margin"
            values={margin[device]}
            resetValues={{
              left: "",
              right: "",
              top: "",
              bottom: "",
            }}
            onChange={(value) =>
              setAttributes({
                margin: { ...margin, [device]: value },
              })
            }
            units={[
              { label: "px", value: "px" },
              { label: "%", value: "%" },
              { label: "em", value: "em" },
            ]}
          />
        </div>

        <BorderControl
          className="mt20"
          label={__("Border:", "dual-color-heading")}
          value={border}
          onChange={(value) => setAttributes({ border: value })}
        />

        <MultiShadowControl
          className="mt20"
          label={__("Shadow", "dual-color-heading")}
          value={shadow}
          onChange={(value) => setAttributes({ shadow: value })}
        />
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__("Heading", "dual-color-heading")}
      >
        <Typography
          className="mb10"
          value={heading.typography}
          onChange={(value) =>
            setAttributes({
              heading: { ...heading, typography: value },
            })
          }
        />

        {["first", "last"].map((part) => (
          <>
            <PanelRow className="mt20">
              <Label className="">
                {__(
                  `${part[0].toUpperCase() + part.substring(1)} Color Type:`,
                  "dual-color-heading"
                )}
              </Label>
              <BtnGroup
                value={heading[part].colorType}
                onChange={(val) =>
                  setAttributes({
                    heading: {
                      ...heading,
                      [part]: { ...heading[part], colorType: val },
                    },
                  })
                }
                options={bgTypes}
                size="small"
              />
            </PanelRow>

            {"gradient" === heading[part].colorType ? (
              <Fragment>
                <GradientPicker
                  value={heading[part].gradient}
                  onChange={(val) =>
                    setAttributes({
                      heading: {
                        ...heading,
                        [part]: { ...heading[part], gradient: val },
                      },
                    })
                  }
                  gradients={gradients}
                />
              </Fragment>
            ) : (
              <BColor
                label={__(
                  `${part[0].toUpperCase() + part.substring(1)} Color:`,
                  "dual-color-heading"
                )}
                value={heading[part].color}
                onChange={(val) =>
                  setAttributes({
                    heading: {
                      ...heading,
                      [part]: { ...heading[part], color: val },
                    },
                  })
                }
                defaultColor={"first" === part ? "#4527a4" : ""}
              />
            )}
          </>
        ))}

        {/* <PanelColorPicker
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
        )} */}
      </PanelBody>

      <PanelBody
        className="bPlPanelBody"
        initialOpen={false}
        title={__("Sub Heading", "dual-color-heading")}
      >
        <Typography
          className="mb10"
          value={subHeading.typography}
          onChange={(value) =>
            setAttributes({
              subHeading: { ...subHeading, typography: value },
            })
          }
        />

        <PanelColorPicker
          color={subHeading.color}
          value={subHeading.color}
          label={__("Color", "dual-color-heading")}
          renderFunction={(value) =>
            setAttributes({ subHeading: { ...subHeading, color: value } })
          }
        />
      </PanelBody>

      <PanelBody
        // className="bPlPanelBody"
        initialOpen={false}
        title={__("Separator", "dual-color-heading")}
      >
        <PanelRow>
          <Label className="">{__("Alignment:", "dual-color-heading")}</Label>
          <BtnGroup
            value={separator.alignment}
            onChange={(val) =>
              setAttributes({
                separator: { ...separator, alignment: val },
              })
            }
            options={aligns}
            isIcon={true}
          />
        </PanelRow>

        <div className="mt20">
          <BBoxControl
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

        {separator.type === "line" && (
          <>
            <UnitControl
              className="mt20"
              label={__("Distance Between Lines", "dual-color-heading")}
              labelPosition="left"
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

            <br />
            <IncludeExClude
              options={["left", "right"]}
              value={sepTab}
              renderFunction={(value) => setSepTab(value)}
            />

            <UnitControl
              label={__("Width", "dual-color-heading")}
              labelPosition="left"
              min={0}
              max={separator[sepTab].width.includes("%") ? 100 : 1000}
              step={1}
              value={separator[sepTab].width}
              onChange={(value) =>
                setAttributes({
                  separator: {
                    ...separator,
                    [sepTab]: { ...separator[sepTab], width: value },
                  },
                })
              }
            />

            <UnitControl
              className="mt20"
              label={__("Height", "dual-color-heading")}
              labelPosition="left"
              min={0}
              max={separator[sepTab].height.includes("%") ? 100 : 1000}
              step={1}
              value={separator[sepTab].height}
              onChange={(value) =>
                setAttributes({
                  separator: {
                    ...separator,
                    [sepTab]: { ...separator[sepTab], height: value },
                  },
                })
              }
            />

            <div className="mt20">
              <PanelCustomColorControl
                label="Color"
                value={separator[sepTab].color}
                onChange={(value) =>
                  setAttributes({
                    separator: {
                      ...separator,
                      [sepTab]: { ...separator[sepTab], color: value },
                    },
                  })
                }
              />
            </div>

            <div className="mt20">
              <BBoxControl
                label={__("Border Radius", "dual-color-heading")}
                values={separator[sepTab].bRadius}
                resetValues={borderRadiusResetValues}
                onChange={(value) =>
                  setAttributes({
                    separator: {
                      ...separator,
                      [sepTab]: { ...separator[sepTab], bRadius: value },
                    },
                  })
                }
              />
            </div>
          </>
        )}

        {separator.type === "icon" && (
          <>
            <RangeControl
              className="mt20"
              value={separator.iconSize}
              label={__("Icon Size", "dual-color-heading")}
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
          </>
        )}
      </PanelBody>

      {icon.show && (
        <PanelBody
          className="bPlPanelBody"
          initialOpen={false}
          title={__("Icon Style", "dual-color-heading")}
        >
          <RangeControl
            label={__("Icon Size", "dual-color-heading")}
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
    </Fragment>
  );
};

export default withSelect((select) => {
  return {
    device: select("core/edit-post")
      .__experimentalGetPreviewDeviceType()
      ?.toLowerCase(),
  };
})(StyleSettings);
