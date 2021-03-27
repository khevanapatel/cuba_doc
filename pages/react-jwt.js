import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';

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
                    <h4 className="mb-0">JWT</h4>
                  </div>
                  <div className="card-body">
                    <h6 className="text-primary">Basically JWT use for:</h6>
                    <p>Here are some scenarios where JSON Web Tokens are useful:</p>
                    <p><b>Authorization: </b>This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.</p>
                    <p><b>Information Exchange: </b>JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.</p>
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
                      <h5 className="mb-0">Login with Jwt</h5></a>
                    <ul className="nav flex-column p-l-10 m-t-5 set-padding">
                      <li className="nav-item"><a className="nav-link" href="#section-1-1" data-original-title="" title=""><i className="fa fa-angle-right"></i>Jwt</a></li>
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