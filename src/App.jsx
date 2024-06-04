import { useState } from "react";
import Content from "./Content";
import Sidebar from "./Sidebar";
import { MainContext } from "./contexts/MainContext";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <MainContext.Provider value={{ showMenu, setShowMenu }}>
        <BrowserRouter>
          <Sidebar />
          <Content />
        </BrowserRouter>
      </MainContext.Provider>
      setShowMenu
    </div>
  );
};

export default App;
