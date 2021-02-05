const Tab = (props) => {
	return(
		<li className="nav-item">
           <a className={`nav-link d-flex ${props.selected}`} id={props.id} data-bs-toggle="pill" href={props.url} role="tab" aria-controls="pills-home" aria-selected="true"> <img src={props.image} alt={props.title} />
            <div className="text-start">
              <h5 className="mb-0">{props.title}</h5>
              <p className="mb-0">{props.subtitle}</p>
            </div>
           </a>
        </li>
	)
}
export default Tab;