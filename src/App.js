import React, {  useContext } from 'react'
import { useCount } from './index';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page2 from './page2';
const Page = () => {
  const { value, setValue } = useCount();
  // const [count, setCount] = useState(0);

  const incrementCount = () => {
    setValue(value => value + 1);
  }

  return (
    <div style={{ backgroundColor: value % 2 === 0 ? "blue" : 'green' }}>
      <p>page 1</p>
      <button onClick={incrementCount}>increment</button>
      <p>{value}</p>
      <Link to={`/page2` }>page2</Link>
    </div>
  )
}

const App = () => {
  return (

    <Router>
   
        <Routes>
          <Route path="/" Component={Page}></Route>
          <Route path='/page2' Component={Page2}></Route>
        </Routes>
 
    </Router>

  )
}
export default App;

// export default Page;
