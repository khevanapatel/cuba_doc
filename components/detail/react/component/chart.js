import {useState} from 'react';

import CopyToClipboard from '../../../common/copy-to-clipboard';

const Chart = () => {
	const [active, setActive] = useState('chart-apex');

	return(
		<div class="card-body">
            <hr/>
            <h5>Charts</h5>
            <ul class="nav nav-tabs" id="myTab11" role="tablist">
              <li class="nav-item"><a class={`nav-link ${(active=='chart-apex') ? 'active' : ''}`} data-bs-toggle="tab" href="#chart-apex" onClick={()=>setActive('chart-apex')} role="tab" aria-selected="true" data-original-title="" title="">Apex Charts</a></li>
              <li class="nav-item"><a class={`nav-link ${(active=='chart-google') ? 'active' : ''}`} data-bs-toggle="tab" href="#chart-google" onClick={()=>setActive('chart-google')} role="tab" aria-selected="true" data-original-title="" title="">Google Charts</a></li>
              <li class="nav-item"><a class={`nav-link ${(active=='chart-knob') ? 'active' : ''}`} data-bs-toggle="tab" href="#chart-knob" onClick={()=>setActive('chart-knob')} role="tab" aria-selected="true" data-original-title="" title="">Knob Charts</a></li>
              <li class="nav-item"><a class={`nav-link ${(active=='chart-chartjs') ? 'active' : ''}`} data-bs-toggle="tab" href="#chart-chartjs" onClick={()=>setActive('chart-chartjs')} role="tab" aria-selected="true" data-original-title="" title="">Chart.js</a></li>
              <li class="nav-item"><a class={`nav-link ${(active=='chart-chartist') ? 'active' : ''}`} data-bs-toggle="tab" href="#chart-chartist" onClick={()=>setActive('chart-chartist')} role="tab" aria-selected="true" data-original-title="" title="">Chartist</a></li>
            </ul>
        </div>
	)
}
export default Chart;