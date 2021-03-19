import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Chart = () => {
	const [active, setActive] = useState('chart-google');

	return(
		<div className="card-body">
            <hr/>
            <h5>Charts</h5>
            <ul className="nav nav-tabs" id="myTab11" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active == 'chart-google') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-google" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('chart-google')}>Google Charts</a></li>
              <li className="nav-item"><a className={`nav-link ${(active == 'chart-chartjs') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-chartjs" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('chart-chartjs')}>Chart.js</a></li>
              <li className="nav-item"><a className={`nav-link ${(active == 'chart-chartist') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-chartist" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('chart-chartist')}>Chartist</a></li>
            </ul>
            <div className="tab-content" id="myTabContent11">
              <div className="tab-pane fade show active" id="chart-google" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="googlecode"
                    text="npm i vue-google-charts"
                  />
                  <CopyToClipboard
                    id="googlecode1"
                    text={` \n <template>\n   <div>\n     <GChart\n       className="chart-overflow" \n       id="pie-chart1"\n       type="PieChart"\n       :data="pie_chart.chartData_1"/>\n </template>\n <script>\n   import { GChart } from 'vue-google-charts'\n   data(){\n     return{\n         chartsLib: null, \n         pie_chart: {\n           chartData_1: [\n               ['Task', 'Hours per Day'],\n                 ['Work',     5],\n                 ['Eat',      10],\n               ['Commute',  15],\n               ['Watch TV', 20],\n               ['Sleep',    25]\n           ]\n         }\n       }\n   },\n   components: {\n       GChart\n   }\n </script>`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-google-charts" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className="tab-pane fade" id="chart-chartjs" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="chartjscode"
                    text="npm i vue-chartjs"
                  />
                  <CopyToClipboard
                    id="chartjscode1"
                    text={` \n <template>\n   <div>\n       <Bar className="chart-height"/>\n </template>\n <script>\n       import { Bar } from 'vue-chartjs'\n   export default {\n     data(){\n       return{\n         }\n     },\n     components: {\n         Bar\n     },\n    mounted () {\n       this.renderChart({\n           labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],\n         datasets: [\n           {\n             label: 'GitHub Commits',\n             backgroundColor: '#f87979',\n               data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]\n           }\n         ]\n       })\n     }\n   }\n </script>`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-chartjs" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className="tab-pane fade" id="chart-chartist" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    id="chartistcode"
                    text="npm i vue-chartist"
                  />
                  <CopyToClipboard
                    id="chartistcode"
                    text={` \n <template>\n   <div>\n       <chartist\n         className="ct-6 flot-chart-container"\n         ratio="ct-major-second"\n         type="Line"\n         :data="chart1.data"\n         :options="chart1.options">\n       </chartist>\n </template>\n <script>\n   import * as Chartist from 'chartist';\n   export default {\n   data(){\n     return{\n        chart1 : {\n           data: {\n               labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],\n             series: [\n                  [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],\n                  [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],\n                  [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],\n                  [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]\n             ]\n           },\n           options: {\n               low: 0,\n               showArea: false,\n               fullWidth: true,\n           }\n         },\n   }\n   },\n   components: {\n       Chartist\n   }\n   }\n </script>`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/vue-chartist" target="_blank"> Supplemental</a>
                </div>
              </div>
            </div>
        </div>
	)
}
export default Chart;