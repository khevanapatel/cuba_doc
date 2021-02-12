import {useState} from 'react';

const BasicUiElement = () => {
	const [tabContentActive, setTabContentActive] = useState('tag-pills');
	return(
		<>
		  <h5>Basic UI Elements</h5>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'Button') ? 'active': ''}`} data-bs-toggle="tab" href="#Button" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabContentActive('Button')}>Button</a></li>
            <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'tag-pills') ? 'active': ''}`} data-bs-toggle="tab" href="#tag-pills" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setTabContentActive('tag-pills')}>Tag &amp; pills</a></li>
            <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'progress-bar') ? 'active': ''}`} data-bs-toggle="tab" href="#progress-bar" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabContentActive('progress-bar')}>progress bar</a></li>
            <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'alert') ? 'active': ''}`} data-bs-toggle="tab" href="#alert" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabContentActive('alert')}>Alert</a></li>
            <li className="nav-item"><a className={`nav-link ${(tabContentActive == 'popovers') ? 'active': ''}`} data-bs-toggle="tab" href="#popovers" role="tab" aria-selected="false" data-original-title="" title="" onClick={()=>setTabContentActive('popovers')}>popover</a></li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div className={`tab-pane fade ${(tabContentActive == 'Button') ? 'active show': ''}`} id="Button" role="tabpanel">
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
            </div>
            <div className={`tab-pane fade ${(tabContentActive == 'tag-pills') ? 'active show': ''}`} id="tag-pills" role="tabpanel">
              <div className="fluid-container py-4"><span className="badge badge-primary">Primary</span><span className="badge badge-secondary">Secondary</span><span className="badge badge-success">Success</span><span className="badge badge-info">Info</span><span className="badge badge-warning text-dark">Warning</span><span className="badge badge-danger">Danger</span><span className="badge badge-light text-dark">Light</span><span className="badge badge-dark tag-pills-sm-mb">Dark</span>
                <div className="code-box-copy mt-4">
                  <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#badges" title="Copy"><i className="fa fa-files-o"></i></button>
                  <pre><code className="language-html" id="badges">  </code></pre>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${(tabContentActive == 'progress-bar') ? 'active show': ''}`} id="progress-bar" role="tabpanel">
              <div className="fluid-container py-4">
                <div className="progress mb-2">
                  <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="progress mb-2">
                  <div className="progress-bar bg-primary" role="progressbar" style={{"width": "25%", "ariaValuenow":"25", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
                </div>
                <div className="progress mb-2">
                  <div className="progress-bar bg-secondary" role="progressbar" style={{"width": "50%", "ariaValuenow":"50", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
                </div>
                <div className="progress mb-2">
                  <div className="progress-bar bg-success" role="progressbar" style={{"width": "75%", "ariaValuenow":"75", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
                </div>
                <div className="progress">
                  <div className="progress-bar bg-info" role="progressbar" style={{"width": "100%", "ariaValuenow":"100", "ariaValuemin":"0", "ariaValuemax":"100"}}></div>
                </div>
                <div className="code-box-copy mt-4">
                  <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#progressbars" title="Copy"><i className="fa fa-files-o"></i></button>
                  <pre><code className="language-html" id="progressbars"></code></pre>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${(tabContentActive == 'alert') ? 'active show': ''}`} id="alert" role="tabpanel">
              <div className="fluid-container py-4">
                <div className="alert alert-primary" role="alert">This is a info alert&mdash;check it out!</div>
                <div className="alert alert-secondary" role="alert">This is a light alert&mdash;check it out!</div>
                <div className="alert alert-success" role="alert">This is a success alert&mdash;check it out!</div>
                <div className="alert alert-info" role="alert">This is a danger alert&mdash;check it out!</div>
                <div className="alert alert-warning" role="alert">This is a secondary alert&mdash;check it out!</div>
                <div className="alert alert-danger" role="alert">This is a warning alert&mdash;check it out!</div>
                <div className="alert alert-light" role="alert">This is a dark alert&mdash;check it out!</div>
                <div className="alert alert-dark" role="alert">This is a dark alert&mdash;check it out!</div>
                <div className="code-box-copy mt-4">
                  <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#alertcopy" title="Copy"><i className="fa fa-files-o"></i></button>
                  <pre><code className="language-html" id="alertcopy"></code></pre>
                </div>
              </div>
            </div>
            <div className={`tab-pane fade ${(tabContentActive == 'popovers') ? 'active show': ''}`} id="popovers" role="tabpanel">
              <div className="fluid-container py-4">
                <button className="btn btn-primary example-popover me-1 mb-2" type="button" data-bs-toggle="popover" title="" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">Click to toggle popover</button><a className="example-popover btn btn-secondary mb-2" tabindex="0" role="button" data-bs-toggle="popover" data-bs-trigger="focus" title="" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-original-title="Popover title">
                  Dismissible
                  popover</a>
                <button className="example-popover btn btn-success mb-2" type="button" data-bs-trigger="hover" data-container="body" data-bs-toggle="popover" data-bs-placement="bottom" title="" data-offset="-20px -20px" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." data-original-title="Popover title">On Hover Tooltip</button>
                <div className="code-box-copy mt-3">
                  <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#popovercode" title="Copy"><i className="fa fa-files-o"></i></button>
                  <pre><code className="language-html" id="popovercode">
                  </code></pre>
                </div>
              </div>
            </div>
          </div>
          <ul className="nav nav-tabs m-t-25" id="myTab2" role="tablist">
            <li className="nav-item"><a className="nav-link active" data-bs-toggle="tab" href="#tooltips" role="tab" aria-selected="false" data-original-title="" title="">Tooltip</a></li>
            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#dropdown" role="tab" aria-selected="true" data-original-title="" title="">Dropdown</a></li>
            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#tabs" role="tab" aria-selected="false" data-original-title="" title="">Tabs</a></li>
            <li className="nav-item"><a className="nav-link" data-bs-toggle="tab" href="#according" role="tab" aria-selected="false" data-original-title="" title="">According</a></li>
          </ul>
          <div className="tab-content" id="myTabContent2">
            <div className="tab-pane fade show active" id="tooltips" role="tabpanel">
              <div className="fluid-container py-4">
                <button className="example-popover btn btn-primary" type="button" data-container="body" data-bs-toggle="tooltip" data-bs-placement="top" title="tooltip" data-original-title="Popover title">Hover Me</button>
                <div className="code-box-copy mt-4">
                  <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#tooltipcode" title="Copy"><i className="fa fa-files-o"></i></button>
                  <pre><code className="language-html" id="tooltipcode"></code></pre>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="dropdown" role="tabpanel">
              <div className="fluid-container py-4">
                <div className="dropdown-basic">
                  <div className="dropdown">
                    <button className="dropbtn btn-primary" type="button" data-original-title="" title="">
                      Dropdown
                      Button<span><i className="icofont icofont-arrow-down"></i></span>
                    </button>
                    <div className="dropdown-content"><a href="#" data-original-title="" title="">Action</a><a href="#" data-original-title="" title="">Another Action</a><a href="#" data-original-title="" title="">Something Else Here</a></div>
                  </div>
                </div>
                <div className="code-box-copy mt-4">
                  <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#dropdowncode" title="Copy"><i className="fa fa-files-o"></i></button>
                  <pre><code className="language-html" id="dropdowncode"></code></pre>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="tabs" role="tabpanel">
              <div className="fluid-container py-4">
                <ul className="nav nav-tabs" id="myTab3" role="tablist">
                  <li className="nav-item"><a className="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" data-original-title="" title="">Home                                      </a></li>
                  <li className="nav-item dropdown"><a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" data-original-title="" title="">Dropdown</a>
                    <div className="dropdown-menu"><a className="dropdown-item" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" data-original-title="" title="">Action</a><a className="dropdown-item" href="#" data-original-title="" title="">Another action</a><a className="dropdown-item" href="#" data-original-title="" title="">Something else here</a>
                      <div className="dropdown-divider"></div><a className="dropdown-item" href="#" data-original-title="" title="">Separated link</a>
                    </div>
                  </li>
                  <li className="nav-item"><a className="nav-link" id="profile-tabs" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" data-original-title="" title="">Profile</a></li>
                  <li className="nav-item"><a className="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false" data-original-title="" title="">Contact</a></li>
                </ul>
                <div className="tab-content" id="myTabContent3">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <p className="mb-0 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <p className="mb-0 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  </div>
                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <p className="mb-0 mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  </div>
                </div>
                <div className="code-box-copy mt-4">
                  <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#tabcode" title="Copy"><i className="fa fa-files-o"></i></button>
                  <pre><code className="language-html" id="tabcode"></code></pre>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="according" role="tabpanel">
              <div className="fluid-container py-4">
                <div className="default-according" id="accordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h6 className="mb-0">
                        <button className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-original-title="" title="">Collapsible Group Item #<span className="digits">1</span></button>
                      </h6>
                    </div>
                    <div className="collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordion">
                      <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h6 className="mb-0">
                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-original-title="" title="">Collapsible Group Item #<span className="digits">2</span></button>
                      </h6>
                    </div>
                    <div className="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                      <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h6 className="mb-0">
                        <button className="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" data-original-title="" title="">Collapsible Group Item #<span className="digits">3</span></button>
                      </h6>
                    </div>
                    <div className="collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordion">
                      <div className="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute,non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
                    </div>
                  </div>
                </div>
                <div className="code-box-copy mt-4">
                  <button className="code-box-copy__btn btn-clipboard" data-clipboard-target="#accodioncode" title="Copy"><i className="fa fa-files-o"></i></button>
                  <pre><code className="language-html" id="accodioncode"></code></pre>
                </div>
              </div>
            </div>
          </div>
		</>
	)
}
export default BasicUiElement