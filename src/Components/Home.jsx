import { useState } from "react"
import Header from "./Header"
import Section from "./Section"
import Tag from "./Tag"
import {dummyImages} from "../dummydata"

const Home = () => {
    const [login, setLogin] = useState(false);

    return (
        <>
            <Header login={login} setLogin={setLogin}/>
            <nav className="p-6">
                <ul className="flex justify-evenly gap-4">
                    {dummyImages.map(x => { 
                        return (x.tags[0] ? 
                            <Tag text={`${x.tags[0]}`}/>
                         : null ) 
                        })
                    }
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