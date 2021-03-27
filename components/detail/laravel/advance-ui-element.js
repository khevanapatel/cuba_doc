import { useState } from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const AdvanceUiElement = () => {
  const [active, setActive] = useState('scrollable');
  const [activeAE, setActiveAE] = useState('range-slider');
	return(
		<div className="card-body">
      <hr className="hr" />
      <h5>Advance UI Elements</h5>
      <ul className="nav nav-tabs" id="myTab4" role="tablist">
        <li className="nav-item"><a className={`nav-link ${(active=='scrollable') ? 'active' : ''}`} data-bs-toggle="tab" url="#scrollable" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('scrollable')}>Scrollable</a></li>
        <li className="nav-item"><a className={`nav-link ${(active=='tree') ? 'active' : ''}`} data-bs-toggle="tab" url="#tree" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('tree')}>Tree</a></li>
        <li className="nav-item"><a className={`nav-link ${(active=='notify') ? 'active' : ''}`} data-bs-toggle="tab" url="#notify" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('notify')}>Notify</a></li>
        <li className="nav-item"><a className={`nav-link ${(active=='rating') ? 'active' : ''}`} data-bs-toggle="tab" url="#rating" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('rating')}>Rating</a></li>
        <li className="nav-item"><a className={`nav-link ${(active=='dropzone') ? 'active' : ''}`} data-bs-toggle="tab" url="#dropzone" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('dropzone')}>Dropzone</a></li>
        <li className="nav-item"><a className={`nav-link ${(active=='tour') ? 'active' : ''}`} data-bs-toggle="tab" url="#tour" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('tour')}>Tour</a></li>
      </ul>
      <div className="tab-content" id="myTabContent4">
        <div className={`tab-pane fade ${(active=='scrollable') ? 'show active' : ''}`} id="scrollable" role="tabpanel">
          <h6 class="pt-4 pb-2">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
            	id="scrollablecode"
            	text={`\n <!--Scrollable css-->\n <link rel="stylesheet" type="text/css" href="../assets/css/scrollable.css">\n <!--scrollable js-->\n <script src="../assets/js/scrollable/scrollable-custom.js"></script>\n <script src="../assets/js/scrollable/perfect-scrollbar.min.js" ></script>`}
            /> 
          </div>
        </div>
        <div className={`tab-pane fade ${(active=='tree') ? 'show active' : ''}`} id="tree" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="treecode"
              text={`\n <!-- Tree css -->\n <link rel="stylesheet" type="text/css" href="../assets/css/tree.css">\n <!-- Tree js-->\n <script src="../assets/js/tree/jstree.min.js"></script>\n <script src="../assets/js/tree/tree.js" ></script>`}
            />
          </div>
        </div>
        <div className={`tab-pane fade ${(active=='notify') ? 'show active' : ''}`} id="notify" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="notifycode"
              text={`\n <!-- bootstrap notify js -->\n <script src="../assets/js/notify/bootstrap-notify.min.js" ></script>\n <script src="../assets/js/notify/notify-script.js" ></script>`}
            />  
          </div>
        </div>
        <div className={`tab-pane fade ${(active=='rating') ? 'show active' : ''}`} id="rating" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <CopyToClipboard
              id="ratingcode"
              text={`\n <!-- range slider css start here -->\n <link rel="stylesheet" type="text/css" href="../assets/css/rating.css">\n <!-- Ion Range Slider js -->\n <script src="../assets/js/rating/jquery.barrating.js" ></script>\n <script src="../assets/js/rating/rating-script.js" ></script>`}
            /> 
        </div>
          <div className={`tab-pane fade ${(active=='dropzone') ? 'show active' : ''}`} id="dropzone" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="dropzonecode"
              text={`\n <!-- Dropzone start here -->\n <link rel="stylesheet" type="text/css" href="../assets/css/dropzone.css">\n <!-- Dropzone js -->\n <script src="../assets/js/dropzone/dropzone.js" ></script>\n <script src="../assets/js/dropzone/dropzone-script.js" ></script>`}
            /> 
          </div>
        </div>
        <div className={`tab-pane fade ${(active=='tour') ? 'show active' : ''}`} id="tour" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="tourcode"
              text={`\n <!-- tour js -->\n <script src="../assets/js/tour/intro.js" ></script>\n <script src="../assets/js/tour/intro-init.js" ></script>`}
            />  
          </div>
        </div>
      </div>
      <ul className="nav nav-tabs m-t-35" id="myTab5" role="tablist">
        <li className="nav-item"><a className={`nav-link ${(activeAE == 'sweet-alert' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#sweet-alert" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('sweet-alert')}>Sweet Alert</a></li>
        <li className="nav-item"><a className={`nav-link ${(activeAE == 'animated-modal' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#animated-modal" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('animated-modal')}>Animated Modal</a></li>
        <li className="nav-item"><a className={`nav-link ${(activeAE == 'owl-carousel' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#owl-carousel" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('owl-carousel')}>Owl Carousel</a></li>
        <li className="nav-item"><a className={`nav-link ${(activeAE == 'range-slider' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#range-slider" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('range-slider')}>Range slider</a></li>
        <li className="nav-item"><a className={`nav-link ${(activeAE == 'image-cropper' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#image-cropper" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('image-cropper')}>Image Cropper</a></li>
        <li className="nav-item"><a className={`nav-link ${(activeAE == 'sticky' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#sticky" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('sticky')}>Sticky</a></li>
      </ul>
      <div className="tab-content" id="myTabContent5">
        <div className={`tab-pane fade ${(activeAE == 'sweet-alert') ? 'show active' : ''}`} id="sweet-alert" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="sweetalertcode"
              text={`\n <!-- Sweet alert jquery-->\n <script src="../assets/js/sweet-alert/sweetalert.min.js" ></script>\n <script src="../assets/js/sweet-alert/app.js" ></script>`}
            /> 
          </div>
        </div>
        <div className={`tab-pane fade ${(activeAE == 'animated-modal') ? 'show active' : ''}`} id="animated-modal" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="rangeslidercode"
              text={`\n <!-- animate css -->\n <link rel="stylesheet" type="text/css" href="../assets/css/animate.css">\n <!-- Modal js-->\n <script src="../assets/js/modal-animated.js"></script>`}
            /> 
          </div>
        </div>
        <div className={`tab-pane fade ${(activeAE == 'owl-carousel') ? 'show active' : ''}`} id="owl-carousel" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="owlcode"
              text={`\n <!-- Owl css -->\n <link rel="stylesheet" type="text/css" href="../assets/css/owlcarousel.css">\n <!-- owlcarousel js-->\n <script src="../assets/js/owlcarousel/owl.carousel.js" ></script>`}
            /> 
          </div>
        </div>
        <div className={`tab-pane fade ${(activeAE == 'range-slider') ? 'show active' : ''}`} id="range-slider" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="rangeslidercode"
              text={`\n <!-- range slider css start here -->\n <link rel="stylesheet" type="text/css" href="../assets/css/range-slider.css">\n <!-- Ion Range Slider js -->\n <script src="../assets/js/range-slider/ion.rangeSlider.min.js"></script>\n <script src="../assets/js/range-slider/rangeslider-script.js" ></script>`}
            /> 
          </div>
        </div>
        <div className={`tab-pane fade ${(activeAE == 'image-cropper') ? 'show active' : ''}`} id="image-cropper" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="imgcroppercode"
              text={`\n <!--Image cropper css-->\n <link rel="stylesheet" type="text/css" href="../assets/css/image-cropper.css">\n <!--Cropper jquery-->\n <script src="../assets/js/image-cropper/cropper.js"></script>\n <script src="../assets/js/image-cropper/cropper-main.js"></script>`}
            /> 
          </div>
        </div>
       
        <div className={`tab-pane fade ${(activeAE == 'sticky') ? 'show active' : ''}`} id="sticky" role="tabpanel">
          <h6 class="pt-4 pb-3">
            To use java script you have to add the following style and script tag
          </h6>
          <div className="mb-4">
            <CopyToClipboard
              id="stickycode"
              text={`\n <!-- sticky css -->\n <link rel="stylesheet" type="text/css" href="../assets/css/sticky.css">\n <!--Sticky note js-->\n <script src=&apos;../assets/js/sticky/sticky.js&apos;></script>`}
            /> 
          </div>
        </div>
      </div>
  </div>
	)
}
export default AdvanceUiElement;