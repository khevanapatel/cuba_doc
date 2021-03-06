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
        text={`\n <div class="progress">\n   <b-progress :value="0" :max="100"></b-progress>\n </div><br>\n <div class="progress">\n   <b-progress :value="25" :max="100" variant="primary"></b-progress>\n </div><br>\n <div class="progress">\n   <b-progress :value="50" :max="100" variant="secondary"></b-progress>\n </div><br>\n <div class="progress">\n   <b-progress :value="75" :max="100" variant="success"></b-progress>\n </div><br>\n <div class="progress">\n   <b-progress :value="100" :max="100" variant="info"></b-progress>\n </div>`}
        />
    </div>
	)
}

export default Progress;