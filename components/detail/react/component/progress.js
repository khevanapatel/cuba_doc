import CopyToClipboard from '../../../common/copy-to-clipboard';

const Progress = () => {
	return(
	  <div className="fluid-container py-4">
        <div className="progress mb-2">
          <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <div className="progress mb-2">
          <div className="progress-bar bg-primary" role="progressbar" style={{"width": "25%", "ariaValuenow":"25", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
        </div>
        <div className="progress mb-2">
          <div className="progress-bar bg-secondary" role="progressbar" style={{"width": "50%", "ariaValuenow":"50", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
        </div>
        <div className="progress mb-2">
          <div className="progress-bar bg-success" role="progressbar" style={{"width": "75%", "ariaValuenow":"75", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
        </div>
        <div className="progress">
          <div className="progress-bar bg-info" role="progressbar" style={{"width": "100%", "ariaValuenow":"100", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
        </div>
        <CopyToClipboard 
        	text=
        	{`import {Progress} from "reactstrap";\n\n<Progress value="0"/>\n<Progress color="primary" value="25"/>\n<Progress color="secondary" value="50"/>\n<Progress color="success" value="75"/>\n<Progress color="info" value="100"/>`}	
        	id="button"
        />
      </div>
	)
}

export default Progress;