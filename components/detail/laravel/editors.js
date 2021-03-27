import {useState} from 'react';
import CopyToClipboard from '../../common/copy-to-clipboard';

const Editors = () => {
  const [active, setActive] = useState('summer-note');

  return(
    <div className="card-body">
            <hr/>
            <h5>Editors</h5>
            <ul className="nav nav-tabs" id="myTab13" role="tablist">
              <li className="nav-item"><a className={`nav-link ${(active=='summer-note')? 'active' : ''}`} data-bs-toggle="tab" href="#summer-note" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('summer-note')}>Summer note</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='ckeditor')? 'active' : ''}`} data-bs-toggle="tab" href="#ckeditor" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('ckeditor')}>Ckeditor</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='simple-mde')? 'active' : ''}`} data-bs-toggle="tab" href="#simple-mde" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('simple-mde')}>Simple Mde</a></li>
              <li className="nav-item"><a className={`nav-link ${(active=='ace-code')? 'active' : ''}`} data-bs-toggle="tab" href="#ace-code" role="tab" aria-selected="true" data-original-title="" title="" onClick={()=>setActive('ace-code')}>Ace Code</a></li>
            </ul>
            <div className="tab-content" id="myTabContent13">
              <div className={`tab-pane fade ${(active=='summer-note')? 'show active' : ''}`} id="summer-note" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="summercode"
                    text={`\n <!-- Summernote css -->\n <link rel="stylesheet" href="../assets/css/summernote.css">\n <!--Summer-note js-->\n <script src="../assets/js/summernote/summernote.js"></script>\n <script src="../assets/js/summernote/summernote.custom.js"></script>`}
                  />
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='ckeditor')? 'show active' : ''}`} id="ckeditor" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="ckcode"
                    text={`\n <!--ckeditor js-->\n <script src="../assets/js/ckeditor/ckeditor.js"></script>\n <script src="../assets/js/ckeditor/styles.js"></script>\n <script src="../assets/js/ckeditor/adapters/jquery.js"></script>\n <script src="../assets/js/ckeditor/ckeditor.custom.js"></script>`}
                  />
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='simple-mde')? 'show active' : ''}`} id="simple-mde" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="mdecode"
                    text={`\n <!-- Simple-MDE css -->\n <link rel="stylesheet prefetch" href="../assets/css/simple-mde.css">\n <!-- Simple MDE editor jquery-->\n <script src="../assets/js/simple-mde/simplemde.min.js"></script>\n <script src="../assets/js/simple-mde/simplemde.custom.js"></script>`}
                  />
                </div>
              </div>
              <div className={`tab-pane fade ${(active=='ace-code')? 'show active' : ''}`} id="ace-code" role="tabpanel">
                <h6 class="pt-4 pb-2">To use java script you have to add the following script tag</h6>
                <div className="mb-4">
                  <CopyToClipboard
                    id="acecode"
                    text={`\n <!--ace code editor js-->\n <script src="../assets/js/ace-editor/ace.js"></script>\n <script src="../assets/js/ace-editor/ace-custom.js"></script>`}
                  />
                </div>
              </div>
            </div>
        </div>
  )
}
export default Editors;