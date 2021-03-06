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
        text={`\n <b-card no-body class="mb-1">\n   <b-card-header header-tag="div" class="bg-primary">\n     <h5 class="mb-0">\n       <b-button v-b-toggle.primary_icon_open_close_1 ><i class="fa fa-briefcase"></i> Collapsible Group Item #<span class="digits">1</span></b-button>\n     </h5>\n   </b-card-header>\n   <b-collapse id="primary_icon_open_close_1" visible accordion="my-accordion-icon-open-close" role="tabpanel">\n     <b-card-body>\n       <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>\n     </b-card-body>\n   </b-collapse>\n </b-card>\n\n <b-card no-body class="mb-1">\n   <b-card-header header-tag="div" class="bg-primary">\n    <h5 class="mb-0">\n     <b-button v-b-toggle.primary_icon_open_close_2 ><i class="fa fa-support"></i> Collapsible Group Item #<span class="digits">2</span></b-button>\n   </h5>\n   </b-card-header>\n   <b-collapse id="primary_icon_open_close_2" accordion="my-accordion-icon-open-close" role="tabpanel">\n     <b-card-body>\n       <b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>\n     </b-card-body>\n   </b-collapse>\n </b-card>`}
        id="accodioncode"
      />
    </div>
	)
}
export default Accordion;
