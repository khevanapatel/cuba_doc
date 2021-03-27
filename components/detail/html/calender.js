import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Calender = () => {
	const [active, setActive] = useState('full-calender-basic');
	return(
		<div className="card-body">
		    <hr className="hr" />
		    <h5 className="my-4">Calender</h5>
		    <ul className="nav nav-tabs" id="myTab7" role="tablist">
		      <li className="nav-item"><a className={`nav-link ${(active == 'full-calender-basic') ? 'active' : ''}`} data-bs-toggle="tab" url="#full-calender-basic" role="tab" aria-selected="true" onClick={()=>setActive('full-calender-basic')} data-original-title="" title="">Calender</a></li>
		    </ul>
		    <div className="tab-content" id="myTabContent7">
		      <div className={`tab-pane fade ${(active=='full-calender-basic')? 'show active' : ''}`} id="full-calender-basic" role="tabpanel">
		        <h6 class="pt-4 pb-2">
              		To use java script you have to add the following style & script tag
                </h6>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="calendercode"
		          	text={`\n <!-- calendar css -->\n <link rel="stylesheet" type="text/css" href="../assets/css/vendors/calendar.css">\n <!--Calendar js-->\n <script src="../assets/js/calendar/tui-code-snippet.min.js"></script>\n <script src="../assets/js/calendar/tui-time-picker.min.js"></script>\n <script src="../assets/js/calendar/tui-date-picker.min.js"></script>\n <script src="../assets/js/calendar/moment.min.js"></script>\n <script src="../assets/js/calendar/chance.min.js"></script>\n <script src="../assets/js/calendar/tui-calendar.js"></script>\n <script src="../assets/js/calendar/calendars.js"></script>\n <script src="../assets/js/calendar/schedules.js"></script>\n <script src="../assets/js/calendar/app.js"></script>`}
		          />
		        </div>
		      </div>
		    </div>
		</div>
	)
}
export default Calender;