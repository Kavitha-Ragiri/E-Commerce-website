import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const handleSave = () => {
    localStorage.setItem("userData", JSON.stringify(user));
    setEditMode(false);
  };

  if (!user) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5 pt-5">
      <div className="card shadow p-4 w-100" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4">Profile</h3>

        {editMode ? (
          <div className="">
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={user.fullName}
                onChange={(e) =>
                  setUser({ ...user, fullName: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={user.email}
                onChange={(e) =>
                  setUser({ ...user, email: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={user.number}
                onChange={(e) =>
                  setUser({ ...user, number: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                value={user.address}
                onChange={(e) =>
                  setUser({ ...user, address: e.target.value })
                }
              />
            </div>

            <button
              className="btn btn-primary w-50 mb-2"
              onClick={handleSave}
            >
              Save Changes
            </button>
          </div>
        ) : (
          <div className="mb-3">
            <p><strong>Name:</strong> {user.fullName}</p>
             <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.number}</p>
            <p><strong>Address:</strong> {user.address}</p>

            <button
              className="btn btn-warning w-50 mb-3"
              onClick={() => setEditMode(true)}
            >
              Edit Profile
            </button>
          </div>
        )}

        <button className="btn btn-danger w-50" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
