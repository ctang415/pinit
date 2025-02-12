import Display from "./Display"

const Section = ({heading}) => {
    return (
        <div>
            <h1 className="text-xl">{heading}</h1>
            <>
            <Display/>
            </>
        </div>
    )
}

export default Section