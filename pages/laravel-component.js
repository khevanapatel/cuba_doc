import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import BasicUiElement from '../components/detail/laravel/basic-ui-element';
import AdvanceUiElement from '../components/detail/laravel/advance-ui-element';
import Form from '../components/detail/laravel/form';
import Table from '../components/detail/laravel/table';
import Chart from '../components/detail/laravel/chart';
import Maps from '../components/detail/laravel/maps';
import Editors from '../components/detail/laravel/editors';
import Animations from '../components/detail/laravel/animations';
import Icons from '../components/detail/laravel/icons';
import Cards from '../components/detail/laravel/cards';
import Timeline from '../components/detail/laravel/timeline';
const LaravelComponent = () =>{
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
	           
	            <div id="section-1-2">
	              <AdvanceUiElement />
	            </div> 
	            <div id="section-1-3">
	              <Animations />
	            </div> 
	            <div id="section-1-4">
	              <Icons />
	            </div>
	            <div id="section-1-5">
	              <Form />
	            </div>
	            <div id="section-1-6">
	              <Table />
	            </div>
	            <div id="section-1-7">
	              <Cards />
	            </div>
	            <div id="section-1-8">
	              <Timeline />
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
		  </div>
        </Layout>
	)
}

export default LaravelComponent;