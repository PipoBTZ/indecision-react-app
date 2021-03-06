import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './i18n/i18n';

ReactDOM.render(
  <Suspense fallback="Loading...">
    <IndecisionApp />
  </Suspense>,
  document.getElementById('app')
);
