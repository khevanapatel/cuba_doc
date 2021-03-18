import {useState} from 'react';

import CopyToClipboard from '../../../common/copy-to-clipboard';

const Maps = () => {
	const [active, setActive] = useState('g-map');

	return(
		<div className="card-body">
            <hr/>
            <h5>Maps</h5>
            <ul className="nav nav-tabs" id="myTab13" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active=='g-map')? 'active' : '' }`} data-bs-toggle="tab" onClick={()=>setActive('g-map')} url="#g-map" role="tab" aria-selected="true" data-original-title="" title="">Google Map</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='leaflet-map')? 'active' : '' }`} data-bs-toggle="tab" onClick={()=>setActive('leaflet-map')} url="#leaflet-map" role="tab" aria-selected="true" data-original-title="" title="">Leaflet</a></li>
            </ul>
            <div className="tab-content" id="myTabContent13">
	          <div className={`tab-pane fade ${(active=='g-map')? 'show active' : '' }`} id="g-map" role="tabpanel">
	            <p className="pt-4"><b>Installing and usage</b></p>
	            <div className="mb-4">
	                <CopyToClipboard
		              text={`npm i react-google-maps`}
		              id="mapcode"
		            /> 
		            <CopyToClipboard
		              text={`\nimport { withGoogleMap, GoogleMap, withScriptjs } from "react-google-maps";\nconst MapContainer = () => { \n  const[location,setlocation] = useState({ address: false,\n    mapPosition: {\n      lat: 18.5204, lng: 73.8567\n      },\n      markerPosition: {\n      lat: 18.5204, lng: 73.8567\n      }\n  })\n  \n  const BasicMap = withScriptjs(\n    withGoogleMap(\n    props => (\n      <GoogleMap google={props.google}\n      defaultZoom={15}\n      defaultCenter={{ lat: location.mapPosition.lat, lng: location.mapPosition.lng }}\n      >\n      </GoogleMap>\n    )\n    )\n  );\n 	\n  return (\n      <CardBody>\n      <BasicMap\n            googleMapURL="https://maps.googleapis.com/maps/api/js?key=Yourkey&libraries=places"\n            loadingElement={\n              <div style={{ height: '100%' }} />\n            }\n            containerElement={\n              <div style={{ height: '300px' }} />\n            }\n            mapElement={\n              <div style={{ height: '100%' }} />\n            }\n      />    \n    </CardBody>\n    )\n}`}
		              id="mapcode1"
		            /> 	
	            	<a className="btn btn-solid" href="https://www.npmjs.com/package/react-google-maps" target="_blank"> Supplemental</a>
	            </div>
	          </div>
	          <div className={`tab-pane fade ${(active=='leaflet-map')? 'show active' : '' }`}  id="leaflet-map" role="tabpanel">
	            <p className="pt-4"><b>Installing and usage</b></p>
	            <div className="mb-4">
	                <CopyToClipboard
		              text={`npm i react-leaflet`}
		              id="leafletcode"
		            /> 
		            <CopyToClipboard
		              text={`\nimport { Map as LeafletMap, TileLayer, GeoJSON, Marker, Popup } from 'react-leaflet';\nimport WorldData from 'world-map-geojson';\nconst LeafletMap = () => {\n  return(\n          <div id="gmap-simple" >\n            <LeafletMap\n                        center={[50, 10]}\n                        zoom={6}\n                        maxZoom={10}\n                        attributionControl={true}\n                        zoomControl={true}\n                        doubleClickZoom={true}\n                        scrollWheelZoom={true}\n                        dragging={true}\n                        animate={true}\n                        easeLinearity={0.35}\n                    >\n            <TileLayer url='http://{s}.tile.osm.org/{z}/{x}/{y}.png' />\n            <Marker position={[50, 10]}>\n            <Popup>\n                  Popup for any custom information.\n            </Popup>\n            </Marker>\n            </LeafletMap>\n          </div>\n      )\n}`}
		              id="leafletcode1"
		            /> 
	                <a className="btn btn-solid" href="https://www.npmjs.com/package/react-leaflet" target="_blank"> Supplemental</a>
	            </div>
	          </div>
	        </div>
        </div>
	)
}
export default Maps;