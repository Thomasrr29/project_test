interface LoaderComponentsProps {
    color: string  
}

const LoaderComponent: React.FC<LoaderComponentsProps> = (props) => {

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-6">
            <div className="flex flex-row gap-2">
                <div className={`w-4 h-4 rounded-full bg-${props.color} animate-bounce`}></div>
                <div className={`w-4 h-4 rounded-full bg-${props.color} animate-bounce [animation-delay:-.3s]`}></div>
                <div className={`w-4 h-4 rounded-full bg-${props.color} animate-bounce [animation-delay:-.5s]`}></div>
            </div>
        </div>
        
    )
}

export default LoaderComponent