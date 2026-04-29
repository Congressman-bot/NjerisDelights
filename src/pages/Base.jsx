import Footer from "../components/Footer"
import Header from "../components/Header"
// import Home from "./Home"
// import About from "./About"
import { Outlet } from "react-router-dom"


function Base(){
    return (
        <div className="min-h-screen relative overflow-x-hidden">
            <Header />
            <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>
            <main className="relative z-10 pt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Base