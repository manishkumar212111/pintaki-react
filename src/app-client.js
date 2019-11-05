'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {hydrate} from 'react-dom'
import AppRoutes from './pt/AppRoutes';

window.onload = () => {
  hydrate(<AppRoutes/>, document.getElementById('main'));
};
