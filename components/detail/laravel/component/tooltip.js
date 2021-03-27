import CopyToClipboard from '../../../common/copy-to-clipboard';

const ToolTip = () => {
	return(
		<div className="fluid-container py-4">
          <button className="example-popover btn btn-primary" type="button" data-container="body" data-bs-toggle="tooltip" data-bs-placement="top" title="tooltip" data-original-title="Popover title">Hover Me</button>
          <CopyToClipboard
           id="tooltipcode"
           text={` <button type="button" class="example-popover btn btn-primary" data-bs-container="body" data-bs-toggle="tooltip" data-bs-placement="top" title="Popover title" >Hover Me</button>`}
           />
           <h6 className="pt-3 pb-2">To use java script you have to add the following script tag</h6>
           <CopyToClipboard
           	 id="tooltipjs"
           	 text={`<!--tooltip js-->\n<script src="../assets/js/tooltip-init.js"></script>`}
           />
        </div>
	)
} 
export default ToolTip;