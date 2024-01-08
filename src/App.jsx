import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar.jsx";
import Homepage from "./Pages/Homepage.jsx";
import Blog from "./Pages/Blog.jsx";
import Article from "./Pages/Article.jsx";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="background min-h-screen min-w-full relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog/Article/:id" element={<Article />} />
          </Routes>
        </div>
        {/* TODO: Warning: Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it. */}
        {/* {window.onbeforeunload = function () {window.scrollTo(0, 0);}} */}
      </Router>
      </QueryClientProvider>
  );
}

export default App;
