import React, { useState, useEffect, useContext } from 'react';
import FeatherIcon from 'feather-icons-react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
const AngularCredit = () => {
  const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 

  const headerContext = useContext(HeaderContext);
  const HeaderContextObj = headerContext.HeaderContext;

  useEffect(()=>{
    setFontSizeLocal('font-'+HeaderContextObj.fontSize);
  },[HeaderContextObj])

	return(
		<Layout>
			<div className={`col-lg-9 content ${fontSizeLocal}`}>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="main-title">Credits</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <ul className="credits-list mb-0">
                      <li><a href="https://nodejs.org/en/">node.js </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://angular.io">Angular CLI </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://https://angular.io/cli/serve">Deployment </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://ng-bootstrap.github.io/#/home">Angular Bootstrap </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ngx-perfect-scrollbar">Perfect Scrollbar </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ngx-toastr">Toaster </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ngx-joyride-demo">Tour </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://ng-bootstrap.github.io/#/components/rating/api">Rating </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/sweetalert2">Alert </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ng5-slider">Range Bar </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ngx-dropzone-wrapper">File Upload </a><FeatherIcon icon="link" /></li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-md-4 col-sm-6">
                    <ul className="credits-list mb-0">
                      <li><a href="https://valor-software.com/ngx-bootstrap/#/datepicker">Date Picker </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/@ng-select/ng-select">Select</a><FeatherIcon icon="link" /></li>
                      <li><a href="https://valor-software.com/ngx-bootstrap/#/typeahead">Typeahead </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ng2-google-charts">Google Charts </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://apexcharts.com/angular-chart-demos">apex Charts </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/@swimlane/ngx-charts">ngx-Charts</a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ng-chartist">Chartist </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/@agm/core">Google Map </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/@asymmetrik/ngx-leaflet">Leaflet Map </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ngx-image-cropper">Image Cropper </a><FeatherIcon icon="link" /></li>
                    </ul>
                  </div>
                  <div className="col-md-4">
                    <ul className="credits-list mb-0">
                      <li><a href="https://www.npmjs.com/package/ngx-editor">NGX Editor </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ngx-simplemde">Simple Mde Editor </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/angular-calendar">Calender </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/@ks89/angular-modal-gallery">Gallery </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ngx-owl-carousel-o">Slider </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/@angular/fire">Firebase </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/vue2-editor">Editor </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/@ckeditor/ckeditor5-angular">CK Editor </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/ng2-ace-editor">ACE Editor </a><FeatherIcon icon="link" /></li>
                      <li><a href="https://www.npmjs.com/package/@swimlane/ngx-datatable">Smart Table </a><FeatherIcon icon="link" /></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
		</Layout>
	)
}
export default AngularCredit;