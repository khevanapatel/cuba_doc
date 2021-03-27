import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';
const Gallery = () => {
	const [active, setActive] = useState('gallery-grid');
	return(
		<div className="card-body">
		    <hr className="hr" />
		    <h5 className="my-4">Gallery</h5>
		    <ul className="nav nav-tabs" id="myTab7" role="tablist">
		      <li className="nav-item"><a className={`nav-link ${(active == 'gallery-grid') ? 'active' : ''}`} data-bs-toggle="tab" url="#gallery-grid" role="tab" aria-selected="true" onClick={()=>setActive('gallery-grid')} data-original-title="" title="">Gallery grid</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'gallery-desk') ? 'active' : ''}`} data-bs-toggle="tab" url="#gallery-desk" role="tab" aria-selected="true" onClick={()=>setActive('gallery-desk')} data-original-title="" title="">Gallery with desc</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'Massonry') ? 'active' : ''}`} data-bs-toggle="tab" url="#Massonry" role="tab" aria-selected="true" onClick={()=>setActive('Massonry')} data-original-title="" title="">Masonry gallery</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'Masonry-desk') ? 'active' : ''}`} data-bs-toggle="tab" url="#Masonry-desk" role="tab" aria-selected="true" onClick={()=>setActive('Masonry-desk')} data-original-title="" title="">Masonry gallery desc</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'hover-effects') ? 'active' : ''}`} data-bs-toggle="tab" url="#hover-effects" role="tab" aria-selected="true" onClick={()=>setActive('hover-effects')} data-original-title="" title="">Hover Effects</a></li>
		    </ul>
		    <div className="tab-content" id="myTabContent7">
		      <div className={`tab-pane fade ${(active=='gallery-grid')? 'show active' : ''}`} id="gallery-grid" role="tabpanel">
		        <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="gallerycode"
		          	text={`\n <!-- lightgallery js-->\n <script src="../assets/js/lightgallery/lightgallery.min.js"></script>\n <script src="../assets/js/lightgallery/lg-pager.min.js"></script>\n <script src="../assets/js/lightgallery/lg-autoplay.min.js"></script>\n <script src="../assets/js/lightgallery/lg-fullscreen.min.js"></script>\n <script src="../assets/js/lightgallery/lg-zoom.min.js"></script>\n <script src="../assets/js/lightgallery/lg-hash.min.js"></script>\n <script src="../assets/js/lightgallery/lg-share.min.js"></script>\n <script src="../assets/js/lightgallery/lg-thumbnail.min.js"></script>`}
		          />
		        </div>
		      </div>
		      <div className={`tab-pane fade ${(active=='gallery-desk')? 'show active' : ''}`} id="gallery-desk" role="tabpanel">
		         <h6 class="pt-4 pb-2">for this you have to add the same css and js which are used for grid gallery</h6>
		      </div> 
		      <div className={`tab-pane fade ${(active=='Massonry')? 'show active' : ''}`} id="Massonry" role="tabpanel">
		         <h6 class="pt-4 pb-2">To use java script you have to add the grid gallery js also following script tag</h6>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="masonrycode"
		          	text={`<!--Masonry gallery js--> \n <script src="../assets/js/masonry-gallery.js"></script>`}
		          />
		        </div>
		      </div> 
		      <div className={`tab-pane fade ${(active=='Masonry-desk')? 'show active' : ''}`} id="Masonry-desk" role="tabpanel">
		       <h6 class="pt-4 pb-2">for this you have to add the same css and js which are used for masonry gallery</h6>
		      </div> 
		      <div className={`tab-pane fade ${(active=='hover-effects')? 'show active' : ''}`} id="hover-effects" role="tabpanel">
		         <h6 class="pt-4 pb-2">You don&apos;t need to add any additional css or js for the gallery hover page</h6>
		      </div>
		    </div>
		</div>
	)
}
export default Gallery;