import {useEffect, useState} from "react";
import axios from "axios";
import styles from "./post.module.css"

export default function PostsPage(){
    const [posts, setPost] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/posts?limit=7&skip=9&select=title,body,id')
            .then(resp => setPost( resp.data.posts))

    },[])
    return (
        <div className={styles.wrapper}>
            {!posts.length && <h1>Loading...</h1>}
            {posts.map((post) => {
                return <div className={styles.posts} key={post.id}>
                    <span><b>Id: </b>{post.id}</span>
                    <p><b>Title: </b>{post.title}</p>
                    <p><b>Body: </b>{post.body}</p>
                </div>
        })}

        </div>
    )
}