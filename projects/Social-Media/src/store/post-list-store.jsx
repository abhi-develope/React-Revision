import { createContext } from "react";

const PostList = createContext({});

const PostlistProvider = ({children}) => {


    
    return <PostList.Provider value = {[]}>{children}</PostList.Provider>
}

export default PostlistProvider