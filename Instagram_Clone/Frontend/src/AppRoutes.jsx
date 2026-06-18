import {BrowserRouter,Routes,Route} from 'react-router'
import Login from './features/auth/Login'
import Register from './features/auth/Register'

function AppRoutes(){
    <BrowserRouter>
    <Routes>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
}

export default AppRoutes