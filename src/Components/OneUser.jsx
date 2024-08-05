import React from "react";
import { useLocation, useOutletContext, useParams } from "react-router-dom";

export default function OneUser() {
  const { id } = useParams();
  const res = useLocation();
  console.log(res);

  const users = useOutletContext();
  const selectedUser = users.find((user) => user.id === id);
  if(!selectedUser) return <div>No Users Matching</div>
  return (
    <div>
      <h2>Name : {selectedUser.name}</h2>
      <h3>Job : {selectedUser.jobTitle}</h3>
    </div>
  );
}
