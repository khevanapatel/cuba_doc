import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Table = () => {
  const [active, setActive] = useState('bootstrap-tables');

	return(
		<div className="card-body">
            <hr/>
            <h5>Tables</h5>
            <ul className="nav nav-tabs" id="myTab8" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active=='bootstrap-tables')? 'active' : ''}`} data-bs-toggle="tab" url="#bootstrap-tables" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('bootstrap-tables')}>Bootstrap Table</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='ngx-tables')? 'active' : ''}`} data-bs-toggle="tab" url="#ngx-tables" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('ngx-tables')}>Ngx-Datatable</a></li>
            </ul>
            <div className="tab-content" id="myTabContent8">
              <div className={`tab-pane fade ${(active=='bootstrap-tables')? 'show active' : ''}`} id="bootstrap-tables" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="bootstrapcode"
                  	text="npm install @ng-bootstrap/ng-bootstrap"
                  />
                  <CopyToClipboard
                  	id="bootstrapcode1"
                  	text={`\n <table className="table table-striped">\n   <thead>\n     <tr>\n       <th scope="col">#</th>\n       <th scope="col">Country</th>\n       <th scope="col">Area</th>\n       <th scope="col">Population</th>\n     </tr>\n   </thead>\n   <tbody>\n     <tr *ngFor="let country of countries; index as i">\n       <th scope="row">{{ i + 1 }}</th>\n       <td>\n         <img [src]="'https://upload.wikimedia.org/wikipedia/commons/' + country.flag" className="mr-2" style="width: 20px">\n         {{ country.name }}\n       </td>\n       <td>{{ country.area | number }}</td>\n       <td>{{ country.population | number }}</td>\n     </tr>\n   </tbody>\n </table>`}
                  />
                  <CopyToClipboard
                  	id="bootstrapcode2"
                  	text={`\n import { Component } from '@angular/core';\n \n interface Country {\n name: string;\n flag: string;\n area: number;\n population: number;\n }\n \n const COUNTRIES: Country[] = [\n {\n name: 'Russia',\n flag: 'f/f3/Flag_of_Russia.svg',\n area: 17075200,\n population: 146989754\n },\n {\n name: 'Canada',\n flag: 'c/cf/Flag_of_Canada.svg',\n area: 9976140,\n population: 36624199\n },\n {\n name: 'United States',\n flag: 'a/a4/Flag_of_the_United_States.svg',\n area: 9629091,\n population: 324459463\n },\n {\n name: 'China',\n flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',\n area: 9596960,\n population: 1409517397\n }\n ];\n \n @Component({\n selector: 'ngbd-table-basic',\n templateUrl: './table-basic.html'\n })\n export class NgbdTableBasic {\n 	\n countries = COUNTRIES;\n }`}
                  />
                  <a className="btn btn-solid" href="https://ng-bootstrap.github.io/#/components/table/examples" target="_blank"> Supplemental  </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='ngx-tables')? 'show active' : ''}`} id="ngx-tables" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="ngxcode"
                  	text="npm i @swimlane/ngx-datatable"
                  />
                  
                  <CopyToClipboard
                  	id="ngxcode1"
                  	text={`<ngx-datatable #mydatatable className="material" [headerHeight]="50" [limit]="5" [columnMode]="ColumnMode.force" [footerHeight]="50" rowHeight="auto" [rows]="rows">`}
                  />
                  
                  <CopyToClipboard
                  	id="ngxcode2"
                  	text={`\n import { Component } from '@angular/core';\n import { ColumnMode } from 'projects/swimlane/ngx-datatable/src/public-api';\n\n @Component({\n selector: 'inline-edit-demo',\n template: template.html\n })\n export class InlineEditComponent {\n editing = {};\n rows = [];\n\n ColumnMode = ColumnMode;\n\n constructor() {\n this.fetch((data) => {\n this.rows = data;\n });\n }\n\n fetch(cb) {\n const req = new XMLHttpRequest();\n req.open('GET', 'assets/data/company.json');\n\n req.onload = () => {\n cb(JSON.parse(req.response));\n };\n\n req.send();\n }\n\n updateValue(event, cell, rowIndex) {\n console.log('inline editing rowIndex', rowIndex);\n this.editing[rowIndex + '-' + cell] = false;\n this.rows[rowIndex][cell] = event.target.value;\n this.rows = [...this.rows];\n console.log('UPDATED!', this.rows[rowIndex][cell]);\n }\n }`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/@swimlane/ngx-datatable" target="_blank"> Supplemental</a>
                </div>
              </div>
            </div>
        </div>
	)
}
export default Table;