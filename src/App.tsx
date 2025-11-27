import {
  HashRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/utils/scrollToTheTop";
import { LandingPage } from "./route/landingPage";



function App() {

  return (
    <HashRouter>
    
        <ScrollToTop />
        <Routes>
          <Route path="homepage/:1" element={<LandingPage/>} />
           <Route index element={<Navigate to="homepage/:1" />} />
           
        </Routes>
     
    </HashRouter>
  )
}

export default App