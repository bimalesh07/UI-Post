
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Post from './components/Post'
import Rightbar from './components/Rightbar'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="side-bar">
          <Sidebar />
        </div>
        <div className="post-bar">
          <Post/>
        </div>
        <div className="right-bar">
          <Rightbar />
        </div>
      </div>
    </>
  );
}

export default App
