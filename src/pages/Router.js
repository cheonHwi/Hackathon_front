import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../Components/GlobalStyle';
import Kira from './Kira';
import Main from "./Main";
import Sub from './Sub';
import Map from './Map';
import Rank from './Rank';

export default function Router() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
      <Routes>
        <Route path="/" element={<Kira />} />
        <Route path="/main" element={<Main />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="/map" element={<Map />} />
        <Route path="/rank" element={<Rank />} />
      </Routes>
    </BrowserRouter>
  );
}
