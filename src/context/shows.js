import { createContext, useState } from "react";

const ShowContext = createContext([]);

const ShowsProvider = ({ children }) => {
  const [shows, setShows] = useState([]);

  const addShow = show => {
    setShows([...shows, show])
  }

  return <ShowContext.Provider value={{ shows, addShow }}>{ children }</ShowContext.Provider>
}

export { ShowContext, ShowsProvider };