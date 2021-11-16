import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import MainContainer from "./containers/MainContainer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
