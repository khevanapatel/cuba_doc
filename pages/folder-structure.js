import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import TreeView from './react-treeview';
import react from '../components/json/react';
const FolderStructure = () => {
	const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 

    const headerContext = useContext(HeaderContext);
    const HeaderContextObj = headerContext.HeaderContext;

    useEffect(()=>{
       setFontSizeLocal('font-'+HeaderContextObj.fontSize);
    },[HeaderContextObj])

    const dataSource = [
	    {
	      name: 'cuba',
	      collapsed: false,
	      data: [
	        {
	          name: 'document', 
	          collapsed: false,
	          data:[
	            {
	              name: 'index.html', 
	              collapsed: false,
	            }
	          ]
	        },
	        {
	          name: 'starterkit',
	          collapsed: false
	        },
	        {
	          name: 'theme',
	          collapsed: false
	        },
	      ],
	    }
	];	

	const getTree = (data) => {
		 const treeObj = data.map((value, index) => {
	    	const label2 = <span className="node">{value.name}</span>;
            return (
              <span key={index}>
              {value.data ?
	            <TreeView nodeLabel={label2} key={value.name} defaultCollapsed={false}>
	                {value.data ? getTree(value.data) : ''}
	            </TreeView>
	            : 
	            <div>{value.name}</div>
	        }
              </span>
            );
	    })
	    return treeObj;
	}

	return(
		<Layout>
			<div className={`col-lg-9 content ${fontSizeLocal}`}>
				  <div>
			        {react.map((node, i) => {
			          const name = node.name;
			          const label = <span className="node">{name}</span>;
			          return (
			            <TreeView key={name + '|' + i} nodeLabel={label} defaultCollapsed={false}>
			              {node.data ? getTree(node.data) : ''}
			              
			            </TreeView>
			          );
			        })}
			      </div>
	            <div className="row">
	              <div className="col-sm-12 col-xl-6">
	                <div className="card">
	                  <div className="card-header">
	                    <h5 className="main-title">React folder Structure</h5>
	                  </div>
	                  <div className="card-body">
	                    <div id="treeBasic">
	                      <ul>
	                        <li data-jstree="{&quot;opened&quot;:true}">cuba
	                          <ul>
	                            <li data-jstree="{&quot;opened&quot;:false}">document
	                              <ul>
	                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">index.html</li>
	                              </ul>
	                            </li>
	                            <li data-jstree="{&quot;opened&quot;:false}">staterkit
	                              <ul>
	                                <li data-jstree="{&quot;opened&quot;:false}">public
	                                  <ul>
	                                    <li className="img-icon">favicon.png</li>
	                                    <li className="html-icon">index.html</li>
	                                    <li className="img-icon">logo192.png</li>
	                                    <li className="img-icon">logo512.png</li>
	                                    <li className="json-icon">manifest.json</li>
	                                    <li className="txt-icon">robots.txt</li>
	                                  </ul>
	                                </li>
	                                <li data-jstree="{&quot;opened&quot;:false}">src
	                                  <ul>
	                                    <li data-jstree="{&quot;opened&quot;:false}">assets
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">audio
	                                          <ul>
	                                            <li className="music-icon" data-jstree="{&quot;selected&quot;:false,&quot;type&quot;:&quot;file&quot;}">horse.ogg</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">fonts
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">calendar</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">feather</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">flag-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">font-awesome</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">ico</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">ionic-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">material-design-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">pe7-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">simple-line-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">summernote</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">themify</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">typicon-icon</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">images
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">appointment</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">avtar</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">banner</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">big-lightgallry</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">big-masonry</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">blog</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">Carousel</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">dashboard</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">dashboard-2</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">ecommerce</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">email</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">faq</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">job-search</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">lightgallry</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">logo</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">masonry</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">notification</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">other-images</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">product</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">sidebar-image</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">sidebar-pattern</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">social-app</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">user</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">user-card</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">welcome</li>
	                                            <li className="img-icon">color-picker.png</li>
	                                            <li className="img-icon">favicon.png</li>
	                                            <li className="img-icon">settings.png</li>
	                                            <li className="img-icon">smiley.png</li>
	                                            <li className="img-icon">User.jpg</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">scss
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">base
	                                              <ul>
	                                                <li className="scss-icon">_reset.scss</li>
	                                                <li className="scss-icon">_typography.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">components
	                                              <ul>
	                                                <li className="scss-icon">_according.scss</li>
	                                                <li className="scss-icon">_alert.scss</li>
	                                                <li className="scss-icon">_avatars.scss</li>
	                                                <li className="scss-icon">_badge.scss</li>
	                                                <li className="scss-icon">_bookmark.scss</li>
	                                                <li className="scss-icon">_breadcrumb.scss</li>
	                                                <li className="scss-icon">_builders.scss</li>
	                                                <li className="scss-icon">_buttons.scss</li>
	                                                <li className="scss-icon">_card.scss</li>
	                                                <li className="scss-icon">_color.scss</li>
	                                                <li className="scss-icon">_datatable.scss</li>
	                                                <li className="scss-icon">_datepicker.scss</li>
	                                                <li className="scss-icon">_dropdown.scss</li>
	                                                <li className="scss-icon">_form-input.scss</li>
	                                                <li className="scss-icon">_form-wizard.scss</li>
	                                                <li className="scss-icon">_forms.scss</li>
	                                                <li className="scss-icon">_general.scss</li>
	                                                <li className="scss-icon">_icons.scss</li>
	                                                <li className="scss-icon">_list.scss</li>
	                                                <li className="scss-icon">_loader.scss</li>
	                                                <li className="scss-icon">_popover.scss</li>
	                                                <li className="scss-icon">_print.scss</li>
	                                                <li className="scss-icon">_radio.scss</li>
	                                                <li className="scss-icon">_react-plugin.scss</li>
	                                                <li className="scss-icon">_ribbon.scss</li>
	                                                <li className="scss-icon">slick.scss</li>
	                                                <li className="scss-icon">slick-theme.scss</li>
	                                                <li className="scss-icon">_switch.scss</li>
	                                                <li className="scss-icon">_tab.scss</li>
	                                                <li className="scss-icon">_table.scss</li>
	                                                <li className="scss-icon">_touchspin.scss</li>
	                                                <li className="scss-icon">_tour.scss</li>
	                                                <li className="scss-icon">_typeahead-search.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">layout
	                                              <ul> 
	                                                <li className="scss-icon">_box-layout.scss</li>
	                                                <li className="scss-icon">_footer.scss</li>
	                                                <li className="scss-icon">_grid.scss</li>
	                                                <li className="scss-icon">_header.scss</li>
	                                                <li className="scss-icon">_navs.scss</li>
	                                                <li className="scss-icon">_rtl.scss</li>
	                                                <li className="scss-icon">_search.scss</li>
	                                                <li className="scss-icon">_select2.scss</li>
	                                                <li className="scss-icon">_sidebar.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">pages
	                                              <ul>
	                                                <li className="scss-icon">_blog.scss</li>
	                                                <li className="scss-icon">_bookmark-app.scss</li>
	                                                <li className="scss-icon">_calendar.scss</li>
	                                                <li className="scss-icon">_cart.scss</li>
	                                                <li className="scss-icon">_chart.scss</li>
	                                                <li className="scss-icon">_chat.scss</li>
	                                                <li className="scss-icon">_checkout.scss</li>
	                                                <li className="scss-icon">_comingsoon.scss</li>
	                                                <li className="scss-icon">_contacts.scss</li>
	                                                <li className="scss-icon">_dashboard_2.scss</li>
	                                                <li className="scss-icon">_dashboard_default.scss</li>
	                                                <li className="scss-icon">_ecommerce.scss</li>
	                                                <li className="scss-icon">_email-application.scss</li>
	                                                <li className="scss-icon">_errorpage.scss</li>
	                                                <li className="scss-icon">_faq.scss</li>
	                                                <li className="scss-icon">_file.scss</li>
	                                                <li className="scss-icon">_gallery.scss</li>
	                                                <li className="scss-icon">_job-search.scss</li>
	                                                <li className="scss-icon">_kanban.scss</li>
	                                                <li className="scss-icon">_knowledgebase.scss</li>
	                                                <li className="scss-icon">_language.scss</li>
	                                                <li className="scss-icon">_learning.scss</li>
	                                                <li className="scss-icon">_login.scss</li>
	                                                <li className="scss-icon">_megaoption.scss</li>
	                                                <li className="scss-icon">_order-history.scss</li>
	                                                <li className="scss-icon">_page.scss</li>
	                                                <li className="scss-icon">_pricing.scss</li>
	                                                <li className="scss-icon">_progress.scss</li>
	                                                <li className="scss-icon">_projectlist.scss</li>
	                                                <li className="scss-icon">_social-app.scss</li>
	                                                <li className="scss-icon">_task.scss</li>
	                                                <li className="scss-icon">_timeline-v.scss</li>
	                                                <li className="scss-icon">_timeliny.scss</li>
	                                                <li className="scss-icon">_user-profile.scss</li>
	                                                <li className="scss-icon">_wishlist.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">themes
	                                              <ul>
	                                                <li className="scss-icon">_dark-sidebar.scss</li>
	                                                <li className="scss-icon">_dark.scss</li>
	                                                <li className="scss-icon">_responsive.scss</li>
	                                                <li className="scss-icon">_theme-customizer.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">utils
	                                              <ul>
	                                                <li className="scss-icon"> _variables.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">vendors
	                                              <ul> 
	                                                <li className="scss-icon">chartist.scss</li>
	                                                <li className="scss-icon">feather-icon.scss</li>
	                                                <li className="scss-icon">flag-icon.css</li>
	                                                <li className="scss-icon">icofont.scss</li>
	                                                <li className="scss-icon">ionic-icon.scss</li>
	                                                <li className="scss-icon">simple-line-icon.scss</li>
	                                                <li className="scss-icon">sweetalert2.scss</li>
	                                                <li className="scss-icon">themify.scss</li>
	                                                <li className="scss-icon">todo.scss</li>
	                                                <li className="scss-icon">typicon-icon.scss</li>
	                                                <li className="scss-icon">whether-icon.scss</li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">chartist
	                                                  <ul>
	                                                    <li className="scss-icon"> _chartist-settings.scss</li>
	                                                    <li className="scss-icon"> _chartist.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">feather-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _feather-icon.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">flag-icon
	                                                  <ul>
	                                                    <li className="scss-icon">_flag-icon-base.scss</li>
	                                                    <li className="scss-icon"> _flag-icon-list.scss</li>
	                                                    <li className="scss-icon">_flag-icon-more.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">font-awesome
	                                                  <ul>
	                                                    <li className="scss-icon">_animated.scss</li>
	                                                    <li className="scss-icon">_bordered-pulled.scss</li>
	                                                    <li className="scss-icon">_core.scss</li>
	                                                    <li className="scss-icon">_fixed-width.scss</li>
	                                                    <li className="scss-icon">_icons.scss</li>
	                                                    <li className="scss-icon">_larger.scss</li>
	                                                    <li className="scss-icon">_list.scss</li>
	                                                    <li className="scss-icon">_mixins.scss</li>
	                                                    <li className="scss-icon">_path.scss</li>
	                                                    <li className="scss-icon">_rotated-flipped.scss</li>
	                                                    <li className="scss-icon">_screen-reader.scss</li>
	                                                    <li className="scss-icon">_stacked.scss</li>
	                                                    <li className="scss-icon">_variables.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">icoicon
	                                                  <ul>
	                                                    <li className="scss-icon"> _icons.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">ionic-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _ionicons-font.scss</li>
	                                                    <li className="scss-icon"> _ionicons-icons.scss</li>
	                                                    <li className="scss-icon"> _ionicons-variables.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">simple-line-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _simple-line-icons.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">simple-mde
	                                                  <ul>
	                                                    <li className="scss-icon">  _elements.scss</li>
	                                                    <li className="scss-icon">  _simplemde.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">sticky
	                                                  <ul>
	                                                    <li className="scss-icon">  _sticky.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">themify
	                                                  <ul>
	                                                    <li className="scss-icon">  _core.scss</li>
	                                                    <li className="scss-icon">  _extras.scss</li>
	                                                    <li className="scss-icon">  _icons.scss</li>
	                                                    <li className="scss-icon">  _mixins.scss</li>
	                                                    <li className="scss-icon">  _path.scss</li>
	                                                    <li className="scss-icon">  _themify-icons.scss</li>
	                                                    <li className="scss-icon">  _variables.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">todo
	                                                  <ul>
	                                                    <li className="scss-icon">  _todo.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">typicon-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _typicon-icon.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">whether-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _whether-icon.scss</li>
	                                                  </ul>
	                                                </li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">video
	                                          <ul>
	                                            <li className="video-icon" data-jstree="{&quot;selected&quot;:false,&quot;type&quot;:&quot;file&quot;}">auth-bg.mp4</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">components
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">dashboard
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">default
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">ecommerce
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">starter-kits
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li className="react-icon">app.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">data
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">customizer
	                                          <ul>
	                                            <li className="react-icon">config.jsx</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">layout
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">bookmark
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">breadcrumb
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">footer
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">header
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                            <li className="react-icon">leftbar.jsx</li>
	                                            <li className="react-icon">rightbar.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">loader
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">scroll_to_top
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">sidebar
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                            <li className="react-icon">menu.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">theme-customizer
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">redux
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">customizer
	                                          <ul>
	                                            <li className="react-icon">reducer.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li className="react-icon">actionTypes.jsx</li>
	                                        <li className="react-icon">index.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">route
	                                      <ul>
	                                        <li className="react-icon">index.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">store
	                                      <ul>
	                                        <li className="react-icon">index.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li className="js-icon">App.test.js</li>
	                                    <li className="react-icon">index.jsx</li>
	                                    <li className="scss-icon">index.scss</li>
	                                    <li className="svg-icon">logo.svg</li>
	                                    <li className="js-icon">serviceWorker.js</li>
	                                    <li className="js-icon">setupTests.js</li>
	                                  </ul>
	                                </li>
	                                <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">package.json</li>
	                              </ul>
	                            </li>
	                            <li data-jstree="{&quot;opened&quot;:false}">theme
	                              <ul>
	                                <li data-jstree="{&quot;opened&quot;:false}">public
	                                  <ul>
	                                    <li className="img-icon">favicon.png</li>
	                                    <li className="html-icon">index.html</li>
	                                    <li className="img-icon">logo192.png</li>
	                                    <li className="img-icon">logo512.png</li>
	                                    <li className="json-icon">manifest.json</li>
	                                    <li className="txt-icon">robots.txt</li>
	                                  </ul>
	                                </li>
	                                <li data-jstree="{&quot;opened&quot;:false}">src
	                                  <ul>
	                                    <li data-jstree="{&quot;opened&quot;:false}">assets
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">audio
	                                          <ul>
	                                            <li className="music-icon" data-jstree="{&quot;selected&quot;:false,&quot;type&quot;:&quot;file&quot;}">horse.ogg</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">fonts
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">calendar</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">feather</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">flag-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">font-awesome</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">ico</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">ionic-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">material-design-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">pe7-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">simple-line-icon</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">summernote</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">themify</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">typicon-icon</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">images
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">appointment</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">avtar</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">banner</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">big-lightgallry</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">big-masonry</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">blog</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">Carousel</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">dashboard</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">dashboard-2</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">ecommerce</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">email</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">faq</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">job-search</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">lightgallry</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">logo</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">masonry</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">notification</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">other-images</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">product</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">sidebar-image</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">sidebar-pattern</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">social-app</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">user</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">user-card</li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">welcome</li>
	                                            <li className="img-icon">color-picker.png</li>
	                                            <li className="img-icon">favicon.png</li>
	                                            <li className="img-icon">settings.png</li>
	                                            <li className="img-icon">smiley.png</li>
	                                            <li className="img-icon">User.jpg</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">scss
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">base
	                                              <ul>
	                                                <li className="scss-icon">_reset.scss</li>
	                                                <li className="scss-icon">_typography.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">components
	                                              <ul>
	                                                <li className="scss-icon">_according.scss</li>
	                                                <li className="scss-icon">_alert.scss</li>
	                                                <li className="scss-icon">_avatars.scss</li>
	                                                <li className="scss-icon">_badge.scss</li>
	                                                <li className="scss-icon">_bookmark.scss</li>
	                                                <li className="scss-icon">_breadcrumb.scss</li>
	                                                <li className="scss-icon">_builders.scss</li>
	                                                <li className="scss-icon">_buttons.scss</li>
	                                                <li className="scss-icon">_card.scss</li>
	                                                <li className="scss-icon">_color.scss</li>
	                                                <li className="scss-icon">_datatable.scss</li>
	                                                <li className="scss-icon">_datepicker.scss</li>
	                                                <li className="scss-icon">_dropdown.scss</li>
	                                                <li className="scss-icon">_form-input.scss</li>
	                                                <li className="scss-icon">_form-wizard.scss</li>
	                                                <li className="scss-icon">_forms.scss</li>
	                                                <li className="scss-icon">_general.scss</li>
	                                                <li className="scss-icon">_icons.scss</li>
	                                                <li className="scss-icon">_list.scss</li>
	                                                <li className="scss-icon">_loader.scss</li>
	                                                <li className="scss-icon">_popover.scss</li>
	                                                <li className="scss-icon">_print.scss</li>
	                                                <li className="scss-icon">_radio.scss</li>
	                                                <li className="scss-icon">_react-plugin.scss</li>
	                                                <li className="scss-icon">_ribbon.scss</li>
	                                                <li className="scss-icon">slick.scss</li>
	                                                <li className="scss-icon">slick-theme.scss</li>
	                                                <li className="scss-icon">_switch.scss</li>
	                                                <li className="scss-icon">_tab.scss</li>
	                                                <li className="scss-icon">_table.scss</li>
	                                                <li className="scss-icon">_touchspin.scss</li>
	                                                <li className="scss-icon">_tour.scss</li>
	                                                <li className="scss-icon">_typeahead-search.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">layout
	                                              <ul> 
	                                                <li className="scss-icon">_box-layout.scss</li>
	                                                <li className="scss-icon">_footer.scss</li>
	                                                <li className="scss-icon">_grid.scss</li>
	                                                <li className="scss-icon">_header.scss</li>
	                                                <li className="scss-icon">_navs.scss</li>
	                                                <li className="scss-icon">_rtl.scss</li>
	                                                <li className="scss-icon">_search.scss</li>
	                                                <li className="scss-icon">_select2.scss</li>
	                                                <li className="scss-icon">_sidebar.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">pages
	                                              <ul>
	                                                <li className="scss-icon">_blog.scss</li>
	                                                <li className="scss-icon">_bookmark-app.scss</li>
	                                                <li className="scss-icon">_calendar.scss</li>
	                                                <li className="scss-icon">_cart.scss</li>
	                                                <li className="scss-icon">_chart.scss</li>
	                                                <li className="scss-icon">_chat.scss</li>
	                                                <li className="scss-icon">_checkout.scss</li>
	                                                <li className="scss-icon">_comingsoon.scss</li>
	                                                <li className="scss-icon">_contacts.scss</li>
	                                                <li className="scss-icon">_dashboard_2.scss</li>
	                                                <li className="scss-icon">_dashboard_default.scss</li>
	                                                <li className="scss-icon">_ecommerce.scss</li>
	                                                <li className="scss-icon">_email-application.scss</li>
	                                                <li className="scss-icon">_errorpage.scss</li>
	                                                <li className="scss-icon">_faq.scss</li>
	                                                <li className="scss-icon">_file.scss</li>
	                                                <li className="scss-icon">_gallery.scss</li>
	                                                <li className="scss-icon">_job-search.scss</li>
	                                                <li className="scss-icon">_kanban.scss</li>
	                                                <li className="scss-icon">_knowledgebase.scss</li>
	                                                <li className="scss-icon">_language.scss</li>
	                                                <li className="scss-icon">_learning.scss</li>
	                                                <li className="scss-icon">_login.scss</li>
	                                                <li className="scss-icon">_megaoption.scss</li>
	                                                <li className="scss-icon">_order-history.scss</li>
	                                                <li className="scss-icon">_page.scss</li>
	                                                <li className="scss-icon">_pricing.scss</li>
	                                                <li className="scss-icon">_progress.scss</li>
	                                                <li className="scss-icon">_projectlist.scss</li>
	                                                <li className="scss-icon">_social-app.scss</li>
	                                                <li className="scss-icon">_task.scss</li>
	                                                <li className="scss-icon">_timeline-v.scss</li>
	                                                <li className="scss-icon">_timeliny.scss</li>
	                                                <li className="scss-icon">_user-profile.scss</li>
	                                                <li className="scss-icon">_wishlist.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">themes
	                                              <ul>
	                                                <li className="scss-icon">_dark-sidebar.scss</li>
	                                                <li className="scss-icon">_dark.scss</li>
	                                                <li className="scss-icon">_responsive.scss</li>
	                                                <li className="scss-icon">_theme-customizer.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">utils
	                                              <ul>
	                                                <li className="scss-icon"> _variables.scss</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">vendors
	                                              <ul> 
	                                                <li className="scss-icon">chartist.scss</li>
	                                                <li className="scss-icon">feather-icon.scss</li>
	                                                <li className="scss-icon">flag-icon.css</li>
	                                                <li className="scss-icon">icofont.scss</li>
	                                                <li className="scss-icon">ionic-icon.scss</li>
	                                                <li className="scss-icon">simple-line-icon.scss</li>
	                                                <li className="scss-icon">sweetalert2.scss</li>
	                                                <li className="scss-icon">themify.scss</li>
	                                                <li className="scss-icon">todo.scss</li>
	                                                <li className="scss-icon">typicon-icon.scss</li>
	                                                <li className="scss-icon">whether-icon.scss</li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">chartist
	                                                  <ul>
	                                                    <li className="scss-icon"> _chartist-settings.scss</li>
	                                                    <li className="scss-icon"> _chartist.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">feather-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _feather-icon.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">flag-icon
	                                                  <ul>
	                                                    <li className="scss-icon">_flag-icon-base.scss</li>
	                                                    <li className="scss-icon"> _flag-icon-list.scss</li>
	                                                    <li className="scss-icon">_flag-icon-more.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">font-awesome
	                                                  <ul>
	                                                    <li className="scss-icon">_animated.scss</li>
	                                                    <li className="scss-icon">_bordered-pulled.scss</li>
	                                                    <li className="scss-icon">_core.scss</li>
	                                                    <li className="scss-icon">_fixed-width.scss</li>
	                                                    <li className="scss-icon">_icons.scss</li>
	                                                    <li className="scss-icon">_larger.scss</li>
	                                                    <li className="scss-icon">_list.scss</li>
	                                                    <li className="scss-icon">_mixins.scss</li>
	                                                    <li className="scss-icon">_path.scss</li>
	                                                    <li className="scss-icon">_rotated-flipped.scss</li>
	                                                    <li className="scss-icon">_screen-reader.scss</li>
	                                                    <li className="scss-icon">_stacked.scss</li>
	                                                    <li className="scss-icon">_variables.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">icoicon
	                                                  <ul>
	                                                    <li className="scss-icon"> _icons.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">ionic-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _ionicons-font.scss</li>
	                                                    <li className="scss-icon"> _ionicons-icons.scss</li>
	                                                    <li className="scss-icon"> _ionicons-variables.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">simple-line-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _simple-line-icons.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">simple-mde
	                                                  <ul>
	                                                    <li className="scss-icon">  _elements.scss</li>
	                                                    <li className="scss-icon">  _simplemde.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">sticky
	                                                  <ul>
	                                                    <li className="scss-icon">  _sticky.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">themify
	                                                  <ul>
	                                                    <li className="scss-icon">  _core.scss</li>
	                                                    <li className="scss-icon">  _extras.scss</li>
	                                                    <li className="scss-icon">  _icons.scss</li>
	                                                    <li className="scss-icon">  _mixins.scss</li>
	                                                    <li className="scss-icon">  _path.scss</li>
	                                                    <li className="scss-icon">  _themify-icons.scss</li>
	                                                    <li className="scss-icon">  _variables.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">todo
	                                                  <ul>
	                                                    <li className="scss-icon">  _todo.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">typicon-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _typicon-icon.scss</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">whether-icon
	                                                  <ul>
	                                                    <li className="scss-icon"> _whether-icon.scss</li>
	                                                  </ul>
	                                                </li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">video
	                                          <ul>
	                                            <li className="video-icon" data-jstree="{&quot;selected&quot;:false,&quot;type&quot;:&quot;file&quot;}">auth-bg.mp4</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">auth
	                                      <ul>
	                                        <li className="react-icon">signin.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">components
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">application
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">bookmark
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">chat-app
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">contact-app
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                                <li className="react-icon">printpreview.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">ecommerce-app
	                                              <ul>
	                                                <li data-jstree="{&quot;opened&quot;:false}">filters
	                                                  <ul>
	                                                    <li className="react-icon">allfilters.jsx</li>
	                                                    <li className="react-icon">carousal.jsx</li>
	                                                  </ul>
	                                                </li>
	                                                <li className="react-icon">cart.jsx</li>
	                                                <li className="react-icon">checkout.jsx</li>
	                                                <li className="react-icon">invoice.jsx</li>
	                                                <li className="react-icon">orderHistory.jsx</li>
	                                                <li className="react-icon">paymentdetails.jsx</li>
	                                                <li className="react-icon">pricing.jsx</li>
	                                                <li className="react-icon">product.jsx</li>
	                                                <li className="react-icon">productlist.jsx</li>
	                                                <li className="react-icon">productpage.jsx</li>
	                                                <li className="react-icon">tabsets.jsx</li>
	                                                <li className="react-icon">wishlist.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">email-app
	                                              <ul>
	                                                <li className="react-icon">email.jsx</li>
	                                                <li className="react-icon">emailDefault.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">task-app
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">todo-app
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">todo-firebase-app
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">blog
	                                          <ul>
	                                            <li className="react-icon">blogDetail.jsx</li>
	                                            <li className="react-icon">blogPost.jsx</li>
	                                            <li className="react-icon">blogSingle.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">bonus_ui
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">cards
	                                              <ul>
	                                                <li className="react-icon">basicCards.jsx</li>
	                                                <li className="react-icon">draggingCards.jsx</li>
	                                                <li className="react-icon">tabCard.jsx</li>
	                                                <li className="react-icon">themeCards.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">carousel
	                                              <ul>
	                                                <li className="react-icon">carouselComponent.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">steps
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                                <li className="react-icon">stepsComponent.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">timelines
	                                              <ul>
	                                                <li className="react-icon">timeline.jsx</li>
	                                                <li className="react-icon">timeline1.jsx</li>
	                                                <li className="react-icon">timeline2.jsx</li>
	                                                <li className="react-icon">verticalTimelineComp.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li className="react-icon">bootstrapNotify.jsx</li>
	                                            <li className="react-icon">breadcrumb.jsx</li>
	                                            <li className="react-icon">dragAndDrop.jsx</li>
	                                            <li className="react-icon">dropzone.jsx</li>
	                                            <li className="react-icon">imagecrop.jsx</li>
	                                            <li className="react-icon">pagination.jsx</li>
	                                            <li className="react-icon">rangeSlider.jsx</li>
	                                            <li className="react-icon">rating.jsx</li>
	                                            <li className="react-icon">ribbons.jsx</li>
	                                            <li className="react-icon">scrolling.jsx</li>
	                                            <li className="react-icon">sticky.jsx</li>
	                                            <li className="react-icon">sweetAlert.jsx</li>
	                                            <li className="react-icon">tour.jsx</li>
	                                            <li className="react-icon">uploadImage.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">buttons
	                                          <ul>
	                                            <li className="react-icon">default-Button.jsx</li>
	                                            <li className="react-icon">edgeButton.jsx</li>
	                                            <li className="react-icon">flatButton.jsx</li>
	                                            <li className="react-icon">groupButton.jsx</li>
	                                            <li className="react-icon">raisedButton.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">calendar
	                                          <ul>
	                                            <li className="react-icon">basicCalendar.jsx</li>
	                                            <li className="react-icon">draggableCalendar.jsx</li>
	                                            <li className="react-icon">events.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">charts
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">apexCharts
	                                              <ul>
	                                                <li className="react-icon">apexData.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">chartistCharts
	                                              <ul>
	                                                <li className="react-icon">chartistData.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">chartsjs
	                                              <ul>
	                                                <li className="react-icon">chartsData.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">googleCharts
	                                              <ul>
	                                                <li className="react-icon">googlechartData.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">knobChart
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">dashboard
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">chartsData
	                                              <ul>
	                                                <li className="react-icon">apex-charts-data.jsx</li>
	                                                <li className="react-icon">chartist-charts-data.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li className="react-icon">default.jsx</li>
	                                            <li className="react-icon">ecommerce.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">editor
	                                          <ul>
	                                            <li className="react-icon">aceCodeEditor.jsx</li>
	                                            <li className="react-icon">ckEditor.jsx</li>
	                                            <li className="react-icon">mdeEditor.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">faq
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">forms
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">form-control
	                                              <ul>
	                                                <li className="react-icon">baseInput.jsx</li>
	                                                <li className="react-icon">checkboxandRadio.jsx</li>
	                                                <li className="react-icon">form-validation.jsx</li>
	                                                <li className="react-icon">inputGroup.jsx</li>
	                                                <li className="react-icon">megaOption.jsx</li>
	                                                <li className="react-icon">tooltipForm.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">form-layout
	                                              <ul>
	                                                <li data-jstree="{&quot;opened&quot;:false}">form-wizard-1
	                                                  <ul>
	                                                    <li className="react-icon">birthdate.jsx</li>
	                                                    <li className="react-icon">email.jsx</li>
	                                                    <li className="react-icon">formwizard1.jsx</li>
	                                                    <li className="react-icon">registration.jsx</li>
	                                                  </ul>
	                                                </li>
	                                                <li className="react-icon">formDefault.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">form-widget
	                                              <ul>
	                                                <li data-jstree="{&quot;opened&quot;:false}">timepickerComponent
	                                                  <ul>
	                                                    <li className="react-icon">timepicker-four.jsx</li>
	                                                    <li className="react-icon">timepicker-one.jsx</li>
	                                                    <li className="react-icon">timepicker-three.jsx</li>
	                                                    <li className="react-icon">timepicker-two.jsx</li>
	                                                    <li className="react-icon">timepicker.jsx</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">typeaheadComponent
	                                                  <ul>
	                                                    <li className="react-icon">typeahead.jsx</li>
	                                                    <li className="react-icon">typeahead-one.jsx</li>
	                                                  </ul>
	                                                </li>
	                                                <li className="react-icon">datepicker.jsx</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">gallery
	                                          <ul>
	                                            <li className="react-icon">imageGallery.jsx</li>
	                                            <li className="react-icon">imageHover.jsx</li>
	                                            <li className="react-icon">imageWithDesc.jsx</li>
	                                            <li className="react-icon">mesonryDesc.jsx</li>
	                                            <li className="react-icon">mesonryGallery.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">icons
	                                          <ul>
	                                            <li className="react-icon">featherIcons.jsx</li>
	                                            <li className="react-icon">flagIcons.jsx</li>
	                                            <li className="react-icon">fontAwsomeIcon.jsx</li>
	                                            <li className="react-icon">icoIcons.jsx</li>
	                                            <li className="react-icon">Icon-markup.jsx</li>
	                                            <li className="react-icon">ionic-icon.jsx</li>
	                                            <li className="react-icon">materialdesignicon.jsx</li>
	                                            <li className="react-icon">pe7icons.jsx</li>
	                                            <li className="react-icon">simplelineicon.jsx</li>
	                                            <li className="react-icon">themifyIcons.jsx</li>
	                                            <li className="react-icon">typicon.jsx</li>
	                                            <li className="react-icon">weatherIcons.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">jobSearch
	                                          <ul>
	                                            <li className="react-icon">cardView.jsx</li>
	                                            <li className="react-icon">job-apply.jsx</li>
	                                            <li className="react-icon">job-detail.jsx</li>
	                                            <li className="react-icon">job-filter.jsx</li>
	                                            <li className="react-icon">job-list.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">knowledgebase
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">learning
	                                          <ul>
	                                            <li className="react-icon">learning-deatil.jsx</li>
	                                            <li className="react-icon">learning-filter.jsx</li>
	                                            <li className="react-icon">learning-list.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">map
	                                          <ul>
	                                            <li className="react-icon">googleMap.jsx</li>
	                                            <li className="react-icon">leafletMap.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">sample
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">search
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">social-app
	                                          <ul>
	                                            <li className="react-icon">aboutTab.jsx</li>
	                                            <li className="react-icon">friendsTab.jsx</li>
	                                            <li className="react-icon">index.jsx</li>
	                                            <li className="react-icon">leftBar.jsx</li>
	                                            <li className="react-icon">photosTab.jsx</li>
	                                            <li className="react-icon">rightBar.jsx</li>
	                                            <li className="react-icon">timelineTab.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">support-ticket
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">tables
	                                          <ul>
	                                            <li className="react-icon">basicTable.jsx</li>
	                                            <li className="react-icon">borderTable.jsx</li>
	                                            <li className="react-icon">dataTable.jsx</li>
	                                            <li className="react-icon">sizingTable.jsx</li>
	                                            <li className="react-icon">stylingTable.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">ui-kits
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">accordian
	                                              <ul>
	                                                <li className="react-icon">accordianComponent.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">alert
	                                              <ul>
	                                                <li className="react-icon">alertComponent.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">dropDown
	                                              <ul>
	                                                <li className="react-icon">dropDownComponent.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">nav
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                                <li className="react-icon">navComponent.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">popover
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                                <li className="react-icon">popoverComponent.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">tabs
	                                              <ul>
	                                                <li className="react-icon">tabBootstrap.jsx</li>
	                                                <li className="react-icon">tabLine.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">tooltip
	                                              <ul>
	                                                <li className="react-icon">index.jsx</li>
	                                                <li className="react-icon">tooltipComponent.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li className="react-icon">avatars.jsx</li>
	                                            <li className="react-icon">grid.jsx</li>
	                                            <li className="react-icon">helperClasses.jsx</li>
	                                            <li className="react-icon">list.jsx</li>
	                                            <li className="react-icon">modal.jsx</li>
	                                            <li className="react-icon">progress.jsx</li>
	                                            <li className="react-icon">shadow.jsx</li>
	                                            <li className="react-icon">spinner.jsx</li>
	                                            <li className="react-icon">statecolor.jsx</li>
	                                            <li className="react-icon">tagAndPills.jsx</li>
	                                            <li className="react-icon">typography.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">users
	                                          <ul>
	                                            <li className="react-icon">userCards.jsx</li>
	                                            <li className="react-icon">userEdit.jsx</li>
	                                            <li className="react-icon">userProfile.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">widgets
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">charts
	                                              <ul>
	                                                <li className="react-icon">charts-data.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">general
	                                              <ul>
	                                                <li className="react-icon">general-data.jsx</li>
	                                                <li className="react-icon">index.jsx</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li className="react-icon">app.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">data
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">bookmark
	                                          <ul>
	                                            <li className="js-icon">data.js</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">chat
	                                          <ul>
	                                            <li className="json-icon">chat.chats.json</li>
	                                            <li className="js-icon">chatMember.js</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">customizer
	                                          <ul>
	                                            <li className="react-icon">config.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">e-commerce
	                                          <ul>
	                                            <li className="react-icon">product.jsx</li>
	                                            <li className="react-icon">productdata.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">email
	                                          <ul>
	                                            <li className="react-icon">data.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">galleryData
	                                          <ul>
	                                            <li className="react-icon">Images.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">icons
	                                          <ul>
	                                            <li className="react-icon">featherComponent.jsx</li>
	                                            <li className="react-icon">featherData.jsx</li>
	                                            <li className="react-icon">flagIconData.jsx</li>
	                                            <li className="react-icon">fontawsomeData.jsx</li>
	                                            <li className="react-icon">icoData.jsx</li>
	                                            <li className="react-icon">ionic-icon-data.jsx</li>
	                                            <li className="react-icon">material-icon-data.jsx</li>
	                                            <li className="react-icon">pe7iconData.jsx</li>
	                                            <li className="react-icon">simple-line-data.jsx</li>
	                                            <li className="react-icon">themifyData.jsx</li>
	                                            <li className="react-icon">typ-icon-data.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">jobdata
	                                          <ul>
	                                            <li className="react-icon">data.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">knowledgebaseData
	                                          <ul>
	                                            <li className="react-icon">data.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">learningData
	                                          <ul>
	                                            <li className="react-icon">data.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li className="react-icon">base.jsx</li>
	                                        <li className="react-icon">dummyTableData.jsx</li>
	                                        <li className="react-icon">product-list.jsx</li>
	                                        <li className="react-icon">stickyData.jsx</li>
	                                        <li className="react-icon">supportdb.jsx</li>
	                                        <li className="react-icon">typeaheadData.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">layout
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">bookmark
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">breadcrumb
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">footer
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">header
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                            <li className="react-icon">leftbar.jsx</li>
	                                            <li className="react-icon">rightbar.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">loader
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">scroll_to_top
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">sidebar
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                            <li className="react-icon">menu.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">theme-customizer
	                                          <ul>
	                                            <li className="react-icon">index.jsx</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">pages
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">authentication
	                                          <ul>
	                                            <li className="react-icon">forgetpwd.jsx</li>
	                                            <li className="react-icon">login.jsx</li>
	                                            <li className="react-icon">loginWithBgImage.jsx</li>
	                                            <li className="react-icon">loginWithBgVideo.jsx</li>
	                                            <li className="react-icon">register.jsx</li>
	                                            <li className="react-icon">registerWithBgImage.jsx</li>
	                                            <li className="react-icon">registerWithBgVideo.jsx</li>
	                                            <li className="react-icon">resetpwd.jsx</li>
	                                            <li className="react-icon">unlockUser.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">comingSoon
	                                          <ul>
	                                            <li className="react-icon">comingsoon.jsx</li>
	                                            <li className="react-icon">comingsoonImg.jsx</li>
	                                            <li className="react-icon">comingsoonVideo.jsx</li>
	                                            <li className="react-icon">countdownData.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">errors
	                                          <ul>
	                                            <li className="react-icon">error400.jsx</li>
	                                            <li className="react-icon">error401.jsx</li>
	                                            <li className="react-icon">error403.jsx</li>
	                                            <li className="react-icon">error404.jsx</li>
	                                            <li className="react-icon">error500.jsx</li>
	                                            <li className="react-icon">error503.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li className="react-icon">maintenance.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">redux
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">bookmark
	                                          <ul>
	                                            <li className="react-icon">action.jsx</li>
	                                            <li className="react-icon">reducer.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">chap-app
	                                          <ul>
	                                            <li className="react-icon">action.jsx</li>
	                                            <li className="react-icon">reducer.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">customizer
	                                          <ul>
	                                            <li className="react-icon">reducer.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">ecommerce
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">cart
	                                              <ul>
	                                                <li className="react-icon">action.jsx</li>
	                                                <li className="react-icon">reducer.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">filter
	                                              <ul>
	                                                <li className="react-icon">action.jsx</li>
	                                                <li className="react-icon">reducer.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">product
	                                              <ul>
	                                                <li className="react-icon">action.jsx</li>
	                                                <li className="react-icon">reducer.jsx</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">wishlist
	                                              <ul>
	                                                <li className="react-icon">action.jsx</li>
	                                                <li className="react-icon">reducer.jsx</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">email
	                                          <ul>
	                                            <li className="react-icon">action.jsx</li>
	                                            <li className="react-icon">reducer.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">task-app
	                                          <ul>
	                                            <li className="react-icon">action.jsx</li>
	                                            <li className="react-icon">reducer.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">todo
	                                          <ul>
	                                            <li className="react-icon">reducer.jsx</li>
	                                          </ul>
	                                        </li>
	                                        <li className="react-icon">actionTypes.jsx</li>
	                                        <li className="react-icon">index.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">route
	                                      <ul>
	                                        <li className="react-icon">index.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">services
	                                      <ul>
	                                        <li className="react-icon">contact.service.jsx</li>
	                                        <li className="react-icon">ecommerce.service.jsx</li>
	                                        <li className="react-icon">todo-firebase.service.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">store
	                                      <ul>
	                                        <li className="react-icon">index.jsx</li>
	                                      </ul>
	                                    </li>
	                                    <li className="js-icon">App.test.js</li>
	                                    <li className="react-icon">index.jsx</li>
	                                    <li className="scss-icon">index.scss</li>
	                                    <li className="js-icon">serviceWorker.js</li>
	                                    <li className="js-icon">setupTests.js</li>
	                                  </ul>
	                                </li>
	                                <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">package.json</li>
	                              </ul>
	                            </li>
	                          </ul>
	                        </li>
	                      </ul>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	        </div>
        </Layout>
	)
}
export default FolderStructure;