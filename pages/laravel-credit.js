import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import FeatherIcon from 'feather-icons-react';

const LaravelCredits = () => {
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
                              <li><a href="https://github.com/ajaxorg/ace">Ace editor </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://michalsnik.github.io/aos/">AOS </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://getbootstrap.com/">Bootstrap </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://arshaw.com/fullcalendar/">Calender </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://chartjs.org/">Chart.js </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://gionkunz.github.io/chartist-js/">Chartist </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://docs.ckeditor.com/ckeditor4/docs/#!/guide/dev_styles-section-style-rules">Ckeditor  </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://zenorocha.github.io/clipboard.js">Clipboard </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://github.com/imakewebthings/waypoints/blob/master/">Counter </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://raw.github.com/Stuk/jszip/master/">Datatable extension  </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://datatables.net/">Datatables   </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://www.daterangepicker.com/">Date picker   </a><FeatherIcon icon="link" /></li>
                            </ul>
                          </div>
                          <div className="col-xl-3 col-md-4 col-sm-6">
                            <ul className="credits-list mb-0">
                              <li><a href="https://tempusdominus.github.io/bootstrap-4/">Date Time Picker </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://www.daterangepicker.com/">Date range Picker   </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://jqueryui.com/">Dragable </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://foundation.zurb.com/sites/docs/drilldown-menu.html">Drill down </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://www.dropzonejs.com/">Drop zone</a><FeatherIcon icon="link" /></li>
                              <li><a href="http://benalman.com/projects/jquery-resize-plugin/">Flot chart </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://github.com/requirejs/">Form builder 1 </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://jsbeautifier.org/">Form builder 2 </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://srobbin.com/jquery-plugins/backstretch/">Form wizard </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://github.com/fengyuanchen/cropper">Image cropper </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://js-grid.com/">Js grid </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://brandon.aaron.sh/">Light gallery </a><FeatherIcon icon="link" /></li>
                            </ul>
                          </div>
                          <div className="col-xl-3 col-md-4 col-sm-6">
                            <ul className="credits-list mb-0">
                              <li><a href="https://morrisjs.github.io/morris.js/">Morris chart  </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://notifyjs.jpillora.com/">Notify  </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE">Owl carousel </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://ckeditor.com/legal/ckeditor-oss-license/">Page builder  </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://opensource.org/licenses/MIT">Particles  </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://github.com/IonDen/ion.rangeSlider">Range slider </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://github.com/antennaio/jquery-bar-rating">Rating  </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://modernizr.com/download/?setclasses">Scroll reveal </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://github.com/select2/select2/blob/master/LICENSE.md">Select 2 </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://github.com/NextStepWebs/simplemde-markdown-editor">Simple mde </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://omnipotent.net/jquery.sparkline/">Sparkline </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://sweetalert.js.org/">Sweetalert </a><FeatherIcon icon="link" /></li>
                            </ul>
                          </div>
                          <div className="col-xl-3 col-md-4 col-sm-6">
                            <ul className="credits-list mb-0">
                              <li><a href="https://summernote.org/">Summer note </a><FeatherIcon icon="link" /></li>
                              <li><a href="http://weareoutman.github.io/clockpicker/">time picker </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://www.virtuosoft.eu/code/bootstrap-touchspin/">Touch spin </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://github.com/usablica/intro.js">Tour </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://www.jstree.com/">Tree </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://github.com/twitter/typeahead.js">Typehead  </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://wowjs.uk/">Wow </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://isotope.metafizzy.co/">Isotope  </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://opensource.org/licenses/mit-license.php">jquery drill-down   </a><FeatherIcon icon="link" /></li>
                              <li><a href="https://jqueryui.com/">jqueryui  </a><FeatherIcon icon="link" /></li>
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
export default LaravelCredits;