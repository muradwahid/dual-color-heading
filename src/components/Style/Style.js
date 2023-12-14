import React from 'react';
import {
  getBackgroundCSS,
  getTypoCSS,
} from '../../../../Components/utils/getCSS';
const Style = ({ attributes }) => {
  const {
    content,
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
  return (
    <style>
      {`
      ${getTypoCSS('', content.title.typhography)?.googleFontLink}
      ${getTypoCSS('', content.title.typhography)?.googleFontLink}
      
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container{
        display:grid;
        ${getBackgroundCSS(background)}
        padding-top:${padding.desktop.top};
        padding-bottom:${padding.desktop.bottom};
        padding-left:${padding.desktop.left};
        padding-right:${padding.desktop.right};
        margin-top:${margin.desktop.top};
        margin-bottom:${margin.desktop.bottom};
        margin-left:${margin.desktop.left};
        margin-right:${margin.desktop.right};
        border-top-width:${border.desktop.top};
        border-bottom-width:${border.desktop.bottom};
        border-left-width:${border.desktop.left};
        border-right-width:${border.desktop.right};
        border-style:${border.type};
        border-color:${border.color};
        border-radius:${border.radius}px;
        box-shadow:${shadow};
        justify-items:${
          alignment.desktop === 'center'
            ? 'center'
            : alignment.desktop === 'right'
            ? 'end'
            : 'start'
        };
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container .bpdch-dual-color-title{
        color:${heading.last.color};
      }
      ${
        getTypoCSS(
          '#bpdch-dual-color-heading-${cId} .bpdch-dual-color-container .bpdch-dual-color-title',
          heading.typography
        ).styles
      }
      #bpdch-dual-color-heading-${cId} .bpdch-separator-wrapper{
        margin-top:${separator.margin.top};
        margin-bottom:${separator.margin.bottom};
        margin-left:${separator.margin.left};
        margin-right:${separator.margin.right};
        justify-content:${
          separator.alignment === 'left'
            ? 'flex-start'
            : separator.alignment === 'center'
            ? 'center'
            : 'flex-end'
        };
      }
      #bpdch-dual-color-heading-${cId} .bpdch-separator-one{
        height:${separator.left.height};
        width:${separator.left.width};
        border-radius:${separator.left.bRadius?.top} ${
        separator.left.bRadius?.left
      } ${separator.left?.bRadius.bottom} ${separator.left.bRadius?.right};
        margin-right:${separator.distance};
        background:${separator.left.color};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-separator-two{
        height:${separator.right.height};
        width:${separator.right.width};
        border-radius:${separator.right.bRadius?.top} ${
        separator.right.bRadius?.left
      } ${separator.right.bRadius?.bottom} ${separator.right.bRadius?.right};
        margin-left:${separator.distance};
        background:${separator.right.color};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-separator-wrapper svg{
        color:${separator.iconColor};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-separator-wrapper svg path{
        fill:${separator.iconColor};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container .bpdch-dual-color-icon-svg{
        color:${icon.color};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container .bpdch-dual-color-icon-svg path{
        fill:${icon.color};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container .bpdch-dual-color-subcontent{
        color:${subHeading.color} !important;
        display:grid;
        justify-items:${
          alignment.desktop === 'center'
            ? 'center'
            : alignment.desktop === 'right'
            ? 'end'
            : 'start'
        };
      }
      ${
        getTypoCSS(
          '.bpdch-dual-color-container>.bpdch-dual-color-subcontent',
          subHeading.typography
        ).styles
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-title-first{
        color:${heading.colorType === 'solid' && heading.first.color};
        ${
          heading.colorType === 'gradient'
            ? `
        background:${heading.first.gradient};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;  
        `
            : ''
        }
      }
      `}
    </style>
  );
};

export default Style;
