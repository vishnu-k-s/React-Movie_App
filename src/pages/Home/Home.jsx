import React from "react";
import "./Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/featured/featured";
import List from "../../components/list/list";

const Home = () => {
    return(
        <div className="home">
            <Navbar/>
            
            <Featured type="movie"/>

            <List/>
            <List/>
            <List/>
            <List/>
            
        
        </div>
    )
}

export default Home 