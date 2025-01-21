import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

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
        opacity:0.9
      }}
      className="flex items-center justify-end w-full"
    >
      <div className="h-[55%] w-1/3 bg-white mr-[15%] rounded-2xl px-5 py-12">
        <h1 className="text-4xl font-semibold mb-2">Sing in</h1>
        <div className="flex mb-10">
          <p className="text-[#969799] font-semibold">New User ? </p>
          <p className="text-[rgb(60,134,238)] font-semibold ml-1">
            Create an account
          </p>
        </div>
        <div className="flex flex-col mb-10">
          <div className="flex flex-col mb-10">
            <label className="text-sm text-[#9099a6] ">Email</label>
            <Input
              placeholder="drone@gmail.com"
              className="pb-1"
              inputProps={ariaLabel}
            />
          </div>
          <div className="flex  flex-col">
            <label className="text-sm text-[#9099a6] ">Password</label>
            <Input
              placeholder="Enter Your Password"
              className="pb-1"
              inputProps={ariaLabel}
            />
          </div>
        </div>
        <div className="">
            <p className="text-end text-blue-500 font-semibold mb-4">Forgot Password</p>
            <button class="w-full h-11 bg-gradient-to-r from-[#32a6fe] to-blue-600 text-white font-semibold text-lg rounded-full">Sign in</button>
            </div>
      </div>
    </div>
  );
}
export default Login;
