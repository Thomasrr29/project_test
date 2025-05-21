type AnimalType = 'AVES' | 'MAMIFEROS' | 'ANFIBIOS' | 'REPTILES' | 'PECES'

export interface Animal {

    id: number 
    name: string 
    type: AnimalType
    description: string 
    link: string 
    image: string 
    deleteAt: Date 
    createdAt: Date 
}


export interface CreateAnimalDto {
    name: string 
    type: AnimalType
    description: string 
    link: string 
    image: string 
}

export interface UpdateAnimalDto {
    name?: string 
    type?: AnimalType
    description?: string 
    link?: string 
    image?: string
}