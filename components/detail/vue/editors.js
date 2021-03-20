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
            </ul>
            <div className="tab-content" id="myTabContent14">
              <div className={`tab-pane fade ${(active=='simpleeditor')? 'show active' : ''}`} id="simpleeditor" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="editorcode"
                  	text="npm i vue2-editor"
                  	/> 
                  <CopyToClipboard
                  	id="editorcode1"
                  	text={`\n <template>\n   <div>\n    <vue-editor v-model="content"></vue-editor>\n    </div>\n </template>\n <script>\n   import { VueEditor } from "vue2-editor";\n   export default {\n     data(){\n       return{\n             content: "<h1>Some initial content</h1>"\n         }\n     },\n     components: {\n         VueEditor\n     }\n   }\n </script>`}
                  	/>
                 <a className="btn btn-solid" href="https://npmjs.com/package/vue2-editor" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='simple-ck')? 'show active' : ''}`} id="simple-ck" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="ckcode"
                  	text="npm i @ckeditor/ckeditor5-vue"
                  	/>
                  <CopyToClipboard
                  	id="ckcode1"
                  	text={`\n <template>\n   <div>\n     <ckeditor :editor="editor"  v-model="editorData"></ckeditor>\n   </div>\n </template>\n <script>\n   import CKEditor from '@ckeditor/ckeditor5-vue';\n   import ClassicEditor from '@ckeditor/ckeditor5-build-classic';\n    \n   export default {\n     data(){\n       return{\n           editor: ClassicEditor,\n             editorData: '<p>Lorem Ipsum is simply dummy text</p>',\n         }\n     },\n     components: {\n           ckeditor: CKEditor.component\n     }\n   }\n </script>`}
                  	/>
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/@ckeditor/ckeditor5-vue" target="_blank"> Supplemental</a>
                </div>
              </div>
            </div>
          </div>
	)
}
export default Editors;