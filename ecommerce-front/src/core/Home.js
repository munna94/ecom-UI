import React from "react";
import Layout from "./Layout"
import { API } from "../Config"

const Home = () => {
    console.log(process.env.REACT_APP_API_URL);
    
    return (
        <Layout title="Home Page" description="Node React ecom App">
            <p>{API}</p>
        </Layout>
    )
    
}
export default Home;