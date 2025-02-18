import Display from "./Display"

const Section = ({collection, heading}) => {
    return (
        <div className="flex flex-col">
            <h1 className="text-2xl my-6 font-bold">{heading}</h1>
            <>
            <Display collection={collection}/>
            </>
        </div>
    )
}

export default Section