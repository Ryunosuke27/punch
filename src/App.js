import React,{useState} from 'react';
import './App.css';
import Home from './components/HomeContent'
import Punch from './components/PunchContent'
import Profile from './components/ProfileContent'
import Infrastructure from './components/InfrastructureContent'
import FeatureTask from './components/FeatureTaskContent'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [content, setContent] = useState(0)
  return (
    <div className="root">  
      <div className="header">
        <Header setContent={setContent}/>
      </div>
      <div className="body">
      
        {(() => {
          if(content === 0){
              return <Home/>
          }else if(content === 1){
              return <Punch/> 
          }else if(content === 2){
              return <Profile/>
          }else if(content === 3){
              return <Infrastructure/>
          }else if(content === 4){
              return <FeatureTask/>
          }
        }) ()}
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
