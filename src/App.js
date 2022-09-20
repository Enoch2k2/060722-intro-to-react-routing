import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ShowForm from "./components/ShowForm";
import ShowList from "./components/ShowList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Show from './components/Show';

const App = () => {

  const [shows, setShows] = useState([]);

  const addShow = show => {
    setShows([...shows, show])
  }

  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/shows/new" element={<ShowForm addShow={ addShow } />} />
        <Route path="/shows" element={<ShowList shows={ shows } />} />
        <Route path="/shows/:slug" element={<Show shows={ shows } />} />
        <Route path="*" element={<NotFound />} />  
      </Routes>
    </Router>
  );
}

export default App;
