import { useState } from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';
const Animation = () => {
  const [active, setActive] = useState('animate');

	return(
	  <div class="card-body">
	    <hr/>
	    <h5>Animations</h5>	
		  <ul className="nav nav-tabs" id="myTab4" role="tablist">
	        <li className="nav-item"><a className={`nav-link ${(active=='animate') ? 'active' : ''}`} data-bs-toggle="tab" url="#animate" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('animate')}>Animate</a></li>
	        <li className="nav-item"><a className={`nav-link ${(active=='scroll-reveal') ? 'active' : ''}`} data-bs-toggle="tab" url="#scroll-reveal" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('scroll-reveal')}>Scroll Reveal</a></li>
	        <li className="nav-item"><a className={`nav-link ${(active=='aos') ? 'active' : ''}`} data-bs-toggle="tab" url="#aos" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('aos')}>AOS</a></li>
	        <li className="nav-item"><a className={`nav-link ${(active=='tilt') ? 'active' : ''}`} data-bs-toggle="tab" url="#tilt" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('tilt')}>Tilt</a></li>
	        <li className="nav-item"><a className={`nav-link ${(active=='wow') ? 'active' : ''}`} data-bs-toggle="tab" url="#wow" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('wow')}>Wow</a></li>
	      </ul>
	      <div className="tab-content" id="myTabContent4">
	        <div className={`tab-pane fade ${(active=='animate') ? 'show active' : ''}`} id="animate" role="tabpanel">
	          <h6 class="pt-4 pb-2">
              	To use java script you have to add the following style and script tag
              </h6>
	          <div className="mb-4">
	            <CopyToClipboard
	            	id="animatecode"
	            	text={`\n <!-- animate custom js -->\n <script src="../assets/js/animate-custom.js" ></script>\n <!-- Animate icon -->\n <link rel="stylesheet" href="../assets/css/animate.css">`}
	            /> 
	          </div>
	        </div>
	        <div className={`tab-pane fade ${(active=='scroll-reveal') ? 'show active' : ''}`} id="scroll-reveal" role="tabpanel">
	          <h6 class="pt-4 pb-3">
	            To use java script you have to add the following script tag
	          </h6>
	          <div className="mb-4">
	            <CopyToClipboard
	              id="scrollrevealcode"
	              text={`\n <!-- Scroll Reveal jquery-->\n <script src="../assets/js/scroll-reveal/scrollreveal.min.js"></script>\n <script src="../assets/js/modernizr.js" ></script>`}
	            />
	          </div>
	        </div>
	        <div className={`tab-pane fade ${(active=='aos') ? 'show active' : ''}`} id="aos" role="tabpanel">
	          <h6 class="pt-4 pb-3">
	            To use java script you have to add the following style and script tag
	          </h6>
	          <div className="mb-4">
	            <CopyToClipboard
	              id="aoscode"
	              text={`\n <!-- AOS icon -->\n <link rel="stylesheet" type="text/css" href="../assets/css/aos/aos.css">\n <!-- AOS js-->\n <script src=&apos;../assets/js/isotope.pkgd.js&apos;></script>\n <script src="../assets/js/aos/aos.js" ></script>\n <script src="../assets/js/aos/aos-init.js" ></script>`}
	            />  
	          </div>
	        </div>
	        <div className={`tab-pane fade ${(active=='tilt') ? 'show active' : ''}`} id="tilt" role="tabpanel">
	          <h6 class="pt-4 pb-3">
	            To use java script you have to add the following script tag
	          </h6>
	          <CopyToClipboard
	              id="tiltcode"
	              text={`\n  <!-- Tilt js-->\n <script src="../assets/js/tilt/tilt.jquery.js"></script>\n <script src="../assets/js/tilt/tilt-custom.js"></script>`}
	            /> 
	        </div>
	        <div className={`tab-pane fade ${(active=='wow') ? 'show active' : ''}`} id="wow" role="tabpanel">
	          <h6 class="pt-4 pb-3">
	            To use java script you have to add the following style and script tag
	          </h6>
	          <div className="mb-4">
	            <CopyToClipboard
	              id="wowcode"
	              text={`\n <!-- WOW js-->\n <script src="../assets/js/wow/wow.min.js" ></script>\n <script src="../assets/js/wow/wow-init.js" ></script>`}
	            /> 
	          </div>
	        </div>
	      </div>
	    </div>
	)
}
export default Animation;