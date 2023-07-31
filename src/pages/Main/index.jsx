import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index() {
  const clientId =
    "29938135348-igenjleu0uul5gv4gm5oaum61b36q00q.apps.googleusercontent.com";

  // const navigate = useNavigate();

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={(res) => {
            axios
              .post(
                "http://10.10.98.60:5000/GoogleLogin/userInfo",
                {
                  credential: jwtDecode(res.credential),
                },
                {
                  headers: {},
                }
              )
              .then((res) => {
                console.log(res);
                // if (res.status === 200) {
                //   navigate("/main", {
                //     state: {
                //       value: true,
                //       name: res.data,
                //     },
                //   });
                // }
              })
              .catch((error) => {
                console.log(error);
                toast.error("로그인을 실패했습니다.");
              });
          }}
          onFailure={(err) => {
            console.error(err);
          }}
        />
      </GoogleOAuthProvider>
      <ToastContainer
        position="top-center"
        autoClose={800}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
      />
    </>
  );
}
