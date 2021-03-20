import { useState } from 'react';
import CopyToClipboard from '../../../common/copy-to-clipboard';

const Popover = () => {
	const [popoverOpen, setPopoverOpen] = useState(false);
	const toggle = () => setPopover(!popover);
	return(
	  <div className="fluid-container py-4">
      <button className="btn btn-primary example-popover me-1 mb-2" type="button" data-bs-toggle="popover" title="" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Click to toggle popover</button>
      
      <button className="example-popover btn btn-success mb-2" type="button" data-bs-trigger="hover" data-container="body" data-bs-toggle="popover" data-bs-placement="bottom" title="" data-offset="-20px -20px" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="Popover title">On Hover Tooltip</button>
      <CopyToClipboard
        id="popovercode"
        text={`<b-button v-b-tooltip.hover title="Popover title" variant="primary" >Hover Me</b-button>`}
        />
    </div>
	)
}

export default Popover;