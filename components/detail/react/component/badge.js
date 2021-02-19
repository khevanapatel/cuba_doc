import CopyToClipboard from '../../../common/copy-to-clipboard';

const Badge = () => {
	return(
	  <div className="fluid-container py-4"><span className="badge badge-primary">Primary</span><span className="badge badge-secondary">Secondary</span><span className="badge badge-success">Success</span><span className="badge badge-info">Info</span><span className="badge badge-warning text-dark">Warning</span><span className="badge badge-danger">Danger</span><span className="badge badge-light text-dark">Light</span><span className="badge badge-dark tag-pills-sm-mb">Dark</span>
		<CopyToClipboard 
	    	text=
	    	{`import {Badge} from "reactstrap";\n\n<Badge color="primary">Primary</Badge>\n<Badge color="secondary">Secondary</Badge>\n<Badge color="success">Success</Badge>\n<Badge color="info">Info</Badge>\n<Badge color="warning">Warning</Badge>\n<Badge color="danger">Danger</Badge>`}	
	    	id="badges"
	   	/>
      </div>
	)
}
export default Badge;