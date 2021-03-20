import { useState } from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const AdvanceUiElement = () => {
  const [active, setActive] = useState('scrollable');
  const [activeAE, setActiveAE] = useState('range-slider');
	return(
		<div className="card-body">
            <hr className="hr" />
            <h5>Advance UI Elements</h5>
            <ul className="nav nav-tabs" id="myTab4" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active=='scrollable') ? 'active' : ''}`} data-bs-toggle="tab" url="#scrollable" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('scrollable')}>Scrollable</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='toaster') ? 'active' : ''}`} data-bs-toggle="tab" url="#toaster" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('toaster')}>Toaster</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='tour') ? 'active' : ''}`} data-bs-toggle="tab" url="#tour" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('tour')}>Tour</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='rating') ? 'active' : ''}`} data-bs-toggle="tab" url="#rating" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('rating')}>Rating</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='pagination') ? 'active' : ''}`} data-bs-toggle="tab" url="#pagination" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('pagination')}>Pagination</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='sweetalert') ? 'active' : ''}`} data-bs-toggle="tab" url="#sweetalert" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('sweetalert')}>Sweet-Alert</a></li>
            </ul>
            <div className="tab-content" id="myTabContent4">
              <div className={`tab-pane fade ${(active=='scrollable') ? 'show active' : ''}`} id="scrollable" role="tabpanel">
                <p className="pt-4 pb-2">This is an Vue wrapper library for the Perfect Scrollbar. To use this library you should get familiar with the Perfect Scrollbar documentation as well since this documentation only explains details specific to this wrapper.</p><b>Installing and usage</b>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="scrollablecode"
                  	text="npm i vue-perfect-scrollbar"
                  /> 
                  <CopyToClipboard
                  	id="scrollablecode1"
                  	text={`\n <template>\n   <div>\n     <VuePerfectScrollbar className="scroll-area" v-once :settings="settings">\n         <img src="../../assets/images/banner/3.jpg" alt="girl" width="800" height="600"\n     </VuePerfectScrollbar>\n   </div>\n </template>\n <script>\n   export default {\n        data() {\n       return {\n         settings: {\n           maxScrollbarLength: 60\n         },\n       }\n     },\n     components: {\n       VuePerfectScrollbar\n     }\n   }\n </script>`}
                  />
                 <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-perfect-scrollbar" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='toaster') ? 'show active' : ''}`} id="toaster" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="toastercode"
                    text={`npm install vue-toasted --save`}
                  />
                  <CopyToClipboard
                    id="toastercode1"
                    text={`\n <template>\n   <div>\n       <b-button @click="success" variant="success">Success</b-button>\n   </div>\n </template>\n <script>\n   export default {\n    methods:{\n      success()\n      {\n        this.$toasted.show(" New order has been placed ", {theme: 'outline',position: "top-right", type: 'success', duration: 2000});\n      }\n    }\n   }\n </script>`}
                  />
               
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-toasted" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='tour') ? 'show active' : ''}`} id="tour" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="tourcode"
                    text={`npm i vue-tour`}
                  />  
                  <CopyToClipboard
                    id="tourcode1"
                    text={`\n <template>\n   <div>\n     <v-tour name="myTour" :steps="steps" :options="tourOptions"></v-tour>\n   </div>\n </template>\n <script>\n   export default {\n       data () {\n         return {\n           tourOptions: {\n              useKeyboardNavigation: true,\n              labels: {\n               buttonSkip: 'Skip',\n               buttonPrevious: 'Back',\n               buttonNext: 'Next',\n               buttonStop: 'Done'\n            }\n           },\n           steps: [\n            {\n               target: '#profile-tour',\n               content: 'This is Profile image'\n            },\n            {\n               target: '#update-profile-tour',\n               content: 'Change Profile image here'\n            }\n           ]\n         }\n       },\n       mounted: function () {\n         this.$tours['myTour'].start()\n       }\n   }\n </script>`}
                  />  
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-tour" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='rating') ? 'show active' : ''}`} id="rating" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                 <CopyToClipboard
                    id="ratingcode"
                    text={`npm i vue-rate-it`}
                  /> 
                  <CopyToClipboard
                    id="ratingcode1"
                    text={`\n <template>\n   <div>\n       <image-rating :src="rectanglerating()" :item-size="12" :max-rating="10"></image-rating>\n   </div>\n </template>\n <script>\n   import {ImageRating} from 'vue-rate-it';\n   \n   export default {\n     components: {\n       ImageRating\n     },\n     methods:{\n      vuelogo(){\n         var vuelogo = require('../../assets/images/vuelogo.png');\n       return vuelogo;\n      }\n     }\n   }\n </script>`}
                  /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-rate-it" target="_blank"> Supplemental </a>
              </div>
              <div className={`tab-pane fade ${(active=='pagination') ? 'show active' : ''}`} id="pagination" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="paginationcode"
                    text={`\n <template>\n   <div>\n       <b-pagination-nav\n           :number-of-pages="3"\n           base-url="#"\n           first-text="First"\n           prev-text="Prev"\n           next-text="Next"\n           last-text="Last"\n           >\n       </b-pagination-nav>\n   </div>\n </template>\n <script>\n    export default { }\n </script>`}
                  />  
                  <a className="btn btn-solid" href="https://bootstrap-vue.org/docs/components/pagination-nav" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='sweetalert') ? 'show active' : ''}`} id="sweetalert" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="sweetalertcode"
                    text={`npm i vue-sweetalert2`}
                  /> 
                  <CopyToClipboard
                    id="sweetalertcode1"
                    text={` \n <template>\n   <div>\n     <b-button type="button" v-on:click="basic" variant="primary">Basic</b-button>\n   </div>\n </template>\n <script>\n   export default {\n       methods:{\n       basic:function(){\n           this.$swal({\n               title:'Hello world!'\n           });\n         }\n       }\n    }\n </script>`}
                  /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-sweetalert2" target="_blank"> Supplemental  </a>
                </div>
              </div>
            </div>
            <ul className="nav nav-tabs m-t-35" id="myTab5" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(activeAE == 'range-slider' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#range-slider" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('range-slider')}>Range slider</a></li>
              <li className="nav-item"><a className={`nav-link ${(activeAE == 'image-cropper' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#image-cropper" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('image-cropper')}>Image Cropper</a></li>
              <li className="nav-item"><a className={`nav-link ${(activeAE == 'dragdrop' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#dragdrop" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('dragdrop')}>Drag and Drop</a></li>
              <li className="nav-item"><a className={`nav-link ${(activeAE == 'imageupload' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#imageupload" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('imageupload')}>Image Upload</a></li>
            </ul>
            <div className="tab-content" id="myTabContent5">
              <div className={`tab-pane fade ${(activeAE == 'range-slider') ? 'show active' : ''}`} id="range-slider" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="rangeslidercode"
                    text={`npm i vue-slide-bar`}
                  /> 
                  <CopyToClipboard
                    id="rangeslidercode1"
                    text={`\n <template>\n   <div>\n     <VueSlideBar v-model="one.value" :min="1" :max="100" :range="one.range" ></VueSlideBar>\n   </div>\n </template>\n <script>\n   import VueSlideBar from 'vue-slide-bar'\n                                    export default {\n   data () {\n   return {\n         one:{\n           value:5,\n           range:[\n             {\n               label: '10'\n             },\n             {\n               label: '100'\n             },\n           ]\n         }\n       }\n     }\n   }\n </script>`}
                  /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-slide-bar" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(activeAE == 'image-cropper') ? 'show active' : ''}`} id="image-cropper" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="imgcroppercode"
                    text={`npm i vue-cropperjs`}
                  /> 
                  <CopyToClipboard
                    id="imgcroppercode1"
                    text={`\n <template>\n   <div>\n      <vue-cropper ref='cropper'  :crop="cropImage"> </vue-cropper>\n   </div>\n </template>\n <script>\n   import VueCropper from 'vue-cropperjs';\n   import 'cropperjs/dist/cropper.css';\n    \n   export default {\n     data () {\n       return {\n         one:{\n           value:5,\n           range:[\n             {\n               label: '10'\n             },\n             {\n              label: '100'\n             },\n           ]\n         }\n       }\n     }\n   },\n   components: {\n     VueCropper,\n   },\n   mounted(){\n     this.imageData = this.$refs.cropper.getData();\n   },\n </script>`}
                  /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-cropperjs" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(activeAE == 'dragdrop') ? 'show active' : ''}`} id="dragdrop" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="dragdropcode"
                    text={`npm i vue2-dragula`}
                  /> 
                  <CopyToClipboard
                    id="dragdropcode"
                    text={`\n <template>\n   <div>\n     <div className="pull-left " v-dragula="colOne" service="my-third" drake="a">\n       <div v-for="text in colOne" :key="text">{{text}}</div>\n     </div>\n     <div className="pull-right" v-dragula="colTwo" service="my-third" drake="a">\n       <div v-for="text in colTwo" :key="text">{{text}}</div>\n     </div>\n   </div>\n </template>\n <script>\n   import { Vue2Dragula } from 'vue2-dragula'\n   export default {\n     data () {\n       return {\n        one: [\n             'Lorem ipsum dolor sit amet, consectetur',\n             'sed do eiusmod tempor incididunt ut labore et dolore magna.',\n             'Ut enim ad minim veniam, quis nostrud exercitation',\n             'ullamco laboris nisi ut aliquip ex ea commodo consequat.'\n         ],\n         two: [\n             'Duis aute irure dolor in reprehenderit in voluptate velit esse',\n             'cillum dolore eu fugiat nulla pariatur.',\n             'Excepteur sint occaecat cupidatat non proident,',\n             'sunt in culpa qui officia deserunt mollit anim id est laborum.'\n         ],\n       }\n     }\n   },\n   components: {\n           Vue2Dragula\n   },\n   mounted(){\n       this.imageData = this.$refs.cropper.getData();\n   },\n </script>`}
                  /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue2-dragula" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(activeAE == 'imageupload') ? 'show active' : ''}`} id="imageupload" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="uploadcode"
                    text={`npm i vue2-dropzone`}
                  /> 
                  <CopyToClipboard
                    id="uploadcode1"
                    text={`\n <template>\n   <div>\n     <vue-dropzone id="singledropzone" :options="singledropzoneOptions" className="dropzone digits">                                \n     </vue-dropzone>\n   </div>\n </template>\n <script>\n   import vue2Dropzone from 'vue2-dropzone'\n   export default {\n     data () {\n       return {\n         singledropzoneOptions:{\n           url:"<a href="http://localhost:8080" aria-invalid="true">http://localhost:8080</a>",\n           thumbnailWidth: 150,\n           maxFiles:1,\n           maxFilesize: 2,\n           addRemoveLinks: true,\n           dictDefaultMessage:"<i className='icon-cloud-up'></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>"\n         },\n       }\n     }\n   },\n   components: {\n       vueDropzone: vue2Dropzone\n   }\n </script>`}
                  /> 
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue2-dropzone" target="_blank"> Supplemental </a>
                </div>
              </div>
            </div>
        </div>
	)
}
export default AdvanceUiElement;