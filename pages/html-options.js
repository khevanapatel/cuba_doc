import Layout from '../components/common/layout';

const HtmlOptions = () => {
	return(
		<Layout>
		  <div className="col-lg-9 option-main-sec content">
            <div className="card">
              <div className="card-body">
                <h4 className="main-title mb-0">Options</h4>
                <hr/>
                <h5>Layout</h5>
                <p>We have provided a bunch of page layouts and menu layouts that can be implemented with just a options change to body! Please refer the below table for corresponding classes.</p>
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Boxed Layout</td>
                        <td>Class: box-layout</td>
                      </tr>
                      <tr>
                        <td>RTL Layout</td>
                        <td>Class: rtl</td>
                      </tr>
                      <tr>
                        <td>Light Layout</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>Dark Sidebar</td>
                        <td>Class: dark-sidebar</td>
                      </tr>
                      <tr>
                        <td>Dark Layout</td>
                        <td>Class: dark-only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
		</Layout>
	)
}
export default HtmlOptions;