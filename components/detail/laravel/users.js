import {useState} from 'react';

const Users = () => {
	const [active, setActive] = useState('users-profile');
	return(
		<div className="">
		    <h5 className="my-4">Users</h5>
		    <ul className="nav nav-tabs" id="myTab7" role="tablist">
		      <li className="nav-item"><a className={`nav-link ${(active == 'users-profile') ? 'active' : ''}`} data-bs-toggle="tab" url="#users-profile" role="tab" aria-selected="true" onClick={()=>setActive('users-profile')} data-original-title="" title="">Users Profile</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'users-card') ? 'active' : ''}`} data-bs-toggle="tab" url="#users-card" role="tab" aria-selected="true" onClick={()=>setActive('users-card')} data-original-title="" title="">Users Card</a></li>
		    </ul>
		    <div className="tab-content" id="myTabContent7">
		      <div className={`tab-pane fade ${(active=='users-profile')? 'show active' : ''}`} id="users-profile" role="tabpanel">
		        <h6 class="pt-4">
                  You don&apos;t need to add any additional css or js.
                  The css and js which describe in a html page is default. Use the code of it to use it
                </h6>
		      </div>
		      <div className={`tab-pane fade ${(active=='users-card')? 'show active' : ''}`} id="users-card" role="tabpanel">
		        <h6 class="pt-4">
                  You don&apos;t need to add any additional css or js.
	              The css and js which describe in a html page is default. Use the code of it to use it
                </h6>
		      </div>
		    </div>
		</div>
	)
}
export default Users;