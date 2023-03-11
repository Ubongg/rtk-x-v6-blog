import React from "react";
import { useSelector } from "react-redux";
import BlogList from "../components/BlogList";

const Home = () => {
  const { blogList } = useSelector((store) => store.blogs);

  return (
    <div className="home">{blogList && <BlogList blogs={blogList} />}</div>
  );
};

export default Home;
