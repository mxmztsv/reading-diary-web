import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import NavBar from "./components/NavBar";
import {getUserInfo} from "./controllers/AuthController";
import toast, { Toaster } from 'react-hot-toast';

function App() {
    // const {token, login, logout, userId, ready} = useAuth()
    const userInfo = getUserInfo()
    const isAuthenticated = userInfo.id
    // const isAuthenticated = false
    const routes = useRoutes(isAuthenticated)
    return (
        <AuthContext.Provider value={{
            userId: userInfo.id, name: userInfo.name, surname: userInfo.surname, middleName: userInfo.middleName, isAuthenticated
        }}>
            <Router>
                { isAuthenticated && <NavBar/>}
                <div>
                    {routes}
                </div>
            </Router>
            <Toaster />
        </AuthContext.Provider>
    )
}

export default App;
