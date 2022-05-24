import { useState } from "react";
import Bloglist from "./Bloglist";
const Home = () => {

    const [ blogs , setBlogs] = useState([
        {title:'my new website', body:'lorem ipsum...', author:'mario', id:1},
        {title:'welcome party', body:'lorem ipsum...', author:'yondu', id:2},
        {title:'web dev top tips', body:'lorem ipsum...', author:'yarny', id:3},
        {title:'dev top tips', body:'lorem ipsum...', author:'yarny', id:4}
    ]);
    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);  
    }

     return ( 
        <div className="home">
          <Bloglist blogs={blogs} title="All Blogs!" handleDelete = {handleDelete}/>
          <Bloglist blogs={blogs.filter((blog)=> blog.author === 'yarny') } title="Yarny blogs"/>

        </div>
     ); 
 }
 
export default Home;