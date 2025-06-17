 
import './App.css'
import MyButton from './components/Button.tsx';
import MyForm from './components/MyForm.tsx';
import {CounterProvider} from './provider/Counter.tsx';


function App() {
   
  return (
     <>
     <CounterProvider>
       <div>
        <MyForm/>
       </div>
     <div className="App">
      <MyButton 
      text={"click me"}
      onClick={()=>alert("okay")}
      />
     </div>
     </CounterProvider>

     </>
  )
}

export default App
