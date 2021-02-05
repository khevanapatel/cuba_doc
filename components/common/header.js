import Head from 'next/head';

const Header = (props) => {
	const setSize = (size) => {
		props.parentCall(size);
	}
	return(
		<>
			<div>
		      <nav className="navbar navbar-expand-lg">
		        <div className="container-fluid custom-container">
		          <div className="row w-100">
		            <div className="col-md-3 col-4"><a className="navbar-brand" href="index.html">                   <img src="../assets/images/logo/logo.png" /></a></div>
		            <div className="col-lg-6 col-2"> 
		              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars">   </i></button>
		              <div className="collapse navbar-collapse" id="navbarSupportedContent">
		                <ul className="navbar-nav menu">
		                  <li className="nav-item active"><a className="nav-link" href="https://1.envato.market/3GVzd" role="button" aria-haspopup="true" aria-expanded="false" target="_blank">Purchase</a></li>
		                  <li className="nav-item"><a className="nav-link" href="https://pixelstrap.freshdesk.com/" role="button" aria-haspopup="true" aria-expanded="false" target="_blank">Support</a></li>
		                  <li className="nav-item"><a className="nav-link" href="http://admin.pixelstrap.com/cuba/theme/landing-page.html" role="button" aria-haspopup="true" aria-expanded="false" target="_blank">Demo</a></li>
		                  <li className="nav-item"><a className="nav-link" href="http://admin.pixelstrap.com/cuba/theme/landing-page.html#frameworks" role="button" aria-haspopup="true" aria-expanded="false" target="_blank">Feature              </a></li>
		                </ul>
		              </div>
		            </div>
		            <div className="col-lg-3 col-6">
		              <ul className="nav-right">
		                <li>
		                  <div className="d-lg-none d-block"><a className="toggle-sidebar" href="#"><i className="fa fa-sliders"></i></a></div>
		                </li>
		                <li>
		                  <div className="btn-group">
			                  <a className="decrease btn btn-doc" href="#" title="Decrease font size" onClick={() => setSize('decrease')}>A-</a>
			                  <a className="reset btn btn-doc" href="#" title="Default font size" onClick={() => setSize('')}>A</a>
			                  <a className="increase btn btn-doc" href="#" title="Increase font size" onClick={() => setSize('increase')}>A+</a>
		                  </div>
		                </li>
		                <li><a className="btn btn-dark mode" href="#" title="Dark"><i className="fa fa-moon-o"></i><span>Dark</span></a></li>
		              </ul>
		            </div>
		          </div>
		        </div>
		      </nav>
		    </div>
		    <Head>
				<script type="text/javascript" src="../../assets/js/jquery-3.5.1.min.js"></script>
			    {/* Bootstrap js*/}
			    <script type="text/javascript" src="../../assets/js/bootstrap/bootstrap.bundle.min.js"></script>
			    {/* feather icon js*/}
			    <script type="text/javascript" src="../../assets/js/icons/feather-icon/feather.min.js"></script>
			    <script type="text/javascript" src="../../assets/js/icons/feather-icon/feather-icon.js"></script>
			    <script type="text/javascript" src="../../assets/js/document/main.js"></script>
	      	</Head>
	    </>
	)
}

export default Header;