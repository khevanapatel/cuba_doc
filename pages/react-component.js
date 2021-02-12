import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import ComponentContent from '../components/detail/react/component-content';
import BasicUiElement from '../components/detail/react/component/basic-ui-element';

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
                  //basic ui element 
                </div>
              </div>
            </div>
          </div>
        </div>
      
		</Layout>
	)
}
export default ReactComponent;