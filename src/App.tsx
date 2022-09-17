import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";
import Layout from "./components/layout";
import Home from "./pages/home";
import UsersList from "./pages/users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
