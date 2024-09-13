import React , {createContext ,  useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ProblemPage from './components/ProblemPage';
import MessagePopup from './lib/MessagePopup';



export const setPopupContext = createContext() ;



const App = () => {
   const [popup, setPopup] = useState({
      open: false,
      severty: '',
      message: '',
   });
   // console.log(popup);
   return (

     <setPopupContext.Provider value={setPopup}>
         <Routes>
            <Route path='/'          element={<Home />} />
            <Route path='/login'     element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='data-structure/:problemName' element={<ProblemPage /> } />
         </Routes>
         <MessagePopup
            open={popup.open}
            severty={popup.severty}
            message={popup.message}
            setOpen={(status) => {
               setPopup({
                  ...popup,
                  open : status,
               })
            }}
         />
         </setPopupContext.Provider>
  )
}

export default App