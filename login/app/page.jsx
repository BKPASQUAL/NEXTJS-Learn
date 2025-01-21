import Input from "@mui/material/Input";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

function Login() {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/dronebg.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100vw",
        opacity: 0.9,
      }}
      className="flex items-center justify-end w-full"
    >
      <div className="h-auto w-1/3 bg-white mr-[15%] rounded-2xl px-5 py-14">
        <h1 className="text-4xl font-semibold mb-2">Sign in</h1>
        <div className="flex mb-10">
          <p className="text-[#969799] font-semibold">New User?</p>
          <p className="text-[rgb(60,134,238)] font-semibold ml-1 cursor-pointer">
            Create an account
          </p>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex flex-col mb-10">
            <label className="text-sm text-[#9099a6]">Email</label>
            <Input placeholder="drone@gmail.com" className="pb-1" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-[#9099a6]">Password</label>
            <Input placeholder="Enter Your Password" className="pb-1" />
          </div>
        </div>
        <div>
          <p className="text-end text-blue-500 font-semibold mb-4 cursor-pointer	">
            Forgot Password
          </p>
          <button className="w-full h-11 bg-gradient-to-r from-[#32a6fe] to-blue-600 text-white font-semibold text-lg rounded-full hover:bg-gradient-to-l hover:from-[#32a6fe] hover:to-blue-600 hover:scale-x-[102%] transition-all duration-700">
            Sign in
          </button>
        </div>
        <div className="mt-10 flex justify-center space-x-5">
          <div className="flex items-center space-x-2 cursor-pointer	">
            <FacebookIcon style={{ color: "#3b5998" }} />
            <p className="font-semibold text-[#3b5998]	">Facebook</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer	">
            <GoogleIcon style={{ color: "#DB4437" }} />
            <p className="font-semibold text-[#DB4437]">Google</p>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer	">
            <AppleIcon style={{ color: "#000000" }} />
            <p className="font-semibold text-[#000000]">Apple</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
