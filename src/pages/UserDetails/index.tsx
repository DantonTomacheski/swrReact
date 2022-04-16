import axios from "axios";
import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { UserTypeModule } from "../../types/UserType";

const PostItem = () => {
  const { id } = useParams();

  const { data, error } = useFetch<UserTypeModule.UserType>(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  return (
    <li>
      <strong> Name: {data?.name} </strong>
      <strong> Name: {data?.email} </strong>
      <strong> Name: {data?.phone} </strong>
    </li>
  );
};

export default memo(PostItem);
