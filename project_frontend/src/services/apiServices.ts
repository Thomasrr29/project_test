import apiClient from "../api/ApiConfig";
import type { CreateAnimalDto, UpdateAnimalDto } from "../types/animalsTypes";

const endpoint = "animals"

export const servicesApi = {

    getAll(){
        return apiClient.get(endpoint)
    },

    getById(id: number){
        return apiClient.get(`${endpoint}/${id}`)
    },

    create(data: CreateAnimalDto){
        return apiClient.post(`${endpoint}/create`, data)
    },

    update(id: number, data: UpdateAnimalDto){
        return apiClient.patch(`${endpoint}/${id}`, data)
    },

    delete(id: number){
        return apiClient.delete(`${endpoint}/${id}`)
    }

}