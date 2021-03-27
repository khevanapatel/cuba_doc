import React, { useState, useEffect, useContext } from 'react';

import { HeaderContext } from '../helpers/HeaderContext';
import Layout from '../components/common/layout';
import CopyToClipboard from '../components/common/copy-to-clipboard';

const LaravelGettingStarted = () =>{
	const [fontSizeLocal, setFontSizeLocal] = useState('increase'); 

    const headerContext = useContext(HeaderContext);
    const HeaderContextObj = headerContext.HeaderContext;

    useEffect(()=>{
       setFontSizeLocal('font-'+HeaderContextObj.fontSize);
    },[HeaderContextObj])

	return(
		<Layout>
		  <div className={`col-lg-9 content  ${fontSizeLocal}`}>
	        <div className="row">
	          <div className="col-sm-12">
	            <h4 className="main-title">Getting Started</h4>
	          </div>
	          <div className="col-sm-12">
	            <div className="card getting-started-sec">
	              <div className="card-body p-0">
	                <div className="alert-box alert alert-primary">
	                  <p className="mt-0">Cuba Admin is a responsive HTML template that is based on the CSS framework Bootstrap 5 and it is built with Sass. Sass compiler makes it easier to code and customize. If you are unfamiliar with Bootstrap, visit their website and read through the documentation. All of Bootstrap components have been modified to fit the style of Cuba Admin and provide a consistent look throughout the template.</p>
	                  <hr/>
	                  <p>Before you start working with the template, we suggest you go through the pages that are bundled with the theme. Most of the template example pages contain quick tips on how to create or use a component which can be really helpful when you need to create something on the fly.</p>
	                </div>
	              </div>
	            </div>
	            <div className="card gulp-section">
	              <div className="card-header">
	                <h4 className="mb-0">How to start</h4>
	              </div>
	              <div className="card-body">
	                <h6 className="text-primary">Laravel Version (8.0)</h6>
	                <p>Build your Laravel Project with cuba , perfect choice for your laravel project. Cuba laravel project is included with 2 version laravel starter kit and laravel full version. Cuba laravel is build in <b>Laravel 8.0 </b>latest version with all features and assets. you can start project from scratch by laravel starter kit or rewamp your existing project with cuba laravel admin template</p>
	                <h6 className="text-primary pt-2">Server Requirement</h6>
	                <p>The Laravel framework has a few system requirements. All of these requirements are satisfied by the Laravel Homestead virtual machine, so it's highly recommended that you use Homestead as your local Laravel development environment.</p>
	                <p>However, if you are not using Homestead, you will need to make sure your server meets the following requirements:</p>
	                <ul>
	                  <li>PHP >= 7.3</li>
	                  <li>BCMath PHP Extension</li>
	                  <li>Ctype PHP Extension</li>
	                  <li>Fileinfo PHP extension</li>
	                  <li>JSON PHP Extension</li>
	                  <li>Mbstring PHP Extension</li>
	                  <li>OpenSSL PHP Extension</li>
	                  <li>PDO PHP Extension</li>
	                  <li>Tokenizer PHP Extension</li>
	                  <li>XML PHP Extension</li>
	                </ul>
	              </div>
	            </div>
	            <div className="card gulp-section">
	              <div className="card-header">
	                <h4 className="mb-0">Laravel Installation</h4>
	              </div>
	              <div className="card-body">
	                <h6 className="text-primary mb-3">Installation Steps:</h6>
	                <ul>
	                  <li>
	                     Laravel utilizes Composer to manage its dependencies. So, before using Laravel, make sure you have Composer installed on your machine.
	                    <div className="py-2 ps-3">
	                        <CopyToClipboard
	                        	id="installcode1"
	                        	text="composer update"
	                        />
	                    </div>
	                  </li>
	                  <li>
	                     After successfully executing of composer update command check the Laravel version
	                    <div className="py-2 ps-3">
	                        <CopyToClipboard
	                        	id="installcode2"
	                        	text="php artisan --version"
	                        />
	                    </div>
	                  </li>
	                  <li>
	                     Now Need some Laravel Commands (old versions required)
	                    <div className="py-2 ps-3">
	                        <CopyToClipboard
	                        	id="installcode3"
	                        	text="php artisan key:generate"
	                        />
	                    </div>
	                  </li>
	                </ul>
	                <h6 className="text-primary mb-3">Local Development Server</h6>
	                <p>If you have PHP installed locally and you would like to use PHP's built-in development server to serve your application, you may use the serve Artisan command. This command will start a development server at <b>http://localhost:8000:</b></p>
	                <ul>
	                  <li>command for serves your project
	                    <div className="py-2 ps-3">
	                        <CopyToClipboard
	                        	id="installcode4"
	                        	text="php artisan serve"
	                        />
	                    </div>
	                  </li>
	                </ul>
	                <p>You need to know how laravel works in order to use this version. Check the Laravel 8 <a href="https://laravel.com/docs/8.x/installation" target="_blank">official documentation</a></p>
	              </div>
	            </div>
	            <div className="card gulp-section">
	              <div className="card-header">
	                <h4 className="mb-0">Upgrading To 8.0 From 7.x</h4>
	              </div>
	              <div className="card-body">
	                <h6 className="text-primary">PHP 7.3.0 Required</h6>
	                <p>The new minimum PHP version is now 7.3.0.</p>
	                <h6 className="text-primary pt-2">Updating Dependencies</h6>
	                <p>Laravel latest version <a href="https://laravel.com/docs/8.x/upgrade" target="_blank">Upgrade Guide</a></p><b>OR</b>
	                <p className="mt-2">Update the following dependencies in your <code> composer.json </code>file:</p>
	                <p className="mb-1"><code>guzzlehttp/guzzle </code>to <code> ^7.0.1</code></p>
	                <p className="mb-1"> <code>facade/ignition </code>to <code> ^2.3.6</code></p>
	                <p className="mb-1"> <code>laravel/framework </code>to <code> ^8.0</code></p>
	                <p className="mb-1"> <code>laravel/ui </code>to <code> ^3.0</code></p>
	                <p className="mb-1"> <code>nunomaduro/collision </code>to <code> ^5.0</code></p>
	                <p> <code>phpunit/phpunit </code>to <code> ^9.0</code></p>
	                <p className="mb-1">Example:
	                    <CopyToClipboard
                        	id="installcode5"
                        	text={`\n "require": { \n     "php": "^7.3.0", \n     "fideloper/proxy": "^4.2", \n     "fruitcake/laravel-cors": "^2.0", \n     "guzzlehttp/guzzle": "^7.0.1",\n     "laravel/framework": "^8.0", \n     "laravel/tinker": "^2.0" \n }, \n "require-dev": { \n     "facade/ignition": "^2.3.6", \n     "fzaninotto/faker": "^1.9.1", \n     "mockery/mockery": "^1.3.1", \n     "nunomaduro/collision": "^5.0", \n     "phpunit/phpunit": "^9.3" \n }, `}
                        />
	                </p>
	                <p className="mb-1">Update php version & Check command
	                    <CopyToClipboard
                        	id="installcode6"
                        	text="php -v"
                        />
	                </p>
	                <p className="mb-1">Example <b>php -v </b>command after:
	                  <CopyToClipboard
	                  	id="installcode7"
	                  	text={` \n PHP 7.4.9 (cli) (built: Aug  7 2020 14:29:36) ( NTS ) \n Copyright (c) The PHP Group \n Zend Engine v3.4.0, Copyright (c) Zend Technologies \n with Zend OPcache v7.4.9, Copyright (c), by Zend Technologies`}
	                  />
	                  <b>OR</b>
	                  <CopyToClipboard
                        	id="installcode8"
                        	text={`\n PHP 7.3.23-1+ubuntu18.04.1+deb.sury.org+1 (cli) (built: Oct  6 2020 11:36:27) ( NTS )\n Copyright (c) 1997-2018 The PHP Group\n Zend Engine v3.3.23, Copyright (c) 1998-2018 Zend Technologies\n     with Zend OPcache v7.3.23-1+ubuntu18.04.1+deb.sury.org+1, Copyright (c) 1999-2018, by Zend Technologies`}
                        />
	                </p>
	                <p className="mb-1">Use Minimum PHP 7.3 and also available PHP 7.4
	                  <div className="d-block"><code>composer update </code>or  <code> composer install</code></div>
	                </p>
	                <p className="mb-1">After successfully executing of composer update command check the Laravel version
	                  <div className="d-block"><code>php artisan --version</code></div>
	                </p>
	                <p className="mb-1">Now Need some Laravel Commands (old versions required)
	                  <div className="d-block"><code>php artisan key:generate</code></div>
	                </p>
	                <h6 className="text-primary mb-3 pt-2">Local Development Server</h6>
	                <p>If you have PHP installed locally and you would like to use PHP's built-in development server to serve your application, you may use the serve Artisan command. This command will start a development server at <b>http://localhost:8000:</b></p>
	                <ul className="mb-0">
	                  <li className="mb-0">command for serves your project
	                    <div className="pt-2">
	                      <CopyToClipboard
                        	id="installcode9"
                        	text="php artisan serve"
                          />
	                    </div>
	                  </li>
	                </ul>
	              </div>
	            </div>
	            <div className="card new-arrival-sec">
	              <div className="card-header">
	                <h3>What's Next?</h3>
	              </div>
	              <div className="card-body">
	                <div className="arrival-content-main"><a href="treelaravel.html">
	                    <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
	                      <h5>Tree</h5>
	                    </div></a></div>
	                <div className="arrival-content-main"><a href="componentlaravel.html">
	                    <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
	                      <h5>Components</h5>
	                    </div></a></div>
	                <div className="arrival-content-main"><a href="applaravel.html">
	                    <div className="arrival-content"><i className="fa fa-angle-double-right"></i>
	                      <h5>Applications</h5>
	                    </div></a></div>
	              </div>
	            </div>
	          </div>
	        </div>
	      </div>
        </Layout>
	)
}

export default LaravelGettingStarted;