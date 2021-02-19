import '../public/assets/scss/style.scss'
import '../public/assets/css/style.css'
import '../public/assets/css/fontawesome.css'

import { HeaderContextProvider } from '../helpers/HeaderContext';

function MyApp({ Component, pageProps }) {
  return(
  	<>
  		<HeaderContextProvider>
  			<Component {...pageProps} />
  		</HeaderContextProvider>
  	</>
  	)
}

export default MyApp
 