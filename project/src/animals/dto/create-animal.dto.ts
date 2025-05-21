import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsString } from "class-validator"
import { AnimalType } from "src/types/animal_types.enum"
import { Animal } from "../entities/animal.entity"

export class CreateAnimalDto {
        @ApiProperty({
            description: 'Animal name',
            example: 'Lion',
        }) 
        @IsString()
        name: string 

        @ApiProperty({
            description: 'Animal Specie',
            example: AnimalType.MAMIFEROS,
            enum: AnimalType,
            enumName: 'AnimalType'
        })
        @IsEnum(AnimalType)
        type: AnimalType


        @ApiProperty({
            description: 'Animal description',
            example: "The lion is a species in the family Felidae and a member of the genus Panthera.",
        })
        @IsString()
        description: string 

        @ApiProperty({
            description: 'Animal link',
            example: 'https://example.com/lion',
        })
        @IsString()
        link: string 

        @ApiProperty({
            description: 'Animal image',
            example: 'https://example.com/lion.jpg',
        })
        @IsString()
        image: string 

}
