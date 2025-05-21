import { useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { useData } from "../hooks/useData";

const AnimalDetail = () => {

  const { id } = useParams<{ id: string }>();
  const {data, error, isLoading, getAnimalById } = useData()

  useEffect(() => {


    const fetchAnimalDetails = async () => {

      if (!id) return;

      try {

       await getAnimalById(Number(id));

      } catch (error) {
        console.error("Error fetching animal details:", error);
      } 
    };

    fetchAnimalDetails();
  }, [id]);

  const animal = data?.data 

  const getWikipediaSearchUrl = (animalName: string) => {
    const encodedName = encodeURIComponent(animalName);
    return `https://es.wikipedia.org/wiki/Special:Search?search=${encodedName}`;
  };

  if (isLoading) {
    return <div className="text-center py-8">Cargando...</div>;
  }

  if (error || !data) {
    return <ErrorComponent message={error || "No se encontró el animal"} />;
  }

  return (
    (
        animal && (
            <div className="container w-full px-4 py-8">
                <div className="w-1/2 mx-auto bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 overflow-hidden">
                
                    <img 
                    className="w-full h-82 object-cover object-center rounded-lg" 
                    src={animal.image} 
                    alt={`Imagen de ${animal.name}`} 
                    />
                
                    <div className="p-6">
                    <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                        {animal.name}
                    </h1>
                    
                    <div className="mb-4">
                        <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {animal.type}
                        </span>
                    </div>
                    
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                        Descripción
                        </h2>
                        <p className="text-gray-700 dark:text-gray-300">
                        {animal.description}
                        </p>
                    </div>
                    
                    
                    <div className="flex gap-4">
                        <Link 
                        to="/" 
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300"
                        >
                        Volver a la lista
                        </Link>
                        
                        <a 
                        href={getWikipediaSearchUrl(animal.name)} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                        >
                        Wikipedia
                        </a>
                    </div>
                    </div>
                </div>
            </div>
        )
    )
  );
};

export default AnimalDetail;