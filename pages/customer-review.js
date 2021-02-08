import React, { useState, useEffect, useContext } from 'react';
import Layout from '../components/common/layout';

import { HeaderContext } from '../helpers/HeaderContext';

const CustomerReview = () => {
	const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 

    const headerContext = useContext(HeaderContext);
    const HeaderContextObj = headerContext.HeaderContext;

    useEffect(()=>{
       setFontSizeLocal('font-'+HeaderContextObj.fontSize);
    },[HeaderContextObj])
	return(
		<Layout>
        	<div className={`col-lg-9 content ${fontSizeLocal}`}>
                <div className="shortcode_text doc-section mb-0" id="review">
                  <div className="row">
                    <div className="col-md-12">
                      <h4 className="main-title">Customer Reviews<a className="btn btn-primary float-end" href="https://themeforest.net/item/cuba-bootstrap-responsive-admin-dashboard-template/reviews/27530933">See All</a></h4>
                    </div>
                    <div className="col-md-12">
                      <div className="card review-sec">
                        <div className="card-header">
                          <div className="review-header">
                            <div className="star-sec"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                              <p className="ms-2 mb-0">For <strong>Feature Availability</strong></p>
                            </div>
                            <div className="right-star">
                              <p>by <span>kavishan123</span></p>
                              <p className="ms-2">11 days ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-t-0">
                          <p className="card-text">Why you sale this amazing theme only 5 wow it's superb</p>
                          <div className="media"><img className="align-self-start me-3" src="../assets/images/document/review.jpg" alt="Generic placeholder image" />
                            <div className="media-body">
                              <p>Thanks for loving and amazing , its great that you have purchased at launch offer price which will soon be higher.</p>
                              <p>best of luck for your projects :)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="card review-sec">
                        <div className="card-header">
                          <div className="review-header">
                            <div className="star-sec"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                              <p className="ms-2 mb-0">For <strong>Customer Support</strong></p>
                            </div>
                            <div className="right-star">
                              <p>by <span>mahbuburried</span></p>
                              <p className="ms-2">23 days ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-t-0">
                          <p className="card-text">Customer support is excelent. whenever have problem and not uderstand their support section always helps me. and Admin panel is very nice. Thanks</p>
                          <div className="media"><img className="align-self-start me-3" src="../assets/images/document/review.jpg" alt="Generic placeholder image" />
                            <div className="media-body">
                              <p>Thanks for loving our theme and support , wish you great luck for your project :)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="card review-sec">
                        <div className="card-header">
                          <div className="review-header">
                            <div className="star-sec"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                              <p className="ms-2 mb-0">For <strong>Fesign Quality</strong></p>
                            </div>
                            <div className="right-star">
                              <p>by <span>ryanlam81</span></p>
                              <p className="ms-2">18 hours ago</p>
                            </div>
                          </div>
                        </div>
                        <div className="card-body p-t-0">
                          <p className="card-text">The codes very clean with great design and also nice customer supports.Love it very much !</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </Layout>
	)
}

export default CustomerReview;