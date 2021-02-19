import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import ComponentContent from '../components/detail/react/component-content';
import BasicUiElement from '../components/detail/react/component/basic-ui-element';
import AdvanceUiElement from '../components/detail/react/component/advance-ui-element';
import Form from '../components/detail/react/component/form';
import Table from '../components/detail/react/component/table';
import Chart from '../components/detail/react/component/chart';

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
          </div>
        </div>
      
		</Layout>
	)
}
export default ReactComponent;