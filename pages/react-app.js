import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';
import AppContent from '../components/common/app-content';

const ReactApp = () => {
	return(
		<Layout>
	    <div className="col-xxl-10 col-xl-9 content component-col">
        <div id="section-1">
          <div className="card">
            <h4 className="main-title mb-0">Application</h4>
            <hr className="hr" />
            <div id="section-1-1">
              <AppContent 
                title="E-commerce"
                image="../assets/images/apps/ecommerce.gif"
                content="You can directly use complete E-commerce app to manage your E-commerce withreadymade functionality of Add to cart,Quickview, and Checkout.
                      Apart from that if you want it to use it in your frontend application then you just need
                      to change your json with your API data and you get complete workable E-commerce for your
                      frontend."
              />
            </div>
            <div id="section-1-2">
              <AppContent 
                title="Chat"
                image="../assets/images/apps/chats.gif"
                content="In Chat application we provide complete chat designing with basic feature like chat with a people."
              />
            </div>
            <div id="section-1-3">
              <AppContent 
                title="Gallery"
                image="../assets/images/apps/gallery.gif"
                content="Present your amazing ideas and images using our smooth and attractive gallery"
              />
            </div>
            <div id="section-1-4">
              <AppContent 
                title="To-Do"
                image="../assets/images/apps/to-do.gif"
                content="Now it's time to Decrease your burden by listing your daily task in our To-do app and feel relax."
              />
            </div>
            <div id="section-1-5">
              <AppContent 
                title="To-Do with Firebase"
                image="../assets/images/apps/to-do-firebase.gif"
                content="Now it's time to Decrease your burden by listing your important task in our To-do Firebase app and feel relax."
              />
            </div>
            <div id="section-1-6">
              <AppContent 
                title="Email"
                image="../assets/images/apps/email.gif"
                content="Use our Email application design to build complete email app."
              />
            </div>
            <div id="section-1-7">
              <AppContent 
                title="Bookmark Search"
                image="../assets/images/apps/bookmark-search.gif"
                content="You can Bookmark your Favioute application and pages using search bookmark so you can reach to your favioute app quickly.."
              />
            </div>
            <div id="section-1-8">
              <AppContent 
                title="Task"
                image="../assets/images/apps/task-app.gif"
                content="You can ADD New Task to Assigned to me and remove Completed Task"
              />
            </div>
            <div id="section-1-9">
              <AppContent 
                title="Bookmark"
                image="../assets/images/apps/bookmark-app.gif"
                content="You Can ADD New Bookmark and then add to your Favioute bookmark or remove from  Favioute bookmark"
              />
            </div>
            <div id="section-1-10">
              <AppContent 
                title="Project"
                image="../assets/images/apps/project.gif"
                content="You Can Create New Project  and then list of project to manage  doing and done project"
              />
            </div>
            <div id="section-1-11">
              <AppContent 
                title="File Manager"
                image="../assets/images/apps/file-manager.gif"
                content="You Can Add Selected Files and Upload to upload selected file"
              />
            </div>
            <div id="section-1-12">
              <div className="card-body gulp-section">
                <h5 className="text-primary">Calender</h5>
                <p><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                    text={`npm i react-big-calendar`}
                    id="calendercode" />
                  
                  <div className="code-box-copy mb-3"> 
                    <CopyToClipboard
                      text={`import { Calendar, momentLocalizer } from 'react-big-calendar'\nimport moment from 'moment'\n \nconst localizer = momentLocalizer(moment)\n \nconst MyCalendar = props => (\n  <div>\n    <Calendar\n        localizer={localizer}\n        events={myEventsList}\n        startAccessor="start"\n        endAccessor="end"\n        style={{height: 500}}\n    />\n  </div>\n) `}
                      id="calendercode1" />

                    <a className="btn btn-solid" href="https://www.npmjs.com/package/react-big-calendar" target="_blank"> Supplemental </a>
                  </div>
                  <h5 className="text-primary">Others</h5>
                  <p>There are many others application in Cuba which is help you in improve your knowledge and solve your issues.</p>
                  <ul>
                    <li>Knowledge Base</li>
                    <li>Job Search</li>
                    <li>Learning</li>
                    <li>Social App</li>
                    <li>Kanban Board</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xxl-2 col-xl-3 right-column">
        <div className="page-sidebar custom-scrollbar" id="myScrollspy">
          <div className="page-right-sidebar">
            <ul className="nav flex-column custom-scrollbar">
              <li className="nav-item"><a className="nav-link quick-links active" href="#section-1" data-original-title="" title="">
                  <h5 className="mb-0">Applications</h5></a>
                <ul className="nav flex-column p-l-10 m-t-5 set-padding">
                  <li className="nav-item"><a className="nav-link" href="#section-1-1" data-original-title="" title=""><i className="fa fa-angle-right"></i>E-commerce</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-2" data-original-title="" title=""><i className="fa fa-angle-right"></i>Chat</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-3" data-original-title="" title=""><i className="fa fa-angle-right"></i> Gallery</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-4" data-original-title="" title=""><i className="fa fa-angle-right"></i> To-Do</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-5" data-original-title="" title=""><i className="fa fa-angle-right"></i>To-Do with Firebase</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-6" data-original-title="" title=""><i className="fa fa-angle-right"></i>Email</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-7" data-original-title="" title=""><i className="fa fa-angle-right"></i>Bookmark Search</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-8" data-original-title="" title=""><i className="fa fa-angle-right"></i>Task</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-9" data-original-title="" title=""><i className="fa fa-angle-right"></i>Bookmark</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-10" data-original-title="" title=""><i className="fa fa-angle-right"></i>Project</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-11" data-original-title="" title=""><i className="fa fa-angle-right"></i>File Manager</a></li>
                  <li className="nav-item"><a className="nav-link" href="#section-1-12" data-original-title="" title=""><i className="fa fa-angle-right"></i>Calender</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
		</Layout>
	)
}
export default ReactApp;