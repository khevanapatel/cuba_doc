import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Editors = () => {
	const [active, setActive] = useState('simpleeditor');

	return(
		 <div className="card-body">
            <hr/>
            <h5>Editors</h5>
            <ul className="nav nav-tabs" id="myTab14" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active == 'simpleeditor') ? 'active' : ''}`} data-bs-toggle="tab" url="#simpleeditor" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('simpleeditor')}>Simple Editor</a></li>
              <li className="nav-item"><a className={`nav-link ${(active == 'simple-ck') ? 'active' : ''}`} data-bs-toggle="tab" url="#simple-ck" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('simple-ck')}>CK Editor</a></li>
              <li className="nav-item"><a className={`nav-link ${(active == 'ace-code') ? 'active' : ''}`} data-bs-toggle="tab" url="#ace-code" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('ace-code')}>ACE Code</a></li>
            </ul>
            <div className="tab-content" id="myTabContent14">
              <div className={`tab-pane fade ${(active=='simpleeditor')? 'show active' : ''}`} id="simpleeditor" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="editorcode"
                  	text="npm install ngx-editor"
                  	/> 
                  <CopyToClipboard
                  	id="editorcode1"
                  	text={`<app-ngx-editor [placeholder]="'Enter text here...'" [spellcheck]="true"[(ngModel)]="htmlContent" ></app-ngx-editor>`}
                  	/>
                  <CopyToClipboard
                  	id="editorcode2"
                  	text={`\n import { Component, OnInit } from '@angular/core';\n @Component({\n selector: 'ngx-editor',\n templateUrl: './ngx-editor.component.html',\n styleUrls: ['./ngx-editor.component.scss'],\n /* encapsulation: ViewEncapsulation.None*/\n })\n export class NgxEditorComponent implements OnInit {\n public htmlContent: string = '';\n\n constructor() {\n }\n ngOnInit(): void {\n }\n\n public editorConfig = {\n editable: true,\n spellcheck: false,\n height: '10rem',\n minHeight: '5rem',\n placeholder: 'Type something. Test the Editor... ヽ(^。^)丿',\n translate: 'no'\n }\n\n }`}
                  	/>
                 <a className="btn btn-solid" href="https://www.npmjs.com/package/ngx-editor" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='simple-ck')? 'show active' : ''}`} id="simple-ck" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="ckcode"
                  	text="npm i ngx-ckeditor"
                  	/>
                  <CopyToClipboard
                  	id="ckcode1"
                  	text={`<ck-editor name="editor1" [(ngModel)]="editorValue" skin="moono-lisa" language="en" [fullPage]="true"></ck-editor>`}
                  	/>
                  <CopyToClipboard
                  	id="ckcode2"
                  	text={`\n /* app.component.ts */ \n @Component({ \n selector: 'app', \n templateUrl: 'app.component.html' \n }) \n   export class AppComponent implements OnInit { \n public editorValue: string = ''; \n ngOnInit() { } \n }`}
                  	/>
                 <a className="btn btn-solid" href="https://www.npmjs.com/package/ngx-ckeditor" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='ace-code')? 'show active' : ''}`} id="ace-code" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="acecode"
                  	text="npm i ng2-ace-editor"
                  	/>
                  <CopyToClipboard
                  	id="acecode1"
                  	text={`<ace-editor [(text)]="text" #editor style="height:150px;"></ace-editor>`}
                  	/>
                  <CopyToClipboard
                  	id="acecode2"
                  	text={`\n import { Component, OnInit, ViewChild } from '@angular/core';\n import * as text from '../../../shared/data/editor/editor'\n @Component({\n selector: 'app-ace-editor',\n templateUrl: './ace-editor.component.html',\n styleUrls: ['./ace-editor.component.scss']\n })\n export class AceEditorComponent implements OnInit {\n @ViewChild('editor') editor;\n public text = text.text;\n public text2 = text.text2;\n public text3 = text.text3;\n public text4 = text.text4;\n\n ngAfterViewInit() {\n this.editor.setTheme("eclipse");\n }\n ngOnInit(): void {\n }\n }`}
                  	/>
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/ng2-ace-editor" target="_blank"> Supplemental</a>
                </div>
              </div>
            </div>
          </div>
	)
}
export default Editors;