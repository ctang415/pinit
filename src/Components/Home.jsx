import Header from "./Header"
import Section from "./Section"
import Tag from "./Tag"

const Home = () => {
    return (
        <>
            <Header/>
            <nav className="p-6">
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
            <div className="p-6">
                <Section collection={true} heading={"Collections"}/>
                <Section collection={false} heading={"Images"}/>
            </div>
        </>
    )
}

export default Home