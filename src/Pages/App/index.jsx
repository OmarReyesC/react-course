import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';
import './App.css'

function App() {

  return (
  
      <div className='bg-green-400'>
        <Home></Home>
        <MyAccount></MyAccount>
        <MyOrder></MyOrder>
        <MyOrders></MyOrders>
        <NotFound></NotFound>
        <SignIn></SignIn>
      </div>
  
  )
}

export default App
