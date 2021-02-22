import React from 'react';
import HomeImage from '../Assets/home_image.jpg';
import './Home.css'

function Home() {
    return (
        <div>
            {/* <h1>Home</h1> */}
            <img className="home__img" src={HomeImage}/>
        </div>
    )
}

export default Home
