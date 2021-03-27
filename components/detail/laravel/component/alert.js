import CopyToClipboard from '../../../common/copy-to-clipboard';

const Alert = () => {
	return(
    <div className="fluid-container py-4">
      <div className="alert alert-primary" role="alert">This is a info alert&mdash;check it out!</div>
      <div className="alert alert-secondary" role="alert">This is a light alert&mdash;check it out!</div>
      <div className="alert alert-success" role="alert">This is a success alert&mdash;check it out!</div>
      <div className="alert alert-info" role="alert">This is a danger alert&mdash;check it out!</div>
      <div className="alert alert-warning" role="alert">This is a secondary alert&mdash;check it out!</div>
      <div className="alert alert-danger" role="alert">This is a warning alert&mdash;check it out!</div>
      <div className="alert alert-light" role="alert">This is a dark alert&mdash;check it out!</div>
      <div className="alert alert-dark" role="alert">This is a dark alert&mdash;check it out!</div>
      <CopyToClipboard
        id="alertcopy"
        text={`\n <div class="alert alert-primary" role="alert">This is a info alert&mdash;check it out!</div>\n <div class="alert alert-secondary" role="alert">This is a light alert&mdash;check it out!</div>\n <div class="alert alert-success" role="alert">This is a success alert&mdash;check it out!</div>\n <div class="alert alert-info" role="alert">This is a danger alert&mdash;check it out!</div>\n <div class="alert alert-warning" role="alert">This is a secondary alert&mdash;check it out!</div>\n <div class="alert alert-danger" role="alert">This is a warning alert&mdash;check it out!</div>\n <div class="alert alert-light" role="alert">This is a dark alert&mdash;check it out!</div>\n <div class="alert alert-dark" role="alert">This is a dark alert&mdash;check it out!</div>`}
        />
    </div>
	)
}

export default Alert;