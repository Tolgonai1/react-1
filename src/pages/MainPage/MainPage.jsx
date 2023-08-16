import styles from "./main.module.css"
import {useState} from "react";
export default function MainPage(){
    const [value,setValue] = useState({
        userId: '',
        userName: '',
        userSurname: ''
    })
    const [posts,setPosts] = useState([])
    function handleChange (e){
        const newData = {...value}
        newData[e.target.id] = e.target.value
        setValue(newData)
        }
    function handleAddPost(value,e){
        const newPost = {...value}
        setPosts([...posts,newPost])
    }
    return (
        <div className={styles.wrapper}>
            <h1>My Posts</h1>
            <input type="number" placeholder="UserId" id="userId" value={value.userId} onChange={(e) => handleChange(e)}/>
            <input type="text" placeholder='Name' id='userName' value={value.userName} onChange={(e)=>handleChange(e)}/>
            <input type='text' placeholder='Surname' id='userSurname' value={value.userSurname} onChange={(e) => handleChange(e)}/>
            <button onClick={()=>handleAddPost(value)}>Add post</button>
            <div className={styles.posts}>
                {posts.map(post =>(
                    <div key={post.userId}>
                        <p><b>Id: </b>{post.userId}</p>
                        <p><b>Name: </b>{post.userName}</p>
                        <p><b>Surname: </b>{post.userSurname}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}