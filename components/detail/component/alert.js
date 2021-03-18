import CopyToClipboard from '../../common/copy-to-clipboard';

const Alert = () => {
	return(
	  <div className="fluid-container py-4">
        <div className="alert alert-primary" role="alert">This is a primary alert&mdash;check it out!</div>
        <div className="alert alert-secondary" role="alert">This is a secondary alert&mdash;check it out!</div>
        <div className="alert alert-success" role="alert">This is a success alert&mdash;check it out!</div>
        <div className="alert alert-info" role="alert">This is a info alert&mdash;check it out!</div>
        <div className="alert alert-warning" role="alert">This is a warning alert&mdash;check it out!</div>
        <div className="alert alert-danger" role="alert">This is a danger alert&mdash;check it out!</div>
        <div className="alert alert-light" role="alert">This is a light alert&mdash;check it out!</div>
        <div className="alert alert-dark" role="alert">This is a dark alert&mdash;check it out!</div>
        <CopyToClipboard 
          text=
          {`import {Alert} from "reactstrap";\n\n<Alert color="primary dark">This is a primary alert—check it out!</Alert>\n<Alert color="secondary dark">This is a secondary alert—check it out!</Alert>\n<Alert color="success dark">This is a success alert—check it out!</Alert>\n<Alert color="info dark">This is a info alert—check it out!</Alert>\n<Alert color="warning dark">This is a warning alert—check it out!</Alert>\n<Alert color="danger dark">This is a danger alert—check it out!</Alert>\n<Alert color="light dark">This is a light alert—check it out!</Alert>\n<Alert color="dark dark">This is a dark alert—check it out!</Alert>`}  
          id="button"
        />
      </div>
	)
}

export default Alert;