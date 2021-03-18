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
          id="button"
          text={`\n <button type="button" className="btn btn-primary">Primary Button</button>\n <button type="button" className="btn btn-secondary">Secondary Button</button>\n <button type="button" className="btn btn-success">Success Button</button>\n <button type="button" className="btn btn-info">Info Button</button>\n <button type="button" className="btn btn-warning">Warning Button</button>\n <button type="button" className="btn btn-danger">Danger Button</button>\n <button type="button" className="btn btn-light">Light Button</button>`}
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