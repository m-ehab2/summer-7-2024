import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useUser() {
  const [users, setUsers] = useState([]);

  const registerUser = async (values) => {
    const res = await axios.post("http://localhost:3000/users", values);
    return res;
  };

  const deleteUser = async (id) => {
    const res = await axios.delete(`http://localhost:3000/users/${id}`);
    const newUsers = users.filter((user) => user.id !== id);
    setUsers([...newUsers]);
  };

  const fetchUser = async (id) => {
    const { data } = await axios.get(`http://localhost:3000/users/${id}`);
    // console.log({ users });
    // const data = users.find((user) => user.id === id);
    // console.log({ data });
    return data;
  };

  const updateUser = async (id, values) => {
    const res = await axios.put(`http://localhost:3000/users/${id}`, values);
    console.log({ res });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/users");
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers();
  }, []);

  return { users, registerUser, deleteUser, fetchUser, updateUser };
}
