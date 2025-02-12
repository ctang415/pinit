import Header from "./Header"
import Section from "./Section"
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
            <Section heading={"Collections"}/>
            <Section heading={"Images"}/>
        </>
    )
}

export default Home