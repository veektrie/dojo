const Home = () => {

    const handleClickAgain = (e) => {
        console.log( 'hello, ninjas',e );
    }
    const handleClick = (name , e) => {
        console.log( 'hello' + (name), e.target);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClickAgain}> click again </button>
            <button onClick={(e) =>  handleClick(' yoshi',e )}> Click Me</button>
        </div>
     );
 }
 
export default Home;