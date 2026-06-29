//import { useState } from 'react'


 import Header from './Header.jsx'
 import Languages from './Languages.jsx'
 import Footer from './Footer.jsx'
 import Student from './Student.jsx'
 import List from './List.jsx'
 

// function App() {

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//         </div>
//         <div>
//           <h1>leahkirunyu</h1>
          
//         </div>
 
//       </section>


//     </>
//   )
// }

function App(){


  return(
    <>
    <Header/>
    <Languages/>
    <Footer/>
    <List/> <br></br>
    
  
    <Student name="Spongbob" age={30} isStudent={true}/>
    <Student name="Patric star" age={42} isStudent={false}/> 
  
   
    </>
  );
}


export default App
