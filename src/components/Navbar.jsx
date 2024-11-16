import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user && user.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        {/* Show User photo */}
        <div className=" ">
          {
            user && user?.email ? <div className="flex items-center"> 
              <img className="w-28 h-30 rounded-full" src={user.photoURL}></img>
              <p>{user.displayName}</p>
            </div> : <img src={userIcon} alt="" />
          }

        </div>
        {
          user && user?.email ? (<button className="btn btn-neutral rounded-none" onClick={logOut}>Log Out</button>) : (<Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>)
        }

      </div>
    </div>
  );
};

export default Navbar;
