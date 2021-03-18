import {useState} from 'react';

import CopyToClipboard from '../../../common/copy-to-clipboard';

const Form = () => {
	const [active, setActive] = useState('datepicker');
	return(
		<div className="card-body">
            <hr className="hr" />
            <h5 className="my-4">Forms</h5>
            <ul className="nav nav-tabs" id="myTab7" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active=='datepicker')? 'active' : ''}`} data-bs-toggle="tab" url="#datepicker" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('datepicker')}>Date Picker</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='typeahead')? 'active' : ''}`} data-bs-toggle="tab" url="#typeahead" role="tab" data-original-title="" title="" onClick={()=>setActive('typeahead')}>Typeahead</a></li>
            </ul>
            <div className="tab-content" id="myTabContent7">
              <div className={`tab-pane fade ${(active=='datepicker')? 'active show' : ''}`} id="datepicker" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	text={`npm i react-datepicker`}
                  	id="datepickercode"
                  />
                  <CopyToClipboard
                  	text={`\nimport DatePicker from "react-datepicker";\nimport "react-datepicker/dist/react-datepicker.css";\n\nconst Example = () => {\n  const [startDate,setstartDate] = useState(new Date())\n	\n  const handleChange = date => {\n        setstartDate(date);\n    };\n	\n  return (\n    <Cardbody>\n      <DatePicker \n              className="form-control digits" \n              selected={startDate} \n              onChange={handleChange}  />\n    </Cardbody>\n  );\n  \n}`}
                  	id="datepickercode1"
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-datepicker" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='typeahead')? 'active show' : ''}`} id="typeahead" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	text={`npm i react-bootstrap-typeahead`}
                  	id="typeaheadcode"
                  />
                  <CopyToClipboard
                  	text={`\nimport { Typeahead } from 'react-bootstrap-typeahead';\nimport 'react-bootstrap-typeahead/css/Typeahead.css';\nconst Example = () => {\n  const [multiple, setMultiple] = useState(false);\n  return(\n    <Cardbody>\n        <Typeahead\n          id="basic-typeahead"\n          labelKey="name"\n          multiple={multiple}\n          options={options}\n          placeholder="Choose a state..."\n        />\n    </Cardbody>\n  )\n}`}
                  	id="typeaheadcode1"
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-bootstrap-typeahead" target="_blank"> Supplemental  </a>
                </div>
              </div>
            </div>
        </div>
	)
}

export default Form;