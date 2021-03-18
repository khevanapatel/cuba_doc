const AppContent = (props) => {
	return(
	  <div className="card-body">
        <h5 className="text-primary">{props.title}</h5>
        <div className="row">
          <div className="col-xxl-7 col-xl-12 col-xxl-7 col-xl-12 col-md-7"><img className="img-border img-fluid" src={props.image} alt="img1" /></div>
          <div className="col-xxl-5 col-xl-12 col-md-5 appDesc">
            <p> {props.content} </p>
          </div>
        </div>
      </div>
	)
}
export default AppContent;