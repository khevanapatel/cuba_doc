import CopyToClipboard from '../../../common/copy-to-clipboard';

const DropDown = () => {
	return(
		<div className="fluid-container py-4">
      <div className="dropdown-basic">
        <div className="dropdown">
          <button className="dropbtn btn-primary" type="button" data-original-title="" title="">
            Dropdown
            Button<span><i className="icofont icofont-arrow-down"></i></span>
          </button>
          <div className="dropdown-content"><a href="#" data-original-title="" title="">Action</a><a href="#" data-original-title="" title="">Another Action</a><a href="#" data-original-title="" title="">Something Else Here</a></div>
        </div>
      </div>
      <CopyToClipboard
        id="dropdowncode"
        text={`\n <b-dropdown text="Dropdown Button" menu-class="dropdown-content" variant="primary" >\n   <b-dropdown-item>Action</b-dropdown-item>\n   <b-dropdown-item>Another Action</b-dropdown-item>\n   <b-dropdown-item>Something Else Here</b-dropdown-item>\n </b-dropdown>`}
      />
    </div>
	)
}
export default DropDown;

