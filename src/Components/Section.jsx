import Display from "./Display"

const Section = ({collection, heading}) => {
    return (
        <div>
            <h1 className="text-xl">{heading}</h1>
            <>
            <Display collection={collection}/>
            </>
        </div>
    )
}

export default Section