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
		          	text="npm i vuejs-datepicker"
		          />

		          <CopyToClipboard 
		          	id="datepickercode1"
		          	text={`\n <template>\n   <div>\n     <datepicker input-className="datepicker-here form-control digits" :format="format" ></datepicker>\n   </div>\n </template>\n <script>\n   import Datepicker from 'vuejs-datepicker';\n   export default {\n     data(){\n       return{\n         format: "MM/dd/yyyy",\n         format2: "MMMM yyyy",\n         disabledDates:{\n             days: [6, 0],\n         },\n       }\n     }\n   },\n   components: {\n       Datepicker\n   }\n </script>`}
		          />
		          <a className="btn btn-solid" href="https://www.npmjs.com/package/vuejs-datepicker" target="_blank"> Supplemental</a>
		        </div>
		      </div>
		      <div className={`tab-pane fade ${(active=='select2')? 'show active' : ''}`} id="select2" role="tabpanel">
		        <p className="pt-4"><b>Installing and usage</b></p>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="select2code"
		          	text={`npm i vue-multiselect`}
		          />
		          <CopyToClipboard 
		          	id="select2code2"
		          	text={`\n <template>\n   <div>\n       <multiselect v-model="singleValue" :options="options" label="name" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect></div>\n </template>\n <script>\n   import Multiselect from 'vue-multiselect'\n   export default {\n   data(){\n     return{\n           singleValue:""\n       }\n   },\n   components: {\n       Multiselect\n   }\n </script>`}
		          />
		          <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-multiselect" target="_blank"> Supplemental  </a>
		        </div>
		      </div>
		      <div className={`tab-pane fade ${(active=='typeahead')? 'show active' : ''}`} id="typeahead" role="tabpanel">
		        <p className="pt-4"><b>Installing and usage</b></p>
		        <div className="mb-4">
		          <CopyToClipboard 
		          	id="typeaheadcode"
		          	text={`npm i vue-bootstrap-typeahead`}
		          />
		          <CopyToClipboard 
		          	id="typeaheadcode1"
		          	text={` \n <template>\n   <div>\n     <vue-bootstrap-typeahead\n       v-model="query"\n       inputclassName="typeahead"\n       :data="countries"\n       placeholder="State of USA"\n     />\n </template>\n <script>\n   import VueBootstrapTypeahead from "vue-bootstrap-typeahead";\n   export default {\n   data(){\n     return{\n       query: "",\n       countries: [\n         "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "west virginia", "wisconsin", "wyoming"\n       ]\n     }\n   },\n   components: {\n       VueBootstrapTypeahead\n   }\n </script>`}
		          />
		         <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-bootstrap-typeahead" target="_blank"> Supplemental  </a>
		        </div>
		      </div>
		    </div>
		  </div>
	)
}
export default Form;