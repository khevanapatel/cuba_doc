import {useState} from 'react';

import CopyToClipboard from '../../../common/copy-to-clipboard';

const Tabs = () => { 
  const [active, setActive] = useState('home-tab');
	return(
		<div className="fluid-container py-4">
      <ul className="nav nav-tabs" id="myTab3" role="tablist">
        <li className="nav-item"><a className={`nav-link ${(active == 'home-tab') ? 'active' : ''} `} id="home-tab" data-bs-toggle="tab" url="#home" role="tab" aria-controls="home" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('home-tab')}>Home </a></li>
        <li className="nav-item dropdown"><a className={`nav-link dropdown-toggle ${(active == 'dropdown') ? 'active' : ''} `} data-bs-toggle="dropdown" url="#" role="button" aria-haspopup="true" aria-expanded="false" data-original-title="" title="" onClick={()=>setActive('dropdown')}>Dropdown</a>
          <div className={`dropdown-menu ${(active == 'dropdown') ? 'show' : ''} `}><a className="dropdown-item" id="profile-tab" data-bs-toggle="tab" url="#profile" role="tab" aria-controls="profile" aria-selected="false" data-original-title="" title="">Action</a><a className="dropdown-item" url="#" data-original-title="" title="">Another action</a><a className="dropdown-item" url="#" data-original-title="" title="">Something else here</a>
            <div className="dropdown-divider"></div><a className="dropdown-item" url="#" data-original-title="" title="">Separated link</a>
          </div>
        </li>
        <li className="nav-item"><a className={`nav-link ${(active == 'profile-tabs') ? 'active' : ''} `} id="profile-tabs" data-bs-toggle="tab" url="#profile" role="tab" aria-controls="profile" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('profile-tabs')}>Profile</a></li>
        <li className="nav-item"><a className={`nav-link ${(active == 'contact-tab') ? 'active' : ''} `} id="contact-tab" data-bs-toggle="tab" url="#contact" role="tab" aria-controls="contact" aria-selected="false" data-original-title="" title="" onClick={()=>setActive('contact-tab')}>Contact</a></li>
      </ul>
      <div className="tab-content" id="myTabContent3">
        <div className={`tab-pane fade ${(active == 'home-tab') ? 'show active' : ''} `} id="home" role="tabpanel" aria-labelledby="home-tab">
          <p className="mb-0 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div className={`tab-pane fade ${(active=='profile-tabs') ? 'show active' : ''}`} id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <p className="mb-0 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
        <div className={`tab-pane fade ${(active=='contact-tab') ? 'show active' : ''}`} id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <p className="mb-0 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
        </div>
      </div>
      <CopyToClipboard
        id="tabcode"
        text={` <ngb-tabset>\n <ngb-tab title="Home">\n <ng-template ngbTabContent>\n <p className="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>\n </ng-template>\n </ngb-tab>\n <ngb-tab>\n ....\n </ngb-tab>\n <ngb-tab title="Disabled" [disabled]="true">\n ....\n </ngb-tab>\n </ngb-tabset>`}
      />
    </div>
	)
}
export default Tabs;