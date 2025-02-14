import Display from "./Display"

const Section = ({collection, heading}) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-xl mb-6">{heading}</h1>
            <>
            <Display collection={collection}/>
            </>
        </div>
    )
}

export default Section