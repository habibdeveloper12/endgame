
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Complete from './Pages/Complete/Complete';
import Todo from './Pages/Todo/Todo';
import Calendar from './Pages/Calendar/Calendar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="complete" element={<Complete />} />
        <Route path="todo" element={<Todo />} />
        <Route path="calender" element={<Calendar />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>

  );
}

export default App;
