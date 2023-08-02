import { isBrowser } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GlobalStyle from "../components/GlobalStyle";
import Kira from "./Kira";
import Tuto from "./Tuto";
import Main from "./Main";
import Sub from "./Sub";
import SubForm from "./SubForm";
import Map from "./Map";
import Rank from "./Rank";
import OCRForm from "./OCRForm";
import OCRFinish from "./OCRFinish";
import Forbidden from "./403";
import NotFound from "./404";
import MethodNotAllowed from "./405";
import InternalServerError from "./500";
import UnKnown from "./Unknown";

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
              <Route path="/" element={<Kira />} />
              <Route path="/tuto" element={<Tuto />} />
              <Route path="/main" element={<Main />} />
              <Route path="/sub" element={<Sub />} />
              <Route path="/subform" element={<SubForm />} />
              <Route path="/map" element={<Map />} />
              <Route path="/rank" element={<Rank />} />
              <Route path="/ocrform" element={<OCRForm />} />
              <Route path="/ocrfinish" element={<OCRFinish />} />
              <Route path="/403" element={<Forbidden />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/405" element={<MethodNotAllowed />} />
              <Route path="/500" element={<InternalServerError />} />
              <Route path="/unkown" element={<UnKnown />} />
            </Routes>
          </BrowserRouter>
        ) : (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<p>pc 환경입니다</p>} />
            </Routes>
          </BrowserRouter>
        )}
      </GoogleOAuthProvider>
    </>
  );
}
