import {useState} from 'react';

import CopyToClipboard from '../../common/copy-to-clipboard';

const Chart = () => {
	const [active, setActive] = useState('chart-apex');

	return(
		<div className="card-body">
      <hr/>
      <h5>Charts</h5>
      <ul className="nav nav-tabs" id="myTab11" role="tablist">
        <li className="nav-item"><a className={`nav-link ${(active=='chart-apex') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-apex" onClick={()=>setActive('chart-apex')} role="tab" aria-selected="true" data-original-title="" title="">Apex Charts</a></li>
        <li className="nav-item"><a className={`nav-link ${(active=='chart-google') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-google" onClick={()=>setActive('chart-google')} role="tab" aria-selected="true" data-original-title="" title="">Google Charts</a></li>
        <li className="nav-item"><a className={`nav-link ${(active=='chart-knob') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-knob" onClick={()=>setActive('chart-knob')} role="tab" aria-selected="true" data-original-title="" title="">Knob Charts</a></li>
        <li className="nav-item"><a className={`nav-link ${(active=='chart-chartjs') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-chartjs" onClick={()=>setActive('chart-chartjs')} role="tab" aria-selected="true" data-original-title="" title="">Chart.js</a></li>
        <li className="nav-item"><a className={`nav-link ${(active=='chart-chartist') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-chartist" onClick={()=>setActive('chart-chartist')} role="tab" aria-selected="true" data-original-title="" title="">Chartist</a></li>
      </ul>
      <div className="tab-content" id="myTabContent11">
        <div className={`tab-pane fade ${(active=='chart-apex') ? 'show active' : ''}`} id="chart-apex" role="tabpanel">
          <p className="pt-4"><b>Installing and usage</b></p>
          <div className="mb-4">
            <CopyToClipboard
              text={`npm i react-apexcharts`}
              id="apexcode"
            />
            <CopyToClipboard
              text={`\n/* Basic ApexData.jsx */\nexport const apexchartsexample = {\n  series: [{\n    name: 'series1',\n    data: [31, 40, 28, 51, 42, 109, 100]\n  }, {\n    name: 'series2',\n    data: [11, 32, 45, 32, 34, 52, 41]\n  }],\n  options: {\n    chart: {\n      height: 350,\n      type: 'area'\n    },\n    dataLabels: {\n      enabled: false\n    },\n    stroke: {\n      curve: 'smooth'\n    },\n    xaxis: {\n      type: 'datetime',\n      categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]\n    },\n    tooltip: {\n      x: {\n        format: 'dd/MM/yy HH:mm'\n      },\n    },\n    colors:["#7366ff", "#f73164"]\n  },\n};\nimport Chart from 'react-apexcharts'\nimport {apexchartsexample} from './ApexData'\nconst Apexcharts = (props)  => {\n    return (\n      <CardBody>\n        <Chart options={apexchartsexample.options} series={apexchartsexample.series} type="area" height={350}  />\n      </CardBody>\n    );\n  }\n}`}
              id="apexcode1"
            />
            <a className="btn btn-solid" href="https://www.npmjs.com/package/react-apexcharts" target="_blank"> Supplemental</a>
          </div>
         
        </div>
        <div className={`tab-pane fade ${(active=='chart-google') ? 'show active' : ''}`} id="chart-google" role="tabpanel">
          <p className="pt-4"><b>Installing and usage</b></p>
          <div className="mb-4">
            <CopyToClipboard
              text={`npm i react-google-charts`}
              id="googlecode"
            /> 
            <CopyToClipboard
              text={`\nimport React from 'react';\nimport { GoogleChart } from "react-google-charts";\n \nconst GoogleCharts = (props) => {\n    return (\n      <GoogleChart\n            width={'100%'}\n            height={'400px'}\n            chartType="PieChart"\n            loader={<div>Loading Chart</div>}\n            data={[\n                ['Task', 'Hours per Day'],\n                ['Work', 6.7],\n                ['Eat', 13.3],\n                ['Commute', 20],\n                ['Watch TV', 26.7],\n                ['Sleep', 33.3],\n            ]}\n            options={{\n                title: 'My Daily Activities',\n                colors: ["#51bb25", "#7366ff", "#f73164", "#148df6", "#ff5f24"]\n                \n            }}\n            rootProps={{ 'data-testid': '1' }}\n      />\n    );\n}`}
              id="googlecode1"
            />
            <a className="btn btn-solid" href="https://www.npmjs.com/package/react-google-charts" target="_blank"> Supplemental</a>
          </div>
        </div>
        <div className={`tab-pane fade ${(active=='chart-knob') ? 'show active' : ''}`} id="chart-knob" role="tabpanel">
          <p className="pt-4"><b>Installing and usage</b></p>
          <div className="mb-4">
            <CopyToClipboard
              text={`npm i knob`}
              id="knobcode"
            /> 
            <CopyToClipboard
              text={`\nimport React  from 'react';\nimport Knob,{useEffect} from "knob";\n\nconst KnobChart = () => {\n\n  useEffect(() => {\n    var exampleknob = Knob({\n        value: 35,\n        left: 1,\n        angleOffset: 90,\n        className: "review",\n        thickness: 0.1,\n        fgColor: "#7366ff",\n        readOnly: true,\n        dynamicDraw: true,\n        tickColorizeValues: true,\n        bgColor: '#f73164',\n        lineCap: 'round',\n        displayPrevious:false\n    })\n    document.getElementById('profit').appendChild(exampleknob);\n  },[])\n\n  return(\n        <div className="knob-block text-center">\n          <div className="knob" id="profit">\n          </div>\n        </div>\n  )\n}`}
              id="knobcode1"
            /> 
            <a className="btn btn-solid" href="https://www.npmjs.com/package/knob" target="_blank"> Supplemental</a>
          </div>
        </div>
        <div className={`tab-pane fade ${(active=='chart-chartjs') ? 'show active' : ''}`} id="chart-chartjs" role="tabpanel">
          <p className="pt-4"><b>Installing and usage</b></p>
          <div className="mb-4">
            <CopyToClipboard
              text={`npm i react-chartjs-2`}
              id="chartjscode"
            /> 
            <CopyToClipboard
              text={`\n/* chartData.jsx */\nexport const Data = {\n  labels: ['Mon', 'Tue', 'Wen', 'Thus', 'Fri', 'Sat', 'Sun'],\n  datasets: [\n        {\n            label: 'y',\n            lagend: 'y',\n            data: [35, 59, 80, 81, 56, 55, 40],\n            borderColor: "#7366ff",\n            backgroundColor: "rgba(145, 46, 252, 0.4)",\n            highlightFill: "rgba(145, 46, 252, 0.4)",\n            highlightStroke: "#7366ff",\n            borderWidth: 2\n        },\n        {\n            label: 'z',\n            lagend: 'z',\n            data: [28, 48, 40, 19, 86, 27, 90],\n            borderColor: "#f73164",\n            backgroundColor: "rgba(247, 49, 100, 0.4)",\n            highlightFill: "rgba(247, 49, 100, 0.4)",\n            highlightStroke: "#f73164",\n            borderWidth: 2\n        }\n    ],\n    plugins: {\n        datalabels: {\n            display: false,\n            color: 'white'\n        }\n    }\n}\nexport const Options = {\n  maintainAspectRatio: true,\n    legend: {\n        display: false,\n    },\n    plugins: {\n        datalabels: {\n            display: false,\n        }\n    }\n}\n \nimport { Bar } from 'react-chartjs-2';\nimport { Data,Option} from './chartData';\n\nconst ChartjsExample = () => {\n  return(\n    <Cardbody>\n      <Bar \n          data={Data}\n          width={778}\n          height={400}\n          options={Options} \n       /> \n    </Cardbody>\n  )\n}`}
              id="chartjscode1"
            /> 
            <a className="btn btn-solid" href="https://www.npmjs.com/package/react-chartjs-2" target="_blank"> Supplemental</a>
          </div>
        </div>
        <div className={`tab-pane fade ${(active=='chart-chartist') ? 'show active' : ''}`} id="chart-chartist" role="tabpanel">
          <p className="pt-4"><b>Installing and usage</b></p>
          <div className="mb-4">
            <CopyToClipboard
              text={`npm i react-chartist`}
              id="chartistcode"
            /> 
            <CopyToClipboard
              text={`\nimport ChartistGraph from 'react-chartist';\n\nconst Chartist = (props) => {\n    return (\n      <Cardbody>\n        <ChartistGraph \n              key="1" \n              className="ct-6 flot-chart-container" \n              data={{\n                  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],\n                  series: [[12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],\n                  [4, 5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],\n                  [5, 3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],\n                  [3, 4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]]\n              }} type={'Line'} listener={{\n                  "draw": function (data) {\n                      if (data.type === 'line' || data.type === 'area') {\n                          data.element.animate({\n                              d: {\n                                  begin: 2000 * data.index,\n                                  dur: 2000,\n                                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),\n                                  to: data.path.clone().stringify(),\n                              }\n                          });\n                      }\n                  }\n              }} \n              options={chart1}\n        />\n      </Cardbody>\n    )\n  }\n}`}
              id="chartistcode1"
            /> 
           <a className="btn btn-solid" href="https://www.npmjs.com/package/react-chartist" target="_blank"> Supplemental</a>
          </div>
        </div>
      </div>
    </div>
	)
}
export default Chart;