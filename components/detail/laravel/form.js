import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Form = () => {
	const [active, setActive] = useState('form-validation');
	return(
		<div className="card-body">
		    <hr className="hr" />
		    <h5 className="my-4">Forms</h5>
		    <ul className="nav nav-tabs" id="myTab7" role="tablist">
		      <li className="nav-item"><a className={`nav-link ${(active == 'form-validation') ? 'active' : ''}`} data-bs-toggle="tab" url="#form-validation" role="tab" aria-selected="true" onClick={()=>setActive('form-validation')} data-original-title="" title="">Date Picker</a></li>
		    </ul>
		    <div className="tab-content" id="myTabContent7">
		      <div className={`tab-pane fade ${(active=='form-validation')? 'show active' : ''}`} id="form-validation" role="tabpanel">
		        <h6 class="pt-4 pb-2">
              		To use java script you have to add the following script tag
                </h6>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="formvalidationcode"
		          	text={`<script src="../assets/js/form-validation-custom.js" ></script>`}
		          />
		        </div>
		      </div>
		    </div>
		  </div>
	)
}
export default Form;