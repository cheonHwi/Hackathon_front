import { isBrowser } from "react-device-detect";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../components/GlobalStyle";
import Kira from "./Kira";
import Tutorial from "./Tutorial";
import Main from "./Main";
import Sub from "./Sub";
import Map from "./Map";
import Rank from "./Rank";

export default function Router() {
  return (
    <>
      <GlobalStyle />
      {isBrowser ? (
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Kira />} /> */}
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
            <Route path="/map" element={<Map />} />
            <Route path="/rank" element={<Rank />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}
