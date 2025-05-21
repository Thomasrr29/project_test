interface ErrorComponentProps {
    message: string
}


const ErrorComponent: React.FC<ErrorComponentProps> = ({message}) => {


    return ( 
        <div>
            <p>{message}</p>
        </div>
    )
}

export default ErrorComponent