import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const ReactCustomization = () => {
	const show = '';
	const PUBLIC_URL = 'process.env.PUBLIC_URL';
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
	                    <p className="mb-1">Go to app.jsx file and comment or remove Loader section</p>
	                    <p>Remove design of loader from src >> layout >> loader >> index.jsx between comment of <b>Loader starts </b>to <b>Loader ends</b></p>
	                    <div className="mb-4">
	                      <CopyToClipboard
	                      	id="loadercode"
	                      	text={`\n<!-- Loader starts -->\n<div className={'loader-wrapper ${show ? '' : 'loderhide'}'}>\n  <div className="loader-index"><span></span></div>\n  <svg>\n      <defs></defs>\n      <filter id="goo">\n      <fegaussianblur in="SourceGraphic" stdDeviation="11" result="blur"></fegaussianblur>\n      <fecolormatrix in="blur" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo">    </fecolormatrix>\n      </filter>\n  </svg>\n</div>`}
	                      />
	                      <p className="mb-1 mt-4">correspondingly remove methods of useEffect from script tag in loader.jsx</p>
	                      <CopyToClipboard
	                      	id="loadercode1"
	                      	text={`\nconst [show, setShow] = useState(true);\n  useEffect(() => {\n      const timeout = setTimeout(() => {\n          setShow(false)\n        }, 3000);\n   \n      return () => {\n          clearTimeout(timeout);\n        }\n      \n  },[show]);`}
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
	                    <p>Your complete route structure is place at <b>index.jsx</b></p>
	                    <p>Suppose you are creating a new component (For creating a new component refer <a href="#section-2">create new component </a>) then you have to add new routes for that components.</p>
	                    <div className="mb-1">Import that component in index.jsx</div>
	                    <CopyToClipboard
	                      	id="routecode"
	                      	text={`\n/* Dashboards */\nimport Default from './components/dashboard/default'\nimport Ecommerce from './components/dashboard/ecommerce'`}
	                    />
	                    <p>Use that component name with path in routes array in index.jsx</p>
	                    <p className="mb-1"> <b>%process.env.PUBLIC_URL% :-</b>When you run npm run build, Create React App will substitute %PUBLIC_URL% with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL.</p>
	                    <CopyToClipboard
	                      	id="routecode1"
	                      	text={`\n<Route exact path={'${PUBLIC_URL}/'} component={Default} />\n<Route path={'${PUBLIC_URL}/dashboard/default'} component={Default}/>\n<Route path={'${PUBLIC_URL}/dashboard/ecommerce'} component={Ecommerce}/>`}
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
	                    <p>Suppose you want to change in your menu sidebar or want to add new menu in your menu section then you just need to open src >> layout >> sidebar >> menu.jsx and</p>
	                    <CopyToClipboard
	                      	id="menucode"
	                      	text={`\n{\n    title: 'Dashboard', icon: Home, type: 'sub', active: false, children: [\n        { path: '${PUBLIC_URL}/dashboard/default', title: 'Default', type: 'link' },\n        { path: '${PUBLIC_URL}/dashboard/ecommerce', title: 'Ecommerce', type: 'link' },\n    ]\n},`}
	                    />
	                    <h6 className="text-primary">Variables :</h6>
	                    <ul>
	                      <li> <b>Path :  </b>Here you have to give path name same as you have given in index.jsx</li>
	                      <li><b>title :  </b>Title is the name that you can see on frontside so here you can give attractive title to showcase your menu item</li>
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
	                    <h4 className="mb-0">Add Components</h4>
	                  </div>
	                  <div className="card-body">
	                    <p>React provide two types Components :-</p>
	                    <ul className="list-none mb-4">
	                      <li>- Class Components</li>
	                      <li>- Functional Components (Hooks)</li>
	                    </ul>
	                    <h6 className="text-primary">Class Components</h6>
	                    <p>Suppose if you want to create a new class component then you just need to create a folder in src >> pages and then create a react file with .jsx extension and then paste code as per your needs.</p>
	                    <CopyToClipboard
	                      	id="componentcode"
	                      	text={`\nimport React, { Component } from 'react';\n\nclass Demo extends Component {\n    render() {\n        return (\n            <div>\n                /*write Html code or structure */ \n            </div>\n        );\n    }\n}\n \nexport default Demo;`}
	                    />
	                    <h6 className="text-primary">Functional Component : (Hooks)</h6>
	                    <p>Suppose if you want to create a new class component then you just need to create a folder in src >> pages and then create a react file with .jsx extension and then paste code as per your needs.</p>
	                    <CopyToClipboard
	                      	id="componentcode1"
	                      	text={`\nimport React from 'react';\nconst Demo = () => {\n  return (\n      <div>\n        /*write Html code or structure */\n      ></div>\n    );\n  };\n \nexport default Demo;`}
	                    />
	                  </div>
	                </div>
	              </div>
	              <div className="card gulp-section">
	                <div id="section-1-4">
	                  <div className="card-header">
	                    <h4 className="mb-0">Use of Widgets</h4>
	                  </div>
	                  <div className="card-body">
	                    <p>Suppose you want to use widget then you need to integrate a particular widget in your existing file. Suppose you want to use calneder components in your dashboard then you need to import that widget in your dashboard</p>
	                    <CopyToClipboard
	                      	id="widgetcode"
	                      	text={`\nimport React, { Component } from 'react';\nimport Datepicker from './datepicker';  /*import external dependacy */\n\nclass Demo extends Component {\n    render() {\n        return (\n            <Datepicker> \n               /*declare like this here */\n            </Datepicker>\n        );\n    }\n}\nexport default Demo;`}
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
	                    <p>Suppose you want to customize your theme primary and secondary color then go to <b>assets >> scss >> color.scss </b>and give primary and secondary color as per your choice :</p>
	                    <CopyToClipboard
	                      	id="stylecode"
	                      	text={`\n$primary-color: #7366ff;\n$secondary-color: #f73164;`}
	                    />
	                    <p>And if you want to convert default color to your require color then go to <b>assets >> scss >> theme >> _variable.scss </b>and change <b>primary </b>and <b>secondary </b>color from there</p>
	                    <p className="mb-4">For changing charts color you need to go in <b>src >> layout >> theme-customizer >> index.jsx </b>and find color data and change your color their also</p>
	                    <h6 className="text-primary">Variable customization of complete theme</h6>
	                    <p className="mb-4">Suppose you want to change color and size of card-body, Alert, Badge, Form input, breadcrumb,buttons, footer, sidebar and many more then you just need to change that particular color from <b>_variable.scss </b>in <b>assets >> scss >> theme >> _variable.scss</b></p>
	                    <h6 className="text-primary">Google Font</h6>
	                    <p>You can change font of your theme from index.html in public folder</p>
	                    <CopyToClipboard
	                      	id="fontcode"
	                      	text={`\n<link href="https://fonts.googleapis.com/css?family=Rubik:400,400i,500,500i,700,700i&amp;display=swap" rel="stylesheet">\n<link href="https://fonts.googleapis.com/css?family=Roboto:300,300i,400,400i,500,500i,700,700i,900&amp;display=swap">`}
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
	                    <p className="mt-4">Now go to our theme >> src >> data >> customizer >> config.jsx and then just replace complete <b>config.jsx </b>with your new configuration and re-run theme using npm start.</p>
	                    <CopyToClipboard
	                      	id="themecode"
	                      	text={`\n{\n    "settings": {\n      "layout_type": "ltr",\n      "sidebar": {\n      "type": "compact-wrapper",\n      "body_type": "sidebar-icon"\n      },\n      "sidebar_setting": "default-sidebar",\n    },\n    "color": {\n        "primary_color": "#7366ff", \n        "secondary_color": "#f73164", \n        "mix_background_layout": "light-only",  \n      },\n      "router_animation": "fade"\n    }\n}`}
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
	                    <div className="table-responsive">
	                      <table className="table">
	                        <thead>
	                          <tr>
	                            <th>Router Animation</th>
	                            <th>Options</th>
	                          </tr>
	                        </thead>
	                        <tbody>
	                          <tr>
	                            <td>Select Animation type</td>
	                            <td>Zoom Fade, Slide Fade, Fade Bottom, Fade, Zoom Out, None</td>
	                          </tr>
	                        </tbody>
	                      </table>
	                    </div>
	                  </div>
	                </div>
	              </div>
	              <div className="card gulp-section">
	                <div id="section-1-7">
	                  <div className="card-header">
	                    <h4 className="mb-0">RTL</h4>
	                  </div>
	                  <div className="card-body">
	                    <p>Suppose you want to add RTL in your application then you just need to set "layout_type" as RTL so application will be converted in RTL layout.  </p>
	                    <p className="mb-1">Suppose you want to change Colors from config.jsx then you have to first clear localStorage then you will get your color in theme.</p>
	                    <CopyToClipboard
	                      	id="rtlcode"
	                      	text={`\n{\n  "settings": {\n    "layout_type": "rtl",\n    "sidebar": {\n      "type": "compact-wrapper",\n      "body_type": "sidebar-icon"\n      },\n      "sidebar_setting": "default-sidebar",\n  },\n    "color": {\n        "primary_color": "#7366ff", \n        "secondary_color": "#f73164", \n        "mix_background_layout": "light-only",  \n      },\n    "router_animation": "fade"\n  }\n}`}
	                    />
	                  </div>
	                </div>
	              </div>
	            </div>
	        </div>
	        <div class="col-xxl-2 col-xl-3 right-column">
                <div class="page-sidebar custom-scrollbar" id="myScrollspy">
                  <div class="page-right-sidebar">
                    <ul class="nav flex-column custom-scrollbar">
                      <li class="nav-item"><a class="nav-link quick-links active" href="#section-1" data-original-title="" title="">
                          <h5 class="mb-0">Customization</h5></a>
                        <ul class="nav flex-column p-l-10 m-t-5 set-padding">
                          <li class="nav-item"><a class="nav-link" href="#section-1-1" data-original-title="" title=""><i class="fa fa-angle-right"></i>Loader</a></li>
                          <li class="nav-item"><a class="nav-link" href="#section-1-2" data-original-title="" title=""><i class="fa fa-angle-right"></i>Routing</a></li>
                          <li class="nav-item"><a class="nav-link" href="#section-1-3" data-original-title="" title=""><i class="fa fa-angle-right"></i>Menu Sidebar</a></li>
                          <li class="nav-item"><a class="nav-link" href="#section-2" data-original-title="" title=""><i class="fa fa-angle-right"></i>Add Components</a></li>
                          <li class="nav-item"><a class="nav-link" href="#section-1-4" data-original-title="" title=""><i class="fa fa-angle-right"></i>Use of Widgets</a></li>
                          <li class="nav-item"><a class="nav-link" href="#section-1-5" data-original-title="" title=""><i class="fa fa-angle-right"></i>Style customization</a></li>
                          <li class="nav-item"><a class="nav-link" href="#section-1-6" data-original-title="" title=""><i class="fa fa-angle-right"></i>Theme Customize</a></li>
                          <li class="nav-item"><a class="nav-link" href="#section-1-7" data-original-title="" title=""><i class="fa fa-angle-right"></i>RTL</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
		</Layout>
	)
}
export default ReactCustomization;