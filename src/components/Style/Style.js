import React from 'react';
import { getTypoCSS } from '../../../../Components/utils/getCSS';
const Style = ({ attributes }) => {
  const { content,cId } = attributes;
  const { alignment, borderWidth,separator } = content;
  return (
    <style>
      {`
      ${getTypoCSS('', content.title.typhography)?.googleFontLink}
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container{
        display:grid;
        background:${content.bgColor};
        padding-top:${content.padding.desktop.top};
        padding-bottom:${content.padding.desktop.bottom};
        padding-left:${content.padding.desktop.left};
        padding-right:${content.padding.desktop.right};
        margin-top:${content.margin.desktop.top};
        margin-bottom:${content.margin.desktop.bottom};
        margin-left:${content.margin.desktop.left};
        margin-right:${content.margin.desktop.right};
        border-top-width:${borderWidth.desktop.top};
        border-bottom-width:${borderWidth.desktop.bottom};
        border-left-width:${borderWidth.desktop.left};
        border-right-width:${borderWidth.desktop.right};
        border-style:${content.border};
        border-color:${content.borderColor};
        border-radius:${content.borderRadius}px;
        box-shadow:${content.shadow};
        justify-items:${
          alignment.desktop === 'center'
            ? 'center'
            : alignment.desktop === 'right'
            ? 'end'
            : 'start'
        };
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container .bpdch-dual-color-title{
        color:${content.title.mainColor};
      }
      ${
        getTypoCSS(
          '.bpdch-dual-color-container>.bpdch-dual-color-title',
          content.title.typhography
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
        height:${separator.heightLeft};
        width:${separator.widthLeft};
        border-radius:${separator.radiusLeft.top} ${
        separator.radiusLeft.left
      } ${separator.radiusLeft.bottom} ${separator.radiusLeft.right};
        margin-right:${separator.separatorDistance};
        background:${separator.firstColor};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-separator-two{
        height:${separator.heightRight};
        width:${separator.widthRight};
        border-radius:${separator.radiusRight.top} ${
        separator.radiusRight.left
      } ${separator.radiusRight.bottom} ${separator.radiusRight.right};
        margin-left:${separator.separatorDistance};
        background:${separator.secondColor};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-separator-wrapper svg{
        color:${separator.iconColor};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-separator-wrapper svg path{
        fill:${separator.iconColor};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container .bpdch-dual-color-icon-svg{
        color:${content.iconColor};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container .bpdch-dual-color-icon-svg path{
        fill:${content.iconColor};
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-container .bpdch-dual-color-subcontent{
        color:${content.subTitle.color} !important;
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
          content.subTitle.typhography
        ).styles
      }
      #bpdch-dual-color-heading-${cId} .bpdch-dual-color-title-first{
        color:${
          content.title.dualColor === 'solid' && content.title.solidColor
        };
        ${
          content.title.dualColor === 'gradient'
            ? `
        background:${content.title.gradientColor};
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
