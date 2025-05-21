import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Animal } from './entities/animal.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnimalsService {

  constructor(@InjectRepository(Animal) 
  private animalRepository: Repository<Animal>){}


  async create(createAnimalDto: CreateAnimalDto) {
    
    try {

      const create_animal = this.animalRepository.create(createAnimalDto)
  
      return await this.animalRepository.save(create_animal)
      
    } catch (error){

      throw new Error(`Error creating animal`)
    
    }


  }

  async findAll() {
    return await this.animalRepository.find()
  }

  async findOne(id: number) {

    const animal = await this.animalRepository.findOneBy({id})

    if(!animal){
      throw new NotFoundException(`Animal wasnt found`)
    }

    return animal

  }

  async update(id: number, updateAnimalDto: UpdateAnimalDto) {
    
    const animal = await this.animalRepository.preload({
      id, 
      ...updateAnimalDto
    })

    if(!animal){
      throw new NotFoundException(`Animal with id ${id} not found`)
    }

    return await this.animalRepository.save(animal)

  }

  async remove(id: number) {
    return await this.animalRepository.softDelete(id)
  }
}
