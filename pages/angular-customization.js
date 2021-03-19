import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const AngularCustomization = () => {
	return(
	  <Layout>
		  <div className="col-xxl-10 col-xl-9 content component-col">
	        <div id="section-1">
	          <div className="card">
	            <div id="section-1-1">
	              <div className="card-body">
	                <h4 className="main-title mb-0">Loader</h4>
	                <hr className="hr" />
	                <h5 className="text-primary">How to Remove Loader from Application?</h5>
	                <p className="mb-1">Go to Loader file in src >> shared >> loader-component</p>
	                <p>Remove design of loader from Loader Component between comment of <b>Loader starts </b>to <b>Loader ends</b></p>
	                <div className="mb-4">
	                  <CopyToClipboard
	                  	id="loadercode"
	                  	text={`\n <!-- Loader starts-->\n <div className="loader-wrapper" [class.loderhide]="!show">\n <div className="loader-index"><span></span></div>\n <svg>\n <defs></defs>\n <filter id="goo">\n <fegaussianblur in="SourceGraphic" stddeviation="11" result="blur"></fegaussianblur>\n <fecolormatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9" result="goo"></fecolormatrix>\n </filter>\n </svg>\n </div>\n <!-- Loader ends-->`}
	                  />
	                </div>
	              </div>
	            </div>
	          </div>
	          <div className="card"> 
	            <div id="section-1-2">
	              <div className="card-header">
	                <h4 className="mb-0">Routing</h4>
	              </div>
	              <div className="card-body">
	                <p>Your complete route structure is place at <b>module.routing </b></p>
	                <p>Suppose you are creating a new module (For creating a new module refer <a href="#section-2">create new module</a> ) then you have to add new routes for that modules.</p>
	                <div className="mb-1">Import that component in module.routing</div>
	                <CopyToClipboard
	                  	id="routecode"
	                  	text={`\n /* Dashboards */\n import { NgModule } from '@angular/core';\n import { Routes, RouterModule } from '@angular/router';\n import { DefaultComponent } from './default/default.component';`}
	                  />
	                
	                <p>Use that component name with path, name, and data attribute in routes array in module-routing file</p>
	                <CopyToClipboard
	                  	id="routecode1"
	                  	text={`\n const routes: Routes = \n  [\n      {\n        path: '',\n        children: \n        [\n          {\n            path: 'default',\n            component: DefaultComponent\n          },\n        ],\n      }\n  ];\n    @NgModule({\n    imports: [RouterModule.forChild(routes)],\n    exports: [RouterModule]\n    })\n    export class DashboardRoutingModule { }`}
	                  />
	              </div>
	            </div>
	          </div>
	          <div className="card gulp-section">
	            <div id="section-1-3">
	              <div className="card-header">
	                <h4 className="mb-0">Customize or Replace Menu Sidebar</h4>
	              </div>
	              <div className="card-body">
	                <p>Suppose you want to change in your menu sidebar or want to add new menu in your menu section then you just need to open <b>nav.service.ts</b></p>
	                <CopyToClipboard
	                	id="menucode"
	                	text={`\n {\n   "title": "Dashboard", "icon": "home", "type": "sub", "badgeType": "primary", "badgeValue": "6", "active": false, "children": [\n     { "path": "/dashboard/default", "title": "Default", "type": "link" },\n   ]\n } `}
	                />
	                
	                <h6 className="text-primary">Variables :</h6>
	                <ul>
	                  <li> <b>Path :  </b> Here you have to give path name same as you have given in nav.service.ts</li>
	                  <li><b>title :  </b> Title is the name that you can see on frontside so here you can give attractive title to showcase your menu item</li>
	                  <li> <b>type : </b>It denote how you want to open your particular routes means on same page, or on new page on live application. Means suppose you want to open "ecommerce" dashboard on new page then write "extTabLink" in type attribute. Here we have four type attribute:</li>
	                  <li> <b>link : </b>It simply link with particular routes without loading your page.</li>
	                  <li> <b>sub : </b>It stop to route your page to next. In most case it use when our menu have children item.</li>
	                  <li> <b>extLink : </b>It change route with reloading a page (Work like href)</li>
	                  <li> <b>extTabLink : </b>It change routes and taking us on new tab.</li>
	                </ul>
	              </div>
	            </div>
	          </div>
	          <div className="card gulp-section">
	            <div id="section-2">
	              <div className="card-header">
	                <h4 className="mb-0">Add Modules</h4>
	              </div>
	              <div className="card-body">
	                <p className="mb-2">Suppose if you want to create a new Module then you just need to run below code</p>
	                <CopyToClipboard
	                	id="componentcode"
	                	text={`ng generate module <module name>`}
	                />
	                <h6 className="text-primary">Add Components</h6>
	                <p className="mb-2">Suppose if you want to create a new component then you just need to run below code</p>
	                <CopyToClipboard
	                	id="componentcode1"
	                	text={`ng generate component <component name>`}
	                />
	              </div>
	            </div>
	          </div>
	          <div className="card gulp-section">
	            <div id="section-1-5">
	              <div className="card-header">
	                <h4 className="mb-0">Style customization</h4>
	              </div>
	              <div className="card-body">
	                <p>Suppose you want to customize color and font as per your project then you can change it by:</p>
	                <h6 className="text-primary">Theme Color</h6>
	                <p>Suppose you want to customize your theme <span className="text-primary">primary </span>and <span className="text-secondary">secondary </span>color:</p>
	                <CopyToClipboard
	                	id="stylecode"
	                	text={`\n @import "theme/variables";\n $primary-color: #7366ff;\n $secondary-color :#f73164; `}
	                />
	               
	                <p>Then you have to go in <b>assets >> scss >> color >> color-1.scss </b>and then place your theme primary color in <span className="text-primary">$primary-color </span>and your secondary color in <span className="text-secondary">$secondary-color </span>and then import that scss in your app.scss in <b>assets >> scss >> app.scss</b></p>
	                <p className="mb-4">For changing charts color you need to go in <b>src >> layout >> theme-customizer >> index.jsx </b>and find color data and change your color their also</p>
	                <h6 className="text-primary">Variable customization of complete theme</h6>
	                <p className="mb-4">Suppose you want to change color and size of card-body, Alert, Badge, Form input, breadcrumb,buttons, footer, sidebar and many more then you just need to change that particular color from <b>_variable.scss </b>in <b>assets >> scss >> theme >> _variable.scss</b></p>
	                <h6 className="text-primary">Google Font</h6>
	                <p>You can change font of your theme from index.html</p>
	                <CopyToClipboard
	                	id="fontcode"
	                	text={`\n <link rel="icon" href="<%= BASE_URL %>favicon.png">\n <link href="<a href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900">https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900</a>" rel="stylesheet">\n <link href="<a href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i">https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i</a>" rel="stylesheet">\n <link href="<a href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i">https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i</a>" rel="stylesheet">`}
	                />
	              </div>
	            </div>
	          </div>
	          <div className="card gulp-section">
	            <div id="section-1-6">
	              <div className="card-header">
	                <h4 className="mb-0">Theme Customize</h4>
	              </div>
	              <div className="card-body">
	                <h6 className="text-primary">Layouts</h6>
	                <p className="mb-1">We have provided a bunch of page layouts and menu layouts that can be implemented with just a options change to body!</p>
	                <p>For creating your dream layout open customizer by click on setting icon</p><img className="img-fluid img-70" src="../assets/images/document/custom1.jpg" alt="" />
	                <p className="mt-4">You can change your theme by clicking particular setting</p><img className="img-fluid img-70" src="../assets/images/document/custom2.jpg" alt="" />
	                <p className="mt-4">Then you just need to click on configuration button</p><img className="img-fluid img-70" src="../assets/images/document/custom3.jpg" alt="" />
	                <p className="mt-4">Configuration popup will be open then just click on copy json button which will copy configuration of theme which you want</p><img className="img-fluid img-70" src="../assets/images/document/custom4.jpg" alt="" />
	                <p className="mt-4">Now go to our theme >> src >> shared >> services >> layout.service.ts and then just replace with your configuration.</p>
	                <CopyToClipboard
	                	id="themecode"
	                	text={`\n public config = { \n    settings: { \n       layout_type: 'ltr', \n       sidebar: { \n          type: 'compact-wrapper', \n          body_type: 'sidebar-icon' \n       }, \n       sidebar_setting: 'default-sidebar', \n       sidebar_background_setting: '' \n    }, \n    color: { \n       layout_version: 'light', \n       color: 'color-1', \n       primary_color: '#158df7', \n       secondary_color: '#fb2e63', \n       mix_background_layout: 'default', \n    }, \n    router_animation: 'fadeIn' \n   }`}
	                />
	               
	                <p>Please refer the below table for corresponding classes. it is just for your inforamation you do not need to bother about this it's dynamically take particular classes according to your needs.</p>
	                <div className="table-responsive">
	                  <table className="table">
	                    <thead>
	                      <tr>
	                        <th>Layout</th>
	                        <th>Options</th>
	                      </tr>
	                    </thead>
	                    <tbody>
	                      <tr>
	                        <td>Boxed Layout</td>
	                        <td>Class: box-layout</td>
	                      </tr>
	                      <tr>
	                        <td>RTL Layout</td>
	                        <td>Class: rtl</td>
	                      </tr>
	                      <tr>
	                        <td>Light Layout</td>
	                        <td>Class: light</td>
	                      </tr>
	                      <tr>
	                        <td>Dark Sidebar</td>
	                        <td>Class: dark-sidebar</td>
	                      </tr>
	                      <tr>
	                        <td>Dark Layout</td>
	                        <td>Class: dark-only</td>
	                      </tr>
	                    </tbody>
	                  </table>
	                </div>
	                <h6 className="text-primary pt-4">Theme options</h6>
	                <p className="mb-1">We have some inbuilt themes for sidebar that can be switched with just a class change</p>
	                <div className="table-responsive mb-4">
	                  <table className="table">
	                    <thead>
	                      <tr>
	                        <th>Sidebar</th>
	                        <th>Options</th>
	                      </tr>
	                    </thead>
	                    <tbody>
	                      <tr>
	                        <td>Horizontal Sidebar type</td>
	                        <td>Class: "page-wrapper horizontal-wrapper" and "page-body-wrapper horizontal-menu"</td>
	                      </tr>
	                      <tr>
	                        <td>Bordered Navigation</td>
	                        <td>Attribute: sidebar-layout="border-sidebar"  </td>
	                      </tr>
	                      <tr>
	                        <td>Sidebar icons color</td>
	                        <td>Attribute: sidebar-layout="iconcolor-sidebar" </td>
	                      </tr>
	                    </tbody>
	                  </table>
	                </div>
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
	                  <h5 className="mb-0">Customization</h5></a>
	                <ul className="nav flex-column p-l-10 m-t-5 set-padding">
	                  <li className="nav-item"><a className="nav-link" href="#section-1-1" data-original-title="" title=""><i className="fa fa-angle-right"></i>Loader</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-2" data-original-title="" title=""><i className="fa fa-angle-right"></i>Routing</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-3" data-original-title="" title=""><i className="fa fa-angle-right"></i>Menu Sidebar</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-2" data-original-title="" title=""><i className="fa fa-angle-right"></i>Add Components</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-5" data-original-title="" title=""><i className="fa fa-angle-right"></i>Style customization</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-6" data-original-title="" title=""><i className="fa fa-angle-right"></i>Theme Customize</a></li>
	                </ul>
	              </li>
	            </ul>
	          </div>
	        </div>
	      </div>
      </Layout>
	)
}

export default AngularCustomization;