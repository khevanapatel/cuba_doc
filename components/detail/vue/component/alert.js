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
        text={`\n <b-alert show variant="primary" class="alert alert-primary">\n   <p>This is a info alert—check it out!</p>\n </b-alert>\n\n <b-alert show variant="secondary" class="alert alert-secondary">\n   <p>This is a light alert—check it out!</p>\n </b-alert>\n\n <b-alert show variant="success" class="alert alert-success">\n   <p>This is a success alert—check it out!</p>\n </b-alert>\n\n <b-alert show variant="info" class="alert alert-info">\n   <p>This is a danger alert—check it out!</p>\n </b-alert>\n\n <b-alert show variant="warning" class="alert alert-warning">\n   <p>This is a secondary alert—check it out!</p>\n </b-alert>\n\n <b-alert show variant="danger" class="alert alert-danger">\n   <p>This is a warning alert—check it out!</p>\n </b-alert>\n\n <b-alert show variant="light" class="alert alert-light">\n   <p>This is a light alert—check it out!</p>\n </b-alert>\n\n <b-alert show variant="dark" class="alert alert-dark">\n   <p>This is a dark alert—check it out!</p>\n </b-alert>`}
        />
    </div>
	)
}

export default Alert;