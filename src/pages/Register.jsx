import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">

            <div className="card bg-base-100 w-full max-w-lg shadow-none shrink-0 rounded-none p-10">
                <h2 className="text-2xl font-semibold text-center">Register your Account</h2>
                <form className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Your Name</span>
                        </label>
                        <input type="text" placeholder="Enter your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo Url</span>
                        </label>
                        <input type="text" placeholder="Enter your Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email Address</span>
                        </label>
                        <input type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center font-semibold">Already Have An Account? <Link className="text-red-500" to={'/auth/login'}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;