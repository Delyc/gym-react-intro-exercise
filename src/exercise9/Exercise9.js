
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Exercise3/Button";
import FlipCard from "./FlipCard";

const Exercise9 = () => {
    const [posts, setPosts] = useState([])
    const fetchRandom = () => {
        axios.get("https://random-data-api.com/api/users/random_user?size=10").then(({data}) => {
                setPosts(data)
            })

    }
    useEffect(() => {
        const fetch = async () => {
            await fetchRandom()
        }
        fetch()
    }, [])

    return (
        <>
            <Button text="Fetch random" handleClick={fetchRandom}/>
            <div className="grid grid-cols-3 gap-10 px-44">
                {posts.map((post, index) => {
                    return (
                        <FlipCard key={index} image={post.avatar} alt="Imag" employment={post.employment.title} first_name={post.first_name} />
                    )
                })}
            </div>
        </>
    );
}

export default Exercise9;