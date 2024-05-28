import { useState } from "react";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";

function App() {
 const [selectedTab, setSelectedTab] = useState("home")
  return (
    <div className="flex ">
      <Sidebar selectedTab = {selectedTab} setSelectedTab={setSelectedTab}/>
      <div className="inner flex flex-col">
        <Header />
        {selectedTab == "home" ? (<PostList/>) : (<CreatePost/>)}
        
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
