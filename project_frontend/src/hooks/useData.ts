import { useState } from "react"
import apiClient from "../api/ApiConfig"

export const useData = (endpoint: string) => {

    
    const [data, setData] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>(null)


    const getData = async () => {

        setIsLoading(true)

        try {
            
            const data = await apiClient.get(endpoint)
            setData(data)
            return data 

        } catch(error){

            setError(error)
            console.error(`There was a problem ${error}`)

        } finally {

            setIsLoading(false)
        }

    }


    const postData = async (data: any) => {

        setIsLoading(true)

        try {

            const response = apiClient.post('user/create', data)
            setData(response)
            return response

        } catch(error){

            setError(error)
            console.error("Error creando al usuario")

        } finally {
            setIsLoading(false)
        }
        

    }



    return {
        data, 
        isLoading,
        error,
        getData,
        postData
    }

}