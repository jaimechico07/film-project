import { useForm } from "react-hook-form";
import { useAuthStore } from "../../store/AuthStore";
import { useEffect } from "react";
import { Link, useNavigate} from "react-router-dom";


const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      
      const { signin, errors: loginErrors, isAuthenticated } = useAuthStore();
      const navigate = useNavigate();
    
      const onSubmit = handleSubmit((data) => {
        signin(data);
      });
    
      useEffect(() => {
        if (isAuthenticated) navigate("/home");
      }, [isAuthenticated]);
    
      return (
        <div className="flex items-center justify-center h-[calc(100vh-100px)]">
          <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
            {loginErrors.map((error, i) => (
              <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
                {error}
              </div>
            ))}
            <h1 className="text-2xl font-bold">Login</h1>
            <form onSubmit={onSubmit}>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500">Email is required</p>}
    
              <input
                type="password"
                {...register("password", { required: true })}
                className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}
    
              <button className="bg-indigo-500 text-white px-4 py-2 rounded-md my-2" type="submit">Ingresar</button>
            </form>
    
            <p className="flex gap-x-2 justify-between">
              Don't have an account?{" "}
              <Link className="text-sky-500" to="/register">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      );
    };

export default Login;