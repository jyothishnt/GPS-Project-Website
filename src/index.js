import React from 'react';
import { render } from 'react-dom';
import GpsApp from './GpsApp.jsx';
/*import GPS2App from './GPS2_App.jsx';*/
import registerServiceWorker from './registerServiceWorker';


render(
    <GpsApp />,
	document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}