import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const AngularGettingStarted = () => {
	return(
		<Layout>
			<div className="col-lg-9 content">
		        <div className="row">
		          <div className="col-sm-12">
		            <h4 className="main-title">Getting Started</h4>
		          </div>
		          <div className="col-sm-12">
		            <div className="card getting-started-sec">
		              <div className="card-body p-0">
		                <div className="alert-box alert alert-primary mb-0">
		                  <p className="mt-0">cuba Angular Theme is pure angular theme, Yes! you read correct, it's <b>No Jquery </b>angular admin theme including all feature and functionality with ease of integration for your project.cuba theme document will help you to understand angular from scratch to making perfect real time dream application.</p>
		                  <hr/>
		                  <p>Follow the documentation carefully for solving your issues in minutes, Apart from that if you don't find solution when you following the docs you can raise a support ticket for your issue from <a href="https://pixelstrap.freshdesk.com" target="_blank"> <b>pixelstrap.freshdesk.com</b></a></p>
		                  <p className="mt-3"><b>Dependancies</b></p>
		                  <ul className="mb-0"> 
		                    <li>Angular-10 </li>
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
		                <p>Welcome to Angular! Angular helps you build modern applications for the web, mobile, or desktop.</p>
		                <p className="mb-4">For getting started an Angular application you needs two things as Prerequisites.</p>
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
		                    <p>Angular CLI, and Angular apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an , you must have an <a href="https://www.npmjs.com" target="_blank"> <b>npm </b></a>package manager.</p>
		                  </li>
		                  <li>
		                    <p>This Quick Start uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run <b>npm -v </b>in a terminal/console window.</p>
		                  </li>
		                  <li>
		                    <p>For better understanding Angular we suggest you to once go through official documentation of Angular from<a href="https://angular.io/docs" target="_blank"> <b>Angular Docs</b></a></p>
		                  </li>
		                </ul>
		              </div>
		            </div>
		            <div className="card gulp-section">
		              <div className="card-header">
		                <h4 className="mb-0">Angular setup</h4>
		              </div>
		              <div className="card-body">
		                <div className="warning-block mb-4">
		                  <p>If you want Cuba theme setup then directly follow next Cuba setup section</p>
		                </div>
		                <h6 className="text-primary mb-3">Installing Angular CLI</h6>
		                <ul className="mb-4">
		                  <li> 
		                    <p>You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks as it is a progressive framework for building user interfaces.</p>
		                  </li>
		                  <li>
		                    <p>Install the Angular CLI globally.</p>
		                  </li>
		                  <li> 
		                    <p>To install the CLI using npm, open a terminal/console window and enter the following command:</p>
		                    <CopyToClipboard
		                    	id="installcode1"
		                    	text="npm install -g @angular/cli "
		                    />
		                  </li>
		                </ul>
		                <h6 className="text-primary mb-3">Create Initial application </h6>
		                <ul className="list-none"> 
		                  <li>1. Run the CLI command react create and provide the name my-app, as shown here:
		                    <div className="py-2 ps-3">
		                       <CopyToClipboard
		                    		id="createcode1"
		                    		text="ng new my-app"
		                    	/>
		                    </div>
		                  </li>
		                  <li>2.  The angular new command prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key.</li>
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
		                  <li>2. Launch the server by using the CLI command ng serve
		                    <div className="py-2 ps-3">
		                      <CopyToClipboard
		                    	id="npmcode"
		                    	text="ng serve"
		                      />
		                    </div>
		                  </li>
		                </ul><a className="btn btn-solid" href="https://angular.io/docs" target="_blank">Supplemental</a>
		              </div>
		            </div>
		            <div className="card gulp-section">
		              <div className="card-header">
		                <h4 className="mb-0">Cuba setup</h4>
		              </div>
		              <div className="card-body">
		                <p className="mb-4">If you have already download and install node.js and Angular CLI then ignore prerequisites accordingly.</p>
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
		                <h6 className="text-primary mb-3">Angular CLI</h6>
		                <ul>
		                  <li>Install Angular CLI Using:
		                    <CopyToClipboard
		                    	id="installcode2"
		                    	text="npm install -g @angular/cli"
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
			                    	text="cd theme"
			                    />
		                    </div>
		                  </li>
		                  <li>3)  Import all dependency by installing npm command
		                    <div className="py-2 ps-3">
		                       <CopyToClipboard
			                    	id="npmcode2"
			                    	text="npm install"
			                    />
		                    </div>
		                  </li>
		                  <li>4)  Now you are in stage to successfully run Cuba using below command:
		                    <div className="py-2 ps-3">
		                        <CopyToClipboard
			                    	id="npmcode3"
			                    	text="ng serve"
			                    />
		                      <p>Once you serve your application by default it will take their defalult port so you can open port using <a href="#">localhost:4200</a></p>
		                      <div className="warning-block mb-2">
		                        <p>Make sure you are not running any other angular project in local if so then use new generated port from terminal with label called <b>app running at:</b></p>
		                      </div>
		                      <div className="dark-block mb-4"><b>Some Common solution if you do not run project successfully</b>
		                        <ul className="mt-2 p-0"> 
		                          <li className="mb-1"> Use Latest Version of node.js</li>
		                          <li className="mb-1"> Remove node_module and package-lock.json file and again do <b>npm install</b></li>
		                          <li className="mb-1"> You can again download theme from themeforst and then again run</li>
		                          <li className="mb-0"> Then also if you don't solve issue you can generate a ticket.</li>
		                        </ul>
		                      </div>
		                      <h6 className="text-primary mb-3">Build Application</h6>
		                      <ul className="list-none mb-0">
		                        <li className="mb-0">1. Build you application for host on server using below command:
		                          <div className="py-2 ps-3">
		                          	<CopyToClipboard
				                    	id="buildcode1"
				                    	text="ng build"
				                    />
		                          </div>
		                        </li>
		                      </ul>
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
		                <div className="arrival-content-main"><a href="treeangular.html">
		                    <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
		                      <h5>Tree</h5>
		                    </div></a></div>
		                <div className="arrival-content-main"><a href="componentangular.html">
		                    <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
		                      <h5>Components</h5>
		                    </div></a></div>
		                <div className="arrival-content-main"><a href="appangular.html">
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
export default AngularGettingStarted;