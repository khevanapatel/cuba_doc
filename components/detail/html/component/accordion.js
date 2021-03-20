import {useState} from 'react';

import CopyToClipboard from '../../../common/copy-to-clipboard';

const Accordion = () => {
  const [active, setActive] = useState('item-one');
	return(
		<div className="fluid-container py-4">
      <p>test accordion</p>      
      <div className="default-according" id="accordion">
        <div className="card">
          <div className="card-header" id="headingOne">
            <h6 className="mb-0">
              <button className={`btn btn-link ${(active=='item-one')? '' : 'collapsed'}`} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-original-title="" title="" onClick={()=>setActive('item-one')}>Collapsible Group Item #<span className="digits">1</span></button>
            </h6>
          </div>
          <div className={`collapse ${(active=='item-one') ? 'show' : ''}`} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordion">
            <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingTwo">
            <h6 className="mb-0">
              <button className={`btn btn-link ${(active=='item-two')? '' : 'collapsed'}`} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-original-title="" title="" onClick={()=>setActive('item-two')}>Collapsible Group Item #<span className="digits">2</span></button>
            </h6>
          </div>
          <div className={`collapse ${(active=='item-two') ? 'show' : ''}`} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordion">
            <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
          </div>
        </div>
        <div className="card">
          <div className="card-header" id="headingThree">
            <h6 className="mb-0">
              <button className={`btn btn-link ${(active=='item-three')? '' : 'collapsed'}`} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" data-original-title="" title="" onClick={()=>setActive('item-three')}>Collapsible Group Item #<span className="digits">3</span></button>
            </h6>
          </div>
          <div className={`collapse ${(active=='item-three') ? 'show' : ''}`} id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordion">
            <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
          </div>
        </div>
      </div>
      <CopyToClipboard 
        text={`\n <div id="accordion" class="default-according">\n   <div class="card">\n     <div class="card-header" id="headingOne">\n       <h5 class="mb-0">\n         <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"      aria-controls="collapseOne">\n          Collapsible Group Item # <span class="digits">1</span>\n         </button>\n       </h5>\n     </div>\n     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">\n       <div class="card-body">\n       Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch.Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n       </div>\n     </div>\n   </div>\n   <div class="card">\n   ...\n   </div>\n   <div class="card">\n   ...\n   </div>\n </div>`}
        id="accodioncode"
      />
    </div>
	)
}
export default Accordion;
