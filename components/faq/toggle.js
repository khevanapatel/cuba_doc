import {useState} from 'react';

const Toggle = (props) => {
	const [expanded, setExpanded] = useState(props.expanded);
	const toggleContent = () => {
		if(expanded == "true") var new_expanded = "false";
		else var new_expanded = "true";
		setExpanded(new_expanded);
	}
	return(
		<>
			<a className={`toggle_btn ${props.class} ${ (expanded == "false")  ? 'collapsed' : ''}`} onClick={()=>toggleContent() } data-bs-toggle="collapse" data-bs-target={`#${props.id}`} role="button" aria-expanded="true" aria-controls={props.id}>
				{props.title}
			</a>
			<div className={`collapse multi-collapse ${ (expanded == "true")  ? 'show' : ''}`} id={props.id}>
	          <div className="card card-body toggle_body">
				{props.content}
	          </div>
	        </div>
        </>
	)
}

export default Toggle;