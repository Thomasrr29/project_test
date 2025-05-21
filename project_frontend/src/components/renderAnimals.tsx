import { useEffect, useState } from "react"
import type { Animal } from "../types/animalsTypes"
import ErrorComponent from "./ErrorComponent"
import type { AxiosResponse } from "axios";
import { Link } from "react-router-dom";

interface AnimalProps {
    animals : Animal[],
    deleteAnimal: (id: number) => Promise<AxiosResponse<any, any> | undefined>
}

const RenderAnimals: React.FC<AnimalProps> = ({animals, deleteAnimal}) => {

    const [animal, setAnimal] = useState<Animal[] | []>([])

    useEffect(() => {
        setAnimal(animals)
    }, [animals])


    const handleDeleteAnimal = async (id: number) => {

        try {

            const response = await deleteAnimal(id)

            if(response){
                alert("Animal eliminado exitosamente")
                window.location.reload();
            }


        } catch(error){ 
            console.error(error)
        }
    }
    
    const getWikipediaSearchUrl = (animalName: string) => {

        const encodedName = encodeURIComponent(animalName);

        return `https://es.wikipedia.org/wiki/Special:Search?search=${encodedName}`;

    }

    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(520px,1fr))] place-items-center">
            {
                animal.length > 0 ? (

                    animal.map((animal: Animal) => (
                        
                        <Link to={`/animals/${animal.id}`} key={animal.id}>                             
                            <div                              
                                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">                                 
                                <a href="#">                                     
                                    <img className="rounded-t-lg" src={animal.image} alt="" />                                 
                                </a>                                 
                                <div className="p-5">                                     
                                    <a href="#">                                         
                                        <h5 className="mb-2 text-4xl font-bold tracking-tight">{animal.name}</h5>                                         
                                        <span>{animal.type}</span>                                     
                                    </a>                                     
                                    <p className="mb-3 font-normal text-white">{animal.description}</p>                                     
                                    <div className="flex gap-6">                                         
                                        <a href={getWikipediaSearchUrl(animal.name)} className="z-10 inline-flex items-center px-3 py-2 text-sm font-medium text-center                                          text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none                                          focus:ring-blue-300">                                             
                                            Wikipedia                                         
                                        </a>                                         
                                        <button                                          
                                            value={animal.id}                                         
                                            onClick={() => handleDeleteAnimal(animal.id)}                                         
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center                                          text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none                                          focus:ring-red-300">                                             
                                                Eliminar                                         
                                        </button>                                     
                                    </div>                                                                      
                                </div>                             
                            </div>                          
                        </Link>                  
                        
                    ))

                ) : <ErrorComponent message="No hay animales disponibles"/>
            }
        </div>
    )
}

export default RenderAnimals