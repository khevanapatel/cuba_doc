import Layout from '../components/common/layout';
import BasicUiElement from '../components/detail/html/basic-ui-element';
import AdvanceUiElement from '../components/detail/html/advance-ui-element';
import Form from '../components/detail/html/form';
import Table from '../components/detail/html/table';
import Chart from '../components/detail/html/chart';
import Maps from '../components/detail/html/maps';
import Editors from '../components/detail/html/editors';
import Animations from '../components/detail/html/animations';
import Icons from '../components/detail/html/icons';
import Cards from '../components/detail/html/cards';
import Timeline from '../components/detail/html/timeline';

const AngularComponent = () => {
	return(
	  <Layout>
		<div className="col-xxl-10 col-xl-9 content component-col">
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
                      <li className="nav-item"><a className="nav-link" href="#section-1-3" data-original-title="" title=""><i className="fa fa-angle-right"></i>                                Animations</a></li>
                      <li className="nav-item"><a className="nav-link" href="#section-1-4" data-original-title="" title=""><i className="fa fa-angle-right"></i>                                Icons</a></li>
                      <li className="nav-item"><a className="nav-link" href="#section-1-5" data-original-title="" title=""><i className="fa fa-angle-right"></i> Forms</a></li>
                      <li className="nav-item"><a className="nav-link" href="#section-1-6" data-original-title="" title=""><i className="fa fa-angle-right"></i> Tables</a></li>
                      <li className="nav-item"><a className="nav-link" href="#section-1-7" data-original-title="" title=""><i className="fa fa-angle-right"></i>                                Cards</a></li>
                      <li className="nav-item"><a className="nav-link" href="#section-1-8" data-original-title="" title=""><i className="fa fa-angle-right"></i>                                Timeline</a></li>
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
export default AngularComponent;