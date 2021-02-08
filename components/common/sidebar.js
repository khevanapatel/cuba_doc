import { useState } from 'react';

const Sidebar = () => {
  const [isActive, setIsActive] = useState('');
  const [isSelected, setIsSelected] = useState('');

	return(
		<div className="left-sidebar">
          <aside>
            <ul className="list-unstyled nav-sidebar doc-nav">
              <li className="nav-item direct" ><a className={`nav-link ${(isSelected=='theme_list') ? 'active' : ''}`} href="/"><img src="../assets/images/document/list.png" alt="" />Themes List</a></li>
              <li className="nav-item direct"><a className="nav-link" href="/available-features"><img src="../assets/images/document/features.png" alt="" />Available Features</a></li>
              <li className="nav-item direct"><a className="nav-link" href="/customer-review"><img src="../assets/images/document/review.png" alt="" />Customer Reviews</a></li>
              <li className="parent-title"><span>Detail Document</span></li>
              <li className="nav-item">
                <div className={`title ${(isActive == 'React') ? 'active' : ''}`} onClick={()=>(isActive=='React') ? setIsActive('') : setIsActive('React')  }><img src="../assets/images/document/react.png" alt="briefcase" />React<span className="icon"><i className="fa fa-plus"></i><i className="fa fa-minus"></i></span></div>
                <ul className={`dropdown-nav ${(isActive=='React') ? 'show' : 'd-none'}`}>
                  <li className="nav-item"><a className="nav-link" href="/document/react/getting-started">Getting Started</a></li>
                  <li className="nav-item"><a className="nav-link" href="treereact.html">Folder Structure</a></li>
                  <li className="nav-item"><a className="nav-link" href="componentreact.html">Components</a></li>
                  <li className="nav-item"><a className="nav-link" href="appreact.html">App</a></li>
                  <li className="nav-item"><a className="nav-link" href="customization.html">Customization</a></li>
                  <li className="nav-item"><a className="nav-link" href="authreact.html">Auth0</a></li>
                  <li className="nav-item"><a className="nav-link" href="jwtreact.html">JWT</a></li>
                  <li className="nav-item"><a className="nav-link" href="firebasereact.html">Firebase</a></li>
                  <li className="nav-item"><a className="nav-link" href="creditreact.html">Credits</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <div className={`title ${(isActive == 'Angular') ? 'active' : ''}`} onClick={()=>(isActive=='Angular') ? setIsActive('') : setIsActive('Angular')  }><img src="../assets/images/document/angular.png" alt="" />Angular<span className="icon"><i className="fa fa-plus"></i><i className="fa fa-minus"></i></span></div>
                <ul className={`dropdown-nav ${(isActive=='Angular') ? 'show' : 'd-none'}`}>
                  <li className="nav-item"><a className="nav-link" href="getting-started-angular.html">Getting Started</a></li>
                  <li className="nav-item"><a className="nav-link" href="treeangular.html">Folder Structure</a></li>
                  <li className="nav-item"><a className="nav-link" href="componentangular.html">Components</a></li>
                  <li className="nav-item"><a className="nav-link" href="appangular.html">App</a></li>
                  <li className="nav-item"><a className="nav-link" href="customizationangular.html">Customization</a></li>
                  <li className="nav-item"><a className="nav-link" href="firebaseangular.html">Firebase</a></li>
                  <li className="nav-item"><a className="nav-link" href="creditangular.html">Credits</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <div className={`title ${(isActive == 'Vue') ? 'active' : ''}`} onClick={()=>(isActive=='Vue') ? setIsActive('') : setIsActive('Vue')  }><img src="../assets/images/document/vue.png" alt="" />Vue<span className="icon" ><i className="fa fa-plus"></i><i className="fa fa-minus"></i></span></div>
                <ul className={`dropdown-nav ${(isActive=='Vue') ? 'show' : 'd-none'}`}>
                  <li className="nav-item"><a className="nav-link" href="getting-started-vue.html">Getting Started</a></li>
                  <li className="nav-item"><a className="nav-link" href="treevue.html">Folder Structure</a></li>
                  <li className="nav-item"><a className="nav-link" href="componentvue.html">Components</a></li>
                  <li className="nav-item"><a className="nav-link" href="appvue.html">App</a></li>
                  <li className="nav-item"><a className="nav-link" href="customizationvue.html">Customization</a></li>
                  <li className="nav-item"><a className="nav-link" href="firebasevue.html">Firebase</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <div className={`title ${(isActive == 'Html') ? 'active' : ''}`} onClick={()=>(isActive=='Html') ? setIsActive('') : setIsActive('Html')  }><img src="../assets/images/document/html.png" alt=""/>Html<span className="icon" ><i className="fa fa-plus"></i><i className="fa fa-minus"></i></span></div>
                <ul className={`dropdown-nav ${(isActive=='Html') ? 'show' : 'd-none'}`}>
                  <li className="nav-item"><a className="nav-link" href="getting-started.html">Getting Started</a></li>
                  <li className="nav-item"><a className="nav-link" href="tree.html">Tree</a></li>
                  <li className="nav-item"><a className="nav-link" href="options.html">Options</a></li>
                  <li className="nav-item"><a className="nav-link" href="component.html">Component</a></li>
                  <li className="nav-item"><a className="nav-link" href="app.html">App</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <div className={`title ${(isActive == 'Laravel') ? 'active' : ''}`} onClick={()=>(isActive=='Laravel') ? setIsActive('') : setIsActive('Laravel')  }><img src="../assets/images/document/laravel.png" alt=""/>Laravel<span className="icon" ><i className="fa fa-plus"></i><i className="fa fa-minus"></i></span></div>
                <ul className={`dropdown-nav ${(isActive=='Laravel') ? 'show' : 'd-none'}`}>
                  <li className="nav-item"><a className="nav-link" href="getting-started-laravel.html">Getting Started</a></li>
                  <li className="nav-item"><a className="nav-link" href="treelaravel.html">Folder Structure</a></li>
                  <li className="nav-item"><a className="nav-link" href="componentlaravel.html">Components</a></li>
                  <li className="nav-item"><a className="nav-link" href="applaravel.html">App  </a></li>
                  <li className="nav-item"><a className="nav-link" href="localization.html">Localization</a></li>
                  <li className="nav-item"><a className="nav-link" href="creditlaravel.html">Credits</a></li>
                </ul>
              </li>
              <li className="parent-title"><span>faq</span></li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/accordianreact"><img src="../assets/images/document/react.png" alt="react image" />React</a></div>
              </li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/accordianangular"><img src="../assets/images/document/angular.png" alt="angular image" />Angular</a></div>
              </li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/accordianvue"><img src="../assets/images/document/vue.png" alt="vue image" />Vue</a></div>
              </li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/accordian"><img src="../assets/images/document/html.png" alt="html image" />Html</a></div>
              </li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/accordianlaravel"><img src="../assets/images/document/laravel.png" alt="laravel image" />Laravel</a></div>
              </li>
              <li className="parent-title"><span>Change log</span></li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/change-logreact"><img src="../assets/images/document/react.png" alt="react image" />React</a></div>
              </li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/change-logangular"><img src="../assets/images/document/angular.png" alt="angular image" />Angular</a></div>
              </li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/change-logvue"><img src="../assets/images/document/vue.png" alt="vue image" />Vue</a></div>
              </li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/change-log"><img src="../assets/images/document/html.png" alt="html image" />Html</a></div>
              </li>
              <li className="nav-item">
                <div className="title"><a className="nav-link p-0" href="/change-loglaravel"><img src="../assets/images/document/laravel.png" alt="laravel image" />Laravel</a></div>
              </li>
            </ul>
          </aside>
        </div>
	)
}

export default Sidebar;