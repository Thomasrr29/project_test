import { useCallback, useState } from "react"
import { servicesApi } from "../services/apiServices"
import type { CreateAnimalDto, UpdateAnimalDto } from "../types/animalsTypes"

export const useData = () => {

    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)


    const getAnimals = useCallback(async () => {

        setIsLoading(true)

        try {
            
            const data = await servicesApi.getAll()
            setData(data)
            return data 

        } catch(error){

            setError(error)
            console.error(`There was a problem ${error}`)

        } finally {

            setIsLoading(false)
        }

    }, [])

    const getAnimalById = async (id: number) => {

        setIsLoading(true)

        try {
            
            const data = await servicesApi.getById(id)
            setData(data)
            return data 

        } catch(error){

            setError(error)
            console.error(`There was a problem ${error}`)

        } finally {

            setIsLoading(false)
        }

    }


    const createAnimal = async (animalCreate: CreateAnimalDto) => {

        setIsLoading(true)

        try {

            const response = await servicesApi.create(animalCreate)
            setData(response)
            return response

        } catch(error){

            setError(error)
            console.error("Error creando al usuario")

        } finally {
            setIsLoading(false)
        }
        

    }

    const updateAnimal = async (id: number, animalUpdate: UpdateAnimalDto) => {

        setIsLoading(true)

        try {

            const response = await servicesApi.update(id, animalUpdate)
            setData(response)
            return response

        } catch(error){

            setError(error)
            console.error("Error actualizando al usuario")

        } finally {
            setIsLoading(false)
        }
        

    }

    const deleteAnimal = async (id: number) => {

        setIsLoading(true)

        try {

            const response = await servicesApi.delete(id)
            return response

        } catch(error){

            setError(error)
            console.error("Error eliminando al usuario")

        } finally {
            setIsLoading(false)
        }
    }


    return {
        data, 
        isLoading,
        error,
        getAnimals,
        getAnimalById,
        createAnimal,
        updateAnimal,
        deleteAnimal
    }

}