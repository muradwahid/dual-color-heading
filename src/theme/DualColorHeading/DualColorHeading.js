import { Fragment } from 'react';
import SVG from 'react-inlinesvg';
import svgIcon from '../../../assets/icons/christmas-star-icon.svg';
import oktaIconSvg from '../../../assets/icons/okta-icon.svg';
import DynamicTag from '../../components/Panel/DynamicTag/DynamicTag';
import Style from '../../components/Style/Style';
const DualColorHeading = ({ attributes }) => {
  const { sortElements, content, heading, icon, separator, subHeading } =
    attributes;
  return (
    <Fragment>
      <Style attributes={attributes} />
      <div className="bpdch-dual-color-container">
        {sortElements.map((el) => {
          switch (el) {
            case 'heading':
              return (
                <DynamicTag
                  tagName={heading.tag}
                  className="bpdch-dual-color-title"
                >
                  <span className="bpdch-dual-color-title-first">
                    {heading.first.text}{' '}
                  </span>{' '}
                  <span>{heading.last.text}</span>
                </DynamicTag>
              );
            case 'separator':
              return (
                separator.show&& (
                  <div className="bpdch-separator-wrapper">
                    {separator.type === 'line' && (
                      <Fragment>
                        <span className="bpdch-separator-one"></span>
                        <span className="bpdch-separator-two"></span>
                      </Fragment>
                    )}
                    {separator.type === 'icon' && (
                      <SVG
                        src={
                          separator.icon
                            ? separator.icon
                            : svgIcon
                        }
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
                  className="bpdch-dual-color-subcontent"
                  dangerouslySetInnerHTML={{ __html: subHeading.text }}
                ></div>
              );
            case 'icon':
              return icon.show && <SVG
                className="bpdch-dual-color-icon-svg"
                src={icon.img|| oktaIconSvg}
                width={icon.size}
                height="auto"
                style={{ margin: '10px 0' }}
              />;
          }
        })}
      </div>
    </Fragment>
  );
};

export default DualColorHeading;
