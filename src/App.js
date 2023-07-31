import './App.css';

import Header from "./component/Header/Header"
import Servics from "./component/Services/Services"
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'
import About from './component/About/About';
import Projects from './component/Projects/Projects';
import Hero from './component/Hero/Hero';
import Practice from './Practice';
function App() {


  const fruits = ["mangoe", "apples", "banana", "pineapple", "Choqandar", "appricot"]
  return (
    <div className="App">

      


     <main className='components'>
       <Header />
       <Hero />
       <About />
       <Servics />
       <Practice fruitsList = {fruits}/>
       <Projects />
       <Contact />
       <Footer />
     </main>

      
    </div>
  );
}


export default App;
