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
        // opacity: 0.8,
      }}
      className="flex items-center justify-end w-full"
    >
      <div className="h-1/2 w-1/3 bg-white mr-[15%] rounded-2xl">
        <h1>Sing in</h1>
        <div>
          <p>New User?</p>
          <p>Create an account</p>
        </div>
      </div>
    </div>
  );
}
export default Login;
