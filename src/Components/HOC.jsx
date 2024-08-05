import React, { useEffect } from "react";
import NotFound from "../Pages/NotFound";
import { useNavigate } from "react-router-dom";

export default function HOC({ children }) {
  const isAuthed = true;
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isAuthed) {
  //     navigate("/");
  //   }
  // }, [isAuthed, navigate]);
  if (!isAuthed) return <NotFound />;
  return children;
}
