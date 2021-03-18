import {useState} from 'react';
import Button from './button';
import Badge from './badge';
import Progress from './progress';
import Alert from './alert';
import Popover from './popover';
import ToolTip from './tooltip';
import DropDown from './dropdown';
import Tabs from './tabs';
import Accordion from './accordion';

const BasicUiElement = () => {
	const [tabContentActive, setTabContentActive] = useState('tag-pills');
  const [tab2ContentActive, setTab2ContentActive] = useState('tooltips');
	return(
		<>
		  <h5>Basic UI Elements</h5>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'Button') ? 'active': ''}`} data-bs-toggle="tab" url="#Button" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabContentActive('Button')}>Button</a></li>
        <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'tag-pills') ? 'active': ''}`} data-bs-toggle="tab" url="#tag-pills" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setTabContentActive('tag-pills')}>Tag &amp; pills</a></li>
        <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'progress-bar') ? 'active': ''}`} data-bs-toggle="tab" url="#progress-bar" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabContentActive('progress-bar')}>progress bar</a></li>
        <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'alert') ? 'active': ''}`} data-bs-toggle="tab" url="#alert" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabContentActive('alert')}>Alert</a></li>
        <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'popovers') ? 'active': ''}`} data-bs-toggle="tab" url="#popovers" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabContentActive('popovers')}>popover</a></li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div className={`tab-pane fade ${(tabContentActive == 'Button') ? 'active show': ''}`} id="Button" role="tabpanel">
         <Button />
        </div>
        <div className={`tab-pane fade ${(tabContentActive == 'tag-pills') ? 'active show': ''}`} id="tag-pills" role="tabpanel">
          <Badge />
        </div>
        <div className={`tab-pane fade ${(tabContentActive == 'progress-bar') ? 'active show': ''}`} id="progress-bar" role="tabpanel">
          <Progress />
        </div>
        <div className={`tab-pane fade ${(tabContentActive == 'alert') ? 'active show': ''}`} id="alert" role="tabpanel">
          <Alert />
        </div>
        <div className={`tab-pane fade ${(tabContentActive == 'popovers') ? 'active show': ''}`} id="popovers" role="tabpanel">
          <Popover />
        </div>
      </div>
      <ul className="nav nav-tabs m-t-25" id="myTab2" role="tablist">
        <li className="nav-item"><a className={`nav-link ${(tab2ContentActive == 'tooltips') ? 'active': ''}`} data-bs-toggle="tab" url="#tooltips" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTab2ContentActive('tooltips')}>Tooltip</a></li>
        <li className="nav-item"><a className={`nav-link ${(tab2ContentActive == 'dropdown') ? 'active': ''}`} data-bs-toggle="tab" url="#dropdown" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setTab2ContentActive('dropdown')}>Dropdown</a></li>
        <li className="nav-item"><a className={`nav-link ${(tab2ContentActive == 'tabs') ? 'active': ''}`} data-bs-toggle="tab" url="#tabs" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTab2ContentActive('tabs')}>Tabs</a></li>
        <li className="nav-item"><a className={`nav-link ${(tab2ContentActive == 'accordion') ? 'active': ''}`} data-bs-toggle="tab" url="#according" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTab2ContentActive('accordion')}>Accordion</a></li>
      </ul>
      <div className="tab-content" id="myTabContent2">
        <div className={`tab-pane fade ${(tab2ContentActive == 'tooltips') ? 'active show': ''}`} id="tooltips" role="tabpanel">
         <ToolTip />
        </div>
        <div className={`tab-pane fade ${(tab2ContentActive == 'dropdown') ? 'active show': ''}`} id="dropdown" role="tabpanel">
          <DropDown />
        </div>
        <div className={`tab-pane fade ${(tab2ContentActive == 'tabs') ? 'active show': ''}`} id="tabs" role="tabpanel">
          <Tabs />
        </div>
        <div className={`tab-pane fade ${(tab2ContentActive == 'accordion') ? 'active show': ''}`} id="according" role="tabpanel">
          <Accordion />
        </div>
      </div>
		</>
	)
}
export default BasicUiElement