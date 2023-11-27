import { useContext, useEffect, useState } from "react"
import { UserContext } from "../provider/UserProvider";

export const Posts = () => {
    const [posts, setPosts] = useState([])
    const {userState} = useContext(UserContext);
    useEffect(()=>{
        if(userState.login && userState.password){
            
            fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts)); 
        }
    }, [userState])

    return <div>
        {posts.map((p)=> {
            return <p key = {p.id} style = {{border:'1px solid black', margin: 0, padding: 20, }}> {userState.id == p.id ? 'AUTHOR: ' + p.title : p.title}</p>
        })}
    </div>
}