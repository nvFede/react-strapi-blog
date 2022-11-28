import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout";
import Blog from "./pages/Blog";
import About from "./pages/About";
import SingleContent from "./pages/SingleContent";
import useFetch from "./hooks/useFetch";

function App() {

  const { data, loading, error } = useFetch();

  if (loading ) return <p> Loading...</p> ;
  if (error ) return <p> Error...</p> ;
  // console.log(data);
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blog data={data} />} />
          <Route path="/about" element={<About />} />
          <Route path="/single/:slug" element={<SingleContent />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
