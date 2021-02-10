import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const sessionUser = useSelector((state) => state.session.user);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("mouseover", closeMenu);

    return () => document.removeEventListener("mouseout", closeMenu);
  }, [showMenu]);

  // useEffect(() => {
  //   (async () => {
  //     let res = await fetch(`/api/session`);
  //     setProfilePic(res.data.user.profilePicURL);
  //   })();
  // }, [sessionUser]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <i className="logo-circle" />
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <li>{sessionUser.username}</li>
          <li>{sessionUser.email}</li>
          <li>
            <button className="logout-button" onClick={logout}>
              Log Out
            </button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
