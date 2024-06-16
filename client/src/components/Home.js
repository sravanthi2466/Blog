import React from 'react'
import './Home.css'
import homeblog from '../assets/mainblog.jpeg'
function Home() {
    return (
        <div className="homemain container">
            <h1 className="homeheading">BlogApp</h1>
            <img src={homeblog} alt="blog image" className="homeblog"/>
            <p className="homedesc">
                Welcome to BlogApp, your ultimate platform for creating and managing blogs effortlessly. Share your thoughts, ideas, and stories with a community of like-minded individuals !...
            </p>
            
        </div>
    )
}

export default Home
