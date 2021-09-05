
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets'
import Login from './components/Login';


function App() {
const user = null;
return (
  //! if there is no active user, display the login page
  <div className='app'>
{!user ? (
<Login/>
) : (
  <>
  <Header/>

  <div className='app_body'>
<Sidebar/>
<Feed/>
<Widgets/>
  </div>
  </>

)}



  </div>
)




}

export default App;
