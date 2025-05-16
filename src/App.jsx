import './App.css'
import LandingScreen from './screens/LandingScreen'
import LoginScreen from './screens/LoginScreen'
import MyDayPreviewScreen from './screens/MyDayPreviewScreen'
import MyDayScreen from './screens/MyDayScreen'
import PersonalInfoScreen from './screens/PersonalInfoScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {

  return (
    <div className='h-full'>
      {/* <LoginScreen/> */}
      {/* <LandingScreen/> */}
      {/* <RegisterScreen/> */}
      <PersonalInfoScreen/>
      {/* <MyDayScreen/> */}
      {/* <MyDayPreviewScreen/> */}
    </div>
  )
}

export default App
