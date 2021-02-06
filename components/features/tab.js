import {useState, useEffect} from 'react';
const Tab = (props) => {
  const [isActive, setIsActive] = useState(props.selected);
  
  useEffect(()=>{
    if(props.selected == 'false' && props.tabstatus == props.title) var new_active = 'active';
    else var new_active = ''
    setIsActive(new_active);
  },[props])

  const setActive = () => {
    if(isActive == 'active') var new_active = '';
    else var new_active = 'active'
    setIsActive(new_active);
    props.onClick();
  }

	return(
		<li className="nav-item">
      <a className={`nav-link d-flex ${isActive}`} id={props.id} data-bs-toggle="pill" data-bs-target={props.url} role="tab" aria-controls="pills-home" aria-selected={props.selected} onClick={()=>setActive()}> <img src={props.image} alt={props.title} />
        <div className="text-start">
          <h5 className="mb-0">{props.title}</h5>
          <p className="mb-0">{props.subtitle}</p>
        </div>
      </a>
    </li>
	)
}
export default Tab;