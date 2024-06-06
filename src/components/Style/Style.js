import React from 'react';
import {
  getBackgroundCSS,
  getBorderCSS,
  getBoxCSS,
  getMultiShadowCSS,
  getTypoCSS,
} from '../../../../Components/utils/getCSS';
const Style = ({ attributes }) => {
  const {
    cId,
    heading,
    alignment,
    background,
    padding,
    margin,
    border,
    shadow,
    icon,
    subHeading,
    separator,
  } = attributes;

  const mainSl = `#dch-dual-color-heading-${cId}`;
  const containerSl = `${mainSl} .dch-dual-color-container`;
  const titleSl = `${containerSl} .dch-dual-color-title`;
  const subContentSl = `${containerSl} .dch-dual-color-subcontent`;
  const sepWrapSl = `${mainSl} .dch-separator-wrapper`;

  const justifyItems = (device) =>
    `justify-items: ${
      alignment[device] === 'left'
        ? 'start'
        : alignment[device] === 'right'
        ? 'end'
        : 'center'
    }`;

  return (
    <style>
      {`
			${getTypoCSS("", heading.typhography)?.googleFontLink}
			${getTypoCSS("", subHeading.typhography)?.googleFontLink}
	  
			${containerSl}{
				display:grid;
				${justifyItems("desktop")};
				${getBackgroundCSS(background)}
				padding: ${getBoxCSS(padding.desktop)};
				${getBorderCSS(border)}
				box-shadow:${getMultiShadowCSS(shadow)};
				margin: ${getBoxCSS(margin.desktop)};
			}
	  	${getTypoCSS(titleSl, heading.typography).styles}

			${sepWrapSl}{
				gap: ${separator.distance};
				justify-content:${
          separator.alignment === "left"
            ? "flex-start"
            : separator.alignment === "center"
            ? "center"
            : "flex-end"
        };
				margin: ${getBoxCSS(separator.margin)};
	  	}

	  ${["left", "right"]
      .map(
        (side) => `${mainSl} .separator-${side}{
					width:${separator[side].width};
					height:${separator[side].height};
					background:${separator[side].color};
					border-radius: ${getBoxCSS(separator[side].bRadius)};
	  		}`
      )
      .join("")}

			${sepWrapSl} svg{
				color: ${separator.iconColor};
			}
			${sepWrapSl} svg path{
				fill: ${separator.iconColor};
			}
			${containerSl} .dch-dual-color-icon-svg{
				color:${icon.color};
			}
			${containerSl} .dch-dual-color-icon-svg path{
				fill:${icon.color};
			}
			${subContentSl}{
				color:${subHeading.color} !important;
				display:grid;
				${justifyItems("desktop")};
			}
			${
        getTypoCSS(
          ".dch-dual-color-container>.dch-dual-color-subcontent",
          subHeading.typography
        ).styles
      }

			${["first", "last"]
        .map(
          (part) => `${titleSl} .heading-${part}{
						${
              heading[part].color
                ? `color:${
                    heading[part].colorType === "solid" && heading[part].color
                  };`
                : `background:${heading[part].gradient};`
            }
						background:${heading[part].colorType === "gradient" && heading[part].gradient};
			${
        heading[part].colorType === "gradient" ||
        heading[part].color.length === 0
          ? `
					-webkit-background-clip: text;
					-webkit-text-fill-color: transparent; 
					`
          : ""
      }
			}`
        )
        .join("")}
			@media only screen and (min-width:641px) and (max-width: 1024px) {
				${containerSl}{
					padding: ${getBoxCSS(padding.tablet)};
					margin: ${getBoxCSS(margin.tablet)};
					${justifyItems("tablet")};
				}
				${subContentSl}{
					${justifyItems("tablet")};
				}
			}
			
			@media only screen and (max-width: 640px) {
				${containerSl}{
					padding: ${getBoxCSS(padding.mobile)};
					margin: ${getBoxCSS(margin.mobile)};
					${justifyItems("mobile")};
				}
				${subContentSl}{
					${justifyItems("mobile")};
				}
			}
	`}
    </style>
  );
};

export default Style;
