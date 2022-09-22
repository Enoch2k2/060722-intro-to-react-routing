import React, { useRef } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import ShowForm from "./components/ShowForm";
import ShowList from "./components/ShowList";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Show from './components/Show';
import { ShowsProvider } from './context/shows';

const App = () => {
  const id = useRef(1);

  

  return (
    <Router>
      <Header />
      <Navbar />
      <ShowsProvider>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/shows/new" element={<ShowForm id={ id } />} />
          <Route path="/shows" element={<ShowList />} />
          <Route path="/shows/:id" element={<Show />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ShowsProvider>
    </Router>
  );
}

export default App;
