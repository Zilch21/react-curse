import { Navigate, Route, Routes, Link } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navabar } from "./Navabar"


export const MainApp = () => {
    return (
        <UserProvider>
            <h1>Titulazo </h1>
            <Navabar />
            <hr />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="about" element={<AboutPage />} />

                {/*<Route path="/*" element={<LoginPage/>} />*/}
                <Route path="/*" element={<Navigate to="/login" />} />

            </Routes>
        </UserProvider>
    )
}

