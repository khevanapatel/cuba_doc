import {useState} from 'react';

const Chat = () => {
	const [active, setActive] = useState('chat-app');
	
	return(
		<div className="card-body">
		    <hr className="hr" />
		    <h5 className="my-4">Chat</h5>
		    <ul className="nav nav-tabs" id="myTab7" role="tablist">
		      <li className="nav-item"><a className={`nav-link ${(active == 'chat-app') ? 'active' : ''}`} data-bs-toggle="tab" url="#chat-app" role="tab" aria-selected="true" onClick={()=>setActive('chat-app')} data-original-title="" title="">Chat App</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'video-chat') ? 'active' : ''}`} data-bs-toggle="tab" url="#video-chat" role="tab" aria-selected="true" onClick={()=>setActive('video-chat')} data-original-title="" title="">Video Chat</a></li>
		    </ul>
		    <div className="tab-content" id="myTabContent7">
		      <div className={`tab-pane fade ${(active=='chat-app')? 'show active' : ''}`} id="chat-app" role="tabpanel">
		          <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
		      </div>
		      <div className={`tab-pane fade ${(active=='video-chat')? 'show active' : ''}`} id="video-chat" role="tabpanel">
		       	 <h6 class="pt-4 pb-2">for this you don&apos;t need to add any additional css or js</h6>
		      </div>
		    </div>
		</div>
	)
}
export default Chat;