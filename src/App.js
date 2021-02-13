import './App.scss'
import SmallComponent from './components/SmallComponent'

function App() {

  return (
    <div className="App container-max">
      <div className="row padding-top-150">
        <div className="column radius-6 bg-gray-light">Content</div>
        <div className="column radius-6 bg-dark text-white">Content here</div>
        <div className="column radius-6 bg-gray-darker text-white">More content</div>
        <div className="column radius-6 bg-white text-blue">Hello content</div>
      </div>
      <SmallComponent
        title = "This is my component"
        tagline = "My component tagline"
      ></ SmallComponent>
    </div>
  )
}

export default App
