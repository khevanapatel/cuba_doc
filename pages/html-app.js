import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import Users from '../components/detail/html/users';
import Calender from '../components/detail/html/calender';
import Gallery from '../components/detail/html/gallery';
import Email from '../components/detail/html/email';
import Blog from '../components/detail/html/blog';
import Chat from '../components/detail/html/chat';
import SupportTicket from '../components/detail/html/support-ticket';
import TODO from '../components/detail/html/todo';
import LandinPage from '../components/detail/html/landin-page';
import Ecommerce from '../components/detail/html/ecommerce';
import Pricing from '../components/detail/html/pricing';

const HtmlApp = () => {
	const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 

    const headerContext = useContext(HeaderContext);
    const HeaderContextObj = headerContext.HeaderContext;

    useEffect(()=>{
       setFontSizeLocal('font-'+HeaderContextObj.fontSize);
    },[HeaderContextObj])

	return(
		<Layout>
			<div className={`col-xxl-10 col-xl-9 content component-col ${fontSizeLocal}`}>
				<div id="section-5">
		          <div className="card">
		            <div className="card-body">
		              <h4 className="main-title mb-0">Apps</h4>
		              <hr/>
		                <div id="section51">
		                  <Users/>
		                </div>
		              </div>
		           
		            <div id="section52">
		              <Calender />
		            </div> 
		            <div id="section53">
		              <Gallery />
		            </div> 
		            <div id="section54">
		              <Email />
		            </div>
		            <div id="section55">
		              <Blog />
		            </div>
		            <div id="section56">
		              <Chat />
		            </div>
		            <div id="section57">
		              <SupportTicket />
		            </div>
		            <div id="section58">
		              <TODO />
		            </div>
		            <div id="section59">
		              <LandinPage />
		            </div>
		            <div id="section510">
		              <Ecommerce />
		            </div>
		            <div id="section511">
		              <Pricing />
		            </div>
		          </div>
		        </div>
		    </div>
		    <div className="col-xxl-2 col-xl-3 right-column">
                <div className="page-sidebar custom-scrollbar" id="myScrollspy">
                  <div className="page-right-sidebar">
                    <ul className="nav flex-column custom-scrollbar">
                      <li className="nav-item p-0"><a className="nav-link quick-links active" href="#section-5" data-original-title="" title="">
                          <h5 className="mb-0">Apps</h5></a>
                        <ul className="nav flex-column p-l-10 m-t-5 set-padding">
                          <li className="nav-item"><a className="nav-link" href="#section51" data-original-title="" title=""><i className="fa fa-angle-right"></i> Users</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section52" data-original-title="" title=""><i className="fa fa-angle-right"></i>Calenders</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section53" data-original-title="" title=""><i className="fa fa-angle-right"></i>Galllery</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section54" data-original-title="" title=""><i className="fa fa-angle-right"></i>Email</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section55" data-original-title="" title=""><i className="fa fa-angle-right"></i>Blog</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section56" data-original-title="" title=""><i className="fa fa-angle-right"></i>Chat</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section57" data-original-title="" title=""><i className="fa fa-angle-right"></i>Support Ticket</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section58" data-original-title="" title=""><i className="fa fa-angle-right"></i>To-Do</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section59" data-original-title="" title=""><i className="fa fa-angle-right"></i>Landing Page</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section510" data-original-title="" title=""><i className="fa fa-angle-right"></i>Ecommerce</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section511" data-original-title="" title=""><i className="fa fa-angle-right"></i>Pricing</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>			
		</Layout>
	)
}
export default HtmlApp;