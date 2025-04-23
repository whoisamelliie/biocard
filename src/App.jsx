import "./App.css";
import React from "react";
import UserCard from "./Card";

function App() {
  const data = [
    {
      avatarUrl:
        "https://ncrdo.ru/upload/medialibrary/c23/c234aed4ea0b68332470f3768ae516fe.jpg",
      name: "алена",
      bio: "Помогаю становиться сильнее и здоровее каждый день 🥦🏋️‍♀️",
    },
    {
      avatarUrl:
        "https://ncrdo.ru/upload/medialibrary/c23/c234aed4ea0b68332470f3768ae516fe.jpg",
      name: "алена",
      bio: "Помогаю становиться сильнее и здоровее каждый день 🥦🏋️‍♀️",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "lavender",
        borderRadius: "12px",
      }}
    >
      {data.length === 0 ? (
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "Arial, sans-serif",
            backgroundColor: "#f2f2f2",
            padding: "10px 20px",
            borderRadius: "12px",
            maxWidth: "250px",
            maxHeight: "40px",
          }}
        >
          Ничего не найдено
        </p>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "40px",
            background: "thistle",
            minHeight: "100vh",
            borderRadius: "12px",
          }}
        >
          {data.map((user, index) => (
            <UserCard
              key={index}
              avatarUrl={user.avatarUrl}
              name={user.name}
              bio={user.bio}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
