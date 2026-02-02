import {
  BrowserRouter,
  Route,
  Routes,

} from "react-router-dom";
import ScrollToTop from "./components/utils/scrollToTheTop";
import { LandingPage } from "./route/landingPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
       
      </Routes>
    </BrowserRouter>
  )
}

export default App