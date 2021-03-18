import {useState} from 'react';

import CopyToClipboard from '../../common/copy-to-clipboard';
const Editors = () => {
	const [active, setActive] = useState('simpleeditor');

	return(
		<div className="card-body">
            <hr/>
            <h5>Editors</h5>
            <ul className="nav nav-tabs" id="myTab14" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active=='simpleeditor') ? 'active' : ''}`} data-bs-toggle="tab" url="#simpleeditor" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('simpleeditor')}>Simple Editor</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='simple-mde') ? 'active' : ''}`} data-bs-toggle="tab" url="#simple-mde" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('simple-mde')}>MDE Editor</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='ace-code') ? 'active' : ''}`} data-bs-toggle="tab" url="#ace-code" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('ace-code')}>ACE Code</a></li>
            </ul>
            <div className="tab-content" id="myTabContent14">
            	<div className={`tab-pane fade ${(active=='simpleeditor') ? 'show active' : ''}`} id="simpleeditor" role="tabpanel">
	                <p className="pt-4"><b>Installing and usage</b></p>
	                <div className="mb-4">
	                  <CopyToClipboard
		              	text={`npm i react-ckeditor-component`}
		              	id="editorcode"
		              /> 
		              <CopyToClipboard
		              	text={`\nimport CKEditors from "react-ckeditor-component";\nconst [content,setContent] = useState('content')\nconst onChange = (evt) => {\n    const newContent = evt.editor.getData();\n    setContent(newContent)\n}\nconst Editor =  () =>  {\n  return (\n    <CKEditors\n          activeclassName="p10"\n          content={content}\n          events={{\n              "change": onChange\n          }}\n    />\n    )\n}`}
		              	id="editorcode1"
		              /> 
	                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-ckeditor-component" target="_blank"> Supplemental</a>
	                </div>
	            </div>
	            <div className={`tab-pane fade ${(active=='simple-mde') ? 'show active' : ''}`} id="simple-mde" role="tabpanel">
                    <p className="pt-4"><b>Installing and usage</b></p>
                    <div className="mb-4">
                      <CopyToClipboard
		              	text={`npm i react-simplemde-editor`}
		              	id="mdecode"
		              /> 
		              <CopyToClipboard
		              	text={`\nimport SimpleMDE from "react-simplemde-editor";\n\nconst [text,setText] = useState('Enter text in the area on the left. For more info, click the ? (help) icon in the menu.')\n\nconst handleChange = () => {\n    setText("Enter text in the area on the left. For more info, click the ? (help) icon in the menu.")\n}\n\nconst MdeEDitor  =  () =>  {\n  return (\n    <SimpleMDE\n          id="editor_container"\n          onChange={handleChange}\n          value={text}\n          options={{\n              autofocus: true,\n              spellChecker: false\n          }}\n    />\n    )\n}`}
		              	id="mdecode1"
		              /> 
                      <a className="btn btn-solid" href="https://www.npmjs.com/package/react-simplemde-editor" target="_blank"> Supplemental</a>
                    </div>
                </div>
                <div className={`tab-pane fade ${(active=='ace-code') ? 'show active' : ''}`} id="ace-code" role="tabpanel">
	                <p className="pt-4"><b>Installing and usage</b></p>
	                <div className="mb-4">
	                  <CopyToClipboard
		              	text={`npm i react-ace`}
		              	id="acecode"
		              /> 
		              <CopyToClipboard
		              	text={`\n\nimport AceEditor from "react-ace";\n\nimport "ace-builds/webpack-resolver";\n\nimport "ace-builds/src-noconflict/theme-monokai";\n\nconst AceCodeEditor  =  () =>  {\n\n  return (\n\n    <AceEditor\n\n        mode="javascript"\n\n        theme="monokai"\n\n        fontSize={14}\n\n        showPrintMargin={true}\n\n        showGutter={true}\n\n        highlightActiveLine={true}\n\n        height="100%"\n\n        width="100%"\n\n        value={'  \n\n        /* Sample JavaScript edit source */\n\n        /* Define a module*/\n\n        var app = angular.module('app', ['ui.bootstrap']);\n\n        /* Define a conroller.*/\n\n        app.controller('GrokController', ['$scope', '$filter',\n\n        function($scope, $filter) {\n\n        $scope.today = function() {\n\n        $scope.dt = new Date();\n\n        };\n\n        $scope.today();\n\n        $scope.isOpened = false;\n\n        $scope.open = function($event) {\n\n        $event.preventDefault();\n\n        $event.stopPropagation();\n\n        $scope.isOpened = true;\n\n        };\n\n        }]);\n\n        /* End of sample edit source */'}\n\n        editorProps={{ $blockScrolling: true }}\n\n        setOptions={{\n\n        showLineNumbers: true,\n\n        tabSize: 1,\n\n        }}\n\n    />\n\n  )\n\n}`}
		              	id="acecode1"
		              /> 
	                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-ace" target="_blank"> Supplemental</a>
	                </div>
	            </div>
            </div>
        </div>
	)
}
export default Editors;