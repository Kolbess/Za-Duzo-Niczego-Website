import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { MissionPage } from "./pages/MissionPage";
import { ProgressPage } from "./pages/ProgressPage";
import { SurveyPage } from "./pages/SurveyPage";
import { PartnersPage } from "./pages/PartnersPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/o-nas" element={<AboutPage />} />
            <Route path="/misja" element={<MissionPage />} />
            <Route path="/postep" element={<ProgressPage />} />
            <Route path="/ankieta" element={<SurveyPage />} />
            <Route path="/partnerzy" element={<PartnersPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
