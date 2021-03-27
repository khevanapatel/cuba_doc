import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Email = () => {
	const [active, setActive] = useState('email-app');
	return(
		<div className="card-body">
		    <hr className="hr" />
		    <h5 className="my-4">Email</h5>
		    <ul className="nav nav-tabs" id="myTab7" role="tablist">
		      <li className="nav-item"><a className={`nav-link ${(active == 'email-app') ? 'active' : ''}`} data-bs-toggle="tab" url="#email-app" role="tab" aria-selected="true" onClick={()=>setActive('email-app')} data-original-title="" title="">Email App</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'email-compose') ? 'active' : ''}`} data-bs-toggle="tab" url="#email-compose" role="tab" aria-selected="true" onClick={()=>setActive('email-compose')} data-original-title="" title="">Email Compose</a></li>
		    </ul>
		    <div className="tab-content" id="myTabContent7">
		      <div className={`tab-pane fade ${(active=='email-app')? 'show active' : ''}`} id="email-app" role="tabpanel">
		         <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="calendercode"
		          	text={` <!--Email js-->\n<script src="../assets/js/email-app.js"></script>`}
		          />
		        </div>
		      </div><div className={`tab-pane fade ${(active=='email-compose')? 'show active' : ''}`} id="email-compose" role="tabpanel">
		       <h6 class="pt-4 pb-2">for this you have to add the same js which are used for Email application</h6>
		      </div>
		    </div>
		</div>
	)
}
export default Email;