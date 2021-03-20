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
              <li className="nav-item"><a className={`nav-link ${(active=='leaflet-map')? 'active' : ''}`} data-bs-toggle="tab" href="#leaflet-map" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('leaflet-map')}>Leaflet</a></li>
            </ul>
            <div className="tab-content" id="myTabContent13">
              <div className={`tab-pane fade ${(active=='g-map')? 'show active' : ''}`} id="g-map" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="mapcode"
                  	text="npm i vue2-google-maps"
                  />
                  <CopyToClipboard
                  	id="mapcode1"
                  	text={`\n <template>\n   <div>\n     <GmapMap :center="{lat:20.5937, lng:78.9629}" :zoom="12" style="width: auto; height: 500px">\n     </GmapMap>\n   </div>\n </template>\n <script>\n   import * as VueGoogleMaps from 'vue2-google-maps'\n   export default {\n     data(){\n       return{\n         }\n     },\n     components: {\n         VueGoogleMaps\n     }\n   }\n </script>`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue2-google-maps" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='leaflet-map')? 'show active' : ''}`} id="leaflet-map" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="leafletcode"
                  	text="npm i vue2-leaflet"
                  />
                  <CopyToClipboard
                  	id="leafletcode1"
                  	text={`\n <template>\n   <div>\n     <l-map :zoom="simple.zoom" :center="simple.center" style="height: 500px">\n       <l-tile-layer :url="simple.url"></l-tile-layer>\n     </l-map>\n </template>\n <script>\n   import { LMap } from 'vue2-leaflet'\n   export default {\n     data(){\n       return{\n         simple:{\n           zoom:5,\n           center: [49.439557, 234.558105],\n           url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',\n         }\n       }\n     },\n     components: {\n         LMap\n     }\n   }\n </script>`}
                  />
                 <a className="btn btn-solid" href="https://www.npmjs.com/package/vue2-leaflet" target="_blank"> Supplemental</a>
                </div>
              </div>
            </div>
        </div>
	)
}
export default Maps;