import { useEffect, type FormEvent } from 'react'
import { useData } from './hooks/useData'

function App() {

  const {data, getData} = useData('user')

  useEffect(() => {
    console.log(data)
  }, [data])

  const submit = async (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    const data = await getData()
    console.log(data)   

  }

  return (
    <section className='w-full'>
      <form 
      className='flex flex-col gap-6 p-4 justify-center items-center h-screen'
      onSubmit={submit} method='post'>
        <input name="name" className="p-4" type="text" placeholder='ingresa tu nombre: ' />
        <input name="age" className="p-4" type="number" placeholder='ingresa tu edad: ' />
        <button type='submit'>Mostrar datos</button>
      </form>
      <p>SITIO WEB</p>
    </section>
  )
}

export default App
