const Button = () => {
	return(
		<>
			<div className="fluid-container py-4">
                <button className="btn btn-primary mb-2" type="button" data-original-title="" title="">Primary</button>
                <button className="btn btn-secondary mb-2" type="button" data-original-title="" title="">Secondary</button>
                <button className="btn btn-success mb-2" type="button" data-original-title="" title="">Success</button>
                <button className="btn btn-info mb-2" type="button" data-original-title="" title="">Info</button>
                <button className="btn btn-warning mb-2" type="button" data-original-title="" title="">Warning</button>
                <button className="btn btn-danger mb-2" type="button" data-original-title="" title="">Danger</button>
                <div className="code-box-copy mt-3">
                  <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#button" title="Copy"><i className="fa fa-files-o"></i></button>
                  <pre><code className="language-html" id="button"></code></pre>
                </div>
         	</div>
	        <p className="mb-2">
	            To use another types button you have to link the related css
	            file according to types of buttons in a head tag
	        </p>
		</>
	)
}
export default Button