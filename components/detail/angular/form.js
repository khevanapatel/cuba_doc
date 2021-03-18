import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Form = () => {
	const [active, setActive] = useState('datepicker');
	return(
		<div className="card-body">
		    <hr className="hr" />
		    <h5 className="my-4">Forms</h5>
		    <ul className="nav nav-tabs" id="myTab7" role="tablist">
		      <li className="nav-item"><a className={`nav-link ${(active == 'datepicker') ? 'active' : ''}`} data-bs-toggle="tab" url="#datepicker" role="tab" aria-selected="true" onClick={()=>setActive('datepicker')} data-original-title="" title="">Date Picker</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'select2') ? 'active' : ''}`} data-bs-toggle="tab" url="#select2" role="tab" data-original-title="" onClick={()=>setActive('select2')} title="">Select2</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'typeahead') ? 'active' : ''}`} data-bs-toggle="tab" url="#typeahead" role="tab" data-original-title="" onClick={()=>setActive('typeahead')} title="">Typeahead</a></li>
		    </ul>
		    <div className="tab-content" id="myTabContent7">
		      <div className={`tab-pane fade ${(active=='datepicker')? 'show active' : ''}`} id="datepicker" role="tabpanel">
		        <p className="pt-4"><b>Installing and usage</b></p>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="datepickercode"
		          	text="ng add ngx-bootstrap --component datepicker"
		          />

		          <CopyToClipboard 
		          	id="datepickercode1"
		          	text={`<input type="text" placeholder="Datepicker" className="form-control" bsDatepicker>`}
		          />
		          <a className="btn btn-solid" href="https://valor-software.com/ngx-bootstrap/#/datepicker" target="_blank"> Supplemental</a>
		        </div>
		      </div>
		      <div className={`tab-pane fade ${(active=='select2')? 'show active' : ''}`} id="select2" role="tabpanel">
		        <p className="pt-4"><b>Installing and usage</b></p>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="select2code"
		          	text={`npm i @ng-select/ng-select`}
		          />
		          <CopyToClipboard 
		          	id="select2code1"
		          	text={`<ng-select [items]="people" bindLabel="name" bindValue="id" [(ngModel)]="selectedPersonId"></ng-select >`}
		          />
		          <CopyToClipboard 
		          	id="select2code2"
		          	text={`\n import { Component, OnInit } from '@angular/core';\n import { DataService, Person } from '../data.service';\n \n @Component({\n selector: 'data-source-array-example',\n templateUrl: './data-source-array-example.component.html',\n styleUrls: ['./data-source-array-example.component.scss']\n })\n export class DataSourceArrayExampleComponent implements OnInit {\n 	\n people: Person[] = [];\n selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';\n \n selectedSimpleItem = 'Two';\n simpleItems = [];\n \n constructor(private dataService: DataService) {\n }\n \n ngOnInit() {\n this.dataService.getPeople().subscribe(items => this.people = items);\n this.simpleItems = [true, 'Two', 3];\n }\n }`}
		          />
		          <a className="btn btn-solid" href="https://www.npmjs.com/package/@ng-select/ng-select" target="_blank"> Supplemental   </a>
		        </div>
		      </div>
		      <div className={`tab-pane fade ${(active=='typeahead')? 'show active' : ''}`} id="typeahead" role="tabpanel">
		        <p className="pt-4"><b>Installing and usage</b></p>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="typeaheadcode"
		          	text={`npm install @ng-bootstrap/ng-bootstrap`}
		          />
		          <CopyToClipboard 
		          	id="typeaheadcode1"
		          	text={`<input id="typeahead-basic" type="text" className="form-control" [(ngModel)]="model" [ngbTypeahead]="search" />`}
		          />
		          <CopyToClipboard 
		          	id="typeaheadcode2"
		          	text={`\n import {Component} from '@angular/core';\n import {Observable} from 'rxjs';\n import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';\n \n const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];\n \n @Component({\n selector: 'ngbd-typeahead-basic',\n templateUrl: './typeahead-basic.html',\n styles: ['.form-control { width: 300px; }']\n })\n export class NgbdTypeaheadBasic {\n public model: any;\n \n search = (text$: Observable<string>) =>\n   text$.pipe(\n   debounceTime(200),\n   distinctUntilChanged(),\n   map(term => term.length < 2 ? [] : states.filter(v=> v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))\n     )\n  \n     }`}
		          />
		          <a className="btn btn-solid" href="https://ng-bootstrap.github.io/#/components/typeahead/api" target="_blank"> Supplemental  </a>
		        </div>
		      </div>
		    </div>
		  </div>
	)
}
export default Form;