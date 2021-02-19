import {useState} from 'react';

import CopyToClipboard from '../../../common/copy-to-clipboard';

const Accordion = () => {
  const [active, setActive] = useState('item-one');
	return(
		<div className="fluid-container py-4">
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
              text={`\nimport {Accordion} from 'react-bootstrap';\n\n<Accordion defaultActiveKey="0">\n\n  <Accordion.Toggle  className="btn btn-link" color="default" eventKey="0">\n      Collapsible Group Item #<span className="digits">1</span>\n  </Accordion.Toggle>\n  <Accordion.Collapse eventKey="0">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n  </Accordion.Collapse>\n\n  <Accordion.Toggle  className="btn btn-link" color="default" eventKey="1">\n      Collapsible Group Item #<span className="digits">2</span>\n  </Accordion.Toggle>\n  <Accordion.Collapse eventKey="1">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n  </Accordion.Collapse>\n  <Accordion.Toggle  className="btn btn-link" color="default" eventKey="2">\n      Collapsible Group Item #<span className="digits">3</span>\n  </Accordion.Toggle>\n  <Accordion.Collapse eventKey="2">\n        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.\n  </Accordion.Collapse>\n\n</Accordion>`}
              id="accodioncode"
            />
        </div>
	)
}
export default Accordion;
