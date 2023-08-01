import { isBrowser } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import GlobalStyle from "../Components/GlobalStyle";
import Kira from "./Kira";
import Tutorial from "./Tutorial";
import Main from "./Main";
import Sub from "./Sub";
import SubForm from "./SubForm";
import Map from "./Map";
import Rank from "./Rank";

export default function Router() {
  // env하기
  const clientId =
    "29938135348-3tqo6jrs0nflj6dba94fctddj9l0fl4c.apps.googleusercontent.com";
  return (
    <>
      <GlobalStyle />
      <GoogleOAuthProvider clientId={clientId}>
        {isBrowser ? (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<p>pc 환경입니다</p>} />
              {/* <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/main" element={<Main />} />
          <Route path="/sub" element={<Sub />} />
          <Route path="/map" element={<Map />} />
          <Route path="/rank" element={<Rank />} /> */}
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Kira />} />
              <Route path="/tutorial" element={<Tutorial />} />
              <Route path="/main" element={<Main />} />
              <Route path="/sub" element={<Sub />} />
              <Route path="/subform" element={<SubForm />} />
              <Route path="/map" element={<Map />} />
              <Route path="/rank" element={<Rank />} />
              <Route path="/*" element={<div />} />
            </Routes>
          </BrowserRouter>
        )}
      </GoogleOAuthProvider>
    </>
  );
}
