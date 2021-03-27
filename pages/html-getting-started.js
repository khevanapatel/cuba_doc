import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
const HTMLGettingStarted = () => {
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
                      <p className="mt-0">Cuba Admin is a responsive HTML template that is based on the CSS framework Bootstrap 5 and it is built with Sass, Gulp and Pug. Sass compiler makes it easier to code and customize. If you are unfamiliar with Bootstrap or Gulp, visit their website and read through the documentation. All of Bootstrap components have been modified to fit the style of Cuba Admin and provide a consistent look throughout the template.</p>
                      <hr/>
                      <p>Before you start working with the template, we suggest you go through the pages that are bundled with the theme. Most of the template example pages contain quick tips on how to create or use a component which can be really helpful when you need to create something on the fly.</p>
                    </div>
                  </div>
                </div>
                <div className="card gulp-section">
                  <div className="card-header">
                    <h4 className="mb-0">Gulp Tasks</h4>
                  </div>
                  <div className="card-body p-t-0">
                    <p>First, you must download and install node.js. NPM stands for node packaged modules and is a way to manage development dependencies through Node.js.</p>
                    <p>Download the Node.js source code or a pre-built installer for your platform, and start developing, you can download it from <a href="#">anodejs.org.</a></p>
                    <p>You can check it in your terminal window using these commands node --version and npm --version.</p>
                    <p><a href="#">GulpJS </a>is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.
                      <ul>
                        <li>Navigate to the root main/directory,default</li>
                        <li>Then use $ npm i command (install node js)</li>
                        <li>$ gulp command (for run project)</li>
                      </ul>
                    </p>
                    <p>NPM use the package.json file and automatically install the required local dependencies listed in it.</p>
                    <p>dependencies are<strong>: gulp, browser-sync, gulp-autoprefixer, gulp-livereload, gulp-pug, gulp-sass, livereload</strong></p>
                    <p>have added all necessary gulp task in gulpfile.js, for more details about plugin refer this link <a href="https://gulpjs.com/plugins/">https://gulpjs.com/plugins/</a></p>
                  </div>
                </div>
                <div className="card new-arrival-sec">
                  <div className="card-header">
                    <h4 className="mb-0">What's Next?</h4>
                  </div>
                  <div className="card-body p-t-0">
                    <div className="arrival-content-main"><a href="tree.html">
                        <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
                          <h5>Tree</h5>
                        </div></a></div>
                    <div className="arrival-content-main"><a href="options.html">
                        <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
                          <h5>Options</h5>
                        </div></a></div>
                    <div className="arrival-content-main"><a href="component.html">
                        <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
                          <h5>Components</h5>
                        </div></a></div>
                    <div className="arrival-content-main"><a href="app.html">
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
export default HTMLGettingStarted;