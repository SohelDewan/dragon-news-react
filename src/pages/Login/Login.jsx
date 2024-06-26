import Navbar from "../shared/Navbar/Navbar";

const Login = () => {
    
  const handleLogin = (e) => {
    e.proventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form);
  };
  return (
    <div>
      <Navbar></Navbar>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
        <h2 className="text-3xl text-center mt-6">Please Login</h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
