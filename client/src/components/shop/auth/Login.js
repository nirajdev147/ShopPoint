// import React, { Fragment, useState, useContext, useEffect } from "react";
// import { loginReq } from "./fetchApi";
// import { LayoutContext } from "../index";



// const Login = (props) => {
//   const { data: layoutData, dispatch: layoutDispatch } = useContext(LayoutContext);

//   const [data, setData] = useState({
//     email: "",
//     password: "",
//     error: false,
//     loading: false, // Initialize loading as false
//   });

//   const [rememberMe, setRememberMe] = useState(false);

//   // Retrieve stored email from localStorage when component mounts
//   useEffect(() => {
//     const storedEmail = localStorage.getItem("email");
//     if (storedEmail) {
//       setData((prevData) => ({ ...prevData, email: storedEmail }));
//       setRememberMe(true);
//     }
//   }, []);

//   const alert = (msg) => <div className="text-xs text-red-500">{msg}</div>;

//   const formSubmit = async () => {
//     setData((prevData) => ({ ...prevData, loading: true }));
//     try {
//       let responseData = await loginReq({
//         email: data.email,
//         password: data.password,
//       });
//       if (responseData.error) {
//         setData({
//           ...data,
//           loading: false,
//           error: responseData.error,
//           password: "",
//         });
//       } else if (responseData.token) {
//         setData({ email: "", password: "", loading: false, error: false });
//         localStorage.setItem("jwt", JSON.stringify(responseData));

//         // Store or remove email based on "Remember Me"
//         if (rememberMe) {
//           localStorage.setItem("email", data.email);
//         } else {
//           localStorage.removeItem("email");
//         }

//         window.location.href = "/";
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <Fragment>
//       <div className="text-center text-2xl mb-6">Login</div>
//       {layoutData.loginSignupError && (
//         <div className="bg-red-200 py-2 px-4 rounded">
//           You need to login for checkout. Doesn't have an account? Create a new one.
//         </div>
//       )}
//       <form className="space-y-4">
//         <div className="flex flex-col">
//           <label htmlFor="email">
//             Email address
//             <span className="text-sm text-gray-600 ml-1">*</span>
//           </label>
//           <input
//             onChange={(e) => {
//               setData({ ...data, email: e.target.value, error: false });
//               layoutDispatch({ type: "loginSignupError", payload: false });
//             }}
//             value={data.email}
//             type="text"
//             id="email"
//             className={`${!data.error ? "" : "border-red-500"} px-4 py-2 focus:outline-none border`}
//           />
//           {!data.error ? "" : alert(data.error)}
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="password">
//             Password<span className="text-sm text-gray-600 ml-1">*</span>
//           </label>
//           <input
//             onChange={(e) => {
//               setData({ ...data, password: e.target.value, error: false });
//               layoutDispatch({ type: "loginSignupError", payload: false });
//             }}
//             value={data.password}
//             type="password"
//             id="password"
//             className={`${!data.error ? "" : "border-red-500"} px-4 py-2 focus:outline-none border`}
//           />
//           {!data.error ? "" : alert(data.error)}
//         </div>
//         <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
//           <div>
//             <input
//               type="checkbox"
//               id="rememberMe"
//               className="px-4 py-2 focus:outline-none border mr-1"
//               checked={rememberMe}
//               onChange={() => setRememberMe(!rememberMe)}
//             />
//             <label htmlFor="rememberMe">Remember me</label>
//           </div>
//           <a className="block text-gray-600" href="/">
//             Forgot your password?
//           </a>
//         </div>
//         <div
//           onClick={formSubmit}
//           style={{ background: "#303031" }}
//           className="font-medium px-4 py-2 text-white text-center cursor-pointer"
//         >
//           Login
//         </div>
//       </form>
//     </Fragment>
//   );
// };

// export default Login;




import React, { Fragment, useState, useContext, useEffect } from "react";
import { loginReq } from "./fetchApi";
import { LayoutContext } from "../index";
import { useSnackbar } from 'notistack';



const Login = (props) => {
  const { enqueueSnackbar } = useSnackbar();
  const { data: layoutData, dispatch: layoutDispatch } = useContext(LayoutContext);

  const [data, setData] = useState({
    email: "",
    password: "",
    error: false,
    loading: false, // Initialize loading as false
  });

  const [rememberMe, setRememberMe] = useState(false);

  // Retrieve stored email from localStorage when component mounts
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setData((prevData) => ({ ...prevData, email: storedEmail }));
      setRememberMe(true);
    }
  }, []);


  const formSubmit = async () => {
    setData((prevData) => ({ ...prevData, loading: true }));
    try {
      let responseData = await loginReq({
        email: data.email,
        password: data.password,
      });
      if (responseData.error) {
        setData({
          ...data,
          loading: false,
          error: responseData.error,
          password: "",
        });
        enqueueSnackbar(responseData.error, { variant: 'error', autoHideDuration: 2000 });
      } else if (responseData.token) {
        setData({ email: "", password: "", loading: false, error: false });
        localStorage.setItem("jwt", JSON.stringify(responseData));


        // Store or remove email based on "Remember Me"
        if (rememberMe) {
          localStorage.setItem("email", data.email);
        } else {
          localStorage.removeItem("email");
        }

        enqueueSnackbar("Login successful!", { variant: 'success', autoHideDuration: 2000 });

       enqueueSnackbar('Login Completed Successfully..!', { variant: 'success' })

        window.location.href = "/";

      }    
    } catch (error) {
      console.log(error);
      enqueueSnackbar("An unexpected error occurred.", { variant: 'error', autoHideDuration: 2000 });
    }
  };

  return (
    <Fragment>
      <div className="text-center text-2xl mb-6">Login</div>
      {layoutData.loginSignupError && (
        <div className="bg-red-200 py-2 px-4 rounded">
          You need to login for checkout. Doesn't have an account? Create a new one.
        </div>
      )}
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="email">
            Email address
            <span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, email: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.email}
            type="text"
            id="email"
            className={`${!data.error ? "" : "border-red-500"} px-4 py-2 focus:outline-none border`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">
            Password<span className="text-sm text-gray-600 ml-1">*</span>
          </label>
          <input
            onChange={(e) => {
              setData({ ...data, password: e.target.value, error: false });
              layoutDispatch({ type: "loginSignupError", payload: false });
            }}
            value={data.password}
            type="password"
            id="password"
            className={`${!data.error ? "" : "border-red-500"} px-4 py-2 focus:outline-none border`}
          />
        </div>
        <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-center">
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              className="px-4 py-2 focus:outline-none border mr-1"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <a className="block text-gray-600" href="/">
            Forgot your password?
          </a>
        </div>
        <div
          onClick={formSubmit}
          style={{ background: "#303031" }}
          className="font-medium px-4 py-2 text-white text-center cursor-pointer"
        >
          Login
        </div>
      </form>
    </Fragment>
  );
};

export default Login;
