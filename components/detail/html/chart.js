import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Chart = () => {
	const [active, setActive] = useState('chart-google');
  const [active1, setActive1] = useState('chart-morris');
  const [active2, setActive2] = useState('chart-apex');

	return(
		<div className="card-body">
            <hr/>
            <h5>Charts</h5>
            <ul className="nav nav-tabs" id="myTab11" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active == 'chart-google') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-google" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('chart-google')}>Google Charts</a></li>
              <li className="nav-item"><a className={`nav-link ${(active == 'chart-sparkline') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-sparkline" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('chart-sparkline')}>Sparkline Charts</a></li>
              <li className="nav-item"><a className={`nav-link ${(active == 'chart-flot') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-flot" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('chart-flot')}>Flot Charts</a></li>
              <li className="nav-item"><a className={`nav-link ${(active == 'chart-peity') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-peity" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('chart-peity')}>Peity Charts</a></li>
            </ul>
            <div className="tab-content" id="myTabContent11">
              <div className={`tab-pane fade ${(active=='chart-google')? 'show active': ''}`} id="chart-google" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="googlecode"
                    text={`\n <!-- google Chart JS-->\n <script src="../assets/js/chart/google/google-chart-loader.js"></script>\n <script src="../assets/js/chart/google/google-chart.js"></script>`}
                  />
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='chart-sparkline')? 'show active' : ''}`} id="chart-sparkline" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="sparklinecode"
                    text={`\n <!--Sparkline Chart JS-->\n <script src="../assets/js/chart/sparkline/sparkline.js"></script>\n <script src="../assets/js/chart/sparkline/sparkline-script.js"></script>`}
                  />
                </div>
              </div>

              <div className={`tab-pane fade ${(active=='chart-flot')? 'show active' : ''}`} id="chart-flot" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="flotcode"
                    text={`\n <!-- flot Chart JS-->\n <script src="../assets/js/chart/flot-chart/excanvas.js"></script>\n <script src="../assets/js/chart/flot-chart/jquery.flot.js"></script>\n <script src="../assets/js/chart/flot-chart/jquery.flot.time.js"></script>\n <script src="../assets/js/chart/flot-chart/jquery.flot.symbol.js"></script>\n <script src="../assets/js/chart/flot-chart/jquery.flot.categories.js"></script>\n <script src="../assets/js/chart/flot-chart/jquery.flot.stack.js"></script>\n <script src="../assets/js/chart/flot-chart/flot-script.js"></script>\n <script src="../assets/js/chart/flot-chart/jquery.flot.pie.js"></script>\n <script src="../assets/js/chart/flot-chart/jquery.flot.symbol.js"></script>`}
                  />
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='chart-peity')? 'show active' : ''}`} id="chart-peity" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="peitycode"
                    text={`\n <!--Peity Chart JS-->\n <script src="../assets/js/chart/peity-chart/peity.jquery.js"></script>\n <script src="../assets/js/chart/peity-chart/peity-custom.js"></script>`}
                  />
                </div>
              </div>
            </div>
            <ul className="nav nav-tabs" id="myTab11" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active1 == 'chart-morris') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-morris" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive1('chart-morris')}>Morris Charts</a></li>
              <li className="nav-item"><a className={`nav-link ${(active1 == 'chart-chatjs') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-chatjs" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive1('chart-chatjs')}>Chartjs Charts</a></li>
              <li className="nav-item"><a className={`nav-link ${(active1 == 'chart-chartlist') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-chartlist" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive1('chart-chartlist')}>Chartlist Charts</a></li>
              <li className="nav-item"><a className={`nav-link ${(active1 == 'chart-knob') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-knob" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive1('chart-knob')}>Knob Charts</a></li>
            </ul>
            <div className="tab-content" id="myTabContent11">
              <div className={`tab-pane fade ${(active1=='chart-morris')? 'show active': ''}`} id="chart-morris" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="morriscode"
                    text={`\n <!-- Morris Chart JS-->\n <script src="../assets/js/chart/morris-chart/raphael.js"></script>\n <script src="../assets/js/chart/morris-chart/morris.js"></script>\n <script src="../assets/js/chart/morris-chart/prettify.min.js"></script>\n <script src="../assets/js/chart/morris-chart/morris-script.js"></script>`}
                  />
                </div>
              </div>
              <div className={`tab-pane fade ${(active1=='chart-chatjs')? 'show active' : ''}`} id="chart-chatjs" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="chartjscode"
                    text={`\n <!-- Chart JS-->\n <script src="../assets/js/chart/chartjs/Chart.min.js"></script>\n <script src="../assets/js/chart/chartjs/chart.custom.js"></script>`}
                  />
                </div>
              </div>

              <div className={`tab-pane fade ${(active1=='chart-chartlist')? 'show active' : ''}`} id="chart-chartlist" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="chartist"
                    text={`\n <!-- Chartist -->\n <link rel="stylesheet" type="text/css" href="../assets/css/chartist.css">\n <!-- Chartist -->\n <script src="../assets/js/chart/chartist/chartist.js"></script>\n <script src="../assets/js/chart/chartist/chartist-custom.js"></script>`}
                  />
                </div>
              </div>
              <div className={`tab-pane fade ${(active1=='chart-knob')? 'show active' : ''}`} id="chart-knob" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="knobcode"
                    text={`\n <!--Knob Chart JS-->\n <script src="../assets/js/chart/knob/knob.min.js"></script>\n <script src="../assets/js/chart/knob/knob-chart.js"></script>`}
                  />
                </div>
              </div>
            </div> 
            <ul className="nav nav-tabs" id="myTab11" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active2 == 'chart-apex') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-apex" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive2('chart-apex')}>Apex Charts</a></li>
              <li className="nav-item"><a className={`nav-link ${(active2 == 'chart-echart') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-echart" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive2('chart-echart')}>Echarts</a></li>
            </ul>
            <div className="tab-content" id="myTabContent11">
              <div className={`tab-pane fade ${(active2=='chart-apex')? 'show active': ''}`} id="chart-apex" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="apexcode"
                    text={`\n <!-- Apex Chart JS-->\n <script src="../assets/js/chart/apex-chart/apex-chart.js"></script>\n <script src="../assets/js/chart/apex-chart/stock-prices.js"></script>\n <script src="../assets/js/chart/apex-chart/chart-custom.js"></script>`}
                  />
                </div>
              </div>
              <div className={`tab-pane fade ${(active2=='chart-echart')? 'show active' : ''}`} id="chart-echart" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following style and script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="echartcode"
                    text={`\n <!-- Echart css -->\n <link rel="stylesheet" type="text/css" href="../assets/css/vendors/echart.css">\n <!-- Echart JS-->\n <script src="../assets/js/chart/echart/esl.js"></script>\n <script src="../assets/js/chart/echart/config.js"></script>\n <script src="../assets/js/chart/echart/pie-chart/facePrint.js"></script>\n <script src="../assets/js/chart/echart/pie-chart/testHelper.js"></script>\n <script src="../assets/js/chart/echart/pie-chart/custom-transition-texture.js"></script>\n <script src="../assets/js/chart/echart/data/symbols.js"></script>\n <script src="../assets/js/chart/echart/custom.js"></script>`}
                  />
                </div>
              </div>
            </div>
        </div>
	)
}
export default Chart;