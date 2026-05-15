import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import PublicationsPage from "./pages/PublicationsPage";
import MembersPage from "./pages/MembersPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import PlayAndTalkPage from "./pages/PlayAndTalkPage";
import PlayAndTalkQPage from "./pages/PlayAndTalkQPage";
import PlayAndTalkResultPage from "./pages/PlayAndTalkResult";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/playandtalk" element={<PlayAndTalkPage />} />
        <Route path="/playandtalk/questions" element={<PlayAndTalkQPage />} />
        <Route path="/playandtalk/result" element={<PlayAndTalkResultPage />} />
      </Route>
    </Routes>
  );
}

export default App;