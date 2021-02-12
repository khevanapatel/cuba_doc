import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import GettingStartedContent from '../components/detail/react/getting-started-content';

const GettingStarted = () => {
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
	          <GettingStartedContent />
	        </div>
	    </div>
    </Layout>
	)
}

export default GettingStarted;