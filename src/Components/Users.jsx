import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import useUser from "../Hooks/useUser";
import { fetchUsers } from "../Services/User";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
export default function Users() {
  const { users, deleteUser } = useUser();

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    console.log(id);
    navigate(`/dashboard/users/${id}`);
  };
  const [usersName, setUsersName] = useState("");
  const handleChange = (e) => {
    setUsersName(e.target.value);
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      console.log(res);
    } catch (error) {}
  };
  const handleEdit = async (id) => {
    navigate("/edit/" + id);
  };
  return (
    <div>
      <h4>Users</h4>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={usersName}
          onChange={handleChange}
        />
      </div>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id} className="my-2 d-flex align-items-center">
              <button key={user.id} onClick={() => handleNavigate(user.id)}>
                {user.name}
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                className="btn btn-danger mx-1"
              >
                <MdDelete style={{ fontSize: "24px" }} />
              </button>
              <button onClick={() => handleEdit(user.id)} className="btn mx-1">
                <MdEdit style={{ fontSize: "24px" }} />
              </button>
            </div>
          );
        })}
      </div>
      <Outlet context={users} />
    </div>
  );
}
