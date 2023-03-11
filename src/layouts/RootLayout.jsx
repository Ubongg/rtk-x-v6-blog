import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <main>
      <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink
            to="/create"
            style={{
              color: "white",
              backgroundColor: "#f1356d",
              borderRadius: "8px",
            }}
          >
            New Blog
          </NavLink>
        </div>
      </nav>

      <Outlet />
    </main>
  );
};

export default RootLayout;
