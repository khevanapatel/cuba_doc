import CopyToClipboard from '../../../common/copy-to-clipboard';

const Progress = () => {
	return(
	  <div className="fluid-container py-4">
      <div className="progress mb-2">
        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress mb-2">
        <div className="progress-bar progress25 bg-primary " role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress mb-2">
        <div className="progress-bar progress50 bg-secondary" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress mb-2">
        <div className="progress-bar progress75 bg-success" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <div className="progress">
        <div className="progress-bar progress100 bg-info" role="progressbar"  aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <CopyToClipboard
        id="progressbars"
        text={`\n <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>\n <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\n <div class="progress-bar bg-secondary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>\n <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>\n <div class="progress-bar bg-info" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><br/></div>`}
        />
    </div>
	)
}

export default Progress;