import { useLoaderData, useParams, useNavigate } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useLoaderData();
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="blog-details">
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

// data loader
export const BlogDetailsLoader = async ({ params }) => {
  const { id } = params;

  const response = await fetch("http://localhost:8000/blogs/" + id);

  if (!response.ok) {
    throw Error("Could not find that career.");
  }

  return response.json();
};
