import { Form, Navigate, redirect, useActionData } from "react-router-dom";

const Create = () => {
  const data = useActionData();

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <Form method="post" action="/create">
        <label>Blog title:</label>
        <input type="text" name="title" required />
        <label>Blog body:</label>
        <textarea name="body" required></textarea>
        <label>Blog author:</label>
        <select name="author">
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>

        {data && data.error && <p>{data.error}</p>}
      </Form>
    </div>
  );
};

export default Create;

export const createAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    title: data.get("title"),
    body: data.get("body"),
    author: data.get("author"),
  };

  // send your post request

  if (submission.body.length < 10) {
    return { error: "Message must be over 10 chars long." };
  }

  fetch("http://localhost:8000/blogs/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(submission),
  }).then(() => {
    return <Navigate to="/" />;
  });

  // redirect the user
  return redirect("/");
};
