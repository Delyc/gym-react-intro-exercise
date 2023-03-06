
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Exercise3/Button";
import Home from "../Home";
import FlipCard from "./FlipCard";

const Exercise9 = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const res = axios.get("https://random-data-api.com/api/users/random_user?size=10").then((data) => {
                console.log("data", data.data)
                setPosts(data.data)
            })
        }
        fetch()
    }, [])


    // console.log("data", data)

    return (
        <>
        <Home />
        <Button text="Fetch random" />
        <div className="grid grid-cols-3 gap-10 px-44">

        {posts.map((post, index) => {
                return (
                    <FlipCard key={index} image={post.avatar}/>
                )
            })}

        </div>
            
        </>
    );
}

export default Exercise9;