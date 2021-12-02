import React, { useState,useEffect } from 'react'
import "./search.css"

const Search = () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [followers, setFollowers] = useState(0)
    const [followings, setFollowings] = useState(0)
    const [repository, setRepository] = useState(0)
    const [profile, setProfile] = useState("")
    const [input, setInput] = useState("kanchan")


    useEffect(() => {
        fetch("https://api.github.com/users/example")
        .then(res => res.json())
        .then(data =>{
            setData(data)
            
        })
    }, [])


    const setData = ({
        name,
        login,
        followers,
        following,
        public_repos,
        avatar_url
    }) =>{
        setName(name)
        setUsername(login)
        setFollowers(followers)
        setFollowings(following)
        setRepository(public_repos)
        setProfile(avatar_url)
    }

    const handleSearch = (e) =>{
        setInput(e.target.value)
        e.preventDefault()
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        fetch(`https://api.github.com/users/${input}`)
        .then(res => res.json())
        .then(data => {
            setData(data)
            
        })
    }
    
    return (
        <>
            <div className="search">
                <div className="search-box">
                <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Search user" className="searchbox" onChange={handleSearch} />
                        <input type="submit" value="search" />
                    </form>
                </div>
                <div className="search-cart">
                    <div className="search-image">
                        <img src={profile} alt="kanchan"/>
                    </div>
                    <div className="search-details">
                        <h4>{name}</h4>
                            <p>{username}</p>
                            <div className="search-follows">
                                <div className="search-followers">
                                    <h4>Repository</h4>
                                    <p>{repository}</p>
                                </div>
                                <div className="followers">
                                    <h4>Followers</h4>
                                    <p>{followers}</p>
                                </div>
                                <div className="followers">
                                    <h4>Followings</h4>
                                    <p>{followings}</p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search
