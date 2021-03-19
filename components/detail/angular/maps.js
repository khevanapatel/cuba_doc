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
                  	text="npm i @agm/core"
                  />
                  <CopyToClipboard
                  	id="mapcode1"
                  	text={`\n <div className="card-body"\n     <div className="map-js-height"\n       <agm-map [latitude]="lat_m1" [longitude]="lng_m1" [zoom]="zoom_m1" [scrollwheel]="false\n         [disableDoubleClickZoom]="true" [mapDraggable]="false" [zoomControl]="false" [mapTypeControl]="true"\n         <agm-marker\n           <agm-info-window [disableAutoPan]="true"\n             Hi, this is the content of the <strong>info window</strong\n           </agm-info-window\n         </agm-marker\n       </agm-map\n     </div\n </div>`}
                  />
                  <CopyToClipboard
                  	id="mapcode2"
                  	text={`\n import { Component, OnInit } from '@angular/core';\n import { MouseEvent } from '@agm/core';\n\n @Component({\n selector: 'app-google-map',\n templateUrl: './google-map.component.html',\n styleUrls: ['./google-map.component.scss']\n })\n\n export class GoogleMapComponent implements OnInit {\n\n /* Map1*/\n public lat_m1: number = 20.593683;\n public lng_m1: number = 78.962883;\n public zoom_m1: number = 4;\n\n interface marker {\n lat: number;\n lng: number;\n label?: string;\n draggable: boolean;\n }\n\n interface LatLngLiteral {\n lat: number;\n lng: number;\n }`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/@agm/core" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='leaflet-map')? 'show active' : ''}`} id="leaflet-map" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="leafletcode"
                  	text="npm i @asymmetrik/ngx-leaflet"
                  />
                  <CopyToClipboard
                  	id="leafletcode1"
                  	text={`<div style="height: 300px;" leaflet [leafletOptions]="options"></div>`}
                  />
                  <CopyToClipboard
                  	id="leafletcode2"
                  	text={`\n import { Component, OnInit } from '@angular/core';\n import * as L from 'leaflet';\n import { HttpClient } from "@angular/common/http";\n\n @Component({\n selector: 'app-leaflet-map',\n templateUrl: './leaflet-map.component.html',\n styleUrls: ['./leaflet-map.component.scss']\n })\n export class LeafletMapComponent implements OnInit {\n\n constructor(private http: HttpClient) { }\n  \n /*First map options */\n options1 = {\n layers: [\n L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })\n ],\n zoom: 5,\n center: L.latLng(46.879966, -121.726909)\n };\n }`}
                  />
                 <a className="btn btn-solid" href="https://www.npmjs.com/package/@asymmetrik/ngx-leaflet" target="_blank"> Supplemental</a>
                </div>
              </div>
            </div>
        </div>
	)
}
export default Maps;