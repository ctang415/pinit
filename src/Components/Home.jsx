import Header from "./Header"
import Tag from "./Tag"

const Home = () => {
    return (
        <>
            <Header/>
            <nav className="p-2">
                <ul className="flex justify-evenly gap-4">
                    <Tag text={"Tag"}/>
                    <Tag text={"Tag"}/>
                    <Tag text={"Tag"}/>
                    <Tag text={"Tag"}/>
                    <Tag text={"Tag"}/>
                    <Tag text={"Tag"}/>
                    <Tag text={"Tag"}/>
                    <Tag text={"Tag"}/>
                </ul>
            </nav>
            <div>
                <h1>Collections</h1>
            </div>
            <div>
                <h1>Images</h1>
            </div>
        </>
    )
}

export default Home