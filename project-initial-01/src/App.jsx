import './App.css'
import Card from './components/Cards'

function App() {
  const info={
    'name': 'Subigya Shrestha',
    'role':'Full Stack Developer',
    'stars':2,
    'followers':200,
    'jobs':1,
  }
  return (
    <>
    <h1 className='text-black bg-green-500 text-4xl rounded-lg p-4'>Tailwind test</h1>
    <Card details={info}/>
    </>
  )
}

export default App
