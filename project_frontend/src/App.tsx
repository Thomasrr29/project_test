import CreateAnimalComponent from './components/createComponent'
import FooterComponent from './components/footerComponent'
import HeaderComponent from './components/headerComponent'
import ListAnimalsComponent from './components/ListAnimals'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AnimalDetail from './components/searchByIdAnimal'

function App() {

  return (
    <>
      <Router>
      <HeaderComponent/>
        <Routes>
          <Route path="/" element={<ListAnimalsComponent/>}/>
          <Route path="/create" element={<CreateAnimalComponent/>}/>
          <Route path='/animals/:id' element={<AnimalDetail/>}/>
        </Routes>
      <FooterComponent/>
      </Router>
    </>
  )
}

export default App
