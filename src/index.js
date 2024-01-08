import React from "react";
import { createRoot } from 'react-dom/client';
//import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import App from "./App";



const container = document.getElementById('root');
const root = createRoot(container); // replacing reactDom with createRoot in React18
root.render(<App></App>);
