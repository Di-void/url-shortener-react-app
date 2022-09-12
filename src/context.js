import React, { useState, useRef, useEffect, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();

const BASE_URL = "https://api.shrtco.de/v2/shorten?url=";

// # MAIN COMP..
const AppProvider = ({ children }) => {
  // # STATE VALUES
  const refContainer = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const [links, setLinks] = useState([]);
  // # FUNCTIONS AND SIDE EFFECTS
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getStarted = () => {
    refContainer.current.focus();
  };

  const saveToLocal = (payload) => {
    localStorage.setItem("links", JSON.stringify(payload));
  };
  const getLinksFromLocal = () => {
    const LocalLinks = localStorage.getItem("links")
      ? JSON.parse(localStorage.getItem("links"))
      : [];
    setLinks(LocalLinks);
  };
  // const handleLocalStorage = (key, payload = []) => {};

  const shortenLink = async (query) => {
    try {
      if (query === "") {
        setError({ ...error, show: true, msg: "Please add a link" });
      } else {
        setIsLoading(true);
        const response = await axios(`${BASE_URL}${query}`);
        const {
          data: { result },
        } = response;
        const { original_link, full_short_link2 } = result;
        const newLink = { original_link, full_short_link2 };
        setLinks((oldLinks) => {
          let newLinks = [...oldLinks, newLink].slice(0).reverse();
          if (newLinks.length > 3) {
            newLinks = newLinks.slice(0, 3);
            saveToLocal(newLinks);
            return newLinks;
          }
          saveToLocal(newLinks);
          return newLinks;
        });
        setIsLoading(false);
        setError({ ...error, show: false, msg: "" });
        // console.log(response);
      }
    } catch (error) {
      if (error.response?.status === 400) {
        setError({
          ...error,
          show: true,
          msg: "The URL provided is not valid",
        });
        setIsLoading(false);
        console.log(error);
      } else {
        setIsLoading(false);
        setError({
          ...error,
          show: true,
          msg: "Oops!!. Something's wrong.",
        });
      }
      console.log(error);
    }
  };

  useEffect(() => {
    getLinksFromLocal();
  }, []);
  // # RETs
  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        toggleMenu,
        error,
        shortenLink,
        isLoading,
        links,
        refContainer,
        getStarted,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// # CUSTOM HOOK (MUST USE)
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
