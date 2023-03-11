import { useDispatch } from "react-redux";
import { getBlogList } from "./features/blog/blogListSlice";
import { useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import Home from "./pages/Home";
import BlogDetails, { BlogDetailsLoader } from "./pages/BlogDetails";
import Create, { createAction } from "./pages/Create";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route
        index
        element={<Home />}
        // loader={BlogsLoader}
        // errorElement={<BlogsError />}
      />
      <Route
        path="blogs/:id"
        element={<BlogDetails />}
        loader={BlogDetailsLoader}
        // errorElement={<BlogsError />}
      />
      <Route path="create" element={<Create />} action={createAction} />
    </Route>
  )
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogList());
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
