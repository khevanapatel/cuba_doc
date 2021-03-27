import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const VueGettingStarted = () => {
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
	            <h4 className="main-title">Getting Started</h4>
	          </div>
	          <div className="col-sm-12">
	            <div className="card getting-started-sec">
	              <div className="card-body p-0">
	                <div className="alert-box alert alert-primary mb-0">
	                  <p className="mt-0">Cuba Vue Admin Theme is pure Vue theme, Yes! you read correct, it's <b>No Jquery</b> Vue admin theme including all feature and functionality with ease of integration for your project.cuba theme document will help you to understand Vue from scratch to making perfect real time dream application.</p>
	                  <hr/>
	                  <p>Follow the documentation carefully for solving your issues in minutes, Apart from that if you don't find solution when you following the docs you can raise a support ticket for your issue from <a href="https://pixelstrap.freshdesk.com" target="_blank"> <b>pixelstrap.freshdesk.com</b></a></p>
	                  <p className="mt-3"><b>Dependancies</b></p>
	                  <ul className="mb-0"> 
	                    <li>Vue Cli 3 </li>
	                    <li>Bootstrap-4</li>
	                    <li>SASS</li>
	                  </ul>
	                </div>
	              </div>
	            </div>
	            <div className="card gulp-section">
	              <div className="card-header">
	                <h4 className="mb-0">How to start</h4>
	              </div>
	              <div className="card-body p-t-0">
	                <p>Welcome to Vue! Vue helps you build modern applications for the web, mobile, or desktop.</p>
	                <p className="mb-4">For getting started an Vue application you needs two things as Prerequisites.</p>
	                <h6 className="text-primary mb-3">Prerequisites</h6>
	                <ul>
	                  <li> 
	                    <p className="mb-4">Before you begin, make sure your development environment includes <b>Node </b>and an <b>npm package manager.</b></p>
	                  </li>
	                </ul>
	                <h6 className="text-primary mb-3">Node.js</h6>
	                <ul>
	                  <li> 
	                    <p>Download latest version of node.js from <a href="https://nodejs.org" target="_blank"><b>nodejs.org.</b></a></p>
	                  </li>
	                  <li>
	                    <p>Install Node.js using downloaded file </p>
	                  </li>
	                  <li> 
	                    <p className="mb-4">To check your node version, run <b>node -v </b>in a terminal/console window.</p>
	                  </li>
	                </ul>
	                <h6 className="text-primary mb-3">Npm package manager</h6>
	                <ul>
	                  <li> 
	                    <p>
	                      Vue CLI, and Vue apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package manager.</p>
	                  </li>
	                  <li>
	                    <p>This Quick Start uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run <b>npm -v </b>in a terminal/console window.</p>
	                  </li>
	                  <li>
	                    <p>For better understanding Vue we suggest you to once go through official documentation of Vue from <a href="https://vuejs.org/v2/guide/" target="_blank"> <b>Vuejs.org</b></a></p>
	                  </li>
	                </ul>
	              </div>
	            </div>
	            <div className="card gulp-section">
	              <div className="card-header">
	                <h4 className="mb-0">Vue setup</h4>
	              </div>
	              <div className="card-body">
	                <div className="warning-block mb-4">
	                  <p>If you want Cuba theme setup then directly follow next Cuba setup section</p>
	                </div>
	                <h6 className="text-primary mb-3">Installing Vue CLI</h6>
	                <ul className="mb-4">
	                  <li> 
	                    <p>You use the Vue CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks as it is a progressive framework for building user interfaces.</p>
	                  </li>
	                  <li>
	                    <p>Install the Vue CLI globally.</p>
	                  </li>
	                  <li> 
	                    <p>To install the CLI using npm, open a terminal/console window and enter the following command:</p>
	                    <CopyToClipboard
	                    	id="installcode1"
	                    	text="npm install -g @vue/cli"
	                    />
	                  </li>
	                </ul>
	                <h6 className="text-primary mb-3">Create Initial application </h6>
	                <ul className="list-none"> 
	                  <li>1. Run the CLI command vue create and provide the name my-app, as shown here:
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="createcode1"
	                      	text="vue create my-app"
	                      />
	                    </div>
	                  </li>
	                  <li>2.  The vue create command prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key.</li>
	                </ul>
	                <h6 className="text-primary mb-3">Serve Application</h6>
	                <ul className="list-none">
	                  <li>1. Go to the workspace folder (my-app).
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="cdcode"
	                      	text="cd my-app"
	                      />
	                    </div>
	                  </li>
	                  <li>2. Launch the server by using the CLI command npm start
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="npmcode"
	                      	text="npm run serve"
	                      />
	                    </div>
	                  </li>
	                </ul><a className="btn btn-solid" href="https://vuejs.org/v2/guide/" target="_blank">Supplemental</a>
	                <h6 className="text-primary mb-3 mt-4">Build Application</h6>
	                <ul className="list-none">
	                  <li>1. Build you application for host on server using below command:
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="buildcode1"
	                      	text="npm run build"
	                      />
	                    </div>
	                  </li>
	                  <li>2. It will create one dist file in your theme folder. Make zip of dist folder. so here you are ready to upload your theme on server.
	                    <p>If you’re using Apache HTTP Server, you need to create a .htaccess file in the public folder by pastng below code</p>
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="buildcode2"
	                      	text={` \n Options -MultiViews\n RewriteEngine On\n RewriteCond %{REQUEST_FILENAME} !-f\n RewriteRule ^ index.html [QSA,L]`}
	                      />
	                    </div>
	                  </li>
	                  <li className="mb-3">Now upload your dist folder on public folder</li>
	                </ul>
	                <h6 className="text-primary mb-3 mt-4">Making Sub-folder on Server</h6>
	                <ul className="list-none">
	                  <li>By default it host on your server root, If you wish to upload on sub-folder then:</li>
	                  <li>1. Go to your theme and open vue.config.js and add your subfolder name here:
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="modulecode"
	                      	text={`\n module.exports = {\n   baseUrl: "/cuba/",\n   publicPath: "/cuba/"\n };`}
	                      />
	                    </div>
	                  </li>
	                  <li>2. open route >> index.js in object of router replace base attribute with
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="modulecode1"
	                      	text=" base: '/cuba/'"
	                      />
	                    </div>
	                  </li>
	                  <li>Now again build theme using
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="modulecode2"
	                      	text="npm run build"
	                      />
	                    </div>
	                  </li>
	                  <li>Now create a .htaccess file in your subfolder folder by pastng below code
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="modulecode3"
	                      	text={`\n Options -MultiViews\n RewriteEngine On\n RewriteBase /cuba/\n RewriteCond %{REQUEST_FILENAME} !-f\n RewriteRule ^ index.html [QSA,L]`}
	                      />	
	                    </div>
	                  </li>
	                  <li>Now upload your dist folder in sub folder</li>
	                  <li> <a className="btn btn-solid" href="https://cli.vuejs.org/guide/deployment.html#general-guidelines" target="_blank">Supplemental</a></li>
	                </ul>
	              </div>
	            </div>
	            <div className="card gulp-section">
	              <div className="card-header">
	                <h4 className="mb-0">Cuba setup</h4>
	              </div>
	              <div className="card-body">
	                <p className="mb-4">If you have already download and install node.js and Vue CLI then ignore prerequisites accordingly.</p>
	                <h6 className="text-primary mb-3">Node.js</h6>
	                <ul>
	                  <li> 
	                    <p>Download latest version of node.js from <a href="https://nodejs.org" target="_blank"><b>nodejs.org.</b></a></p>
	                  </li>
	                  <li>
	                    <p>Install Node.js using downloaded file </p>
	                  </li>
	                  <li> 
	                    <p className="mb-4">To check your node version, run <b>node -v </b>in a terminal/console window.</p>
	                  </li>
	                </ul>
	                <h6 className="text-primary mb-3">Vue CLI</h6>
	                <ul>
	                  <li>Install Vue CLI Using:
	                    <CopyToClipboard
	                      	id="installcode2"
	                      	text={`npm install -g @vue/cli`}
	                      />
	                  </li>
	                </ul>
	                <h6 className="text-primary mb-3 pt-2">Setup Cuba theme by</h6>
	                <ul className="list-none">
	                  <li>1) Download and extract an Cuba themes from themeforest</li>
	                  <li>2) Extract it and then go in to theme folder.
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="cdcode2"
	                      	text={`cd theme`}
	                      />
	                    </div>
	                  </li>
	                  <li>3)  Import all dependency by installing npm command
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="npmcode2"
	                      	text={`npm install`}
	                      />
	                    </div>
	                  </li>
	                  <li>4)  Now you are in stage to successfully run Cuba using below command:
	                    <div className="py-2 ps-3">
	                      <CopyToClipboard
	                      	id="npmcode3"
	                      	text={`npm run serve`}
	                      />
	                    </div>
	                  </li>
	                </ul>
	              </div>
	            </div>
	            <div className="card new-arrival-sec">
	              <div className="card-header">
	                <h3>What's Next?</h3>
	              </div>
	              <div className="card-body p-t-0">
	                <div className="arrival-content-main"><a href="treevue.html">
	                    <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
	                      <h5>Tree</h5>
	                    </div></a></div>
	                <div className="arrival-content-main"><a href="componentvue.html">
	                    <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
	                      <h5>Components</h5>
	                    </div></a></div>
	                <div className="arrival-content-main"><a href="appvue.html">
	                    <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
	                      <h5>Applications</h5>
	                    </div></a></div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
	    </Layout>
	)
}
export default VueGettingStarted;