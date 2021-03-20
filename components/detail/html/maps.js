import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Maps = () => {
	const [active, setActive] = useState('g-map');

	return(
		<div className="card-body">
            <hr/>
            <h5>Maps</h5>
            <ul className="nav nav-tabs" id="myTab13" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active=='g-map')? 'active' : ''}`} data-bs-toggle="tab" href="#g-map" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('g-map')}>Google Map</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='vector-map')? 'active' : ''}`} data-bs-toggle="tab" href="#vector-map" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('vector-map')}>Vector Map</a></li>
            </ul>
            <div className="tab-content" id="myTabContent13">
              <div className={`tab-pane fade ${(active=='g-map')? 'show active' : ''}`} id="g-map" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="mapcode"
                  	text={`\n <!--Map css-->\n <link rel="stylesheet" type="text/css" href="../assets/css/mapsjs-ui.css">\n <!-- Map js-->\n <script src="../assets/js/map-js/mapsjs-core.js"></script>\n <script src="../assets/js/map-js/mapsjs-service.js"></script>\n <script src="../assets/js/map-js/mapsjs-ui.js"></script>\n <script src="../assets/js/map-js/mapsjs-mapevents.js"></script>`}
                  />
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='vector-map')? 'show active' : ''}`} id="vector-map" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="vectorcode"
                  	text={`\n <!--Vector Map css-->\n <link rel="stylesheet" type="text/css" href="../assets/css/vector-map.css">\n <!--vector map js-->\n <script src="../assets/js/vector-map/jquery-jvectormap-2.0.2.min.js"></script>\n <script src="../assets/js/vector-map/map/jquery-jvectormap-world-mill-en.js"></script>\n <script src="../assets/js/vector-map/map/jquery-jvectormap-us-aea-en.js"></script>\n <script src="../assets/js/vector-map/map/jquery-jvectormap-uk-mill-en.js"></script>\n <script src="../assets/js/vector-map/map/jquery-jvectormap-au-mill.js"></script>\n <script src="../assets/js/vector-map/map/jquery-jvectormap-chicago-mill-en.js"></script>\n <script src="../assets/js/vector-map/map/jquery-jvectormap-in-mill.js"></script>\n <script src="../assets/js/vector-map/map/jquery-jvectormap-asia-mill.js"></script>\n <script src="../assets/js/vector-map/map-vector.js"></script>`}
                  />
                </div>
              </div>
            </div>
        </div>
	)
}
export default Maps;