import { AnimalType } from "src/types/animal_types.enum";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Animal {
    
    @PrimaryGeneratedColumn()
    id: number 

    @Column()
    name: string 

    @Column({
        type: "enum",
        enum: AnimalType,
    })
    type: AnimalType

    @Column()
    description: string 

    @Column()
    link: string 

    @Column()
    image: string 

    @DeleteDateColumn()
    deleteAt: Date 

    @CreateDateColumn()
    createdAt: Date 

}
