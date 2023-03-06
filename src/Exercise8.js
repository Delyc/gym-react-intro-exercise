import Home from "./Home";

const Exercise8 = () => {
    const posts = [
        {
            id: 1,
            setup: "What's the best thing about a Boolean?",
            punchline: "Even if you're wrong, you're only off by a bit"
        },
        {
            id: 2,
            setup: "Why do programmers wear glasses?",
            punchline: "Because they need to C#"
        }
    ]
    return ( 
        <>

        <Home />
        <div className="flex gap-20 py-20 px-44">
        {posts.map((post, index) => {
            return(
                <div key={index} className="border border-gray-200 px-10 py-5 rounded">
                    <h3>{post.setup}</h3>
                    <p>{post.punchline}</p>
                </div>
            )
        })}
          </div>
        </>
     );
}
 
export default Exercise8;