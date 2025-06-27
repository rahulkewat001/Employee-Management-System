import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import AddEmployee from './components/AddEmployee'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import EmployeeList from './components/EmployeeList'
import UpdateEmployee from './components/UpdateEmployee'

function App() {
  const [count, setCount] = useState(0)
    return (
    <>
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route index element={<EmployeeList/>}></Route>
        <Route path="/" element={<EmployeeList />}></Route>
        <Route path="/employeeList" element={<EmployeeList/>}></Route>
        <Route path="/addEmployee" element={<AddEmployee/>}></Route>
        <Route path="/editEmployee/:id" element={<UpdateEmployee />}></Route>
      </Routes>
    </BrowserRouter> 
    </>
    )
}

export default App
