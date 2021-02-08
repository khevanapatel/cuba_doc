import React, { useState, useEffect, useContext } from 'react';
import { HeaderContext } from '../../helpers/HeaderContext';

const Log = () => {
	const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 

    const headerContext = useContext(HeaderContext);
    const HeaderContextObj = headerContext.HeaderContext;

    useEffect(()=>{
       setFontSizeLocal('font-'+HeaderContextObj.fontSize);
    },[HeaderContextObj])
	return(
		<div className={`col-lg-9 col-md-12 content ${fontSizeLocal}`}>
            <div className="row">
              <div className="col-md-12 change-log-main">
                <h4 className="main-title">Change Log</h4>
                {/*p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.*/}
                <div className="change-log-inner-sec">
                  <div className="row change-log-content">
                    <div className="col-lg-3 change-log-date">
                      <div className="change-date">
                        <h6>January 21, 2021 </h6>
                        <p>Version 1.8</p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="log-version-info">
                        <div className="log-version"></div>
                        <div className="log-line"></div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="right-log-content">
                        <p><span className="log-improve">Improvement</span>Present concepts for feedback</p>
                        <p><span className="log-new">New</span> Deliver and Launch</p>
                        <p><span className="log-new">New</span> Client meeting</p>
                        <p><span className="log-new">New</span>Conduct research</p>
                        <p><span className="log-new">New</span>Create variations of concept</p>
                        <p><span className="log-new">New</span>Sketch out ideas</p>
                        <div className="log-download-links"><a className="log-btn" href="change_log.txt" download><i className="fa fa-cloud-download"></i>Download</a><a className="log-btn" href="#"><i className="fa fa-file-archive-o"></i>Zip</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="row change-log-content">
                    <div className="col-lg-3 change-log-date">
                      <div className="change-date">
                        <h6>February 1, 2021 </h6>
                        <p>Version 1.8.5</p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="log-version-info">
                        <div className="log-version"></div>
                        <div className="log-line"></div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="right-log-content">
                        <p><span className="log-improve">Improvement</span>Initial consult</p>
                        <p><span className="log-new">New</span>Design Inquiry</p>
                        <p><span className="log-new">New</span> Initial Design Concept</p>
                        <p><span className="log-update">New</span>Second Design Concept</p>
                        <p><span className="log-fixed">New</span>Send out Design Concept</p>
                        <p><span className="log-new">New</span>Purchasing of Materials</p>
                        <div className="log-download-links"><a className="log-btn" href="change_log.txt" download><i className="fa fa-cloud-download"></i>Download</a><a className="log-btn" href="#"><i className="fa fa-file-archive-o"></i>Zip</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="row change-log-content">
                    <div className="col-lg-3 change-log-date">
                      <div className="change-date">
                        <h6>April 14, 2021 </h6>
                        <p>Version 1.8.10</p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="log-version-info">
                        <div className="log-version"></div>
                        <div className="log-line"></div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="right-log-content">
                        <p><span className="log-improve">Improvement</span>Online or in Person Registration</p>
                        <p><span className="log-new">New</span>Networking / Breakfast (Hall-B)</p>
                        <p><span className="log-update">New</span> Event Orientation & Refresher</p>
                        <p><span className="log-new">New</span>Project Scoping Working Session</p>
                        <p><span className="log-new">New</span>Customer Testimonials</p>
                        <p><span className="log-fixed">New</span>Project Scoping</p>
                        <div className="log-download-links"><a className="log-btn" href="change_log.txt" download><i className="fa fa-cloud-download"></i>Download</a><a className="log-btn" href="#"><i className="fa fa-file-archive-o"></i>Zip</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="row change-log-content">
                    <div className="col-lg-3 change-log-date">
                      <div className="change-date">
                        <h6>April 14, 2021 </h6>
                        <p>Version 1.8.15</p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="log-version-info">
                        <div className="log-version"></div>
                        <div className="log-line"></div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="right-log-content">
                        <p><span className="log-new">Improvement</span>Ongoing Projects Review</p>
                        <p><span className="log-improve">New</span>Milestone checklist,Marketing Review and Expansing Meeting</p>
                        <p><span className="log-new">New</span> Finalize ongoing school board projects</p>
                        <p><span className="log-new">New</span>Bidding spree</p>
                        <p><span className="log-new">New</span>Secure winter project</p>
                        <p><span className="log-fixed">New</span>Halloween Party !</p>
                        <div className="log-download-links"><a className="log-btn" href="change_log.txt" download><i className="fa fa-cloud-download"></i>Download</a><a className="log-btn" href="#"><i className="fa fa-file-archive-o"></i>Zip</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="row change-log-content">
                    <div className="col-lg-3 change-log-date">
                      <div className="change-date">
                        <h6>April 14, 2022 </h6>
                        <p>Version 1.8.17</p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="log-version-info">
                        <div className="log-version"></div>
                        <div className="log-line"></div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="right-log-content">
                        <p><span className="log-newImprovement"></span>Can I use just the Grid?</p>
                        <p><span className="log-new">New</span>Added WooCommerce functionality</p>
                        <p><span className="log-new">New</span> Template Header</p>
                        <p><span className="log-improve">New</span>SEO Agency Prebuilt Website</p>
                        <p><span className="log-new">New</span>Why is Foundation free?</p>
                        <p><span className="log-fixed">New</span>Added Services, Cases pages</p>
                        <div className="log-download-links"><a className="log-btn" href="change_log.txt" download><i className="fa fa-cloud-download"></i>Download</a><a className="log-btn" href="#"><i className="fa fa-file-archive-o"></i>Zip</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="row change-log-content">
                    <div className="col-lg-3 change-log-date">
                      <div className="change-date">
                        <h6>May 21, 2023 </h6>
                        <p>Version 1.8.20</p>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="log-version-info">
                        <div className="log-version"></div>
                        <div className="log-line"></div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="right-log-content">
                        <p><span className="log-new">Improvement</span>Ongoing office renovation,Walk through scheduled</p>
                        <p><span className="log-new">New</span>Schedule project</p>
                        <p><span className="log-new">New</span> Residential Construction Conference</p>
                        <p><span className="log-improve">New</span>Christmas Party !</p>
                        <p><span className="log-new">New</span>Hosting:Community Fundraiser</p>
                        <p><span className="log-fixed">New</span>Project Bid Result</p>
                        <div className="log-download-links"><a className="log-btn" href="change_log.txt" download><i className="fa fa-cloud-download"></i>Download</a><a className="log-btn" href="#"><i className="fa fa-file-archive-o"></i>Zip</a></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
	)
}
export default Log;