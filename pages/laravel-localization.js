import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const LaravelLocalization = () => {
	const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 

    const headerContext = useContext(HeaderContext);
    const HeaderContextObj = headerContext.HeaderContext;

    useEffect(()=>{
       setFontSizeLocal('font-'+HeaderContextObj.fontSize);
    },[HeaderContextObj])

    const brackets = "{{ }}";
	return(
		<Layout>
			<div className={`col-xxl-10 col-xl-9 content component-col ${fontSizeLocal}`}>
				<div id="section-5">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="main-title">Localization</h4>
                      <hr/>
                      <div id="section51">
                        <h5 className="mt-4"># Introduction</h5>
                        <CopyToClipboard
                        	id="phpcode"
                        	text={`\n /resources\n   /lang\n       /en\n           lang.php\n       /es\n           lang.php`}
                        />
                        
                        <p>All language files return an array of keyed strings. For example:</p>
                        <CopyToClipboard
                        	id="phpcode1"
                        	text={`\n <?php\n   return[\n       'welcome' => 'Welcome to our application',\n   ];\n ?>`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card" id="section52">
                    <div className="card-header">
                      <h5 className="mb-0"># Configuring The Locale</h5>
                    </div>
                    <div className="card-body">
                      <p>The default language for your application is stored in the <b>config/app.php </b>configuration file. You may modify this value to suit the needs of your application. You may also change the active language at runtime using the setLocale method on the App facade:</p>
                      <CopyToClipboard
                    	id="phpcode2"
                    	text={`\n /*Language Change*/\n Route::get('lang/{locale}', function ($locale) {\n     if (! in_array($locale, ['en', 'de', 'es','fr','pt', 'cn', 'ae'])) {\n         abort(400);\n     }   \n     Session()->put('locale', $locale);\n     Session::get('locale');\n     return redirect()->back();\n })->name('lang');`}
                      />
                      <p>You may configure a "fallback language", which will be used when the active language does not contain a given translation string. Like the default language, the fallback language is also configured in the config/app.php configuration file: <code>'fallback_locale' => 'en',</code></p>
                      <p>Next up, we are going to create a middleware for dynamically changing the language.</p>
                      <p>php artisan make:middleware Localization</p>
                      <p><b>App\Http\Middleware\Localization.php</b></p>
                        <CopyToClipboard
                        	id="phpcode3"
                        	text={`\n namespace App\Http\Middleware; \n use Closure;\n use Session;\n  \n use Illuminate\Http\Request;\n use Illuminate\Foundation\Application;\n  \n class Localization\n {\n     public function __construct(Application $app, Request $request) {\n         $this->app = $app;\n         $this->request = $request;\n     }\n  \n     public function handle($request, Closure $next)\n     {\n         $this->app->setLocale(session()->get('locale') ?? 'en');\n         return $next($request);\n     }\n }`}
                        />
                    </div>
                  </div>

                  <div className="card" id="section53">
                    <div className="card-header">
                      <h5 className="mb-0"># Retrieving Translation Strings </h5>
                    </div>
                    <div className="card-body">
                      <p>You may retrieve lines from language files using the __ helper function. The __ method accepts the file and key of the translation string as its first argument. For example, let's retrieve the welcome translation string from the <b>resources/lang/lang.php </b>language file:</p>
                      <p>welcome.blade.php</p>
                        <CopyToClipboard
                        	id="phpcode4"
                        	text={`\n {{ __('lang.welcome') }}\n {{ __('I love programming.') }}`}
                        />
                      <p>If you are using the Blade templating engine, you may use the {brackets} syntax to echo the translation string or use the @lang directive:</p>
                      <CopyToClipboard
                        	id="phpcode5"
                        	text={`\n {{ __('lang.welcome') }}\n @lang('lang.welcome')\n {{ trans('lang.welcome') }}`}
                        />
                      <p>If the specified translation string does not exist, the __ function will return the translation string key. So, using the example above, the __ function would return lang.welcome if the translation string does not exist.</p>
                      <p>Note: The @lang directive does not escape any output. You are fully responsible for escaping your own output when using this directive.</p>
                    </div>
                  </div>

                </div>
			</div>
			<div className="col-xxl-2 col-xl-3 right-column">
                <div className="page-sidebar custom-scrollbar" id="myScrollspy">
                  <div className="page-right-sidebar">
                    <ul className="nav flex-column custom-scrollbar">
                      <li className="nav-item"><a className="nav-link quick-links active" href="#section-5" data-original-title="" title="">
                          <h5 className="mb-0">Localization</h5></a>
                        <ul className="nav flex-column p-l-10 m-t-5 set-padding">
                          <li className="nav-item"><a className="nav-link" href="#section51" data-original-title="" title=""><i className="fa fa-angle-right"></i> Introduction</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section52" data-original-title="" title=""><i className="fa fa-angle-right"></i>Configuring</a></li>
                          <li className="nav-item"><a className="nav-link" href="#section53" data-original-title="" title=""><i className="fa fa-angle-right"></i>Retrieving</a></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
		</Layout>
	)
}
export default LaravelLocalization;
