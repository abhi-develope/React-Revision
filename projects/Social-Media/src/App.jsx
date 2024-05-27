import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex ">
      <Sidebar/>
      <div className="inner flex flex-col">
        <Header />
        <CreatePost/>
        <PostList/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
