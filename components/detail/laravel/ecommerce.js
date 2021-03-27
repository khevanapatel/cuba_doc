import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Ecommerce = () => {
	const [active, setActive] = useState('product');
	
	return(
		<div className="card-body">
		    <hr className="hr" />
		    <h5 className="my-4">Ecommerce</h5>
		    <ul className="nav nav-tabs" id="myTab7" role="tablist">
		      <li className="nav-item"><a className={`nav-link ${(active == 'product') ? 'active' : ''}`} data-bs-toggle="tab" url="#product" role="tab" aria-selected="true" onClick={()=>setActive('product')} data-original-title="" title="">Product</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'product-page') ? 'active' : ''}`} data-bs-toggle="tab" url="#product-page" role="tab" aria-selected="true" onClick={()=>setActive('product-page')} data-original-title="" title="">Product page</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'payment-product') ? 'active' : ''}`} data-bs-toggle="tab" url="#payment-product" role="tab" aria-selected="true" onClick={()=>setActive('payment-product')} data-original-title="" title="">Product List</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'payment-details') ? 'active' : ''}`} data-bs-toggle="tab" url="#payment-details" role="tab" aria-selected="true" onClick={()=>setActive('payment-details')} data-original-title="" title="">Payment Details</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'ordre-history') ? 'active' : ''}`} data-bs-toggle="tab" url="#ordre-history" role="tab" aria-selected="true" onClick={()=>setActive('ordre-history')} data-original-title="" title="">Order History</a></li>
		      <li className="nav-item"><a className={`nav-link ${(active == 'invoice-template') ? 'active' : ''}`} data-bs-toggle="tab" url="#invoice-template" role="tab" aria-selected="true" onClick={()=>setActive('invoice-template')} data-original-title="" title="">Invoice template</a></li>
		    </ul>
		    <div className="tab-content" id="myTabContent7">
		      <div className={`tab-pane fade ${(active=='product')? 'show active' : ''}`} id="product" role="tabpanel">
		        <h6 class="pt-4 pb-2">There is no need to add any additional css or js</h6>
		      </div>
		      <div className={`tab-pane fade ${(active=='product-page')? 'show active' : ''}`} id="product-page" role="tabpanel">
		        <h6 class="pt-4 pb-2">There is no need to add any additional css or js</h6>
		      </div>
		      <div className={`tab-pane fade ${(active=='payment-product')? 'show active' : ''}`} id="payment-product" role="tabpanel">
		        <h6 class="pt-4 pb-2">There is no need to add any additional css or js</h6>
		      </div>
		      <div className={`tab-pane fade ${(active=='payment-details')? 'show active' : ''}`} id="payment-details" role="tabpanel">
		        <h6 class="pt-4 pb-2">There is no need to add any additional css or js</h6>
		      </div>
		      <div className={`tab-pane fade ${(active=='ordre-history')? 'show active' : ''}`} id="ordre-history" role="tabpanel">
		        <h6 class="pt-4 pb-2">There is no need to add any additional css or js</h6>
		      </div>
		      <div className={`tab-pane fade ${(active=='invoice-template')? 'show active' : ''}`} id="invoice-template" role="tabpanel">
		        <h6 class="pt-4 pb-2">To use java script for print you have to add the following script tag</h6>
		        <div className="mb-4">
	          		<CopyToClipboard 
			          	id="printcode"
			          	text={`<!--print js-->\n<script src="../assets/js/print.js"></script>`}
			          />
	            </div>
		      </div>
		    </div>
		</div>
	)
}
export default Ecommerce;