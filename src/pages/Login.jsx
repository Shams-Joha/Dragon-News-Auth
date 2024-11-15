
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



const Login = () => {

    const { logIn, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({})


    const handleOnSubmit = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        logIn(email, password)
            .then(result => {
                setUser(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => setError({ ...error, login: err.code }))

    }

    return (

        <div className="min-h-screen flex justify-center items-center">

            <div className="card bg-base-100 w-full max-w-lg shadow-none shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Login to your Account</h2>
                <form onSubmit={handleOnSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                        {
                            error.login && (
                                <label className="label text-sm text-red-600">
                                    {error.login}
                                </label>
                            )
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Don't Have An Account? <Link className="text-red-500" to={'/auth/register'}>Register</Link></p>
            </div>
        </div>


    );
};

export default Login;