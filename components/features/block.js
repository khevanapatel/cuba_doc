const Block = (props) => {
	return(
		<li className="box">
          <div> <img src={props.image} alt="" /></div>
          <h6 className="mb-0 mt-3">{props.title}</h6>
        </li>
	)
}
export default Block;