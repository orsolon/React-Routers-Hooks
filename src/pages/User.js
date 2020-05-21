import React from "react";
import { useParams } from "react-router";

const usersAPI = [
  { id: 1, name: "Chaves" },
  { id: 2, name: "Kiko" },
  { id: 3, name: "Seu Madruga" },
  { id: 4, name: "Chiquinha" }
];

export default function User(props) {
  console.log(props);
  //const {id} = props.match.params;
  let users = usersAPI;
  const { id } = useParams();

  if (id) {
    users = users.filter(user => user.id === parseInt(id, 10));
  }

  return (
    <div>
      <h1>Users</h1>
      {users.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
