
import Header from './header';
import Sidebar from './sidebar';
import Top from './top';

const Layout = ({children}) => {
	return(
		<div className="document full-width-doc sticky-nav-doc">
			<Top />
			<div className="page-wrapper compact-wrapper">
				<Header/>
			</div>
			<div className="body-wrapper sticky_menu">
		        <div className="document-area" id="sticky-page">
		          <div className="overlay_bg"></div>
		          <div className="container-fluid custom-container">
		            <div className="row doc-container">
		            	<Sidebar />
		            	<>{children}</>
		            </div>
		          </div>
		        </div>
		    </div>
		</div>
	)
}

export default Layout;