import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import AIAnalysisPage from "./pages/AIAnalysisPage";
import Recommendation from "./pages/Recommendation";
import Memberships from "./pages/Memberships";
import Trainers from "./pages/Trainers";
import TrialBooking from "./pages/TrialBooking";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/assessment"
          element={<Assessment />}
        />

        <Route
          path="/ai-analysis"
          element={<AIAnalysisPage />}
        />

        <Route
          path="/recommendation"
          element={<Recommendation />}
        />

        <Route
          path="/memberships"
          element={<Memberships />}
        />

        <Route
          path="/trainers"
          element={<Trainers />}
        />

        <Route
          path="/trial"
          element={<TrialBooking />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;