import {
  HashRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/scrollToTheTop";
import { ContextProvider } from "./components/context-provider";
import { LandingPage } from "./ui/landingPage";



function App() {

  return (
    <HashRouter>
      <ContextProvider>
        <ScrollToTop />
        <Routes>
          <Route path="homepage/:1" element={<LandingPage/>} />
           <Route index element={<Navigate to="homepage/:1" />} />
           
        </Routes>
      </ContextProvider>
    </HashRouter>
  )
}

export default App