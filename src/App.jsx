import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {


  return (
    <div className='grid grid-cols-5 h-full overflow-hidden'>
      <div className='col-span-1 overflow-hidden'>
        <Sidebar />
        </div>
        <div className='col-span-4'>
        <Content />
        </div>
    </div>
  )
}

export default App
