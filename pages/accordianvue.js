import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Header from '../components/common/header';
import Sidebar from '../components/common/sidebar';
import Top from '../components/common/top';
import Toggle from '../components/faq/toggle';
import Accordian from '../components/faq/accordian';

const AccordianVue = () => {
	const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 
	const [cardStatus, setCardStatus] = useState(''); 

    const headerContext = useContext(HeaderContext);
    const HeaderContextObj = headerContext.HeaderContext;

    useEffect(()=>{
       setFontSizeLocal('font-'+HeaderContextObj.fontSize);
    },[HeaderContextObj])

    const setActiveCard = (val) => {
    	setCardStatus(val)
    }
	return(
		<div className="document full-width-doc sticky-nav-doc">
			<Top />
			<div className="page-wrapper compact-wrapper">
				<Header/>
			</div>
			<div className="body-wrapper sticky_menu">
		        <div className="document-area" id="sticky-page">
		          <div className="overlay_bg"></div>
		          <div className="container-fluid custom-container">
		            <div className="row doc-container">
		            	<Sidebar />
		            	<div className={`col-lg-9 col-md-12 content ${fontSizeLocal}`}>
			                <article id="accordian">
			                  <div className="row">
			                    <div className="col-md-12">
			                      <h4 className="main-title"> <i className="me-2" data-feather="help-circle"></i>Accordian</h4>
			                      <p>
			                         Last updated Jan 29, 2021</p>
			                    </div>
			                    <div className="col-md-12">
			                      <div className="toggle-code">
			                        <h5 className="s_title load-order-2" id="toggle">Toggle<a className="anchorjs-link" aria-label="Anchor" data-anchorjs-icon="" href="#toggle" style={{font: "1em / 1 anchorjs-icons",paddingLeft:' 0.375em'}} ></a></h5>
			                        <Toggle 
			                        	title="Super Professional"
			                        	content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
			                        	id="multiCollapseExample1"
			                        	class=""
			                        	expanded="true"
			                        />
			                         <Toggle 
			                        	title="Dashboard"
			                        	content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
			                        	id="multiCollapseExample2"
			                        	class="mt-1"
			                        	expanded="false"
			                        />
			                      </div>
			                      <div className="accordion_shortcode">
			                        <h5 className="s_title load-order-2" id="accordions">{cardStatus}Accordion<a className="anchorjs-link" aria-label="Anchor" data-anchorjs-icon="" href="#accordions" style={{font: "1em / 1 anchorjs-icons",paddingLeft:' 0.375em'}}></a></h5>
			                        <div id="accordion">
			                          <Accordian 
			                          	title="Super Professional"
			                          	content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
			                          	id="headingOne"
			                          	cardStatus={cardStatus}
			                          	expanded="false"
			                          	onClick={()=>setActiveCard("Super Professional")}
			                          />
			                          <Accordian 
			                          	title="Online Marketing"
			                          	content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
			                          	id="headingTwo"
			                          	expanded="false"
			                          	cardStatus={cardStatus}
			                          	onClick={()=>setActiveCard("Online Marketing")}
			                          /> 
			                          <Accordian 
			                          	title="Amazing Support"
			                          	content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."
			                          	id="headingThree"
			                          	expanded="false"
			                          	cardStatus={cardStatus}
			                          	onClick={()=>setActiveCard("Amazing Support")}
			                          />
			                        </div>
			                      </div>
			                    </div>
			                  </div>
			                </article>
			            </div>
		            </div>
		          </div>
		        </div>
		    </div>
		</div>
	)
}

export default AccordianVue;