import CopyToClipboard from '../../../common/copy-to-clipboard';

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
               	<CopyToClipboard 
                	text=
                	{`import {Button} from "reactstrap";\n\n<Button color="primary">Primary</Button>\n<Button color="secondary">Secondary</Button>\n<Button color="success">Success</Button>\n<Button color="info">Info</Button>\n<Button color="warning">Warning</Button>\n<Button color="danger">Danger</Button>`}	
                	id="button"
                />
              </div>
              <p className="mb-2">
                To use another types button you have to link the related css
                file according to types of buttons in a head tag
              </p>
		</>
	)
}
export default Button