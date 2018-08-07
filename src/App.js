import React from 'react';
import { render } from 'react-dom';
import GpsApp from './GpsApp.jsx';


render(
    <GpsApp />,
	document.getElementById('app')
);

if (module.hot) {
    module.hot.accept();
}