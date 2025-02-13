import Image from "./Image"

const Display = ({collection}) => {
    if (collection) {
        return (
            <div>
                <div className="flex">
                    <Image/>
                    <Image/>
                    <Image/>
                    <Image/>
                </div>
                <p>Name</p>
                <p>Creator</p>
            </div>
        )
    } else {
        return (
            <div>
                <Image/>
            </div>
        )

    }
}

export default Display