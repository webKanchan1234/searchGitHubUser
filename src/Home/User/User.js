import React from 'react'
import "./user.css"


const User = ({user}) => {
  
    
    return (
        <>
            <div className="user">
            
                        <div className="image">
                            <img src={user.avatar_url} alt="kanchan"/>
                        </div>
                        <div className="heading">
                            <h3>{user.name}</h3>
                            <p>{user.login}</p>
                            <div className="follows">
                                <div className="followers">
                                    <h5>Repos</h5>
                                    <p>{user.public_repos}</p>
                                </div>
                                <div className="followers">
                                    <h5>Followers</h5>
                                    <p>{user.followers}</p>
                                </div>
                                <div className="followers">
                                    <h5>Followings</h5>
                                    <p>{user.following}</p>
                                </div>
                            </div>
                        </div>
                
                
            </div>
        </>
    )
}

export default User
