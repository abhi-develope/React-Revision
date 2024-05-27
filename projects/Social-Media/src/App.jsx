import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="inner flex flex-col">
        <Header />
        <CreatePost/>
        <Post/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
