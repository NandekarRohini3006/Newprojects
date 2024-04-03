

import {Route,Routes} from 'react-router-dom'
import Login from "./Component/Login"
import Home from "./Component/Home"
import Job from "./Component/Job"
import NotFound from './Component/NotFound'



const App=()=>(
 <Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/Login' element={<Login/>}></Route>
<Route path='/Job' element={<Job/>}></Route>
<Route path='/*' element={<NotFound/>}></Route>




 </Routes>

)
export default App;