import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import ComponentContent from '../components/detail/react/component-content';
import BasicUiElement from '../components/detail/react/component/basic-ui-element';
import AdvanceUiElement from '../components/detail/react/component/advance-ui-element';
import Form from '../components/detail/react/component/form';
import Table from '../components/detail/react/component/table';
import Chart from '../components/detail/react/component/chart';
import Maps from '../components/detail/react/component/maps';
import Editors from '../components/detail/react/component/editors';

const ReactComponent = () => {
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
          <div className="card">
            <div className="card-body">
              <h4 className="main-title mb-0">Component</h4>
              <hr/>
                <div id="section1-1">
                  <BasicUiElement/>
                </div>
              </div>
            </div>
            <div id="section-1-2">
              <AdvanceUiElement />
            </div>
            <div id="section-1-5">
              <Form />
            </div>
            <div id="section-1-6">
              <Table />
            </div>
            <div id="section-1-9">
              <Chart />
            </div>
            <div id="section-1-10">
              <Maps />
            </div>
            <div id="section-1-11">
              <Editors />
            </div>
          </div>
      </div>
     
      <div className="col-xxl-2 col-xl-3 right-column">
        <div className="page-sidebar custom-scrollbar" id="myScrollspy">
          <div className="page-right-sidebar">
            <ul className="nav flex-column custom-scrollbar">
              <li className="nav-item"><a className="nav-link quick-links active" href="#section-1" data-original-title="" title="">
                  <h5 className="mb-0">Components</h5></a>
                <ul className="nav flex-column p-l-10 m-t-5 set-padding">
                  <li className="nav-item"><a className="nav-link" href="#section-1-1" data-original-title="" title=""><i className="fa fa-angle-right"></i> Basic
                       UI Elements</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-2" data-original-title="" title=""><i className="fa fa-angle-right"></i>Advance
                                                                          UI Elements</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-5" data-original-title="" title=""><i className="fa fa-angle-right"></i> Forms</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-6" data-original-title="" title=""><i className="fa fa-angle-right"></i> Tables</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-9" data-original-title="" title=""><i className="fa fa-angle-right"></i>                                Charts</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-10" data-original-title="" title=""><i className="fa fa-angle-right"></i>                                maps</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-11" data-original-title="" title=""><i className="fa fa-angle-right"></i>                                Editors</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
		</Layout>
	)
}
export default ReactComponent;