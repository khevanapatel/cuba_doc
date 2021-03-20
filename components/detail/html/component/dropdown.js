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
        text={` \n <div class="dropdown-basic">\n   <div class="dropdown">\n     <button type="button" class="dropbtn btn-primary">Dropdown Button <span><i class="icofont icofont-arrow-down"></i></span></button>\n     <div class="dropdown-content">\n       <a href="#">Action</a>\n       <a href="#">Another Action</a>\n       <a href="#">Something Else Here</a>\n     </div>\n   </div>\n </div>`}
      />
    </div>
	)
}
export default DropDown;

