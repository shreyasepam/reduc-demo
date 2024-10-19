import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import ReduxPage from '../pages/ReduxPage';
import PropsDrillPage from '../pages/PropsDrillPage';
import ContextPage from '../pages/ContextPage';
import Header from '../components/Header';

export default function AppRouter() {
  return (
    <Router basename="/">
      <Header />
      <div className='mx-auto h-[calc(100%-56px)] w-full max-w-7xl overflow-auto bg-gray-100 px-4 mt-[56px]'>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/redux" Component={ReduxPage} />
        <Route path="/prop-drill" Component={PropsDrillPage} />
        <Route path="/context" Component={ContextPage} />
      </Routes>
      </div>
    </Router>
  );
}
