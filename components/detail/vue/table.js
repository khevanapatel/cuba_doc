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
              <li className="nav-item"><a className={`nav-link ${(active=='smart-tables')? 'active' : ''}`} data-bs-toggle="tab" url="#smart-tables" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('smart-tables')}>Smart Table</a></li>
            </ul>
            <div className="tab-content" id="myTabContent8">
              <div className={`tab-pane fade ${(active=='bootstrap-tables')? 'show active' : ''}`} id="bootstrap-tables" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="bootstrapcode"
                  	text="npm i bootstrap-vue"
                  />
                  <CopyToClipboard
                  	id="bootstrapcode1"
                  	text={`\n <template>\n   <div>\n     <b-table striped hover :items="items"></b-table>\n </template>\n <script>\n   import BootstrapVue from 'bootstrap-vue' \n   export default {\n    data(){\n     return{\n         items: [\n           { no:1, first_name:'Alexander', last_name:'Orton', username:'@mdorton', role:'Admin', country:'USA' },\n           { no:2, first_name:'John Deo', last_name:'Deo', username:'@johndeo', role:'User', country:'USA' },\n           { no:3, first_name:'Randy Orton', last_name:'the Bird', username:'@twitter', role:'admin', country:'UK' },\n           { no:4, first_name:'Randy Mark', last_name:'Ottandy', username:'@mdothe', role:'user', country:'AUS' },\n           { no:5, first_name:'Ram Jacob', last_name:'Thornton', username:'@twitter', role:'admin', country:'IND' }\n         ]\n       }\n   },\n   components: {\n     BootstrapVue\n   }\n </script>`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/bootstrap-vue" target="_blank"> Supplemental  </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='smart-tables')? 'show active' : ''}`} id="smart-tables" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="smartcode"
                  	text="npm i vuejs-smart-table"
                  />
                  <CopyToClipboard
                  	id="smartcode1"
                  	text={`\n <template>\n   <div>\n       Put your smart table code here\n </template>\n <script>\n   import SmartTable from 'vuejs-smart-table'\n   data(){\n     return{\n       }\n   },\n   components: {\n       SmartTable\n   }\n </script>`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vuejs-smart-table" target="_blank"> Supplemental</a>
                </div>
              </div>
            </div>
        </div>
	)
}
export default Table;