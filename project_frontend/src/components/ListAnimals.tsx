import { useEffect} from "react"
import RenderAnimals from "./renderAnimals"
import { useData } from "../hooks/useData"
import LoaderComponent from "./Loading"
import ErrorComponent from "./ErrorComponent"

const ListAnimalsComponent = () => {

    const {data, error, isLoading, getAnimals, deleteAnimal} = useData()

    useEffect(() => {
        getAnimals()
    }, [])

    if (isLoading){
        return <LoaderComponent color="blue"/>
    }

    if(error){
        return <ErrorComponent message={error}/>
    }


    return (
        <section className="w-full flex flex-col items-center h-screen mt-10 gap-y-12">
            <h1 className="font-extrabold text-5xl">Nuestros animales</h1>
            <div>
                {data && <RenderAnimals animals={data.data} deleteAnimal={deleteAnimal} />}
            </div>

        </section>
    ) 
}

export default ListAnimalsComponent