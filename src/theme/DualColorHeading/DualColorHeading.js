import { Fragment } from 'react';
import SVG from 'react-inlinesvg';
import svgIcon from '../../../assets/icons/christmas-star-icon.svg';
import oktaIconSvg from '../../../assets/icons/okta-icon.svg';
import DynamicTag from '../../components/Panel/DynamicTag/DynamicTag';
import Style from '../../components/Style/Style';
const DualColorHeading = ({ attributes }) => {
  const { sortElements, heading, icon, separator, subHeading } = attributes;
  return (
    <Fragment>
      <Style attributes={attributes} />
      <div className="dch-dual-color-container">
        {sortElements.map((el) => {
          switch (el) {
            case 'heading':
              return (
                <DynamicTag
                  tagName={heading.tag}
                  className="dch-dual-color-title"
                >
                  <span className="heading-first">
                    {heading.first.text}{' '}
                  </span>{' '}
                  <span className="heading-last">{heading.last.text}</span>
                </DynamicTag>
              );
            case 'separator':
              return (
                separator.show && (
                  <div className="dch-separator-wrapper">
                    {separator.type === 'line' && (
                      <>
                        <span className="separator-left"></span>
                        <span className="separator-right"></span>
                      </>
                    )}
                    {separator.type === 'icon' && (
                      <SVG
                        src={separator.icon?.url ? separator.icon.url : svgIcon}
                        width={separator.iconSize}
                        height="auto"
                      />
                    )}
                  </div>
                )
              );
            case 'subHeading':
              return (
                <div
                  className="dch-dual-color-subcontent"
                  dangerouslySetInnerHTML={{ __html: subHeading.text }}
                ></div>
              );
            case 'icon':
              return (
                icon.show && (
                  <SVG
                    className="dch-dual-color-icon-svg"
                    src={icon.img?.url || oktaIconSvg}
                    width={icon.size}
                    height="auto"
                    style={{ margin: '10px 0' }}
                  />
                )
              );
          }
        })}
      </div>
    </Fragment>
  );
};

export default DualColorHeading;
