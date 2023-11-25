import { useContext, useState } from "react";
import { UserContext } from "../provider/UserProvider";
import './Posts.css'

export const Posts = () => {
    const {log} = useContext(UserContext);
        const [posts, setPosts]=useState([])
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data.posts));
    const post = posts.map((p)=>{
        return <p key={p.id}> {p.title}</p>
    })
    return(
        <div>
        {log === 'logged' ? post : 'log in pls'}
    </div>
    ) 
    }
