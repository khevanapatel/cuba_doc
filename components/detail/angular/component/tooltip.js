import CopyToClipboard from '../../../common/copy-to-clipboard';

const ToolTip = () => {
	return(
		<div className="fluid-container py-4">
          <button className="example-popover btn btn-primary" type="button" data-container="body" data-bs-toggle="tooltip" data-bs-placement="top" title="tooltip" data-original-title="Popover title">Hover Me</button>
          <CopyToClipboard
           id="tooltipcode"
           text={`<button type="button" className="example-popover btn btn-primary" placement="top" ngbTooltip="Popover title">Hover Me</button>`}
           />
        </div>
	)
} 
export default ToolTip;