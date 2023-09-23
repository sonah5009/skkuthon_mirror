import React from "react";

const userPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users = await res.json();
  return (
    <div>
      <h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </h1>
    </div>
  );
};

export default userPage;
