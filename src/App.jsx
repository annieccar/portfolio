import "./styles/App.scss";
import AppRoutes from "./routes/AppRoutes";
import { LanguageContextProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageContextProvider>
      <div className="app-wrapper">
        <AppRoutes />
      </div>
    </LanguageContextProvider>
  );
}

export default App;
