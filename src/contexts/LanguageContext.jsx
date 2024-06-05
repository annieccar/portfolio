import { createContext, useContext, useMemo, useState } from "react";

const LanguageContext = createContext();

const useLanguageContext = () => useContext(LanguageContext);

function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("français");

  const contextValue = useMemo(
    () => ({ language, setLanguage }),
    [language, setLanguage]
  );
  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export { useLanguageContext, LanguageContextProvider };

// CurrentUserContextProvider.propTypes = { children: PropTypes.node.isRequired };
