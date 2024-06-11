import React from 'react';
import ReactDOM from 'react-dom/client';
import RoutePage from "./RoutePage";
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='App'>
    <RoutePage  />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//"userInformationAuthorizedUsers": ["tgl242","tgl133","tgl159","tgl239","tgl232"],
//"mailContentViewAuthorizedUser": ["tgl242","tgl133","tgl159","tgl239","tgl232"],
//"userInformationAuthorizedUsers":["tgl254","tgl239","tgl291"],
//"mailContentViewAuthorizedUser":["tgl254","tgl291"],