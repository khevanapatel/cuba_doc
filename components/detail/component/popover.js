import { useState } from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Popover = () => {
	const [popoverOpen, setPopoverOpen] = useState(false);
	const toggle = () => setPopover(!popover);
	return(
	  <div className="fluid-container py-4">
        <button className="btn btn-primary example-popover me-1 mb-2" type="button" data-bs-toggle="popover" title="" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Click to toggle popover</button><a className="example-popover btn btn-secondary mb-2" tabindex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">
          Dismissible
          popover</a>
        <button className="example-popover btn btn-success mb-2" type="button" data-bs-trigger="hover" data-container="body" data-bs-toggle="popover" data-bs-placement="bottom" title="" data-offset="-20px -20px" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="Popover title">On Hover Tooltip</button>
        <CopyToClipboard 
        	text=
        	 {`import {popover,popoverHeader,popoverBody} from 'reactstrap' \nconst example = () => { \n const [popoverOpen, setPopoverOpen] = useState(false) \n const toggle = () => setPopover(!popover); \n return( \n  <popover placement="bottom" isOpen={popoverOpen} toggle={toggle} target="Popover1" />; \n   <popoverHeader>Popover Title</popoverHeader> \n   <popoverBody>And here's some amazing content. It's very engaging. Right?</popoverBody> \n  </popover> \n ) \n}`}	
        	id="button"
        />
      </div>
	)
}

export default Popover;