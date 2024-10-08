import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
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
import Logout from "./Logout";

const queryClient = new QueryClient();

export default function Router() {
  // env하기
  const clientId =
    "29938135348-3tqo6jrs0nflj6dba94fctddj9l0fl4c.apps.googleusercontent.com";
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <GoogleOAuthProvider clientId={clientId}>
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
              <Route path="/logout" element={<Logout />} />
              <Route path="/403" element={<Forbidden />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/405" element={<MethodNotAllowed />} />
              <Route path="/500" element={<InternalServerError />} />
              <Route path="/unknown" element={<UnKnown />} />
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
