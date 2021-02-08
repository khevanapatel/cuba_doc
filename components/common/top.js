const Top = () => {
	var showScroll = true;
	return(
		<div className="tap-top" style={{height: 40, display: showScroll ? 'flex' : 'none'}}><i data-feather="chevrons-up"></i>
	      <p>Top</p>
	    </div>
	)
}

export default Top;