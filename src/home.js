import { useState , useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {

 
 

    
     return ( 
        <div className="home">
          { error && <div> { error } </div>}
          { isPending && <div> Loading... </div> }
          { blogs && <Bloglist blogs={blogs} title="All Blogs!" /> }
        </div>
       );
 }
 
export default Home; 