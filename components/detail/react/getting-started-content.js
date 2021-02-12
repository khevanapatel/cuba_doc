import CopyToClipboard from '../../common/copy-to-clipboard';

const GettingStartedContent = () => {
	return(
		<div className="col-sm-12">
	        <div className="card getting-started-sec">
	          <div className="card-body p-0">
	            <div className="alert-box alert alert-primary mb-0">
	              <p className="mt-0">Cuba React Admin Theme is pure React theme, Yes! you read correct, it's <b>No Jquery React admin theme </b>including all feature and functionality with ease of integration for your project.Cuba theme document will help you to understand React from scratch to making perfect real time dream application.</p>
	              <hr/>
	              <p>We also includes <b>React Hooks </b>and <b>Redux </b>which is manage applications data in easy way. It's user freindlly to learn the application.</p>
	              <p>Follow the documentation carefully for solving your issues in minutes, Apart from that if you don't find solution when you following the docs you can raise a support ticket for your issue from <a href="https://pixelstrap.freshdesk.com" target="_blank"> <b>pixelstrap.freshdesk.com</b></a></p>
	            </div>
	          </div>
	        </div>
	        <div className="card gulp-section">
	          <div className="card-header">
	            <h4 className="mb-0">How to start</h4>
	          </div>
	          <div className="card-body">
	            <p>Welcome to React! React helps you build modern applications for the web, mobile, or desktop.</p>
	            <p className="mb-4">For getting started an React application you needs two things as Prerequisites.</p>
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
	                <p>React CLI, and React apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an <a href="https://www.npmjs.com" target="_blank"> <b>npm </b></a>package manager.</p>
	              </li>
	              <li>
	                <p>This Quick Start uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run <b>npm -v </b>in a terminal/console window.</p>
	              </li>
	              <li>
	                <p>For better understanding React we suggest you to once go through official documentation of React from <a href="https://reactjs.org/docs/getting-started.html" target="_blank"> <b>ReactJS.org</b></a></p>
	              </li>
	            </ul>
	          </div>
	        </div>
	        <div className="card gulp-section">
	          <div className="card-header">
	            <h4 className="mb-0">React setup</h4>
	          </div>
	          <div className="card-body">
	            <div className="warning-block mb-4">
	              <p>If you want Cuba theme setup then directly follow next Cuba setup section</p>
	            </div>
	            <h6 className="text-primary mb-3">Installing React CLI</h6>
	            <ul className="mb-4">
	              <li> 
	                <p>You use the React CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks as it is a progressive framework for building user interfaces.</p>
	              </li>
	              <li>
	                <p>Install the React CLI globally.</p>
	              </li>
	              <li> 
	                <p>To install the CLI using npm, open a terminal/console window and enter the following command:</p>
	                <CopyToClipboard 
	                	text="npm install -g create-react-app"
	                	id="installcode1"
	                />
	              </li>
	            </ul>
	            <h6 className="text-primary mb-3">Create Initial application </h6>
	            <ul className="list-none"> 
	              <li>1. Run the CLI command react create and provide the name my-app, as shown here:
	                <div className="py-2 ps-3">
	                   <CopyToClipboard 
	                	text="npm create-react-app my-app"
	                	id="createcode1"
	               	  />
	                </div>
	              </li>
	              <li>2.  The react create command prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key.</li>
	            </ul>
	            <h6 className="text-primary mb-3">Run Application</h6>
	            <ul className="list-none">
	              <li>1. Go to the workspace folder (my-app).
	                <div className="py-2 ps-3">
	                  <CopyToClipboard 
	                	text="cd my-app"
	                	id="cdcode"
	               	  /> 
	                </div>
	              </li>
	              <li>2. Launch the server by using the CLI command npm start
	                <div className="py-2 ps-3">
	                  <CopyToClipboard 
	                	text="npm start"
	                	id="npmcode"
	               	  /> 
	                </div>
	              </li>
	            </ul><a className="btn btn-solid" href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank">Supplemental</a>
	          </div>
	        </div>
	        <div className="card gulp-section">
	          <div className="card-header">
	            <h4 className="mb-0">Cuba setup</h4>
	          </div>
	          <div className="card-body">
	            <p className="mb-4">If you have already download and install node.js and React CLI then ignore prerequisites accordingly.</p>
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
	            <h6 className="text-primary mb-3">React CLI</h6>
	            <ul>
	              <li>Install React CLI Using:
	              	<CopyToClipboard 
	                	text="npm install -g create-react-app"
	                	id="installcode2"
	               	/>
	              </li>
	            </ul>
	            <h6 className="text-primary mb-3 pt-2"><i data-feather="arrow-right"> </i>Setup Cuba theme by</h6>
	            <ul className="list-none">
	              <li>1) Download and extract an Cuba themes from themeforest</li>
	              <li>2) Extract it and then go in to theme folder.
	                <div className="py-2 ps-3">
	                  <CopyToClipboard 
	                	text="cd theme"
	                	id="cdcode2"
	               	  />
	                </div>
	              </li>
	              <li>3)  Import all dependency by installing npm command
	                <div className="py-2 ps-3">
	                  <CopyToClipboard 
	                	text="npm install"
	                	id="npmcode2"
	               	  />
	                </div>
	              </li>
	              <li>4)  Now you are in stage to successfully run Cuba using below command:
	                <div className="py-2 ps-3">
	                  <CopyToClipboard 
	                	text="npm start"
	                	id="npmcode3"
	               	  />
	                  <p>Once you serve your application by default it will take their defalult port so you can open port using <a href="/#">localhost://3000</a></p>
	                  <div className="warning-block mb-2">
	                    <p>Make sure you are not running any other react project in local if so then use new generated port from terminal with label called <b>app running at:</b></p>
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
	                  <ul className="list-none">
	                    <li>1. Build you application for host on server using below command:
	                      <div className="py-2 ps-3">
	                      	<CopyToClipboard 
		                      text="npm run build"
		                      id="buildcode1"
		                   	/>
	                      </div>
	                    </li>
	                    <li>2. It will create one dist file in your theme folder. Make zip of dist folder. so here you are ready to upload your theme on server.
	                      <p>If you’re using Apache HTTP Server, you need to create a .htaccess file in the public folder by pastng below code</p>
	                      <div className="py-2 ps-3">
	                        <CopyToClipboard 
		                      text="Options -MultiViews
	                              RewriteEngine On
	                              RewriteCond %{REQUEST_FILENAME} !-f
	                              RewriteRule ^ index.html [QSA,L]"
		                      id="buildcode2"
		                   	/>
	                      </div>
	                    </li>
	                    <li className="mb-3">Now upload your dist folder on public folder</li>
	                    <li> <a className="btn btn-solid" href="https://reactjs.org/docs/getting-started.html" target="_blank">Supplemental</a></li>
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
	          <div className="card-body">
	            <div className="arrival-content-main"><a href="/folder-structure">
	                <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
	                  <h5>Tree</h5>
	                </div></a></div>
	            <div className="arrival-content-main"><a href="/componentreact">
	                <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
	                  <h5>Components</h5>
	                </div></a></div>
	            <div className="arrival-content-main"><a href="/appreact">
	                <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
	                  <h5>Applications</h5>
	                </div></a></div>
	          </div>
	        </div>
	    </div>
	)
}

export default GettingStartedContent;