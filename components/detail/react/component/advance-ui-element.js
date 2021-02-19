import {useState} from 'react';

import CopyToClipboard from '../../../common/copy-to-clipboard';

const AdvanceUiElement = () => {
	const [active, setActive] = useState('scrollable');
	const [activeTab, setActiveTab] = useState('sweet-alert');
	return(
		<div className="card-body">
	        <hr className="hr" />
	        <h5>Advance UI Elements</h5>
	        <ul className="nav nav-tabs" id="myTab4" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active=='scrollable')? 'active' : ''}`} data-bs-toggle="tab" onClick={()=> setActive('scrollable')} url="#scrollable" role="tab" aria-selected="true" data-original-title="" title="">Scrollable</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='step')? 'active' : ''}`} data-bs-toggle="tab" onClick={()=> setActive('step')} url="#step" role="tab" aria-selected="false" data-original-title="" title="">Step</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='toaster')? 'active' : ''}`} data-bs-toggle="tab" onClick={()=> setActive('toaster')} url="#toaster" role="tab" aria-selected="false" data-original-title="" title="">Toaster</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='tour')? 'active' : ''}`} data-bs-toggle="tab" onClick={()=> setActive('tour')} url="#tour" role="tab" aria-selected="false" data-original-title="" title="">Tour</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='rating')? 'active' : ''}`} data-bs-toggle="tab" onClick={()=> setActive('rating')} url="#rating" role="tab" aria-selected="false" data-original-title="" title="">Rating</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='pagination')? 'active' : ''}`} data-bs-toggle="tab" onClick={()=> setActive('pagination')} url="#pagination" role="tab" aria-selected="true" data-original-title="" title="">Pagination</a></li>
            </ul>
            <div className="tab-content" id="myTabContent4">
              <div className={`tab-pane fade ${(active=='scrollable') ? 'show active' : ''}`} id="scrollable" role="tabpanel">
                <p className="pt-4 pb-2">This is an React wrapper library for the React Scrollbar. To use this library you should get familiar with the Perfect Scrollbar documentation as well since this documentation only explains details specific to this wrapper.</p><b>Installing and usage</b>
                <div className="mb-4">
                  <CopyToClipboard
                  	text={`npm i react-scrollbar`}
                  	id="scrollablecode"
                  />
                  <CopyToClipboard
                  	text={`\nimport ScrollArea from 'react-scrollbar';\nconst Scrollable = () => {\n  return (\n    <CardBody>\n        <ScrollArea \n          horizontal={false}\n          vertical={true}\n        >\n          <div> \n            <img body src={require("../../assets/images/banner/2.jpg")} alt="" width="450" height="600" />\n          </div>\n        </ScrollArea>\n    </CardBody>\n    )\n}`}
                  	id="scrollablecode"
                  />
                 <a className="btn btn-solid" href="https://www.npmjs.com/package/react-scrollbar" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='step') ? 'show active' : ''}`} id="step" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	text={`npm i react-stepzilla`}
                  	id="stepcode"
                  />	
                  <CopyToClipboard
                  	text={`\nexport const  DefaultStep = (props) =>  {\n  return (\n          <Row className="u-steps row">\n            <Col sm="4" className="u-step"><span className="u-step-number">1</span>\n              <div className="u-step-desc"><span className="u-step-title">Shopping</span>\n                <p>Choose what you want</p>\n              </div>\n            </Col>\n            <Col sm="4" className="u-step current"><span className="u-step-number">2</span>\n              <div className="u-step-desc"><span className="u-step-title">Billing</span>\n                <p>Pay for the bill</p>\n              </div>\n            </Col>\n            <Col sm="4" className="u-step"><span className="u-step-number">3</span>\n              <div className="u-step-desc"><span className="u-step-title">Getting</span>\n                <p>Waiting for the goods</p>\n              </div>\n            </Col>\n        </Row>\n  );\n}\n\nimport StepZilla from 'react-stepzilla';\nimport {DefaultStep} from "./StepsComponent";\nconst defaultdtep =[{name: 'Step 1',component:<DefaultStep/>}]\nconst Steps = () => {\n  return (\n    <CardBody>\n      <StepZilla steps={defaultdtep} showSteps={false}  showNavigation={false}/>\n    </CardBody>\n    )\n}`}
                  	id="stepcode1"
                  />	
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-stepzilla" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='toaster') ? 'show active' : ''}`} id="toaster" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	text={`npm i react-toastify`}
                  	id="toastercode"
                  /> 
                  <CopyToClipboard
                  	text={`\nimport { ToastContainer,toast } from 'react-toastify'\n\n<CardBody className="btn-showcase">\n  <Button color="success" onClick={() => toast.success("Success Notification !")}>\n  Success Notification\n  </Button>\n</CardBody>\n<ToastContainer />`}
                  	id="toastercode1"
                  />  	
                 <a className="btn btn-solid" href="https://www.npmjs.com/package/react-toastify" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='tour') ? 'show active' : ''}`} id="tour" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	text={`npm i reactour`}
                  	id="tourcode"
                  /> 
                  <CopyToClipboard
                  	text={`\n  import Tour from 'reactour';\n  \n  const steps = [\n    {\n      selector: '.step1',\n      content: 'This is Profile image',\n    },\n  ]\n  \n  const Tours = (props) =>  {\n    const [opentour,setopentour] = useState(true)\n    const closeTour = () => {\n          setopentour(false);\n        };\n    return(\n      <Tour steps={steps} isOpen={opentour} onRequestClose={closeTour} />\n      <div className="avatar">\n        <Media body className="step1" alt="" src={require("../../assets/images/user/7.jpg")} data-intro="This is Profile image" />\n      </div>\n      )\n  }`}
                  	id="tourcode1"
                  /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/reactour" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='rating') ? 'show active' : ''}`} id="rating" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                	<CopyToClipboard
	                  text={`npm i react-ratings-declarative`}
	                  id="ratingcode"
	                /> 
	                <CopyToClipboard
	                  text={`\n  import Rating from 'react-rating'\n  const [rating,setRating] = useState(5);\n  \n  const Ratingss = (props) => {\n    return (\n            <Rating\n              initialRating={rating}\n              emptySymbol="fa fa-star-o fa-2x"\n              fullSymbol="fa fa-star fa-2x"\n              onChange={(rate) => setRating(rate)} \n            />\n    );\n  }`}
	                  id="ratingcode1"
	                /> 
                    <a className="btn btn-solid" href="https://www.npmjs.com/package/react-ratings-declarative" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='pagination') ? 'show active' : ''}`} id="pagination" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
	                text={`npm i reactstrap`}
	                id="paginationcode"
	              /> 
	              <CopyToClipboard
	                text={`\nimport { Pagination, PaginationItem, PaginationLink } from 'reactstrap';\n<Pagination aria-label="Page navigation" className="pagination-primary">\n  <PaginationItem>\n    <PaginationLink href="#">\n      Previous\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      1\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      2\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      3\n    </PaginationLink>\n  </PaginationItem>\n  <PaginationItem>\n    <PaginationLink href="#">\n      Next\n    </PaginationLink>\n  </PaginationItem>\n</Pagination>`}
	                id="paginationcode"
	              /> 
                  <a className="btn btn-solid" href="https://reactstrap.github.io/components/pagination/" target="_blank"> Supplemental </a>
                </div>
              </div>
            </div>
            <ul className="nav nav-tabs m-t-35" id="myTab5" role="tablist">
              <li className="nav-item"><a className={`nav-link ${activeTab=='sweet-alert' ? 'active' : ''}`} data-bs-toggle="tab" onClick={()=>setActiveTab('sweet-alert')} url="#sweet-alert" role="tab" aria-selected="false" data-original-title="" title="">Sweet alert</a></li>
              <li className="nav-item"><a className={`nav-link ${activeTab=='range-slider' ? 'active' : ''}`} data-bs-toggle="tab" onClick={()=>setActiveTab('range-slider')} url="#range-slider" role="tab" aria-selected="false" data-original-title="" title="">Range slider</a></li>
              <li className="nav-item"><a className={`nav-link ${activeTab=='image-cropper' ? 'active' : ''}`} data-bs-toggle="tab" onClick={()=>setActiveTab('image-cropper')} url="#image-cropper" role="tab" aria-selected="false" data-original-title="" title="">Image Cropper</a></li>
              <li className="nav-item"><a className={`nav-link ${activeTab=='dragdrop' ? 'active' : ''}`} data-bs-toggle="tab" onClick={()=>setActiveTab('dragdrop')} url="#dragdrop" role="tab" aria-selected="false" data-original-title="" title="">Drag and Drop</a></li>
              <li className="nav-item"><a className={`nav-link ${activeTab=='dropzone' ? 'active' : ''}`} data-bs-toggle="tab" onClick={()=>setActiveTab('dropzone')} url="#dropzone" role="tab" aria-selected="false" data-original-title="" title="">Dropzone</a></li>
              <li className="nav-item"><a className={`nav-link ${activeTab=='imageupload' ? 'active' : ''}`} data-bs-toggle="tab" onClick={()=>setActiveTab('imageupload')} url="#imageupload" role="tab" aria-selected="false" data-original-title="" title="">Image Upload</a></li>
            </ul>
            <div className="tab-content" id="myTabContent5">
	          <div className={`tab-pane fade ${(activeTab=='sweet-alert') ? 'show active' : '' }`} id="sweet-alert" role="tabpanel">
	            <p className="pt-4"><b>Installing and usage</b></p>
	            <div className="mb-4">
	              <CopyToClipboard
	              	text={`npm i sweetalert2`}
	              	id="sweetalertcode"
	              />
	              <CopyToClipboard
	              	text={`\nimport SweetAlert from 'sweetalert2'\n\nconst Sweetalert = (props) => {\n  return (\n        <CardBody  className="btn-showcase">\n        <Button color="primary" className="sweet-1" onClick={() => SweetAlert.fire({title:"Hello world!"})}>Basic</Button>\n        <CardBody>\n  )\n}`}
	              	id="sweetalertcode1"
	              />
	              <a className="btn btn-solid" href="https://www.npmjs.com/package/sweetalert2" target="_blank"> Supplemental </a>
	            </div>
	          </div>
	          <div className={`tab-pane fade ${(activeTab=='range-slider') ? 'show active' : '' }`} id="range-slider" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
	                text={`npm i react-input-range`}
	                id="rangeslidercode"
	              /> 
	              <CopyToClipboard
	                text={`\n  import InputRange from 'react-input-range'\n  \n  const RangeSlider = () => {\n    const initialslider = { \n      basicValue:10,\n    }\n    const [values, setValues ] = useState(initialslider); \n   \n    return (\n      <InputRange\n          maxValue={20}\n          minValue={0}\n          value={values.value}\n          onChange={(value) =>\n            setValues({ ...values, value: value })\n          }\n      />\n    )\n  }`}
	                id="rangeslidercode"
	              /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-input-range" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(activeTab=='image-cropper') ? 'show active' : '' }`} id="image-cropper" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
	                text={`npm i react-image-crop`}
	                id="imgcropcode"
	              /> 
	              <CopyToClipboard
	                text={`\nimport ReactCrop from "react-image-crop";\nimport "react-image-crop/dist/ReactCrop.css";\nconst Example = () => {\n  const [crop, setCrop] = useState({ unit: '%', width: 30, aspect: 16 / 9 });\n  return(\n  <ReactCrop\n        src={src}\n        crop={crop}\n        onImageLoaded={onImageLoaded}\n        onComplete={onCropComplete}\n        onChange={onCropChange}\n  />\n  )\n}`}
	                id="imgcropcode1"
	              /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-image-crop" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(activeTab=='dragdrop') ? 'show active' : '' }`} id="dragdrop" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
	                text={`npm i react-dragula`}
	                id="dragdropcode"
	              /> 
	              <CopyToClipboard
	                text={`\nimport dragula from 'react-dragula';\nimport  'node_modules/react-dragula/dist/dragula.css';\nconst DragAndDrop = (props) => {\n  const dragulaDecorator = (componentBackingInstance) => {\n    if (componentBackingInstance) {\n        let options = {};\n        dragula([componentBackingInstance], options);\n        }\n    };\n  return (\n    <Container  ref={dragulaDecorator}>\n      <div>Swap me around</div>\n      <div>Swap her around</div>\n      <div>Swap him around</div>\n      <div>Swap them around</div>\n      <div>Swap us around</div>\n      <div>Swap things around</div>\n      <div>Swap everything around</div>\n    </Container>\n  )\n}`}
	                id="dragdropcode1"
	              /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-dragula" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(activeTab=='dropzone') ? 'show active' : '' }`} id="dropzone" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
	                text={`npm i react-dropzone-uploader`}
	                id="dropzonecode"
	              /> 
	              <CopyToClipboard
	                text={`\nimport Dropzone from 'react-dropzone-uploader'\nimport 'react-dropzone-uploader/dist/styles.css'\n \nconst Dropzones = () => {\n	\n    /* specify upload params and url for your files*/\n    const getUploadParams = ({ meta }) => { return { url: 'https://httpbin.org/post' } }\n    \n    /* called every time a file's 'status' changes */ \n    const handleChangeStatus = ({ meta, file }, status) => { console.log(status, meta, file) }\n    \n    \n    /* receives array of files that are done uploading when submit button is clicked*/ \n    const handleSubmit = (files) => { console.log(files.map(f => f.meta)) }\n    \n    return (\n        <Dropzone\n            getUploadParams={getUploadParams}\n            onChangeStatus={handleChangeStatus}\n            onSubmit={handleSubmit}\n            accept="image/*,audio/*,video/*"\n            multiple={false}\n            canCancel={false}\n        />\n    )\n}`}
	                id="dropzonecode1"
	              /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-dropzone-uploader" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(activeTab=='imageupload') ? 'show active' : '' }`} id="imageupload" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
	                text={`npm i react-images-upload`}
	                id="uploadcode"
	              /> 
	              <CopyToClipboard
	                text={`\nimport ImageUploader from 'react-images-upload';\n\nconst UploadImage = () =>  {\n  const [image,setimage] = useState({ pictures: [] })\n  \n  const onDrop = (pictureFiles, pictureDataURLs) => {\n        setimage({...image,pictureFiles\n        });\n    }\n  return (\n      <ImageUploader\n            withIcon={false}\n            withPreview={true}\n            label=""\n            buttonText="Upload Images"\n            onChange={onDrop}\n            imgExtension={[".jpg", ".gif", ".png", ".gif", ".svg"]}\n            maxFileSize={1048576}\n            fileSizeError=" file size is too big"\n      />\n  )\n}`}
	                id="uploadcode1"
	              /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-images-upload" target="_blank"> Supplemental </a>
                </div>
              </div>
	        </div>
	    </div>
	)
}
export default AdvanceUiElement;