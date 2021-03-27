import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const AngularFirebase = () => {
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
	                <h4 className="mb-0">Firebase</h4>
	              </div>
	              <div className="card-body">
	                <h6 className="text-primary">Basically Firebase use for:</h6>
	                <p className="mb-1">Email and password authentication with Firebase,</p>
	                <p className="mb-1">Social authentication with Facebook and Google, Twitter etc..</p>
	                <p className="mb-1">Manage Complete Database on Cloud</p>
	                <p className="mb-1">Hosting</p>
	                <p className="mb-1">Password recovery,</p>
	                <p className="mb-1">Verification emails,</p>
	                <p className="mb-1">Storing and accessing the authentication state using the browser's localStorage</p>
	                <p>There are also many other use of firebase that you can find from reference which we have attach below.</p>
	                <h6 className="text-primary">Prerequisites</h6>
	                <p className="mb-1">You must have the following prerequisites:</p>
	                <p className="mb-1">Recent versions of Node.js and NPM. You can install them from their official website,</p>
	                <p>Angular Cli installed <b>(npm install -g @angular/cli)</b></p>
	                <h6 className="text-primary mb-2">Let's follow below step to secure your application</h6>
	                <h6 className="mb-3">Step 1: </h6>
	                <ul className="list-none">
	                  <li> 
	                    <p className="mb-2">1. setup firebase project in firebase console.</p><img className="img-fluid img-border" src="../assets/images/document/firebase/1.png" alt="" />
	                    <p className="mt-2 mb-3">click on Get Started button</p>
	                  </li>
	                  <li> 
	                    <p className="mb-2">2. Add new project</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/2.png" alt="" />
	                    <p className="mt-2 mb-2">create new project</p><img className="img-fluid img-border mb-2" src="../assets/images/document/firebase/3.png" alt="" />
	                    <p className="mb-3">Accept the controler-terms and click on Create Project</p>
	                  </li>
	                  <li> 
	                    <p className="mb-3">3. Go to Develop > Authentication</p>
	                  </li>
	                  <li>
	                    <p className="mb-3">4. Get config object for your web app</p>
	                    <p className="mb-2 ps-4">To get the config object for a Firebase Web App:</p>
	                    <ul className="list-none">
	                      <li> 
	                        <p className="mb-2">>> Click the Settings icon, then select Project settings.</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/24.png" alt="" />
	                      </li>
	                      <li> 
	                        <p className="mb-2">>> Go to the web app</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/19.png" alt=""/>
	                      </li>
	                      <li> 
	                        <p className="mb-2">>> In Your apps card, select the nickname of the app for which you need a config object.</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/20.png" alt=""/>
	                      </li>
	                      <li> 
	                        <p className="mb-2">>> Select Config from the Firebase SDK snippet pane.</p><img className="img-fluid img-border" src="../assets/images/document/firebase/21.png" alt=""/><img className="img-fluid img-border mb-3 mt-3" src="../assets/images/document/firebase/22.png" alt=""/><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/23.png" alt=""/>
	                      </li>
	                      <li>
	                        <p className="mb-2">>> Copy the config object snippet, then add it to your app's HTML.</p><img className="img-fluid img-border" src="../assets/images/document/firebase/4.png" alt=""/>
	                        <p className="mt-2">copy config add on config.txt</p>
	                      </li>
	                    </ul>
	                  </li>
	                  <li>
	                    <p className="mb-2">5. Next, you'll need to enable Email authentication from the authentication > Sign-in method tab:</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/5.png" alt=""/>
	                  </li>
	                  <li>
	                    <p className="mb-2">6. go to sign in method</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/6.png" alt=""/>
	                    <p className="mb-2">Make disble toggle to enable, and save changes</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/7.png" alt=""/><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/25.png" alt=""/>
	                  </li>
	                  <li>
	                    <p className="mb-2">7. Go to the authentication > Users tab then click on the Add user button and genarate email and password:</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/8.png" alt=""/><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/11.png" alt=""/>
	                  </li>
	                </ul>
	                <h6 className="mb-3">Step 2:</h6>
	                <ul className="list-none mb-0">
	                  <li> 
	                    <p className="mb-2">1. Installing Firebase in Angular   </p>
	                    <div className="code-box-copy mb-3">
	                      <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#firebasecode" title="Copy"><i className="fa fa-files-o"></i></button>
	                      <pre><code className="language-html" id="firebasecode">npm install ——save firebase</code></pre>
	                    </div>
	                  </li>
	                  <li> 
	                    <p className="mb-2">2. Go to main.js file and import firebase and in <b>config.json </b>file.
	                      <div className="mb-4">
	                        <CopyToClipboard
	                        	id="firebasecode1"
	                        	text={`\n import firebase from 'firebase/app';\n  \n import config from './config.json'\n  \n firebase.initializeApp(config.firebase);\n  \n export const db = firebase.firestore();`}
	                        />
	                      </div>
	                    </p>
	                    <p className="mb-2">you can just paste your firebase credential in your config.json file which is in <b>src >> config.json.</b></p>
	                    <div className="mb-4">
	                      <CopyToClipboard
	                      	id="firebasecode2"
	                      	text={`\n "firebase":{\n   "apiKey": "YOUR  API KEY",\n   "authDomain": "YOUR AUTH DOMAIN",\n   "databaseURL": "<a href="#">YOUR DATABASE URL</a>",\n   "projectId": "YOUR PROJECT ID",\n   "storageBucket": "YOUR STORAGE BUCKET",\n   "messagingSenderId": "YOUR MESSAGE SENDER ID"\n }  `}
	                      />
	                    </div>
	                  </li>
	                  <li> 
	                    <p className="mb-2">3. In Routing <b>index.js </b>place following code for restricated use to open a admin theme without login
	                      <CopyToClipboard
	                      	id="firebasecode3"
	                      	text={`\n router.beforeEach((to, from, next) => {\n firebase.auth().onAuthStateChanged(() => {\n if(to.meta.title)\n document.title = to.meta.title;\n const CurrentUser = firebase.auth().currentUser;\n const path = ['/auth/login','/auth/register'];\n if (path.includes(to.path) || to.path === "/callback" || CurrentUser || Userauth.isAuthenticatedUser()){\n return next();\n }\n next('/auth/login')\n });\n }); `}
	                      />
	                    </p>
	                  </li>
	                  <li>
	                    <p>4. Generate components in auth folder called Login and Register and use firebase in Login and Register component according to your needs. </p>
	                  </li>
	                  <li><a className="btn btn-solid" href="https://firebase.google.com/" target="_blank"> Supplemental</a></li>
	                </ul>
	              </div>
	            </div>
	          </div>
	          <div className="card gulp-section">
	            <div id="section-1-2">
	              <div className="card-header">
	                <h4 className="mb-0">How to remove the firebase from cuba theme ?</h4>
	              </div>
	              <div className="card-body">
	                <ul className="list-none">
	                  <li> 
	                    <p className="mb-2">1. Remove Import statement and configuration of firebase from your main.js also remove firebase json from config.json which is in <b>src >> config.json</b></p>
	                    <CopyToClipboard
	                    	id="firebasecode4"
	                    	text={`\n import firebase from 'firebase/app';\n  \n import config from './config.json'\n  \n firebase.initializeApp(config.firebase);\n  \n export const db = firebase.firestore();`}
	                    />
	                  </li>
	                  <li>
	                    <p className="mb-2">2. Remove code from <b>route >> index.js </b>which is for restricating user to directly use dashboard without login</p>
	                    <div className="warning-block mb-4">
	                      <p>If you don't want to remove auth0 then just remove firebase part</p>
	                    </div>
	                    <CopyToClipboard
	                    	id="firebasecode5"
	                    	text={`\n router.beforeEach((to, from, next) => {\n firebase.auth().onAuthStateChanged(() => {\n if(to.meta.title)\n document.title = to.meta.title;\n const CurrentUser = firebase.auth().currentUser;\n const path = ['/auth/login','/auth/register'];\n if (path.includes(to.path) || to.path === "/callback" || CurrentUser || Userauth.isAuthenticatedUser()){\n return next();\n }\n next('/auth/login')\n });\n });  `}
	                    />
	                  </li>
	                  <li>
	                    <p className="mb-0">3. Remove all methods called Google, Facebook and others which is created for that particular social media login and just use simple login page, and on click of login just redirect to dashboard.And if you don't want to use login also just remove complete auth folder  </p>
	                  </li>
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
	                  <h5 className="mb-0">Email with Firebase</h5></a>
	                <ul className="nav flex-column p-l-10 m-t-5 set-padding">
	                  <li className="nav-item"><a className="nav-link" href="#section-1-1" data-original-title="" title=""><i className="fa fa-angle-right"></i>Firebase</a></li>
	                  <li className="nav-item"><a className="nav-link" href="#section-1-2" data-original-title="" title=""><i className="fa fa-angle-right"></i>Remove Firebase</a></li>
	                </ul>
	              </li>
	            </ul>
	          </div>
	        </div>
	      </div>
        </Layout>
	)
}
export default AngularFirebase;