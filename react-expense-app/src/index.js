import ReactDOM from 'react-dom/client'; //We imported ReactDOM to call a method on it below.

import './index.css'; //This syntax is not regular in JS normally. We can not import a css file to JS file. But React does.
import App from './App'; //App.js bizim kütüphanemizde bulunan js dosyası olduğu için .js uzantısını yazmasak da olur.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); //App in the end is a component.

// CreateRoot: Creates basicly the main entrypoint,the main hook the overall user interface.

// index.js is executed initially when the page loaded.    IMPORTANT!!!!