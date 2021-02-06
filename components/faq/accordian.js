import {useState , useEffect} from 'react';

const Accordian = (props) => {
	const [expanded, setExpanded] = useState(props.expanded);
	const [buttonClass, setButtonClass] = useState('collapsed');

	useEffect(()=>{
		if(props.expanded == "false" && props.cardStatus == props.title) var new_expanded = "true";
		else var new_expanded = "false";
		setExpanded(new_expanded);
	},[props])

	const toggleContent = () => {
		if(expanded == "false" && props.cardStatus == props.title) var new_expanded = "true";
		else var new_expanded = "false";
		setExpanded(new_expanded);
		props.onClick()
	}
	
	return(
		<div className="card doc_accordion">
	        <div className="card-header" id={props.id}>
	          <h5 className="mb-0">
	            <button className={`btn btn-link ${ (expanded == "false")  ? 'collapsed' : ''}`} data-bs-toggle="collapse" data-bs-target={`#${props.id}`} aria-expanded="false" aria-controls="collapseOne" onClick={()=>toggleContent()}>{props.title}<i className="fa fa-plus"></i><i className="fa fa-minus"></i></button>
	          </h5>
	        </div>
	        <div className={`collapse ${ (expanded == "true")  ? 'show' : ''}`} id={props.id} aria-labelledby={props.id} data-bs-parent="#accordion">
	          <div className="card-body toggle_body">{props.content}</div>
	        </div>
	    </div>
	)
}

export default Accordian;