import Layout from '../components/common/layout';

const AngularTree = () => {
	return(
		<Layout>
		  <div className="col-lg-9 content">
	        <div className="row">
	          <div className="col-sm-12 col-xl-6">
	            <div className="card">
	              <div className="card-header">
	                <h5 className="main-title">Angular folder Structure</h5>
	              </div>
	              <div className="card-body">
	                <div id="treeBasic">
	                  <ul>
	                    <li data-jstree="{&quot;opened&quot;:true}">Cuba
	                      <ul>
	                        <li data-jstree="{&quot;opened&quot;:false}">e2e
	                          <ul>
	                            <li data-jstree="{&quot;opened&quot;:false}">src
	                              <ul>
	                                <li className="angular-icon" data-jstree="{&quot;selected&quot;:false,&quot;type&quot;:&quot;file&quot;}">app.e2e-spec.ts</li>
	                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">app.po.ts</li>
	                              </ul>
	                            </li>
	                            <li className="js-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">protractor.conf.js</li>
	                            <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tsconfig.json</li>
	                          </ul>
	                        </li>
	                        <li data-jstree="{&quot;opened&quot;:false}">src
	                          <ul>
	                            <li data-jstree="{&quot;opened&quot;:false}">app
	                              <ul>
	                                <li data-jstree="{&quot;opened&quot;:false}">auth
	                                  <ul>
	                                    <li data-jstree="{&quot;opened&quot;:false}">Login
	                                      <ul>
	                                        <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login.component.html</li>
	                                        <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login.component.scss</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login.component.ts</li>
	                                      </ul>
	                                    </li>
	                                  </ul>
	                                </li>
	                                <li data-jstree="{&quot;opened&quot;:false}">components
	                                  <ul>
	                                    <li data-jstree="{&quot;opened&quot;:false}">apps
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">blog
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">add-post
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-post.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-post.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-post.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">details
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">details.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">details.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">details.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">single
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">single.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">single.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">single.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">blog-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">blog.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">bookmarks
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">modal
	                                              <ul>
	                                                <li data-jstree="{&quot;opened&quot;:false}">add-bookmark
	                                                  <ul>
	                                                    <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-bookmark.component.css</li>
	                                                    <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-bookmark.component.html</li>
	                                                    <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-bookmark.component.ts</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">create-tag
	                                                  <ul>
	                                                    <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">create-tag.component.css</li>
	                                                    <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">create-tag.component.html</li>
	                                                    <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">create-tag.component.ts</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">edit-bookmark
	                                                  <ul>
	                                                    <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edit-bookmark.component.css</li>
	                                                    <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edit-bookmark.component.html</li>
	                                                    <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edit-bookmark.component.ts</li>
	                                                  </ul>
	                                                </li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmarks-routing.module.ts</li>
	                                            <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmarks.component.css</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmarks.component.html</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmarks.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmarks.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">calender
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">calender-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">calender.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">calender.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">calender.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">calender.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">chat
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">chat
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chat.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chat.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chat.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chat-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chat.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">contacts
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">modal
	                                              <ul>
	                                                <li data-jstree="{&quot;opened&quot;:false}">add-category
	                                                  <ul>
	                                                    <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-category.component.css</li>
	                                                    <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-category.component.html</li>
	                                                    <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-category.component.ts</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">add-contact
	                                                  <ul>
	                                                    <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-contact.component.css</li>
	                                                    <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-contact.component.html</li>
	                                                    <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-contact.component.ts</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">print-contact
	                                                  <ul>
	                                                    <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">print-contact.component.css</li>
	                                                    <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">print-contact.component.html</li>
	                                                    <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">print-contact.component.ts</li>
	                                                  </ul>
	                                                </li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">contacts-routing.module.ts</li>
	                                            <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">contacts.component.css</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">contacts.component.html</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">contacts.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">contacts.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">e-commerce
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">add-cart
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-cart.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-cart.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-cart.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">check-out
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">check-out.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">check-out.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">check-out.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">colection
	                                              <ul>
	                                                <li data-jstree="{&quot;opened&quot;:false}">filter
	                                                  <ul>
	                                                    <li data-jstree="{&quot;opened&quot;:false}">brand
	                                                      <ul>
	                                                        <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">brand.component.html</li>
	                                                        <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">brand.component.scss</li>
	                                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">brand.component.ts</li>
	                                                      </ul>
	                                                    </li>
	                                                    <li data-jstree="{&quot;opened&quot;:false}">color
	                                                      <ul>
	                                                        <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">color.component.html</li>
	                                                        <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">color.component.scss</li>
	                                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">color.component.ts</li>
	                                                      </ul>
	                                                    </li>
	                                                    <li data-jstree="{&quot;opened&quot;:false}">price
	                                                      <ul>
	                                                        <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">price.component.html</li>
	                                                        <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">price.component.scss</li>
	                                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">price.component.ts</li>
	                                                      </ul>
	                                                    </li>
	                                                  </ul>
	                                                </li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">invoice
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">invoice.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">invoice.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">invoice.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">order-history
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">order-history.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">order-history.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">order-history.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">payment-detail
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">payment-detail.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">payment-detail.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">payment-detail.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">product-detail
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">product-detail.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">product-detail.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">product-detail.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">product-list
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">product-list.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">product-list.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">product-list.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">product
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">products.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">products.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">products.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">quick-view
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">quick-view.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">quick-view.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">quick-view.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">wish-list
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">wish-list.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">wish-list.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">wish-list.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">e-commerce-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">e-commerce.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">editors
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">email
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">email-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">email.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">email.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">email.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">email.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">faq
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">faq-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">faq.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">faq.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">faq.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">faq.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">file-manager
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">file-manager-routing.module.ts</li>
	                                            <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">file-manager.component.css</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">file-manager.component.html</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">file-manager.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">file-manager.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">gallery
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">gallery-desc
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">gallery-desc.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">gallery-desc.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">gallery-desc.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">gallery-grid
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">gallery-grid.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">gallery-grid.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">gallery-grid.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">hover-effect
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">hover-effect.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">hover-effect.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">hover-effect.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">mesonry
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">mesonry.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">mesonry.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">mesonry.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">gallery-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">gallery.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">job-search
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">apply
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">apply.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">apply.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">apply.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">job-apply
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-apply.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-apply.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-apply.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">job-card
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-card.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-card.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-card.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">job-desc
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-desc.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-desc.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-desc.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">job-detail
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-detail.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-detail.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-detail.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">job-filter
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-filter.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-filter.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-filter.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">job-list
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-list.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-list.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-list.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-search-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-search.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">knowledge-base
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knowledge-base-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knowledge-base.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knowledge-base.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knowledge-base.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knowledge-base.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">learning
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">detailed-course
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">detailed-course.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">detailed-course.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">detailed-course.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">list
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">list.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">list.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">list.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">learning-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">learning.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">map
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">google-map
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">google-map.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">google-map.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">google-map.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">leaflet-map
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">leaflet-map.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">leaflet-map.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">leaflet-map.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">map-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">map.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">project
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">create-project
	                                              <ul>
	                                                <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">create-project.component.css</li>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">create-project.component.html</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">create-project.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">project-list
	                                              <ul>
	                                                <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">project-list.component.css</li>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">project-list.component.html</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">project-list.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">project-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">project.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">social-app
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">image-gallery
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">image-gallery.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">image-gallery.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">image-gallery.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">social-app-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">social-app.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">social-app.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">social-app.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">social-app.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">support-ticket
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">support-ticket-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">support-ticket.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">support-ticket.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">support-ticket.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">support-ticket.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">tasks
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">modal
	                                              <ul>
	                                                <li data-jstree="{&quot;opened&quot;:false}">add-task
	                                                  <ul>
	                                                    <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-task.component.css</li>
	                                                    <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-task.component.html</li>
	                                                    <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">add-task.component.ts</li>
	                                                  </ul>
	                                                </li>
	                                                <li data-jstree="{&quot;opened&quot;:false}">create-tag
	                                                  <ul>
	                                                    <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">create-tag.component.css</li>
	                                                    <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">create-tag.component.html</li>
	                                                    <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">create-tag.component.ts</li>
	                                                  </ul>
	                                                </li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tasks-routing.module.ts</li>
	                                            <li className="css-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tasks.component.css</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tasks.component.html</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tasks.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tasks.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">to-do-firebase
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">to-do-firebase-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">to-do-firebase.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">to-do-firebase.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">to-do-firebase.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">to-do-firebase.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">todo
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">todo-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">todo.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">todo.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">todo.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">todo.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">users
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">edit-profile
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edit-profile.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edit-profile.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edit-profile.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">profile
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">profile.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">profile.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">profile.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">team-details
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">team-details.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">team-details.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">team-details.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">users-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">users.module.ts</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">Bonus-UI
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">advance
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">dropzone
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">dropzone.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">dropzone.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">dropzone.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">image-croper
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">image-croper.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">image-croper.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">image-croper.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">owl-carousel
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">owl-carousel.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">owl-carousel.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">owl-carousel.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">range-slider
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">range-slider.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">range-slider.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">range-slider.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">scrollable
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">scrollable.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">scrollable.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">scrollable.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">sticky
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sticky.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sticky.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sticky.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">sweet-alert2
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sweet-alert2.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sweet-alert2.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sweet-alert2.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">tour
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tour.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tour.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tour.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">tree-view
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tree-view.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tree-view.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tree-view.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">advance-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">advance.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">base
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">accordion
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">accordion.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">accordion.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">accordion.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">alert
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">alert.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">alert.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">alert.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">buttons
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">buttons.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">buttons.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">buttons.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">carousel
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">carousel.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">carousel.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">carousel.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">collapse
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">collapse.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">collapse.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">collapse.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">datepicker
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">datepicker.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">datepicker.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">datepicker.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">dropdown
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">dropdown.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">dropdown.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">dropdown.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">modal
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">modal.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">modal.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">modal.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">pagination
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">pagination.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">pagination.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">pagination.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">popover
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">popover.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">popover.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">popover.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">progressbar
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">progressbar.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">progressbar.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">progressbar.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">rating
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">rating.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">rating.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">rating.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">tabset
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tabset.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tabset.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tabset.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">timepicker
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">timepicker.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">timepicker.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">timepicker.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">tooltip
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tooltip.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tooltip.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tooltip.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">typeahead
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">typeahead.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">typeahead.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">typeahead.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">base-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">base.module.ts</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">buttons
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">button-group
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">button-group.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">button-group.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">button-group.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">default
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">edge
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edge.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edge.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edge.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">flat
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">flat.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">flat.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">flat.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">raised
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">raised.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">raised.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">raised.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">buttons-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">buttons.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">cards
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">basic
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">basic.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">basic.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">basic.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">creative
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">creative.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">creative.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">creative.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">draggable
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">draggable.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">draggable.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">draggable.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">tabbed
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tabbed.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tabbed.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tabbed.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">cards-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">cards.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">charts
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">apex-chart
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">apex-chart.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">apex-chart.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">apex-chart.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">chartist
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartist.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartist.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartist.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">chartjs
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartjs.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartjs.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartjs.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">google
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">google.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">google.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">google.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">knob-chart
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knob-chart.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knob-chart.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knob-chart.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">ngx-chart
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ngx-chart.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ngx-chart.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ngx-chart.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">charts-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">charts.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">dashboard
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">default
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">ecommerce
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ecommerce.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ecommerce.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ecommerce.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">.dashboard-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">.dashboard.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">editors
	                                      <ul>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor-routing.module.ts</li>
	                                        <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor.component.html</li>
	                                        <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor.component.scss</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor.component.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">editor.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">forms
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">form-controls
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">base-inputs
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">base-inputs.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">base-inputs.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">base-inputs.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">checkbox-radio
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">checkbox-radio.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">checkbox-radio.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">checkbox-radio.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">form-validation
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-validation.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-validation.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-validation.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">input-groups
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">input-groups.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">input-groups.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">input-groups.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">mega-options
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">mega-options.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">mega-options.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">mega-options.component.ts</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">form-Layouts
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">default-form
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default-form.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default-form.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default-form.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">form-wizard
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">form-wizard-four
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard-four.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard-four.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard-four.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">form-wizard-three
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard-three.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard-three.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard-three.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">form-wizard-two
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard-two.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard-two.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">form-wizard-two.component.ts</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">form-widgets
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">clipboard
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">clipboard.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">clipboard.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">clipboard.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">date-time-picker
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">date-time-picker.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">date-time-picker.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">date-time-picker.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">ngselect
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">select2.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">select2.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">select2.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">switch
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">switch.component.html</li>
	                                                <li className="gscss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">switch.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">switch.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">touchspin
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">touchspin.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">touchspin.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">touchspin.component.ts</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">forms-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">forms.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">icons
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">feather-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">feather-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">feather-icon.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">feather-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">flag-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">flag-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">flag-icon.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">flag-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">font-awesome-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">font-awesome-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">font-awesome-icon.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">font-awesome-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">ico-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ico-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ico-icon.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ico-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">ionic-icons
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ionic-icons.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ionic-icons.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ionic-icons.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">material-design-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">material-design-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">material-design-icon.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">material-design-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">pe7-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">pe7-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">pe7-icon.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">pe7-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">simple-line-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">simple-line-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">simple-line-icon.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">simple-line-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">themify-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">themify-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">themify-icon.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">themify-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">typicons-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">typicons-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">typicons-icon.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">typicons-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">weather-icon
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">weather-icon.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">weather-icon.component.scssl</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">weather-icon.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">icons-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">icons.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">others
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">authentication
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">forgotpwd
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">forgotpwd.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">forgotpwd.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">forgotpwd.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">login
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">login-with-image
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login-with-image.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login-with-image.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login-with-image.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">login-with-video
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login-with-video.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login-with-video.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">login-with-video.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">register-with-image
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">register-with-image.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">register-with-image.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">register-with-image.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">register-with-video
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">register-with-video.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">register-with-video.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">register-with-video.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">registration
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">registration.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">registration.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">registration.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">resetpwd
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">resetpwd.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">resetpwd.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">resetpwd.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">unlockuser
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">unlockuser.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">unlockuser.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">unlockuser.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">authentication-routing.module.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">authentication.module.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">search-result
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">image-gallery
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">image-gallery.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">image-gallery.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">image-gallery.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">search-result-routing.module.ts</li>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">search-result.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">search-result.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">search-result.component.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">search-result.module.ts</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">table
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">bootstrap-tables
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">basic
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">basic.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">basic.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">basic.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">border
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">border.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">border.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">border.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">sizing
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sizing.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sizing.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sizing.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">styling
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">styling.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">styling.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">styling.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">table-components
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">table-components.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">table-components.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">table-components.component.ts</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">data-tables
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">basic-data-table
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">basic-data-table.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">basic-data-table.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">basic-data-table.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">column-filter
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">column-filter.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">column-filter.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">column-filter.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">fullscreen
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">fullscreen.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">fullscreen.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">fullscreen.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">inline-edit
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">inline-edit.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">inline-edit.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">inline-edit.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">paging
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">paging.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">paging.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">paging.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">selection
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">selection.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">selection.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">selection.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">sort
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sort.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sort.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sort.component.ts</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">table-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">table.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">ui-kits
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">avatars
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">avatars.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">avatars.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">avatars.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">breadcrumb
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">breadcrumb.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">breadcrumb.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">breadcrumb.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">grid
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">grid.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">grid.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">grid.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">helper-classes
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">helper-classes.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">helper-classes.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">helper-classes.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">list
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">list.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">list.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">list.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">ribbions
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ribbions.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ribbions.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ribbions.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">shadow
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">shadow.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">shadow.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">shadow.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">spinners
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">spinners.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">spinners.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">spinners.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">state-color
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">state-color.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">state-color.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">state-color.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">steps
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">steps.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">steps.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">steps.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">tag-n-pills
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tag-n-pills.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tag-n-pills.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tag-n-pills.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">typography
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">typography.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">typography.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">typography.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ui-kits-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ui-kits.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">widgets
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">chart
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chart.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chart.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chart.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">general
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">general.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">general.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">general.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">widgets-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">widgets.module.ts</li>
	                                      </ul>
	                                    </li>
	                                  </ul>
	                                </li>
	                                <li data-jstree="{&quot;opened&quot;:false}">pages
	                                  <ul>
	                                    <li data-jstree="{&quot;opened&quot;:false}">coming-soon
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">page-with-image
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">page-with-image.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">page-with-image.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">page-with-image.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">page-with-video
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">page-with-video.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">page-with-video.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">page-with-video.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">simple
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">simple.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">simple.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">simple.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">coming-soon-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">coming-soon.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">error
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">error400
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error400.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error400.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error400.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">error401
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error401.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error401.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error401.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">error403
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error403.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error403.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error403.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">error404
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error404.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error404.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error404.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">error500
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error500.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error500.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error500.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">error503
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error503.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error503.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error503.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error-routing.module.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">error.module.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">maintenance
	                                      <ul>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">maintenance-routing.module.ts</li>
	                                        <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">maintenance.component.html</li>
	                                        <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">maintenance.component.scss</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">maintenance.component.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">maintenance.module.ts</li>
	                                      </ul>
	                                    </li>
	                                  </ul>
	                                </li>
	                                <li data-jstree="{&quot;opened&quot;:false}">shared
	                                  <ul>
	                                    <li data-jstree="{&quot;opened&quot;:false}">components
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">bookmark
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmark.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmark.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmark.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">breadcrumb
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">breadcrumb.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">breadcrumb.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">breadcrumb.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">customizer
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">customizer.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">customizer.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">customizer.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">feather-icons
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">feather-icons.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">feather-icons.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">feather-icons.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">footer
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">footer.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">footer.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">footer.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">header
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">header.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">header.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">header.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">layout
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">content
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">content.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">content.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">content.component.ts</li>
	                                              </ul>
	                                            </li>
	                                            <li data-jstree="{&quot;opened&quot;:false}">full
	                                              <ul>
	                                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">full.component.html</li>
	                                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">full.component.scss</li>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">full.component.ts</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">loader
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">loader.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">loader.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">loader.component.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">sidebar
	                                          <ul>
	                                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sidebar.component.html</li>
	                                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sidebar.component.scss</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sidebar.component.ts</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">data
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">bookmarks
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmarks.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">chart
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">apex.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartist.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chartjs.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">config.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">google-chart.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knob.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ngx-chart.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">chat
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chat.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">dashboard
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">default.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ecommerce.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">ecommerce
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">products.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">email
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">email.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">faq
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">accordion.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">job-search
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">job-search.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">knowledge-base
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">knowledge-base.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">router-animation
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">router-animation.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">sticky
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sticky.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">tables
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">company.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">employee.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">product-list.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">server.ts</li>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">support-ticket.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">tasks
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">task.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">todo
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">todo.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">widget
	                                          <ul>
	                                            <li className="ts-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chart.ts</li>
	                                          </ul>
	                                        </li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">directives
	                                      <ul>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">disable-key-press.directive.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">only-alphabets.directive.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">only-numbers.directive.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">show-options.directive.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">guard
	                                      <ul>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">admin.guard.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">SecureInnerPagesGuard.guard.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">model
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">model
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">cart.model.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">content.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">invoice.model.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">product.model.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chat.model.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">email.model.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">routes
	                                      <ul>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">full.routes.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">routes.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">services
	                                      <ul>
	                                        <li data-jstree="{&quot;opened&quot;:false}">advance
	                                          <ul>
	                                            <li data-jstree="{&quot;opened&quot;:false}">tree-view
	                                              <ul>
	                                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tree-view.service.ts</li>
	                                              </ul>
	                                            </li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">e-commerce
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">cart.service.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">invoice.service.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">model.service.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">order-by.pipe.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">products.service.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">wish-list.service.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">firebase
	                                          <ul>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">auth.service.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">contact.service.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">edit-user.resolver.ts</li>
	                                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">todo.service.ts</li>
	                                          </ul>
	                                        </li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">bookmarks.service.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">chat.service.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">layout.service.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">nav.service.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tasks.service.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">validators
	                                      <ul>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ageValidator.ts</li>
	                                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">passwordMatch.ts</li>
	                                      </ul>
	                                    </li>
	                                    <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">shared.module.ts</li>
	                                  </ul>
	                                </li>
	                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">app-routing.module.ts</li>
	                                <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">app.component.html</li>
	                                <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">app.component.scss</li>
	                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">app.component.ts</li>
	                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">app.module.ts</li>
	                              </ul>
	                            </li>
	                            <li data-jstree="{&quot;opened&quot;:false}">assets
	                              <ul>
	                                <li data-jstree="{&quot;opened&quot;:false}">audio
	                                  <ul>
	                                    <li className="music-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">horse.ogg</li>
	                                  </ul>
	                                </li>
	                                <li data-jstree="{&quot;opened&quot;:false}">data
	                                  <ul>
	                                    <li data-jstree="{&quot;opened&quot;:false}">company
	                                      <ul>
	                                        <li className="json-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">company.json</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">ecommerce
	                                      <ul>
	                                        <li className="json-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">products.json</li>
	                                      </ul>
	                                    </li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">map
	                                      <ul>
	                                        <li className="json-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">polygon.json</li>
	                                      </ul>
	                                    </li>
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
	                                <li data-jstree="{&quot;opened&quot;:false}">i18n</li>
	                                <li data-jstree="{&quot;opened&quot;:false}">images
	                                  <ul>
	                                    <li data-jstree="{&quot;opened&quot;:false}">appointment</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">avtar</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">banner</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">big-lightgallry</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">blog</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">checkout</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">dashboard</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">dashboard-2</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">ecommerce</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">email</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">faq</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">job-search</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">lightgallry</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">logo</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">masonrys</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">notification</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">other-images</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">product</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">sidebar-image</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">social-app</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">user</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">user-card</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">welcome</li>
	                                    <li data-jstree="{&quot;opened&quot;:false}">sidebar-patterns</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">c1.jpg</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">c2.jpg</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">c3.jpg</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">color-picker.png</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">favicon.png</li>
	                                    <li className="svg-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">hour.svg</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">icon-empty-cart.png</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">marker-icon.png</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">marker-shadow.png</li>
	                                    <li className="svg-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">min.svg</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">search-not-found.png</li>
	                                    <li className="svg-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">sec.svg</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">settings.png</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">smiley.png</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">start-conversion.jpg</li>
	                                    <li className="img-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">User.jpg</li>
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
	                                        <li className="scss-icon">_dropzone.scss</li>
	                                        <li className="scss-icon">_form-builder.scss</li>
	                                        <li className="scss-icon">_form-input.scss</li>
	                                        <li className="scss-icon">_form-wizard.scss</li>
	                                        <li className="scss-icon">_forms.scss</li>
	                                        <li className="scss-icon">_form_builder-2.scss</li>
	                                        <li className="scss-icon">_general.scss</li>
	                                        <li className="scss-icon">_icons.scss</li>
	                                        <li className="scss-icon">_list.scss</li>
	                                        <li className="scss-icon">_loader.scss</li>
	                                        <li className="scss-icon">_popover.scss</li>
	                                        <li className="scss-icon">_print.scss</li>
	                                        <li className="scss-icon">_radio.scss</li>
	                                        <li className="scss-icon">_ribbon.scss</li>
	                                        <li className="scss-icon">_switch.scss</li>
	                                        <li className="scss-icon">_tab.scss</li>
	                                        <li className="scss-icon">_table.scss</li>
	                                        <li className="scss-icon">_touchspin.scss</li>
	                                        <li className="scss-icon">_tour.scss</li>
	                                        <li className="scss-icon">_tree.scss</li>
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
	                                        <li className="scss-icon">_internationalization.scss</li>
	                                        <li className="scss-icon">_job-search.scss</li>
	                                        <li className="scss-icon">_jsgrid.scss</li>
	                                        <li className="scss-icon">_kanban.scss</li>
	                                        <li className="scss-icon">_knowledgebase.scss</li>
	                                        <li className="scss-icon">_landing.scss</li>
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
	                                        <li className="scss-icon">_document.scss</li>
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
	                                        <li className="scss-icon">image-cropper.scss</li>
	                                        <li className="scss-icon">ionic-icon.scss</li>
	                                        <li className="scss-icon">page-builder.scss</li>
	                                        <li className="scss-icon">scrollable.scss</li>
	                                        <li className="scss-icon">select2.scss</li>
	                                        <li className="scss-icon">simple-line-icon.scss</li>
	                                        <li className="scss-icon">simple-mde.scss</li>
	                                        <li className="scss-icon">sticky.scss</li>
	                                        <li className="scss-icon">summernote.scss</li>
	                                        <li className="scss-icon">svg-icon.scss</li>
	                                        <li className="scss-icon">sweetalert2.scss</li>
	                                        <li className="scss-icon">themify.scss</li>
	                                        <li className="scss-icon">timepicker.scss</li>
	                                        <li className="scss-icon">todo.scss</li>
	                                        <li className="scss-icon">tour.scss</li>
	                                        <li className="scss-icon">tree.scss</li>
	                                        <li className="scss-icon">typicon-icon.scss</li>
	                                        <li className="scss-icon">vector-map.scss</li>
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
	                                        <li data-jstree="{&quot;opened&quot;:false}">image-cropper
	                                          <ul>
	                                            <li className="scss-icon"> _cropper-custom.scss</li>
	                                            <li className="scss-icon"> _cropper-main.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">ionic-icon
	                                          <ul>
	                                            <li className="scss-icon"> _ionicons-font.scss</li>
	                                            <li className="scss-icon"> _ionicons-icons.scss</li>
	                                            <li className="scss-icon"> _ionicons-variables.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">page-builder
	                                          <ul>
	                                            <li className="scss-icon"> _page-builder.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">scrollable
	                                          <ul>
	                                            <li className="scss-icon"> _scrollable.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li>select2</li>
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
	                                        <li data-jstree="{&quot;opened&quot;:false}">summernote
	                                          <ul>
	                                            <li className="scss-icon">  _elements.scss</li>
	                                            <li className="scss-icon">  _fonts.scss</li>
	                                            <li className="scss-icon">  _summernote-bs4.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">svg-icon
	                                          <ul>
	                                            <li className="scss-icon">  _svg-icon.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">sweetalert2-master
	                                          <ul>
	                                            <li className="scss-icon">  _animations.scss</li>
	                                            <li className="scss-icon">  _mixins.scss</li>
	                                            <li className="scss-icon">  _toasts.scss</li>
	                                            <li className="scss-icon">  _variables.scss</li>
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
	                                        <li data-jstree="{&quot;opened&quot;:false}">time-picker
	                                          <ul>
	                                            <li className="scss-icon">  _timepicker.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">todo
	                                          <ul>
	                                            <li className="scss-icon">  _todo.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">tour
	                                          <ul>
	                                            <li className="scss-icon"> _tour.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">tree
	                                          <ul>
	                                            <li className="scss-icon"> _tree-default.scss</li>
	                                            <li className="scss-icon"> _tree.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">typicon-icon
	                                          <ul>
	                                            <li className="scss-icon"> _typicon-icon.scss</li>
	                                          </ul>
	                                        </li>
	                                        <li data-jstree="{&quot;opened&quot;:false}">vector-map
	                                          <ul>
	                                            <li className="scss-icon"> _vector-map.scss</li>
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
	                                    <li className="video-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">auth-bg.mp4</li>
	                                  </ul>
	                                </li>
	                              </ul>
	                            </li>
	                            <li data-jstree="{&quot;opened&quot;:false}">environments
	                              <ul>
	                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">environment.prod.ts</li>
	                                <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">environment.ts</li>
	                              </ul>
	                            </li>
	                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">favicon.ico</li>
	                            <li className="html-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">index.html</li>
	                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">main.ts</li>
	                            <li className="scss-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">styles.scss</li>
	                            <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">test.ts</li>
	                          </ul>
	                        </li>
	                        <li className="angular-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">.browserslistrc</li>
	                        <li className="editorconfig-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">.editorconfig</li>
	                        <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">.gitignore</li>
	                        <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">angular.json</li>
	                        <li className="js-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">karma.conf.js</li>
	                        <li className="js-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">ngcc.config.js</li>
	                        <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">package.json</li>
	                        <li className="readme-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">README.md</li>
	                        <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tsconfig.app.json</li>
	                        <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tsconfig.base.json</li>
	                        <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tsconfig.json</li>
	                        <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tsconfig.spec.json</li>
	                        <li className="nodejs-icon" data-jstree="{&quot;type&quot;:&quot;file&quot;}">tslint.json</li>
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
export default AngularTree;