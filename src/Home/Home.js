import React, { useEffect, useState } from 'react'
import User from "./User/User.js"
import "./home.css"

const Home = () => {
    const [users, setUsers] = useState([])

    const fetctData = async () => {
        const res = await fetch("https://api.github.com/users")
        setUsers(await res.json())
        
    }

    useEffect(() =>{
        fetctData()
    },[])
    console.log(users)
    return (
        <div>
            <div className="home">
            <div className="home-box">
                
                {
                users.map((user) => (
                    <User key={user._id} user={user} />
                ))}
            </div>
            
            </div>
        </div>
    )
}

export default Home
