import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';
const Cards = () => {
	const [active, setActive] = useState('basic-card');
	return(
		<div className="card-body">
	        <hr/>
	        <h5>Tables</h5>
	        <ul className="nav nav-tabs" id="myTab8" role="tablist">
	          <li className="nav-item"><a className={`nav-link ${(active=='basic-card')? 'active' : ''}`} data-bs-toggle="tab" url="#basic-card" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('basic-card')}>Bootstrap Table</a></li>
	          <li className="nav-item"><a className={`nav-link ${(active=='draggable-cards')? 'active' : ''}`} data-bs-toggle="tab" url="#draggable-cards" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('draggable-cards')}>Draggable Cards</a></li>
	          <li className="nav-item"><a className={`nav-link ${(active=='theme-cards')? 'active' : ''}`} data-bs-toggle="tab" url="#theme-cards" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('theme-cards')}>Theme Cards</a></li>
	        </ul>
	        <div className="tab-content" id="myTabContent8">
	          <div className={`tab-pane fade ${(active=='basic-card')? 'show active' : ''}`} id="basic-card" role="tabpanel">
	            <div className="fluid-container py-4">
	              <div className="card">
                    <div className="card-header">
                      <h6 className="mb-0">Basic Card</h6>
                    </div>
                    <div className="card-body">
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    </div>
                  </div>
                  <div className="mb-4">
		              <CopyToClipboard
		              	id="cardcode"
		              	text={`\n <div class="card">\n   <div class="card-header">\n    <h5>Basic Card</h5>\n   </div>\n   <div class="card-body">\n    <p class="mb-0"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. </p>\n   </div>\n </div>`}
		              />
                  </div>
	            </div>
	          </div>

	          <div className={`tab-pane fade ${(active=='draggable-cards')? 'show active' : ''}`} id="draggable-cards" role="tabpanel">
	            <h6 className="pt-4 pb-2">
	              To use java script you have to add the following script tag
	            </h6>
	            <div className="mb-4">
	              <CopyToClipboard
	              	id="dragcode"
	              	text={`\n <!--Sortable JS-->\n <script src="../assets/js/dragable/jquery.ui.min.js"></script>\n <script src="../assets/js/dragable/sortable.js"></script>\n <script src="../assets/js/dragable/sortable-custom.js"></script>`}
	              />
	            </div>
	          </div>
	          <div className={`tab-pane fade ${(active=='theme-cards')? 'show active' : ''}`} id="theme-cards" role="tabpanel">
	            <div className="fluid-container py-4">
	            	<div className="card">
	                    <div className="card-header b-l-primary">
	                      <h6 className="mb-0">Creative Card</h6>
	                    </div>
	                    <div className="card-body">
	                      <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry  </p>
	                    </div>
	                </div>
		            <div className="mb-4">
		              <CopyToClipboard
		                id="creativecode"
		                text={`\n <div class="card b-l-primary">\n   <div class="card-header">\n     <h5>primary-gradient</h5>\n   </div>\n   <div class="card-body">\n     <p class="mb-0"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. </p>\n   </div>\n </div>`}
		              />
		            </div>
	            </div>
	          </div>
	        </div>
	    </div>
	)
}
export default Cards;