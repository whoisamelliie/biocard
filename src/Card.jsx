import React from "react";

const UserCard = ({ avatarUrl, name, bio }) => {
  return (
    <div className="user-card">
      <img src={avatarUrl} alt={name} className="avatar" />
      <div className="info">
        <h2 className="name">{name}</h2>
        <p className="bio">{bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
