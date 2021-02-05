import React, { useState } from 'react';

import Header from '../components/common/header';
import Sidebar from '../components/common/sidebar';
import Top from '../components/common/top';
import FeaturesBlock from '../components/features/block';
import FeaturesTab from '../components/features/tab';

const AvailableFeatures = () => {
    const [fontSize, setFontSize] = useState('increase'); 
    const headerCall = (size) => {
	    if(size != '')
	    setFontSize('font-'+size);
	    else
	    setFontSize('');
  	}
	return(
		<div className="document full-width-doc sticky-nav-doc">
			<Top />
			<div className="page-wrapper compact-wrapper">
				<Header parentCall={headerCall} />
			</div>
			<div className="body-wrapper sticky_menu">
		        <div className="document-area" id="sticky-page">
		          <div className="overlay_bg"></div>
		          <div className="container-fluid custom-container">
		            <div className="row doc-container">
		            	<Sidebar />
		            	<div className={`col-lg-9 content ${fontSize}`}>
			                <div className="shortcode_text doc-section feature-list mb-0" id="feature-list">
			                  <div className="row">
			                    <div className="col-md-12">
			                      <h4 className="main-title">Templates Features</h4>
			                      <div className="row">
			                        <div className="col-sm-12">
			                          <ul className="nav nav-pills" id="pills-tab" role="tablist">
			                            <FeaturesTab 
			                            	title="HTML" 
			                            	subtitle="Frameworks" 
			                            	id="pills-home-tab"
			                            	url="#pills-home"
			                            	selected="active"
			                            	image="../assets/images/document/features/html/html.png" 
			                            />
			                            <FeaturesTab 
			                            	title="React" 
			                            	subtitle="Frameworks" 
			                            	id="pills-profile-tab"
			                            	url="#pills-profile"
			                            	selected="false"
			                            	image="../assets/images/document/features/react/react1.png" 
			                            />
			                            <FeaturesTab 
			                            	title="Angular" 
			                            	subtitle="Frameworks" 
			                            	id="pills-angular-tab"
			                            	url="#pills-angular"
			                            	selected="false"
			                            	image="../assets/images/document/features/angular/angular.svg" 
			                            />
			                            <FeaturesTab 
			                            	title="Laravel" 
			                            	subtitle="Frameworks" 
			                            	id="pills-contact-tab"
			                            	url="#pills-contact"
			                            	selected="false"
			                            	image="../assets/images/document/features/laravel/laravel.png" 
			                            />
			                            <FeaturesTab 
			                            	title="Vue" 
			                            	subtitle="Frameworks" 
			                            	id="pills-profile-tab"
			                            	url="#pills-vue"
			                            	selected="false"
			                            	image="../assets/images/document/features/vue/vue1.png" 
			                            />
			                          </ul>
			                          <div className="tab-content" id="pills-tabContent">
			                            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
			                              <ul className="framworks-list ps-0">
			                                <FeaturesBlock title="Booxstrap 5X" image="../assets/images/document/features/html/bootstrap.png" />
			                                <FeaturesBlock title="CSS" image="../assets/images/document/features/html/css.png" />
			                                <FeaturesBlock title="Sass" image="../assets/images/document/features/html/sass.png" />
			                                <FeaturesBlock title="Pug" image="../assets/images/document/features/html/pug.png" />
			                                <FeaturesBlock title="NPM" image="../assets/images/document/features/html/npm.png" />
			                                <FeaturesBlock title="Gulp" image="../assets/images/document/features/html/gulp.png" />
			                                <FeaturesBlock title="Starter Kit" image="../assets/images/document/features/html/kit.png" />
			                                <FeaturesBlock title="40+ UI Kits" image="../assets/images/document/features/html/uikits.png" />
			                                <FeaturesBlock title="8+ Layout" image="../assets/images/document/features/html/layout.png" />
			                                <FeaturesBlock title="Builders" image="../assets/images/document/features/html/builders.png" />
			                                <FeaturesBlock title="11 Icon Sets" image="../assets/images/document/features/html/iconset.png" />
			                                <FeaturesBlock title="Forms" image="../assets/images/document/features/html/forms.png" />
			                                <FeaturesBlock title="Tables" image="../assets/images/document/features/html/table.png" />
			                                <FeaturesBlock title="17+ Apps" image="../assets/images/document/features/html/apps.png" />
			                              </ul>
			                            </div>
			                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
			                              <ul className="framworks-list ps-0">
			                                <FeaturesBlock title="React Hook" image="../assets/images/document/features/react/hook.png" />
			                                <FeaturesBlock title="React Strap" image="../assets/images/document/features/react/reactstrap.png" />
			                                <FeaturesBlock title="No Jquery" image="../assets/images/document/features/react/noquery.png" />
			                                <FeaturesBlock title="Redux" image="../assets/images/document/features/react/redux.png" />
			                                <FeaturesBlock title="Firebase Auth" image="../assets/images/document/features/react/firebase.png" />
			                                <FeaturesBlock title="Firebase Crud" image="../assets/images/document/features/react/crud.png" />
			                                <FeaturesBlock title="Chat" image="../assets/images/document/features/react/animation.png" />
			                                <FeaturesBlock title="Router Animation" image="../assets/images/document/features/react/props_state.png" />
			                                <FeaturesBlock title="State & Props" image="../assets/images/document/features/react/reactrouter.png" />
			                                <FeaturesBlock title="Reactrouter" image="../assets/images/document/features/react/chart.png" />
			                                <FeaturesBlock title="Amazing Chart" image="../assets/images/document/features/react/map.png" />
			                                <FeaturesBlock title="Map" image="../assets/images/document/features/react/gallery.png" />
			                                <FeaturesBlock title="Gallery" image="../assets/images/document/features/react/application.png" />
			                                <FeaturesBlock title="9+ Apps" image="../assets/images/document/features/react/hook.png" />
			                              </ul>
			                            </div>
			                            <div className="tab-pane fade" id="pills-angular" role="tabpanel" aria-labelledby="pills-angular-tab">
			                              <ul className="framworks-list ps-0">
			                                <FeaturesBlock title="SCSS" image="../assets/images/document/features/angular/1.png" />
			                                <FeaturesBlock title="Ng Bootstrap" image="../assets/images/document/features/angular/2.png" />
			                                <FeaturesBlock title="RXjs" image="../assets/images/document/features/angular/3.png" />
			                                <FeaturesBlock title="Router" image="../assets/images/document/features/angular/4.png" />
			                                <FeaturesBlock title="Form" image="../assets/images/document/features/angular/5.png" />
			                                <FeaturesBlock title="Apex chart" image="../assets/images/document/features/angular/6.png" />
			                                <FeaturesBlock title="Chart.js" image="../assets/images/document/features/angular/7.png" />
			                                <FeaturesBlock title="Chartist" image="../assets/images/document/features/angular/8.png" />
			                                <FeaturesBlock title="Google Map" image="../assets/images/document/features/angular/9.png" />
			                                <FeaturesBlock title="Gallery" image="../assets/images/document/features/angular/10.png" />
			                                <FeaturesBlock title="Ecommerce" image="../assets/images/document/features/angular/11.png" />
			                                <FeaturesBlock title="Firebase Auth" image="../assets/images/document/features/angular/12.png" />
			                                <FeaturesBlock title="Firebase Crud" image="../assets/images/document/features/angular/13.png" />
			                                <FeaturesBlock title="Chat" image="../assets/images/document/features/angular/14.png" />
			                              </ul>
			                            </div>
			                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
			                              <ul className="framworks-list ps-0">
			                                <FeaturesBlock title="Laravel 8" image="../assets/images/document/features/laravel/laravel.png" />
			                                <FeaturesBlock title="Bootstrap 5" image="../assets/images/document/features/laravel/bootstrap.png" />
			                                <FeaturesBlock title="SASS" image="../assets/images/document/features/html/sass.png" />
			                                <FeaturesBlock title="Blade" image="../assets/images/document/features/laravel/blade.png" />
			                                <FeaturesBlock title="Layouts" image="../assets/images/document/features/laravel/layouts.png" />
			                                <FeaturesBlock title="NPM" image="../assets/images/document/features/laravel/npm.png" />
			                                <FeaturesBlock title="MIX" image="../assets/images/document/features/laravel/mix.png" />
			                                <FeaturesBlock title="Yarn" image="../assets/images/document/features/laravel/yarn.png" />
			                                <FeaturesBlock title="Sasswebpack" image="../assets/images/document/features/laravel/sasswebpack.png" />
			                              </ul>
			                            </div>
			                            <div className="tab-pane fade" id="pills-vue" role="tabpanel" aria-labelledby="pills-vue-tab">
			                              <ul className="framworks-list ps-0">
			                                <FeaturesBlock title="Vue cli" image="../assets/images/document/features/vue/vue1.png" />
			                                <FeaturesBlock title="Booxstrap 4X" image="../assets/images/document/features/html/bootstrap.png" />
			                                <FeaturesBlock title="No Jquery" image="../assets/images/document/features/react/noquery.png" />
			                                <FeaturesBlock title="Sass" image="../assets/images/document/features/html/sass.png" />
			                                <FeaturesBlock title="Firebase Auth" image="../assets/images/document/features/react/firebase.png" />
			                                <FeaturesBlock title="Chat" image="../assets/images/document/features/react/chat.png" />
			                                <FeaturesBlock title="Amazing Chart" image="../assets/images/document/features/react/chart.png" />
			                                <FeaturesBlock title="Map" image="../assets/images/document/features/react/map.png" />
			                                <FeaturesBlock title="Gallery" image="../assets/images/document/features/react/gallery.png" />
			                              </ul>
			                            </div>
			                          </div>
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			                </div>
		             	</div>
		            </div>
		          </div>
		        </div>
		    </div>
		</div>
	)
}

export default AvailableFeatures;