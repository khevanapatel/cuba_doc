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
              <li className="nav-item"><a className={`nav-link ${(active == 'chart-ngx') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-ngx" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('chart-ngx')}>Ngx Charts</a></li>
              <li className="nav-item"><a className={`nav-link ${(active == 'chart-apex') ? 'active' : ''}`} data-bs-toggle="tab" url="#chart-apex" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('chart-apex')}>Apex Charts</a></li>
            </ul>
            <div className="tab-content" id="myTabContent11">
              <div className={`tab-pane fade ${(active=='chart-google')? 'show active': ''}`} id="chart-google" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="googlecode"
                  	text="npm i ng2-google-charts"
                  />
                  <CopyToClipboard
                  	id="googlecode1"
                  	text={`<google-chart [data]="pieChart1"></google-chart>`}
                  />
                  <CopyToClipboard
                  	id="googlecode2"
                  	text={`\n import { Component } from '@angular/core';\n import * as chartData from '../../../shared/data/chart/google-chart'; \n	\n @Component({\n selector: 'app-google',\n templateUrl: './google.component.html',\n styleUrls: ['./google.component.scss']\n })\n export class GoogleComponent { \n\n constructor() { }\n public pieChart1= {\n chartType: 'PieChart',\n dataTable: [\n ['Task', 'Hours per Day'],\n ['Work', 5],\n ['Eat', 10],\n ['Commute', 15],\n ['Watch TV', 20],\n ['Sleep', 25]\n ],\n options: {\n title: 'My Daily Activities',\n width: '100%',\n height: 400,\n colors: ["#4466f2", "#1ea6ec", "#22af47", "#007bff", "#FF5370"],\n backgroundColor: 'transparent'\n },\n }`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/ng2-google-charts" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='chart-chartjs')? 'show active': ''}`} id="chart-chartjs" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="chartjscode"
                  	text="npm i ng2-charts"
                  />
                  <CopyToClipboard
                  	id="chartjscode1"
                  	text={`<canvas baseChart className="chart" [datasets]="barChartData" [labels]="barChartLabels" [options]="barChartOptions" [colors]="barChartColors" [legend]="barChartLegend" [chartType]="barChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>`}
                  /> 
                  <CopyToClipboard
                  	id="chartjscode2"
                  	text={`\n import { Component, ViewEncapsulation } from '@angular/core';\n import * as chartData from '../../../shared/data/chart/chartjs';\n \n @Component({\n selector: 'app-chartjs',\n templateUrl: './chartjs.component.html',\n styleUrls: ['./chartjs.component.scss'],\n encapsulation:ViewEncapsulation.None\n })\n export class ChartjsComponent {\n 	\n constructor() { }\n \n /* barChart */ \n public barChartOptions = {\n scaleShowVerticalLines: false,\n responsive: true\n };\n /* events */ \n public chartClicked(e:any):void { }\n \n public chartHovered(e:any):void { }`}
                  />
                 <a className="btn btn-solid" href="https://www.npmjs.com/package/ng2-charts" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='chart-chartist')? 'show active': ''}`} id="chart-chartist" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                   <CopyToClipboard
                  	id="chartistcode"
                  	text="npm i ng-chartist"
                  />
                  <CopyToClipboard
                  	id="chartistcode1"
                  	text={`<x-chartist [type]="type" [data]="data" [options]="options" [events]="events"></x-chartist>`}
                  />
                  <CopyToClipboard
                  	id="chartistcode2"
                  	text={`\n     /* bar-chart.component.ts */\n import {\n  IBarChartOptions,\n  IChartistAnimationOptions,\n  IChartistData\n } from 'chartist';\n import { ChartEvent, ChartType } from 'ng-chartist';\n\n @Component({\n selector: 'app-bar-chart',\n template: ' <x-chartist [type]="type" [data]="data" [options]="options" [events]="events"></x-chartist> '\n ]\n })\n export class BarChartComponent {\n type: ChartType = 'Bar';\n data: IChartistData = {\n labels: [\n 'Jan',\n 'Feb',\n 'Mar',\n 'Apr',\n 'May',\n 'Jun',\n 'Jul',\n 'Aug',\n 'Sep',\n 'Oct',\n 'Nov',\n 'Dec'\n ],\n series: [\n [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],\n [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]\n ]\n };\n\n options: IBarChartOptions = {\n axisX: {\n showGrid: false\n },\n height: 300\n };\n\n events: ChartEvent = {\n draw: (data) => {\n if (data.type === 'bar') {\n data.element.animate({\n y2: <IChartistAnimationOptions>{\n   dur: '0.5s',\n   from: data.y1,\n   to: data.y2,\n   easing: 'easeOutQuad'\n   }\n   });\n   }\n   }\n   };\n   }`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/ng-chartist" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='chart-ngx')? 'show active': ''}`} id="chart-ngx" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="ngxcode"
                  	text="npm i @swimlane/ngx-charts"
                  />
                  <CopyToClipboard
                  	id="ngxcode1"
                  	text={`<ngx-charts-pie-chart [view]="view" [scheme]="colorScheme" [results]="single" [gradient]="gradient"[legend]="showLegend" [legendPosition]="legendPosition" [labels]="showLabels" [doughnut]="isDoughnut"(select)="onSelect($event)" (activate)="onActivate($event)" (deactivate)="onDeactivate($event)">\n</ngx-charts-pie-chart>`}
                  />
                  <CopyToClipboard
                  	id="ngxcode2"
                  	text={`\n import { Component, NgModule } from '@angular/core';\n import { BrowserModule } from '@angular/platform-browser';\n import { NgxChartsModule } from '@swimlane/ngx-charts';\n import { single } from './data';\n\n @Component({\n selector: 'my-app',\n templateUrl: './app.component.html',\n styleUrls: ['./app.component.css']\n })\n export class AppComponent {\n single: any[];\n view: any[] = [700, 400];\n\n /* options */\n gradient: boolean = true;\n showLegend: boolean = true;\n showLabels: boolean = true;\n isDoughnut: boolean = false;\n legendPosition: string = 'below';\n\n colorScheme = {\n domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']\n };\n\n constructor() {\n Object.assign(this, { single });\n }\n\n onSelect(data): void {\n console.log('Item clicked', JSON.parse(JSON.stringify(data)));\n }\n\n onActivate(data): void {\n console.log('Activate', JSON.parse(JSON.stringify(data)));\n }\n\n onDeactivate(data): void {\n console.log('Deactivate', JSON.parse(JSON.stringify(data)));\n }\n }`}
                  />
                 <a className="btn btn-solid" href="https://www.npmjs.com/package/@swimlane/ngx-charts" target="_blank"> Supplemental</a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='chart-apex')? 'show active': ''}`} id="chart-apex" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	id="apexcode"
                  	text="npm i ng-apexcharts"
                  /> 
                  <CopyToClipboard
                  	id="apexcode1"
                  	text={`<apx-chart [series]="chartOptions.series" [chart]="chartOptions.chart" [xaxis]="chartOptions.xaxis" [stroke]="chartOptions.stroke" [tooltip]="chartOptions.tooltip" [dataLabels]="chartOptions.dataLabels"></apx-chart>`}
                  />
                  <CopyToClipboard
                  	id="apexcode2"
                  	text={`\n import { Component, ViewChild } from "@angular/core";\n import {\n ChartComponent,\n ApexAxisChartSeries,\n ApexChart,\n ApexXAxis,\n ApexDataLabels,\n ApexTooltip,\n ApexStroke\n } from "ng-apexcharts";\n export type ChartOptions = {\n series: ApexAxisChartSeries;\n chart: ApexChart;\n xaxis: ApexXAxis;\n stroke: ApexStroke;\n tooltip: ApexTooltip;\n dataLabels: ApexDataLabels;\n };\n @Component({\n selector: "app-root",\n templateUrl: "./app.component.html",\n styleUrls: ["./app.component.css"]\n })\n export class AppComponent {\n @ViewChild("chart") chart: ChartComponent;\n public chartOptions: Partial<ChartOptions>;\n constructor() {\n this.chartOptions = {\n series: [\n {\n name: "series1",\n data: [31, 40, 28, 51, 42, 109, 100]\n },\n {\n name: "series2",\n data: [11, 32, 45, 32, 34, 52, 41]\n }\n ],\n chart: {\n height: 350,\n type: "area"\n },\n dataLabels: {\n enabled: false\n },\n stroke: {\n curve: "smooth"\n },\n xaxis: {\n type: "datetime",\n categories: [\n "2018-09-19T00:00:00.000Z",\n "2018-09-19T01:30:00.000Z",\n "2018-09-19T02:30:00.000Z",\n "2018-09-19T03:30:00.000Z",\n "2018-09-19T04:30:00.000Z",\n "2018-09-19T05:30:00.000Z",\n "2018-09-19T06:30:00.000Z"\n ]\n },\n tooltip: {\n x: {\n format: "dd/MM/yy HH:mm"\n }\n }\n };\n }\n public generateData(baseval, count, yrange) {\n var i = 0;\n var series = [];\n while (i < count) { var x=Math.floor(Math.random() * (750 - 1 + 1)) + 1; var y=Math.floor(Math.random() * (yrange.max\n - yrange.min + 1)) + yrange.min; var z=Math.floor(Math.random() * (75 - 15 + 1)) + 15; series.push([x, y, z]);\n baseval +=86400000; i++; } return series; } }`}
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/ng-apexcharts" target="_blank"> Supplemental</a>
                </div>
              </div>
            </div>
        </div>
	)
}
export default Chart;