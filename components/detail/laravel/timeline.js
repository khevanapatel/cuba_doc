import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';
const Timeline = () => {
	const [active, setActive] = useState('timeline1');
	return(
		<div className="card-body">
	        <hr/>
	        <h5>Timeline</h5>
	        <ul className="nav nav-tabs" id="myTab8" role="tablist">
	          <li className="nav-item"><a className={`nav-link ${(active=='timeline1')? 'active' : ''}`} data-bs-toggle="tab" url="#timeline1" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('timeline1')}>Timeline 1</a></li>
	          <li className="nav-item"><a className={`nav-link ${(active=='timeline2')? 'active' : ''}`} data-bs-toggle="tab" url="#timeline2" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('timeline2')}>Timeline 2</a></li>
	        </ul>
	        <div className="tab-content" id="myTabContent8">
	          <div className={`tab-pane fade ${(active=='timeline1')? 'show active' : ''}`} id="timeline1" role="tabpanel">
	            <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
	            <div className="mb-4">
	              <CopyToClipboard
	              	id="timelinecode"
	              	text={`\n <!-- Timeline js-->\n <script src="../assets/js/timeline-v-1/main.js" ></script>\n <script src="../assets/js/modernizr.js" ></script>`}
	              />
	            </div>
	          </div>

	          <div className={`tab-pane fade ${(active=='timeline2')? 'show active' : ''}`} id="timeline2" role="tabpanel">
	            <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
	            <div className="mb-4">
	              <CopyToClipboard
	              	id="timelinecode1"
	              	text={`\n <!-- Timeline js-->\n <script src="../assets/js/timeline-v-2/jquery.timeliny.min.js"></script>\n <script src="../assets/js/timeline-v-2/timeline-v-2-custom.js" ></script>`}
	              />
	            </div>
	          </div>
	        </div>
	    </div>
	)
}
export default Timeline;