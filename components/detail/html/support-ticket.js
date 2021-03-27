import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const SupportTicket = () => {
	const [active, setActive] = useState('chat-app');
	
	return(
		<div className="card-body">
		    <hr className="hr" />
		    <h5 className="my-4">Support Ticket</h5>
		    <h6 class="pb-2">To use java script you have to add the following script tag</h6>
	     	<div className="mb-4">
          		<CopyToClipboard 
		          	id="supportcode"
		          	text={`<script src="../assets/js/support-ticket-custom.js" ></script>`}
		          />
          	</div>
		</div>
	)
}
export default SupportTicket;