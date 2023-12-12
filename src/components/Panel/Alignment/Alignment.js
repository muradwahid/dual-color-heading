
import { VscTriangleDown } from 'react-icons/vsc';
import './alignment.scss';
const Alignment = ({value,render}) => {
  const options = [
    { label: 'left', value: 'dashicons-editor-alignleft' },
    { label: 'center', value: 'dashicons-editor-aligncenter' },
    { label: 'right', value: 'dashicons-editor-alignright' },
  ];
  return (
    <>
      <div className="alignment">
        {options?.map((option, i) => (
          <div
            key={i}
            onClick={() => render(option.label)}
            className={`single-alignment ${
              value === option.label
                ? 'isActive-alignment'
                : 'single-alignment-hover'
            }`}
          >
            <div className="single-alignment-tooltip">
              <span style={{ textTransform: 'capitalize' }}>
                {option.label}
              </span>
              <VscTriangleDown id="tooltip-arrow-down" />
            </div>
            <span className={`dashicons ${option.value}`}></span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Alignment;
