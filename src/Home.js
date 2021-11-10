import { useState } from 'react';

const Home = () => {
    // let c = 0;
    const [count, setCount] = useState(0);

    const handleClick = () =>{
        setCount(count + 1);
    };

    return (
    <div className="home">
        <h1>Homepage</h1>
        <button onClick={handleClick}>click me!</button>
        <p>Clicked {count} times</p>
    </div>
    );
}
 
export default Home;