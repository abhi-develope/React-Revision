import { useState } from "react";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import PostlistProvider from "./store/post-list-store";

function App() {
 const [selectedTab, setSelectedTab] = useState("home")
  return (
    <PostlistProvider>
    <div className="flex ">
      <Sidebar selectedTab = {selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="inner flex flex-col">
        <Header />
        {selectedTab == "home" ? (<PostList/>) : (<CreatePost/>)}
        
        
        <Footer />
      </div>
    </div>
    </PostlistProvider>
  );
}

export default App;
