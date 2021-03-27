import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const VueApp = () => {
  const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 

  const headerContext = useContext(HeaderContext);
  const HeaderContextObj = headerContext.HeaderContext;

  useEffect(()=>{
     setFontSizeLocal('font-'+HeaderContextObj.fontSize);
  },[HeaderContextObj])

	return(
		<Layout>
      	<div className={`col-xxl-10 col-xl-9 content component-col ${fontSizeLocal}`}>
	        <div id="section-1">
	          <div className="card">
	            <div id="section-1-1">
	              <div className="card-body">
	                <h4 className="main-title mb-0">Application</h4>
	                <hr className="hr"/>
	                <h5 className="text-primary">E-commerce</h5>
	                <div className="row">
	                  <div className="col-xxl-7 col-xl-12 col-xxl-7 col-xl-12 col-md-7"><img className="img-border img-fluid" src="../assets/images/apps/ecommerce.gif" alt="img1"/></div>
	                  <div className="col-xxl-5 col-xl-12 col-md-5 appDesc">
	                    <p>
	                      You can directly use complete E-commerce app to manage your E-commerce withreadymade functionality of Add to cart,Quickview, and Checkout with Stripe as well as
	                      Paypal.
	                      Apart from that if you want it to use it in your frontend application then you just need
	                      to change your json with your API data and you get complete workable E-commerce for your
	                      frontend.
	                    </p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div id="section-1-2">
	              <div className="card-body">
	                <h5 className="text-primary">Chat</h5>
	                <div className="row">
	                  <div className="col-xxl-7 col-xl-12 col-md-7"><img className="img-border img-fluid" src="../assets/images/apps/chats.gif" alt=""/></div>
	                  <div className="col-xxl-5 col-xl-12 col-md-5 appDesc">
	                    <p>In Chat application we provide complete chat designing with basic feature like chat with a people.</p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div id="section-1-3">
	              <div className="card-body">
	                <h5 className="text-primary">Gallery</h5>
	                <div className="row">
	                  <div className="col-xxl-7 col-xl-12 col-md-7"><img className="img-border img-fluid" src="../assets/images/apps/gallery.gif" alt=""/></div>
	                  <div className="col-xxl-5 col-xl-12 col-md-5 appDesc">
	                    <p>Present your amazing ideas and images using our smooth and attractive gallery</p>
	                  </div>
	                </div><a className="mt-4 btn btn-solid" href="https://www.npmjs.com/package/vue-gallery" target="_blank"> Supplemental</a>
	              </div>
	            </div>
	            <div id="section-1-4">
	              <div className="card-body">
	                <h5 className="text-primary">To-Do</h5>
	                <div className="row">
	                  <div className="col-xxl-7 col-xl-12 col-md-7"><img className="img-border img-fluid" src="../assets/images/apps/to-do.gif" alt=""/></div>
	                  <div className="col-xxl-5 col-xl-12 col-md-5 appDesc">
	                    <p>Now it's time to Decrease your burden by listing your daily task in our To-do app and feel relax.</p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div id="section-1-5">
	              <div className="card-body">
	                <h5 className="text-primary">To-Do with Firebase</h5>
	                <div className="row">
	                  <div className="col-xxl-7 col-xl-12 col-md-7"><img className="img-border img-fluid" src="../assets/images/apps/to-do-firebase.gif" alt=""/></div>
	                  <div className="col-xxl-5 col-xl-12 col-md-5 appDesc">
	                    <p>Now it's time to Decrease your burden by listing your important task in our To-do Firebase app and feel relax.</p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div id="section-1-6">
	              <div className="card-body">
	                <h5 className="text-primary">Email</h5>
	                <div className="row">
	                  <div className="col-xxl-7 col-xl-12 col-md-7"><img className="img-border img-fluid" src="../assets/images/apps/email.gif" alt=""/></div>
	                  <div className="col-xxl-5 col-xl-12 col-md-5 appDesc">
	                    <p>Use our Email application design to build complete email app</p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div id="section-1-7">
	              <div className="card-body">
	                <h5 className="text-primary">Bookmark Search</h5>
	                <div className="row">
	                  <div className="col-xxl-7 col-xl-12 col-md-7"><img className="img-border img-fluid" src="../assets/images/apps/bookmark-search.gif" alt=""/></div>
	                  <div className="col-xxl-5 col-xl-12 col-md-5 appDesc">
	                    <p>You can Bookmark your Favioute application and pages using bookmark app so you can reach to your favioute app quickly.</p>
	                  </div>
	                </div>
	              </div>
	            </div>
	            <div id="section-1-12">
	              <div className="card-body gulp-section">
	                <h5 className="text-primary">Calender</h5>
	                <p><b>Installing and usage</b></p>
	                <div className="mb-4">
	                  <CopyToClipboard
	                  	id="calendercode"
	                  	text="npm i vue-simple-calendar"
	                  />
	                  <CopyToClipboard
	                  	id="calendercode1"
	                  	text={`\n <template>\n     <div>\n       <calendar-view :show-date="showDate" class="theme-default holiday-us-traditional holiday-us-official">\n         <calendar-view-header slot="header" slot-scope="t" :header-props="t.headerProps" @input="setShowDate" />\n       </calendar-view>\n     </div>\n    </template>\n    <script>\n      import { CalendarView, CalendarViewHeader, CalendarMathMixin} from "vue-simple-calendar";\n      import Datepicker from 'vuejs-datepicker';\n     \n      export default {\n        data(){\n          return{\n             showDate: new Date()\n            }\n        },\n        components: {\n          CalendarView,\n          CalendarViewHeader,\n          Datepicker\n        },\n        methods: {\n        setShowDate(d) {\n          this.showDate = d;\n         }\n        }\n      }\n    </script>`}
	                  />
	                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-simple-calendar" target="_blank"> Supplemental </a>
	                </div>
	                <h5 className="text-primary">Others</h5>
	                <p>There are many others application in Cuba which is help you in improve your knowledge and solve your issues.</p>
	                <ul>
	                  <li>Knowledge Base</li>
	                  <li>Job Search</li>
	                  <li>Learning</li>
	                  <li>Social App</li>
	                </ul>
	              </div>
	            </div>
	          </div>
	        </div>
	    </div>
	    <div className="col-xxl-2 col-xl-3 right-column">
	        <div className="page-sidebar custom-scrollbar" id="myScrollspy">
	          <div className="page-right-sidebar">
	            <ul className="nav flex-column custom-scrollbar">
	              <li className="nav-item"><a className="nav-link quick-links active" href="#section-1" data-original-title="" title="">
	                  <h5 className="mb-0">Applications</h5></a>
	                <ul className="nav flex-column p-l-10 m-t-5 set-padding">
	                  <li className="nav-item"><a className="nav-link" href="#section-1-1" data-original-title="" title=""><i className="fa fa-angle-right"></i>E-commerce</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-2" data-original-title="" title=""><i className="fa fa-angle-right"></i>Chat</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-3" data-original-title="" title=""><i className="fa fa-angle-right"></i> Gallery</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-4" data-original-title="" title=""><i className="fa fa-angle-right"></i> To-Do</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-5" data-original-title="" title=""><i className="fa fa-angle-right"></i>To-Do with Firebase</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-6" data-original-title="" title=""><i className="fa fa-angle-right"></i>Email</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-7" data-original-title="" title=""><i className="fa fa-angle-right"></i>Bookmark Search</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-12" data-original-title="" title=""><i className="fa fa-angle-right"></i>Calender</a></li>
	                </ul>
	              </li>
	            </ul>
	          </div>
	        </div>
	    </div>
    </Layout>
	)
}

export default VueApp;