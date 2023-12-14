import { MediaUpload } from '@wordpress/block-editor';
import { FaRegTrashAlt } from 'react-icons/fa';
import './mediaArea.scss'
const MediaArea = ({ image, renderFunction, default: defaults }) => {
  return (
    <>
      <div className="custom-media-area-component">
        <MediaUpload
          gallery={false}
          onSelect={(value) => renderFunction(value.url)}
          value={image}
          allowedTypes={['image/svg+xml']}
          render={({ open }) => (
            <div className="media-area-container">
              <img
                onClick={open}
                className="media-area-image"
                src={image || defaults}
                alt=""
              />
              <div
                onClick={() => renderFunction(defaults)}
                className="media-delete"
              >
                <FaRegTrashAlt />
              </div>
              <div onClick={open} className="media-bottom">
                <span>Choose SVG</span>
              </div>
            </div>
          )}
          multiple={false}
        />
      </div>
    </>
  );
};

export default MediaArea;
