import './App.css'
import LandingScreen from './screens/LandingScreen'
import LoginScreen from './screens/LoginScreen'
import MyDayPreviewScreen from './screens/MyDayPreviewScreen'
import MyDayScreen from './screens/MyDayScreen'
import PersonalInfoScreen from './screens/PersonalInfoScreen'
import RegisterScreen from './screens/RegisterScreen';

import { BrowserRouter, Route, Routes } from 'react-router';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginScreen/>}/>
        <Route path="register" element={<RegisterScreen/>}>
          <Route path='Personal' element={<PersonalInfoScreen/>}/>
        </Route>
        <Route path='MyDay' element={<MyDayScreen/>}>
          <Route path='MyDaySummary' element={<MyDayPreviewScreen/>}  />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
