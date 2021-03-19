import { useState } from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const AdvanceUiElement = () => {
  const [active, setActive] = useState('scrollable');
  const [activeAE, setActiveAE] = useState('range-slider');
	return(
		<div class="card-body">
            <hr class="hr" />
            <h5>Advance UI Elements</h5>
            <ul class="nav nav-tabs" id="myTab4" role="tablist">
              <li class="nav-item"><a class={`nav-link ${(active=='scrollable') ? 'active' : ''}`} data-bs-toggle="tab" url="#scrollable" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('scrollable')}>Scrollable</a></li>
              <li class="nav-item"><a class={`nav-link ${(active=='treeview') ? 'active' : ''}`} data-bs-toggle="tab" url="#treeview" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('treeview')}>Treeview</a></li>
              <li class="nav-item"><a class={`nav-link ${(active=='owlcomponent') ? 'active' : ''}`} data-bs-toggle="tab" url="#owlcomponent" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('owlcomponent')}>Owl Carousel</a></li>
              <li class="nav-item"><a class={`nav-link ${(active=='tour') ? 'active' : ''}`} data-bs-toggle="tab" url="#tour" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('tour')}>Tour</a></li>
              <li class="nav-item"><a class={`nav-link ${(active=='rating') ? 'active' : ''}`} data-bs-toggle="tab" url="#rating" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('rating')}>Rating</a></li>
              <li class="nav-item"><a class={`nav-link ${(active=='sweetalert') ? 'active' : ''}`} data-bs-toggle="tab" url="#sweetalert" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('sweetalert')}>Sweet-Alert</a></li>
            </ul>
            <div class="tab-content" id="myTabContent4">
              <div class={`tab-pane fade ${(active=='scrollable') ? 'show active' : ''}`} id="scrollable" role="tabpanel">
                <p class="pt-4 pb-2">This is an Angular wrapper library for the Perfect Scrollbar. To use this library you should get familiar with the Perfect Scrollbar documentation as well since this documentation only explains details specific to this wrapper.</p><b>Installing and usage</b>
                <div class="mb-4">
                  <CopyToClipboard
                  	id="scrollablecode"
                  	text="npm install ngx-perfect-scrollbar --save"
                  /> 

                  <CopyToClipboard
                  	id="scrollablecode1"
                  	text={`<perfect-scrollbar style="max-width: 600px; max-height: 400px;" [config]="config"> Scrollable content </perfect-scrollbar>`}
                  />

                  <CopyToClipboard
                    id="scrollablecode2"
                    text={`\n import { PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';\n export class ScrollableComponent implements OnInit\n {\n constructor() { }\n\n ngOnInit() { }\n \n public config: PerfectScrollbarConfigInterface =\n {\n suppressScrollX: false,\n wheelPropagation: false,\n useBothWheelAxes : true\n };\n }`}
                  />
                 <a class="btn btn-solid" href="https://www.npmjs.com/package/ngx-perfect-scrollbar" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div class={`tab-pane fade ${(active=='treeview') ? 'show active' : ''}`} id="treeview" role="tabpanel">
                <p class="pt-4"><b>Installing and usage</b></p>
                <div class="mb-4">
                  <CopyToClipboard
                    id="treecode"
                    text={`npm i ngx-treeview`}
                  />
                  <CopyToClipboard
                    id="treecode1"
                    text={`<ngx-treeview [config]="config" [items]="items" (selectedChange)="onSelectedChange($event)" (filterChange)="onFilterChange($event)"> </ngx-treeview>`}
                  />
                  <CopyToClipboard
                    id="treecode2"
                    text={`\n import { Component, OnInit } from '@angular/core';\n import { TreeviewConfig, TreeviewItem } from 'ngx-treeview';\n import { TreeViewService } from 'src/app/shared/services/advance/tree-view/tree-view.service';\n                     \n @Component({\n selector: 'app-tree-view',\n templateUrl: './tree-view.component.html',\n styleUrls: ['./tree-view.component.scss']\n })\n export class TreeViewComponent implements OnInit {\n public config =TreeviewConfig.create(\n {\n hasAllCheckBox: false,\n hasFilter: false,\n hasCollapseExpand: false,\n decoupleChildFromParent: false,\n maxHeight: 500\n })\n public items: TreeviewItem[];\n constructor( private service: TreeViewService) { }\n \n ngOnInit(): void {\n this.items = this.service.getItems();\n }\n \n }`}
                  />
                  <a class="btn btn-solid" href="https://www.npmjs.com/package/ngx-treeview" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div class={`tab-pane fade ${(active=='owlcomponent') ? 'show active' : ''}`} id="owlcomponent" role="tabpanel">
                <p class="pt-4"><b>Installing and usage</b></p>
                <div class="mb-4">
                  <CopyToClipboard
                    id="owlcode"
                    text={`npm i ngx-owl-carousel-o`}
                  />  
                  <CopyToClipboard
                    id="owlcode1"
                    text={`\n <div>Some tags before</div>\n\n <owl-carousel-o [options]="customOptions">\n\n <ng-template carouselSlide>Slide 1</ng-template>\n\n <ng-template carouselSlide>Slide 2</ng-template>\n\n <ng-template carouselSlide>Slide 3</ng-template>\n\n </owl-carousel-o>`}
                  />
                  <CopyToClipboard
                    id="owlcode2"
                    text={`\n @Component({\n\n selector: '....',\n\n templateUrl: 'carousel-holder.component.html'\n\n })\n\n export class CarouselHolderComponent {\n\n customOptions: any = {\n\n loop: true,\n\n mouseDrag: false,\n\n touchDrag: false,\n\n pullDrag: false,\n\n dots: false,\n\n navSpeed: 700,\n\n navText: ['', ''],\n\n responsive: {\n\n 0: {\n\n items: 1\n\n },\n\n 400: {\n\n items: 2\n\n },\n\n 740: {\n\n items: 3\n\n },\n\n 940: {\n\n items: 4\n\n }\n\n },\n\n nav: true\n\n }\n\n }\n`}
                  /> 
                  <a class="btn btn-solid" href="https://www.npmjs.com/package/ngx-owl-carousel-o" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div class={`tab-pane fade ${(active=='tour') ? 'show active' : ''}`} id="tour" role="tabpanel">
                <p class="pt-4"><b>Installing and usage</b></p>
                <div class="mb-4">
                  <CopyToClipboard
                    id="tourcode"
                    text={`npm i angular-custom-tour`}
                  />  
                  <CopyToClipboard
                    id="tourcode1"
                    text={`\n <!-- Bluring element insert on top of the page-->\n\n <tour-overlay></tour-overlay>\n\n \n\n <!-- start TOUR -->\n\n <button name="button" (click)="startTour()"> START!</button>\n\n \n\n <!-- Each step could be placed at ANYWHERE -->\n\n <div class="i-want-highlight-this" id="highlight-me"> WOW!</div>\n\n \n\n <tour-step selector="highlight-me" order="3" position="right" title="title string">\n\n <!-- ANY HTML HERE\n NOTE: ONLY selector attribute is required! others is up to you\n -->\n\n \n\n </tour-step>`}
                  />  
                  <a class="btn btn-solid" href="https://www.npmjs.com/package/angular-custom-tour" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div class={`tab-pane fade ${(active=='rating') ? 'show active' : ''}`} id="rating" role="tabpanel">
                <p class="pt-4"><b>Installing and usage</b></p>
                 <CopyToClipboard
                    id="ratingcode"
                    text={`npm install @ng-bootstrap/ng-bootstrap`}
                  /> 
                  <CopyToClipboard
                    id="ratingcode1"
                    text={`<ngb-rating [(rate)]="currentRate"></ngb-rating>`}
                  /> 
                  <a class="btn btn-solid" href="https://ng-bootstrap.github.io/#/components/rating/api" target="_blank"> Supplemental </a>
              </div>
              <div class={`tab-pane fade ${(active=='sweetalert') ? 'show active' : ''}`} id="sweetalert" role="tabpanel">
                <p class="pt-4"><b>Installing and usage</b></p>
                <div class="mb-4">
                  <CopyToClipboard
                    id="sweetalertcode"
                    text={`npm install --save sweetalert2`}
                  /> 
                  <CopyToClipboard
                    id="sweetalertcode1"
                    text={` \n <div class="card-body btn-showcase">\n\n   <button type="button" class="btn btn-primary" (click)="basicAlert()">Basic</button>\n\n </div>`}
                  /> 
                  <CopyToClipboard
                    id="sweetalertcode2"
                    text={`\n /* ES6 Modules or TypeScript */ \n\n import Swal from 'sweetalert2'\n\n \n\n /* CommonJS*/ \n\n const Swal = require('sweetalert2')\n\n ...\n\n /*method call */ \n\n basicAlert()\n {\n\n Swal.fire('Any fool can use a computer')\n\n }`}
                  /> 
                  <a class="btn btn-solid" href="https://www.npmjs.com/package/angular-sweetalert-2" target="_blank"> Supplemental </a>
                </div>
              </div>
            </div>
            <ul class="nav nav-tabs m-t-35" id="myTab5" role="tablist">
              <li class="nav-item"><a class={`nav-link ${(activeAE == 'range-slider' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#range-slider" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('range-slider')}>Range slider</a></li>
              <li class="nav-item"><a class={`nav-link ${(activeAE == 'image-cropper' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#image-cropper" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('image-cropper')}>Image Cropper</a></li>
              <li class="nav-item"><a class={`nav-link ${(activeAE == 'imageupload' ) ? 'active' : ''}`} data-bs-toggle="tab" url="#imageupload" role="tab" aria-selected="false" data-original-title="" title="" onClick={() => setActiveAE('imageupload')}>Image Upload</a></li>
            </ul>
            <div class="tab-content" id="myTabContent5">
              <div class={`tab-pane fade ${(activeAE == 'range-slider') ? 'show active' : ''}`} id="range-slider" role="tabpanel">
                <p class="pt-4"><b>Installing and usage</b></p>
                <div class="mb-4">
                  <CopyToClipboard
                    id="rangeslidercode"
                    text={`npm i ng5-slider`}
                  /> 
                  <CopyToClipboard
                    id="rangeslidercode1"
                    text={`<ng5-slider [(value)]="value" [options]="options"></ng5-slider>`}
                  /> 
                  <CopyToClipboard
                    id="rangeslidercode2"
                    text={`\n import { Options } from 'ng5-slider';\n\n     ...\n\n @Component({...})\n\n     export class AppComponent {\n\n     value: number = 100;\n\n       options: Options = {\n\n       loor: 0,\n\n       floor: 0,\n\n       ceil: 200\n\n       };\n\n     }`}
                  /> 
                  <a class="btn btn-solid" href="https://www.npmjs.com/package/ng5-slider" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div class={`tab-pane fade ${(activeAE == 'image-cropper') ? 'show active' : ''}`} id="image-cropper" role="tabpanel">
                <p class="pt-4"><b>Installing and usage</b></p>
                <div class="mb-4">
                  <CopyToClipboard
                    id="imgcroppercode"
                    text={`npm i ngx-image-cropper`}
                  /> 
                  <CopyToClipboard
                    id="imgcroppercode1"
                    text={` <image-cropper [imageChangedEvent]="imageChangedEvent" [maintainAspectRatio]="true" [containWithinAspectRatio]="containWithinAspectRatio" [aspectRatio]="4 / 3" [resizeToWidth]="256" [cropperMinWidth]="128" [onlyScaleDown]="true" [roundCropper]="false" [canvasRotation]="canvasRotation" [transform]="transform" [alignImage]="'left'" [style.display]="showCropper ? null : 'none'" format="png"  (imageCropped)="imageCropped($event)" (imageLoaded)="imageLoaded()" (cropperReady)="cropperReady($event)" (loadImageFailed)="loadImageFailed()" >`}
                  /> 
                  <CopyToClipboard
                    id="imgcroppercode2"
                    text={`\n  import { Component, OnInit } from '@angular/core';\n   import { ImageTransform, ImageCroppedEvent, base64ToFile, Dimensions } from 'ngx-image-cropper';\n  \n  @Component({\n  selector: 'app-image-croper',\n  templateUrl: './image-croper.component.html',\n  styleUrls: ['./image-croper.component.scss']\n  })\n  export class ImageCroperComponent {\n  imageChangedEvent: any = '';\n  croppedImage: any = '';\n  canvasRotation = 0;\n  rotation = 0;\n  scale = 1;\n  showCropper = false;\n  containWithinAspectRatio = false;\n  transform: ImageTransform = {};\n\n  fileChangeEvent(event: any): void {\n  this.imageChangedEvent = event;\n  }\n\n  imageCropped(event: ImageCroppedEvent) {\n  this.croppedImage = event.base64;\n  console.log(event, base64ToFile(event.base64));\n  }\n\n  imageLoaded() {\n  this.showCropper = true;\n  console.log('Image loaded');\n  }\n\n  cropperReady(sourceImageDimensions: Dimensions) {\n  console.log('Cropper ready', sourceImageDimensions);\n  }\n\n  loadImageFailed() {\n  console.log('Load failed');\n  }\n\n  rotateLeft() {\n  this.canvasRotation--;\n  this.flipAfterRotate();\n  }\n\n  rotateRight() {\n  this.canvasRotation++;\n  this.flipAfterRotate();\n  }\n\n   private flipAfterRotate() {\n  const flippedH = this.transform.flipH;\n  const flippedV = this.transform.flipV;\n this.transform = {\n ...this.transform,\n flipH: flippedV,\n flipV: flippedH\n };\n }\n\n\n flipHorizontal() {\n this.transform = {\n ...this.transform,\n flipH: !this.transform.flipH\n };\n }\n\n flipVertical() {\n this.transform = {\n ...this.transform,\n flipV: !this.transform.flipV\n };\n }\n\n resetImage() {\n this.scale = 1;\n this.rotation = 0;\n this.canvasRotation = 0;\n this.transform = {};\n }\n\n zoomOut() {\n this.scale -= .1;\n this.transform = {\n ...this.transform,\n scale: this.scale\n };\n }\n\n zoomIn() {\n this.scale += .1;\n this.transform = {\n ...this.transform,\n scale: this.scale\n };\n }\n\n toggleContainWithinAspectRatio() {\n this.containWithinAspectRatio = !this.containWithinAspectRatio;\n }\n\n updateRotation() {\n this.transform = {\n ..this.transform,\n rotate: this.rotation\n };\n }\n }`}
                  /> 
                  <a class="btn btn-solid" href="https://www.npmjs.com/package/ngx-image-cropper" target="_blank"> Supplemental </a>
                </div>
              </div>
              <div class={`tab-pane fade ${(activeAE == 'imageupload') ? 'show active' : ''}`} id="imageupload" role="tabpanel">
                <p class="pt-4"><b>Installing and usage</b></p>
                <div class="mb-4">
                  <CopyToClipboard
                    id="uploadcode"
                    text={`npm i ngx-dropzone-wrapper`}
                  /> 
                  
                  <CopyToClipboard
                    id="uploadcode1"
                    text={`\n <div class="card-body">\n\n <div class="dropzone dropzone-primary" [dropzone]="config1" (error)="onUploadError($event)" (success)="onUploadSuccess($event)">\n\n <div class="dz-message needsclick">\n\n ............\n\n </div>\n\n </div>\n\n </div>\n`}
                  /> 
                  
                  <CopyToClipboard
                    id="uploadcode2"
                    text={`\n import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';\n\n public config1: DropzoneConfigInterface = {\n\n clickable: true,\n\n maxFiles: 1,\n\n autoReset: null,\n\n errorReset: null,\n\n cancelReset: null\n\n }`}
                  /> 
                  <a class="btn btn-solid" href="https://www.npmjs.com/package/ngx-dropzone-wrapper" target="_blank"> Supplemental </a>
                </div>
              </div>
            </div>
        </div>
	)
}
export default AdvanceUiElement;