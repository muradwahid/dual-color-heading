import { Fragment } from 'react';
import SVG from 'react-inlinesvg';
import DynamicTag from '../../components/Panel/DynamicTag/DynamicTag';
import Style from '../../components/Style/Style';
import svgIcon from '../../../assets/icons/christmas-star-icon.svg';
import oktaIconSvg from '../../../assets/icons/okta-icon.svg'
const DualColorHeading = ({ attributes }) => {
  const { content } = attributes;
  return (
    <Fragment>
      <Style attributes={attributes} />
      <div className="bpdch-dual-color-container">
        {content.showIcon && (
          <>
            {content.contentStyle === 'iconontop' && (
              <SVG
                className="bpdch-dual-color-icon-svg"
                src={content.icon || oktaIconSvg}
                width={content.iconSize}
                height="auto"
                style={{ margin: '10px 0' }}
              />
            )}
          </>
        )}
        {content.showIcon && (
          <>
            {content.contentStyle === 'iconsubtexttop' && (
              <SVG
                className="bpdch-dual-color-icon-svg"
                src={content.icon || oktaIconSvg}
                width={content.iconSize}
                height="auto"
                style={{ margin: '10px 0' }}
              />
            )}
          </>
        )}
        {content.contentStyle === 'subtextontop' && (
          <div
            className="bpdch-dual-color-subcontent"
            dangerouslySetInnerHTML={{ __html: content.subContent }}
          ></div>
        )}
        {content.contentStyle === 'iconsubtexttop' && (
          <div
            className="bpdch-dual-color-subcontent"
            dangerouslySetInnerHTML={{ __html: content.subContent }}
          ></div>
        )}
        {content.showSeparator && content.separatorPotition === 'before' && (
          <div className="bpdch-separator-wrapper">
            {content.separatorType === 'line' && (
              <Fragment>
                <span className="bpdch-separator-one"></span>
                <span className="bpdch-separator-two"></span>
              </Fragment>
            )}
            {content.separatorType === 'icon' && (
              <SVG
                src={content.separatorIcon ? content.separatorIcon : svgIcon}
                width={content.separator.iconSize}
                height="auto"
              />
            )}
          </div>
        )}
        <DynamicTag
          tagName={content.titleTag}
          className="bpdch-dual-color-title"
        >
          <span className="bpdch-dual-color-title-first">
            {content.titleFirst}{' '}
          </span>{' '}
          <span>{content.titleSecond}</span>
        </DynamicTag>
        {content.showSeparator && content.separatorPotition === 'after' && (
          <div className="bpdch-separator-wrapper">
            {content.separatorType === 'line' && (
              <Fragment>
                <span className="bpdch-separator-one"></span>
                <span className="bpdch-separator-two"></span>
              </Fragment>
            )}
            {content.separatorType === 'icon' && (
              <SVG
                src={content.separatorIcon ? content.separatorIcon : svgIcon}
                width={content.separator.iconSize}
                height="auto"
              />
            )}
          </div>
        )}
        {content.contentStyle === 'subtextontop' ||
        content.contentStyle === 'iconsubtexttop' ? (
          ''
        ) : (
          <div
            className="bpdch-dual-color-subcontent"
            dangerouslySetInnerHTML={{ __html: content.subContent }}
          ></div>
        )}
        {content.showIcon && (
          <>
            {content.contentStyle === 'iconontop' ||
            content.contentStyle === 'iconsubtexttop' ? (
              ''
            ) : (
              <SVG
                className="bpdch-dual-color-icon-svg"
                src={content.icon || oktaIconSvg}
                width={content.iconSize}
                height="auto"
                style={{ margin: '10px 0' }}
              />
            )}
          </>
        )}
      </div>
    </Fragment>
  );
};

export default DualColorHeading;
