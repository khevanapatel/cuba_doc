import CopyToClipboard from '../../../common/copy-to-clipboard';

const Badge = () => {
	return(
	    <div className="fluid-container py-4">
	      <span className="badge badge-primary">Primary</span><span className="badge badge-secondary">Secondary</span><span className="badge badge-success">Success</span><span className="badge badge-info">Info</span><span className="badge badge-warning text-dark">Warning</span><span className="badge badge-danger">Danger</span><span className="badge badge-light text-dark">Light</span><span className="badge badge-dark tag-pills-sm-mb">Dark</span>
	      <CopyToClipboard 
	      	id="badges"
	      	text={`\n <span className="badge badge-primary">Primary</span>\n <span className="badge badge-secondary">Secondary</span>\n <span className="badge badge-success">Success</span>\n <span className="badge badge-info">Info</span>\n <span className="badge badge-warning text-dark">Warning</span>\n <span className="badge badge-danger">Danger</span>\n <span className="badge badge-light text-dark">Light</span>\n <span className="badge badge-dark">Dark</span> `}
	      />
	    </div>
	)
}
export default Badge;