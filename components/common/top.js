import FeatherIcon from 'feather-icons-react';

const Top = () => {
	var showScroll = true;

	return(
		<div className={`tap-top ${(showScroll)? 'd-block' : 'd-none'}`}>
			<FeatherIcon icon="chevrons-up" />
	      	<p>Top</p>
	    </div>
	)
}

export default Top;