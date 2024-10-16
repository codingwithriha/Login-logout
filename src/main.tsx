import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.tsx'
import Login from './authform/Login.tsx'
import Signup from './authform/Signup.tsx'
import AuthRoute from './authform/AuthRoute.tsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB-5rmyUJ2pUv1BGrUXSHZvhOJKBGaTqRU",
  authDomain: "auth-17d07.firebaseapp.com",
  projectId: "auth-17d07",
  storageBucket: "auth-17d07.appspot.com",
  messagingSenderId: "500549119468",
  appId: "1:500549119468:web:ecf7cbb4a9c83dcc92e4c9"
};

initializeApp(firebaseConfig);

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<AuthRoute><App /></AuthRoute>} />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
