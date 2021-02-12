import {CopyToClipboard} from 'react-copy-to-clipboard';

const CopyToClipboard1 = (props) => {
	return(
		<div className="code-box-copy">
            <CopyToClipboard text={props.text} >
              <button className="code-box-copy__btn btn-clipboard" data-clipboard-target={`# ${props.id} `} title="Copy"><i className="fa fa-files-o"></i></button>
            </CopyToClipboard>
          <pre className="language-html" ><code className="language-html" id={props.id}>{props.text}</code></pre>
        </div>
	)
}
export default CopyToClipboard1;