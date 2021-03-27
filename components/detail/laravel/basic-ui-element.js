import {useState} from 'react';
import Button from './component/button';
import Badge from './component/badge';
import Progress from './component/progress';
import Alert from './component/alert';
import Popover from './component/popover';
import ToolTip from './component/tooltip';
import DropDown from './component/dropdown';
import Tabs from './component/tabs';
import Accordion from './component/accordion';

const BasicUiElement = () => {
	const [active, setActive] = useState('Button');
  const [tabActive, setTabActive] = useState('tooltips');
	return(
		<>
            <h5>Basic UI Elements</h5>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active== 'Button') ? 'active' : ''}`} data-bs-toggle="tab" url="#Button" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('Button')}>Button</a></li>
              <li className="nav-item"><a className={`nav-link ${(active== 'tag-pills') ? 'active' : ''}`} data-bs-toggle="tab" url="#tag-pills" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('tag-pills')}>Tag &amp; pills</a></li>
              <li className="nav-item"><a className={`nav-link ${(active== 'progress-bar') ? 'active' : ''}`} data-bs-toggle="tab" url="#progress-bar" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('progress-bar')}>progress bar</a></li>
              <li className="nav-item"><a className={`nav-link ${(active== 'alert') ? 'active' : ''}`} data-bs-toggle="tab" url="#alert" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('alert')}>Alert</a></li>
              <li className="nav-item"><a className={`nav-link ${(active== 'popovers') ?  'active': ''}`} data-bs-toggle="tab" url="#popovers" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('popovers')}>popover</a></li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className={`tab-pane fade ${(active == 'Button' ) ? ' active show' : '' }`} id="Button" role="tabpanel">
              	<Button />
              </div>
              <div className={`tab-pane fade ${(active == 'tag-pills' ) ? ' active show' : '' }`} id="tag-pills" role="tabpanel">
               <Badge />
              </div>
              <div className={`tab-pane fade ${(active ==  'progress-bar') ? ' active show' : '' }`} id="progress-bar" role="tabpanel">
                <Progress />
              </div>
              <div className={`tab-pane fade ${(active == 'alert' ) ? ' active show' : '' }`} id="alert" role="tabpanel">
              	<Alert />
              </div>
              <div className={`tab-pane fade ${(active ==  'popovers') ? ' active show' : '' }`} id="popovers" role="tabpanel">
               <Popover />
              </div>
            </div>
            <ul className="nav nav-tabs m-t-25" id="myTab2" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(tabActive== 'tooltips') ? 'active' : ''}`} data-bs-toggle="tab" url="#tooltips" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabActive('tooltips')}>Tooltip</a></li>
              <li className="nav-item"><a className={`nav-link ${(tabActive== 'dropdown') ? 'active' : ''}`} data-bs-toggle="tab" url="#dropdown" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setTabActive('dropdown')}>Dropdown</a></li>
              <li className="nav-item"><a className={`nav-link ${(tabActive== 'tabs') ? 'active' : ''}`} data-bs-toggle="tab" url="#tabs" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabActive('tabs')}>Tabs</a></li>
              <li className="nav-item"><a className={`nav-link ${(tabActive== 'accordion') ? 'active' : ''}`} data-bs-toggle="tab" url="#accordion" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabActive('accordion')}>Accordion</a></li>
            </ul>
            <div className="tab-content" id="myTabContent2">
              <div className={`tab-pane fade ${(tabActive== 'tooltips') ? 'show active' : ''}`} id="tooltips" role="tabpanel">
                <ToolTip />
              </div>
              <div className={`tab-pane fade ${(tabActive== 'dropdown') ? 'show active' : ''}`} id="dropdown" role="tabpanel">
                <DropDown />
              </div>
              <div className={`tab-pane fade ${(tabActive== 'tabs') ? 'show active' : ''}`} id="tabs" role="tabpanel">
               <Tabs />
              </div>
              <div className={`tab-pane fade ${(tabActive== 'accordion') ? 'show active' : ''}`} id="accordion" role="tabpanel">
                <Accordion />
              </div>
            </div>
		</>
	)
}
export default BasicUiElement