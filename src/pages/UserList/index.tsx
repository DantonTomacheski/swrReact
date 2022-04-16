import axios from "axios";
import { useEffect, useState } from "react";
import UserDetails from "../UserDetails";
import { UserTypeModule } from "../../types/UserType";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const UserList = () => {
  const { data, error } = useFetch<UserTypeModule.UserType[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!data) {
    return <p>Carregando...</p>;
  }
  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link to={`users/${String(user.id)}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export { UserList };
