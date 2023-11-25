import { useContext, useEffect, useState } from "react";
import { UserContext } from "../provider/UserProvider";

export const Posts = () => {
    const {log} = useContext(UserContext);
    const [posts, setPosts]=useState([])
    useEffect(()=>{
        if(log === 'logged'){
            fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts));
        }
    }, [log])

    const postRender = posts.map((p)=>{
        return <p key={p.id}> {p.title}</p>
    })
    return(
        <div>
        {log === 'logged' ? postRender : 'log in pls'}
    </div>
    ) 
    }
