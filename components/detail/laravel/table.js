import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Table = () => {
  const [active, setActive] = useState('bootstrap-tables');

	return(
		<div className="card-body">
        <hr/>
        <h5>Tables</h5>
        <ul className="nav nav-tabs" id="myTab8" role="tablist">
          <li className="nav-item"><a className={`nav-link ${(active=='bootstrap-tables')? 'active' : ''}`} data-bs-toggle="tab" url="#bootstrap-tables" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('bootstrap-tables')}>Bootstrap Table</a></li>
          <li className="nav-item"><a className={`nav-link ${(active=='data-tables')? 'active' : ''}`} data-bs-toggle="tab" url="#data-tables" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('data-tables')}>Data tables</a></li>
          <li className="nav-item"><a className={`nav-link ${(active=='extension-data-tables')? 'active' : ''}`} data-bs-toggle="tab" url="#extension-data-tables" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('extension-data-tables')}>Extension Data Tables</a></li>
        </ul>
        <div className="tab-content" id="myTabContent8">
          <div className={`tab-pane fade ${(active=='bootstrap-tables')? 'show active' : ''}`} id="bootstrap-tables" role="tabpanel">
            <div className="fluid-container py-4">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First Name</th>
                      <th scope="col">Last Name</th>
                      <th scope="col">Username</th>
                      <th scope="col">Role</th>
                      <th scope="col">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Alexander</td>
                      <td>Orton</td>
                      <td>@mdorton</td>
                      <td>Admin</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>John Deo</td>
                      <td>Deo</td>
                      <td>@johndeo</td>
                      <td>User</td>
                      <td>USA</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Randy Orton</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                      <td>admin</td>
                      <td>UK</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Randy Mark</td>
                      <td>Ottandy</td>
                      <td>@mdothe</td>
                      <td>user</td>
                      <td>AUS</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Ram Jacob</td>
                      <td>Thornton</td>
                      <td>@twitter</td>
                      <td>admin</td>
                      <td>IND</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <CopyToClipboard
              	id="tablecode"
              	text={`\n <div class="table-responsive">\n   <table class="table">\n     <thead>\n       <tr>\n         <th scope="col">#</th>\n         <th scope="col">First Name</th>\n         <th scope="col">Last Name</th>\n         <th scope="col">Username</th>\n         <th scope="col">Role</th>\n         <th scope="col">Country</th>\n       </tr>\n     </thead>\n     <tbody>\n       <tr>\n         <th scope="row">1</th>\n         <td>Alexander</td>\n         <td>Orton</td>\n         <td>@mdorton</td>\n         <td>Admin</td>\n         <td>USA</td>\n       </tr>\n       <tr>\n         <th scope="row">2</th>\n         <td>John Deo</td>\n         <td>Deo</td>\n         <td>@johndeo</td>\n         <td>User</td>\n         <td>USA</td>\n       </tr>\n       <tr>\n         <th scope="row">3</th>\n         <td>Randy Orton</td>\n         <td>the Bird</td>\n         <td>@twitter</td>\n         <td>admin</td>\n         <td>UK</td>\n       </tr>\n       <tr>\n         <th scope="row">4</th>\n         <td>Randy Mark</td>\n         <td>Ottandy</td>\n         <td>@mdothe</td>\n         <td>user</td>\n         <td>AUS</td>\n       </tr>\n       <tr>\n         <th scope="row">5</th>\n         <td>Ram Jacob</td>\n         <td>Thornton</td>\n         <td>@twitter</td>\n         <td>admin</td>\n         <td>IND</td>\n       </tr>\n     </tbody>\n   </table>\n </div>`}
              />
            </div>
          </div>
          <div className={`tab-pane fade ${(active=='data-tables')? 'show active' : ''}`} id="data-tables" role="tabpanel">
            <h6 className="pt-4 pb-2">
              To use java script you have to add the following script tag
            </h6>
            <div className="mb-4">
              <CopyToClipboard
              	id="datatablecode"
              	text={`\n <script src="../assets/datatable/datatables/jquery.dataTables.min.js" ></script>\n <script src="../assets/datatable/datatable/datatables/datatable.custom.js" ></script>`}
              />
            </div>
          </div>
          <div className={`tab-pane fade ${(active=='extension-data-tables')? 'show active' : ''}`} id="extension-data-tables" role="tabpanel">
            <h6 className="pt-4 pb-2">
              To use java script you have to add the following style and script tag
            </h6>
            <div className="mb-4">
              <CopyToClipboard
                id="jsgridcode"
                text={`\n <!--JSGrid css-->\n <link rel="stylesheet" type="text/css" href="../assets/css/datatables.css" />\n <link rel="stylesheet" type="text/css" href="../assets/css/datatable-extension.css">\n <!--Datatable extension js-->\n <script src="../assets/js/datatables/jquery.dataTables.min.js"></script>\n <script src="../assets/js/datatable-extension/dataTables.buttons.min.js"></script>\n <script src="../assets/js/datatable-extension/jszip.min.js"></script>\n <script src="../assets/js/datatable-extension/pdfmake.min.js"></script>\n <script src="../assets/js/datatable-extension/vfs_fonts.js"></script>\n <script src="../assets/js/datatable-extension/dataTables.autoFill.min.js"></script>\n <script src="../assets/js/datatable-extension/dataTables.select.min.js"></script>\n <script src="../assets/js/datatable-extension/buttons.print.min.js"></script>\n <script src="../assets/js/datatable-extension/buttons.html5.min.js"></script>\n <script src="../assets/js/datatable-extension/dataTables.bootstrap4.min.js"></script>\n <script src="../assets/js/datatable-extension/dataTables.responsive.min.js"></script>\n <script src="../assets/js/datatable-extension/responsive.bootstrap4.min.js"></script>\n <script src="../assets/js/datatable-extension/dataTables.keyTable.min.js"></script>\n <script src="../assets/js/datatable-extension/custom.js"></script>`}
              />
            </div>
          </div>
        </div>
    </div>
	)
}
export default Table;