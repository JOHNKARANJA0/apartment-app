import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Layout from "./Layout";
import NoPage from './components/Nopage';
import Login from './components/Login';
import Register from './components/Register';

import Dashboard from './components/Dashboard';
import { UserProvider } from './components/context/UserContext';
import { TaskProvider } from './components/context/ApartmentContext';

function App() {

  return (     
     <BrowserRouter>
     <UserProvider>
      <TaskProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </TaskProvider>
    </UserProvider>
    </BrowserRouter>
  )
}

export default App