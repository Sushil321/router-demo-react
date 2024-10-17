
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import User from './Component/User';
import Channel from './Component/Channel';
import ChannelOne from './Component/ChannelOne';
import ChannelTwo from './Component/ChannelTwo';
import ChannelThree from './Component/ChannelThree';
import Login from './Component/Login';
import Protected from './Component/Protected';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
           <Route path="/" element={<Protected Component={Home} />} />
           <Route path="/login" element={<Login/>}/>
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/channel/" element={<Channel />}>
             <Route path="workshops" element={<ChannelOne/>} />
             <Route path="programs" element={<ChannelTwo/>} />
             <Route path="online" element={<ChannelThree/>} />
           </Route>
           <Route path="/about/:name" element={<User />} />
           <Route path="/about/:name" element={<User />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
