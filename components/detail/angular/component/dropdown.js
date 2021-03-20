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
        text={`\n <div ngbDropdown class="d-inline-block" placement="bottom">\n   <button class="btn btn-outline-primary" id="dropdownBasic1" ngbDropdownToggle >Dropdown Button</button>\n   <div ngbDropdownMenu aria-labelledby="dropdownBasic1">\n     <button class="dropdown-item">Action</button>\n     <button class="dropdown-item">Another Action</button>\n     <button class="dropdown-item">Something Else Here</button>\n   </div>\n </div>`}
      />
    </div>
	)
}
export default DropDown;

