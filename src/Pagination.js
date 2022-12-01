import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import Todo from "./Todo";

const Pagination = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);

//   useEffect(() => {
//     const newPost = async () => {
//       setLoading(true);
//       const res = await axios.get(TodoList);
//       setPosts(res.data);
//       setLoading(false);
//     };
//     newPost(posts);
//   }, [posts]);

    // console.log(posts);
    



  return <div></div>;
};

export default Pagination;
