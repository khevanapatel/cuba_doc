import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import FeatherIcon from 'feather-icons-react';

import Layout from '../components/common/layout';
const ReactCredits = () => {
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
                          <li><a href="https://reactjs.org/docs/getting-started.html">React CLI </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://reactjs.org/docs/create-a-new-react-app.html">Deployment </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://reactstrap.github.io/">Reactstrap Bootstrap-4 </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-scrollbar">React Scrollbar </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-toastify">Toaster </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/reactour">Tour </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-ratings-declarative">Rating </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-slick">Slider </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/emoji-mart">Emoji  </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-to-print">Print  </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-hook-form">Form Validation  </a><FeatherIcon icon="link" /></li>
                        </ul>
                      </div>
                      <div className="col-xl-3 col-md-4 col-sm-6">
                        <ul className="credits-list mb-0">
                          <li><a href="https://www.npmjs.com/package/react-bootstrap-sweetalert">Sweet-Alert </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-input-range">Range Bar </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-image-crop">Image Cropper </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-dragula">Drag and Drop </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-dropzone-uploader">File Upload </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-datepicker">Date Picker </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-bootstrap-typeahead">Typeahead </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-data-table-component">Smart Table </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-apexcharts">Apex  Charts </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-google-charts">Google Charts </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/knob">Knob  Charts </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-image-lightbox">Gallery </a><FeatherIcon icon="link" /></li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <ul className="credits-list mb-0">
                          <li><a href="https://www.npmjs.com/package/react-chartjs-2">Chart.js </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-chartist">Chartist </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-google-maps">Google Map </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-leaflet">Leaflet Map </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-ckeditor-component">CK Editor </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-simplemde-editor">MDE Editor </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-ace">ACE Editor </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-images-upload">Image Upload  </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/react-image-crop">Image Crop  </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/@fullcalendar/interaction">Draggable Calender </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/firebase">Firebase </a><FeatherIcon icon="link" /></li>
                          <li><a href="https://www.npmjs.com/package/@auth0/auth0-react">Auth0 </a><FeatherIcon icon="link" /></li>
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
export default ReactCredits;