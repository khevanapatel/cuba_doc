import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const ReactAuth = () => {
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
              <div className="card gulp-section">
                <div id="section-1-1">
                  <div className="card-header">
                    <h4 className="mb-0">Auth0</h4>
                  </div>
                  <div className="card-body">
                    <h6 className="text-primary">Basically Auth0 use for:</h6>
                    <p>Auth0 is a flexible, drop-in solution to add authentication and authorization services to your applications. Your team and organization can avoid the cost, time, and risk that comes with building your own solution to authenticate and authorize users.</p>
                    <p className="mb-4">You can connect any application (written in any language or on any stack) to Auth0 and define the identity providers you want to use (how you want your users to log in). Based on your app's technology, choose one of our <b>SDKs (or call our API), </b>and hook it up to your app. Now each time a user tries to authenticate, Auth0 will verify their identity and send the required information back to your app.</p>
                    <h6 className="text-primary">Prerequisites</h6>
                    <p className="mb-1">You must have the following prerequisites:</p>
                    <p className="mb-1">Recent versions of Node.js and NPM. You can install them from their official website,  </p>
                    <p className="mb-4">React Cli installed <b>(npm install -g create-react-app)</b></p>
                    <h6 className="text-primary mb-3">Let's follow below step to secure your application</h6>
                    <h6>Step 1:</h6>
                    <ul className="list-none">
                      <li> 
                        <p className="mb-2">1. setup auth0 project in auth0 console.</p><img className="img-fluid img-border" src="../assets/images/document/auth0/1.png" alt="" />
                        <p className="mt-2 mb-3">Click on Get Started</p>
                      </li>
                      <li> 
                        <p className="mb-2">2. Now Go to second option Integrate Auth0 into your application and click on <b>Create Application</b></p><img className="img-fluid img-border mb-3" src="../assets/images/document/auth0/2.jpg" alt="" />
                      </li>
                      <li> 
                        <p className="mb-2">3. <b>Choose an application type : </b>Select Single Page Web Application and click on Create Button</p><img className="img-fluid img-border mb-3" src="../assets/images/document/auth0/3.jpg" alt="" />
                      </li>
                      <li>
                        <p className="mb-2">4. Select Technology</p><img className="img-fluid img-border mb-3" src="../assets/images/document/auth0/4.png" alt="" />
                      </li>
                      <li>
                        <p className="mb-2">5. Now go to setting tabs and show basic information about your auth0 application name , domain , client id and Set your Callback , Logout and Web Origins Url</p><img className="img-fluid img-border mb-3" src="../assets/images/document/auth0/5.png" alt="" />
                      </li>
                    </ul>
                    <h6>Step 2:</h6>
                    <ul className="list-none mb-0">
                      <li>1. Installing Auth0 in React    
                        <div className="mb-4">
                          <CopyToClipboard
                          	id="authcode"
                          	text={`npm install ——save @auth0/auth0-react`}
                          	/>
                        </div>
                      </li>
                      <p className="mb-1 mt-4">config file for auth0 manage inside the folder <b>src >> data >> config.jsx</b></p>
                      <CopyToClipboard
                      	id="authcode1"
                      	text={`\nexport const auth0 = ({\n    domain : "YOUR_DOMAIN",\n    clientId : "YOUR_CLIENT_ID",\n    redirectUri : "YOUR_REDIRECTURI(callback path)"\n})`}
                      	/>
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
                      <h5 className="mb-0">Login with auth</h5></a>
                    <ul className="nav flex-column p-l-10 m-t-5 set-padding">
                      <li className="nav-item"><a className="nav-link" href="#section-1-1" data-original-title="" title=""><i className="fa fa-angle-right"></i>Auth0</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
		</Layout>
	)
}
export default ReactAuth;