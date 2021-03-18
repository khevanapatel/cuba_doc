import {useState} from 'react';

import CopyToClipboard from '../../common/copy-to-clipboard';

const Table = () => {
	const [active, setActive] = useState('reactstrap-tables');
	return(
		<div className="card-body">
            <hr/>
            <h5>Tables</h5>
            <ul className="nav nav-tabs" id="myTab8" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active=='reactstrap-tables') ? 'active' : ''}`} data-bs-toggle="tab" url="#reactstrap-tables" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('reactstrap-tables')}>Reactstrap Table</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='smart-tables') ? 'active' : ''}`} data-bs-toggle="tab" url="#smart-tables" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('smart-tables')}>Smart Table</a></li>
            </ul>
            <div className="tab-content" id="myTabContent8">
              <div className={`tab-pane fade ${(active=='reactstrap-tables')? 'active show' : ''}`} id="reactstrap-tables" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	text={`npm i reactstrap`}
                  	id="reactstrapcode"
                  />
                  <CopyToClipboard
                  	text={`\nimport { Table } from 'reactstrap';\n\nconst Example = (props) => {\n  return (\n    <Table>\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Username</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <th scope="row">1</th>\n          <td>Mark</td>\n          <td>Otto</td>\n          <td>@mdo</td>\n        </tr>\n        <tr>\n          <th scope="row">2</th>\n          <td>Jacob</td>\n          <td>Thornton</td>\n          <td>@fat</td>\n        </tr>\n        <tr>\n          <th scope="row">3</th>\n          <td>Larry</td>\n          <td>the Bird</td>\n          <td>@twitter</td>\n        </tr>\n      </tbody>\n    </Table>\n  );\n}`}
                  	id="reactstrapcode1"
                  />
                  <a className="btn btn-solid" href="https://reactstrap.github.io/components/tables/" target="_blank"> Supplemental  </a>
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='smart-tables')? 'active show' : ''}`} id="smart-tables" role="tabpanel">
                <p className="pt-4"><b>Installing and usage</b></p>
                <div className="mb-4">
                  <CopyToClipboard
                  	text={`npm i react-data-table-component`}
                  	id="smartcode"
                  />
                  <CopyToClipboard
                  	text={`\nimport ReactTable from 'react-data-table-component';\nconst Example = () => {\n  const Data = [\n    {id:"1",name: "Product Menu",status: <i className="fa fa-circle font-success f-12" />,creat_on:"2018-04-18T00:00:00"},\n    {id:"2",name: "Category Menu",status: <i className="fa fa-circle font-warning f-12" />,creat_on:"2018-04-18T00:00:00"}\n  ]\n  const Columns = [\n        {name: 'ID',selector: 'id',sortable: true,center:true,},\n        {name: 'Name',selector: 'name',sortable: true,center:true,},\n        {name: 'Status',selector: 'status',sortable: true,center:true},\n        {name: 'Creat_on',selector: 'creat_on',sortable: true,center:true},\n    ];\n    return (\n      <Fragment>\n        <ReactTable\n            columns={Columns}\n            data={Data}\n            noHeader\n            pagination\n        />\n      </Fragment>\n    )\n}`}
                  	id="smartcode"
                  />
                  <a className="btn btn-solid" href="https://www.npmjs.com/package/react-data-table-component" target="_blank"> Supplemental</a>
                </div>
              </div>
            </div>
        </div>
	)
}
export default Table;