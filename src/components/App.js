import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./header";
import Home from "./Home"
import SessionScreen from "./SessionScreen"
import SeatsScreen from "./SeatsScreen";
import Sucess from "./SuccessScreen";
import { useState } from "react";
import Footer from "./footer";
export default function App() {
    const [ListSuccess, ListSuccessSet] = useState({})


    return(
        <BrowserRouter>
            <Header/>
        <Routes>
                <Route path="/" element={<Home ListSuccess={ListSuccess} ListSuccessSet={ListSuccessSet} />}></Route>
                <Route path="/filme/:idMovie" element={<SessionScreen ListSuccess={ListSuccess} ListSuccessSet={ListSuccessSet} />}></Route>
                <Route path="/sessao/:session" element={<SeatsScreen ListSuccess={ListSuccess} ListSuccessSet={ListSuccessSet} />}></Route>
                <Route path="/sucesso" element={<Sucess ListSuccess={ListSuccess} />}></Route>
            </Routes>
            <Footer ListSuccess={ListSuccess} ListSuccessSet={ListSuccessSet} />
        </BrowserRouter>
    )
}