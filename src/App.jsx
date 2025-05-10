import './App.css'
import LandingScreen from './screens/LandingScreen'
import LoginScreen from './screens/LoginScreen'
import PersonalInfoScreen from './screens/PersonalInfoScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {

  return (
    <div className='h-full'>
      {/* <LoginScreen/> */}
      {/* <LandingScreen/> */}
      {/* <RegisterScreen/> */}
      <PersonalInfoScreen/>
    </div>
  )
}

export default App
