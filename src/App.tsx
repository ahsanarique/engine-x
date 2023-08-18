import { Routes, Route } from "react-router-dom";
import TopNav from "./components/navigation/top/TopNav";
import FormPage from "./pages/formPage/FormPage";
import ResultPage from "./pages/resultPage/ResultPage";
import Footer from "./components/footer/Footer";
import mainBg from "./assets/icons/main-bg.svg";

function App() {
  return (
    <div
      className="main-body d-flex flex-column"
      style={{
        background: `url(${mainBg})`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div className="container custom-container mx-auto">
        <header className="engine-x-header">
          <TopNav />
        </header>

        <main className="main-wrapper">
          <div className="row mx-0">
            <div className="col-12 content-wrapper">
              <Routes>
                <Route index path="/" element={<FormPage />} />
                <Route path="project-data" element={<ResultPage />} />
                <Route path="*" element={<h1>404</h1>} />
              </Routes>
            </div>
          </div>
        </main>
      </div>

      <footer className="engine-x-footer background-secondary mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
