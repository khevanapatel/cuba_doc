import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const ReactFirebase = () => {
	return(
		<Layout>
			<div className="col-xxl-10 col-xl-9 content component-col">
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
                        <p>React Cli installed <b>(npm install -g create-react-app)</b></p>
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
                                <p className="mb-2">>> Go to the web app</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/19.png" alt="" />
                              </li>
                              <li> 
                                <p className="mb-2">>> In Your apps card, select the nickname of the app for which you need a config object.</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/20.png" alt="" />
                              </li>
                              <li> 
                                <p className="mb-2">>> Select Config from the Firebase SDK snippet pane.</p><img className="img-fluid img-border" src="../assets/images/document/firebase/21.png" alt=""/><img className="img-fluid img-border mb-3 mt-3" src="../assets/images/document/firebase/22.png" alt=""/><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/23.png" alt=""/>
                              </li>
                              <li>
                                <p className="mb-2">>> Copy the config object snippet, then add it to your app's HTML.</p><img className="img-fluid img-border" src="../assets/images/document/firebase/4.png" alt="" />
                                <p className="mt-2">copy config add on config.txt</p>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <p className="mb-2">5. Next, you'll need to enable Email authentication from the authentication > Sign-in method tab:</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/5.png" alt="" />
                          </li>
                          <li>
                            <p className="mb-2">6. go to sign in method</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/6.png" alt=""/>
                            <p className="mb-2">Make disble toggle to enable, and save changes</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/7.png" alt=""/><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/25.png" alt="" />
                          </li>
                          <li>
                            <p className="mb-2">7. Go to the authentication > Users tab then click on the Add user button and genarate email and password:</p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/8.png" alt="" /><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/11.png" alt="" />
                          </li>
                        </ul>
                        <h6 className="mb-3">Step 2:</h6>
                        <ul className="list-none mb-0">
                          <li>1. Installing Firebase in React   
                            <div className="mb-4">
                              <CopyToClipboard
                              	id="firebasecode"
                              	text="npm install ——save firebase"
                              />
                            </div>
                            <p className="mb-1 mt-4">config file for auth0 manage inside the folder <b>src >> data >> config.jsx </b></p>
                            <CopyToClipboard
	                          	id="firebasecode1"
	                          	text={`\nimport * as firebase from "firebase/app";\nimport 'firebase/firestore';\nimport "firebase/auth";\n \nconst firebase_app = firebase.initializeApp({\n  apiKey: "YOUR_FIREBASE_KEY",\n  authDomain: "YOUR_FIREBASE_DOMAIN",\n  databaseURL: "YOUR_FIREBASE_DATABASE",\n  projectId: "YOUR_FIREBASE_PROJECT_ID",\n  storageBucket: "YOUR_FIREBASE_STORAGE_BUCKET",\n  messagingSenderId: "YOUR_FIREBASE_MESSAGEING_SENDER_ID",\n  appId: "YOUR_FIREBASE_API_ID"\n});`}
	                        />
                          </li>
                          <li>2. Generate components in auth folder called Login and Register and use firebase in Login and Register component according to your needs.</li>
                          <li>3. If you are using Application with Firebase and you might get error from Firebase Database. Message like (FirebaseError : Missing or insufficient permissions).
                            <p className="mt-2 mb-2"><b>The security rules read/write set as false means no one has access to the database.</b></p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/s4.png" alt="" />
                            <CopyToClipboard
                              	id="firebasecode2"
                              	text={`\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /{document=**} {\n      allow read, write: if false;\n    }\n  }\n} `}
                              />
                          </li>
                        </ul>
                        <h6 className="text-primary">Firebase Authentication only</h6>
                        <p>If you want to login only with firebase then you just need to follow below step.</p>
                        <ul className="list-none">
                          <li> 
                            <p className="mb-2">1. Just un-comment below commented code from <b>src -> index.jsx</b></p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/current-user.png" alt="" />
                          </li>
                          <li> 
                            <p className="mb-2">2. Do comment un-commented function. And uncommnet comment function. For more read comment described in <b>src -> auth -> signin.jsx.</b></p><img className="img-fluid img-border mb-3" src="../assets/images/document/firebase/sign-in.png" alt="" />
                          </li>
                        </ul>
                        <h6 className="text-primary">How to remove the firebase from Cuba theme</h6>
                        <p>For Totally remove firebase from theme then check this video.</p>
                        <video className="w-100" controls>
                          <source src="../assets/video/firebase_remove.mkv" type="video/mp4" />
                        </video>
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
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
		</Layout>
	)
}
export default ReactFirebase;