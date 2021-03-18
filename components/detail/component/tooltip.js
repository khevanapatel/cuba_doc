import CopyToClipboard from '../../common/copy-to-clipboard';

const ToolTip = () => {
	return(
		<div className="fluid-container py-4">
	        <button className="example-popover btn btn-primary" type="button" data-container="body" data-bs-toggle="tooltip" data-bs-placement="top" title="tooltip" data-original-title="Popover title">Hover Me</button>
	        <CopyToClipboard
	        	text={`import {Tooltip} from 'reactstrap'; \nconst Tooltips = (props) => { \n const [basictooltip, setbasictooltip] = useState(false); \n const toggle = () => setbasictooltip(!basictooltip); \n return(\n  <Button color="primary" id="TooltipExample">Hover Me </Button>;\n  <Tooltip \n   placement="top" \n   isOpen={basictooltip} \n   target="TooltipExample" \n   toggle={toggle}> \n    Popover title \n  </Tooltip>/n ) \n}`}
	        	id="tooltipcode"
	        />
	        <div className="code-box-copy mt-4">
	          <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#tooltipcode" title="Copy"><i className="fa fa-files-o"></i></button>
	          <pre>
		        <code className="language-html" id="tooltipcode">
		             </code>
	          </pre>
	        </div>
	    </div>
	)
} 
export default ToolTip;