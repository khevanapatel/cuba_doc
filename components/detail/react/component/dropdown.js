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
            	text={`import {Dropdown,DropdownMenu,DropdownItem,Button} from 'reactstrap'; \nconst Dropdowns = (props) => { \n  return( \n    <Dropdown> \n      <Button color="primary" className="dropbtn"> \n      Dropdown Button \n      <span><i className="icofont icofont-arrow-down"></i></span> \n      </Button> \n      <DropdownMenu className="dropdown-content"> \n          <DropdownItem href="#">Action </DropdownItem> \n          <DropdownItem href="#">Another Action </DropdownItem> \n          <DropdownItem href="#">Something Else Here </DropdownItem> \n      </DropdownMenu> \n    </Dropdown> \n  ) \n}`}
            	id="dropdowncode" />
           
        </div>
	)
}
export default DropDown;

