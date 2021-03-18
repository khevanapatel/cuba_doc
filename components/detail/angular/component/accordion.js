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
        text={`\n <div className="card">\n <ngb-accordion [closeOthers]="true" activeIds="static-1">\n <ngb-panel id="static-1" title="Collapsible Group Item #1">\n <ng-template ngbPanelContent> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n </ng-template>\n </ngb-panel>\n <ngb-panel id="static-2">\n <ng-template ngbPanelTitle>\n <span>Collapsible Group Item #1</span>\n </ng-template>\n <ng-template ngbPanelContent> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n </ng-template>\n </ngb-panel>\n <ngb-panel id="static-3" title="Collapsible Group Item #3" >\n <ng-template ngbPanelContent> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n </ng-template>\n </ngb-panel>\n </ngb-accordion>\n </div>`}
        id="accodioncode"
      />
    </div>
	)
}
export default Accordion;
