import React from 'react';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupLayout from "./pages/signup";
import LoginLayout from "./pages/login";
import {Layout} from "./pages/layout";
import {UserLayout} from "./pages/userlayout";
import Notification from "./pages/notification";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>
                <Route path="signup" element={<SignupLayout/>}/>
                <Route path="login" element={<LoginLayout/>}/>
                <Route path="uesrlayout" element={<UserLayout/>}/>
                <Route path="notification" element={<Notification/>}/>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);