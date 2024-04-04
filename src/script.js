import { createRoot } from 'react-dom/client';
import './style.scss';
import DualColorHeading from './theme/DualColorHeading/DualColorHeading';
function FrontEnd({ attributes }) {
  return (
    <>
      <DualColorHeading attributes={attributes} />
      <div dangerouslySetInnerHTML={{ __html: attributes.content }}></div>
    </>
  );
}

const container = document.querySelectorAll('.wp-block-dch-dual-color-heading');
container?.forEach((ele) => {
  const attributes = JSON.parse(ele.dataset.attributes);
  const root = createRoot(ele);
  root.render(<FrontEnd attributes={attributes} />);
  ele?.removeAttribute('data-attributes');
});
