import './style.scss';
import { createRoot } from 'react-dom/client';
import DualColorHeading from './theme/DualColorHeading/DualColorHeading';
// Block Name
function FrontEnd({ attributes }) {
	
	return (
    <>
			<DualColorHeading attributes={attributes} />
			<div dangerouslySetInnerHTML={{__html: attributes.content}}>

			</div>
    </>
  );
}

const container = document.querySelectorAll('.wp-block-bpdch-hello');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const root = createRoot(ele);
	root.render(<FrontEnd attributes={attributes} />);
	ele?.removeAttribute('data-attributes');
})