import Layout from '../components/common/layout';
import BasicUiElement from '../components/detail/vue/basic-ui-element';
import AdvanceUiElement from '../components/detail/vue/advance-ui-element';
import Form from '../components/detail/vue/form';
import Table from '../components/detail/vue/table';
import Chart from '../components/detail/vue/chart';
import Maps from '../components/detail/vue/maps';
import Editors from '../components/detail/vue/editors';

const VueComponent = () => {
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
	     </div>
        <div className="col-xxl-2 col-xl-3 right-column">
            <div className="page-sidebar custom-scrollbar" id="myScrollspy">
              <div className="page-right-sidebar">
                <ul className="nav flex-column custom-scrollbar">
                  <li className="nav-item"><a className="nav-link active" href="#section-1" data-original-title="" title="">
                      <p className="mb-0">Components</p></a>
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

export default VueComponent;