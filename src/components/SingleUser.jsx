import React from 'react'

const SingleUser = ({ user }) => {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{user.name.first} {user.name.last}</h2>
        <img className="circle-img" src={user.picture.large} alt="avatar_img" />
      </div>
      <div className="bottom">
      <p className="info">{user.location.country} | {user.location.state}</p>
        <p className="info">{user.phone}</p>
        <p className="info">{user.email}</p>
      </div>
    </div>
  )
}

export default SingleUser