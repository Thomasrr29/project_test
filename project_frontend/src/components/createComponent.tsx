import { useData } from "../hooks/useData";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { CreateAnimalDto } from "../types/animalsTypes";
import LoaderComponent from "./Loading";
import ErrorComponent from "./ErrorComponent";



interface AnimalFormValues {
    name: string 
    type:  'AVES' | 'MAMIFEROS' | 'ANFIBIOS' | 'REPTILES' | 'PECES';
    description: string 
    link: string 
    image: string 
  
}


const CreateAnimalComponent = () => {

    const {isLoading, error, createAnimal} = useData()

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<AnimalFormValues>({
        defaultValues: {
            name: "",
            type: "AVES",
            description: "",
            image: "",
            link: ""
        }
    })

    const onSubmit: SubmitHandler<AnimalFormValues> = async (data: CreateAnimalDto) => {

        try {
        
            const values = await createAnimal(data)
            
            if(values){
                reset()
                alert("animal created sucessfully")
            }

        } catch(error){ 

            console.error(`There was a problem ${error}`)

        }
    }


    if (isLoading) return <LoaderComponent color="blue"/>

    if(error) return <ErrorComponent message={error} />

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-500 rounded-lg shadow-lg my-20">
            <h1 className="text-2xl font-bold mb-6 text-center">Crear Nuevo Animal</h1>
            
            {/* Muestra errores si existen */}
            {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
                {typeof error === 'string' ? error : 'Ocurrió un error al crear el animal'}
                </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Campo de nombre */}
                <div className="form-group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre:
                </label>
                <input 
                    id="name"
                    className={`w-full px-3 py-2 border rounded-md ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    {...register("name", { 
                    required: "El nombre es obligatorio",
                    minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" }
                    })} 
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
                </div>
                
                {/* Campo de especie */}
                <div className="form-group">
                <label htmlFor="species" className="block text-sm font-medium text-gray-700 mb-1">
                    Especie:
                </label>
                <select 
                    id="type"
                    className="w-full px-3 py-2 border border-blue-500 rounded-md bg-gray-500"
                    {...register("type", { required: "La especie es obligatoria" })}
                >
                    <option value="AVES">Aves</option>
                    <option value="MAMIFEROS">Mamíferos</option>
                    <option value="ANFIBIOS">Anfibios</option>
                    <option value="REPTILES">Reptiles</option>
                    <option value="PECES">Peces</option>
                </select>
                {errors.type && (
                    <p className="mt-1 text-sm text-red-600">{errors.type.message}</p>
                )}
                </div>
                
                {/* Campo de descripción */}
                <div className="form-group">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Descripción:
                </label>
                <textarea 
                    id="description" 
                    rows={5}
                    className={`w-full px-3 py-2 border rounded-md ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                    {...register("description", { 
                    required: "La descripción es obligatoria",
                    minLength: { value: 10, message: "La descripción debe tener al menos 10 caracteres" }
                    })}
                ></textarea>
                {errors.description && (
                    <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
                )}
                </div>
                
                {/* Campo de imagen */}
                <div className="form-group">
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    URL de la imagen:
                </label>
                <input 
                    type="text" 
                    id="image"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    {...register("image", { 
                    pattern: { 
                        value: /^(https?:\/\/.+)$/i,
                        message: "Ingresa una URL de imagen válida" 
                    }
                    })}
                />
                {errors.image && (
                    <p className="mt-1 text-sm text-red-600">{errors.image.message}</p>
                )}
                </div>
                
                {/* Campo de wikipedia */}
                <div className="form-group">
                <label htmlFor="wikipedia" className="block text-sm font-medium text-gray-700 mb-1">
                    URL de Wikipedia:
                </label>
                <input 
                    type="text" 
                    id="wikipedia"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    {...register("link", { 
                    pattern: { 
                        value: /^(https?:\/\/.*wikipedia\.org\/wiki\/.*)$/i, 
                        message: "Ingresa una URL de Wikipedia válida" 
                    }
                    })}
                />
                {errors.link && (
                    <p className="mt-1 text-sm text-red-600">{errors.link.message}</p>
                )}
                </div>
                
                {/* Botón de envío */}
                <button 
                type="submit" 
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-md disabled:opacity-50"

                >
                {isLoading ? 'Creando...' : 'Crear Animal'}
                </button>
            </form>
        </div>
        
    )
}

export default CreateAnimalComponent; 