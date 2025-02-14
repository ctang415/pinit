import Image from "./Image"
import {dummyCollections, dummyImages, dummyAccounts} from "../dummydata"

const Display = ({collection}) => {
    if (collection) {
        return (
            <div>
                <div className="flex gap-10">
                    {dummyCollections.map(collection  => {
                        return (
                            <div className="flex flex-col">
                                {collection.imagesInCollection.map(img => {
                                    return (
                                        <>
                                            <Image resize={true} image={img.imageId} />
                                        </>
                                    )
                                })}
                                <p className="font-bold">{collection.title}</p>
                                <p>{collection.creator}</p>
                            </div>
                            )
                    })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-wrap justify-between items-center">
                {dummyImages.map(image => {
                    return (
                        <Image resize={false} image={image}/>
                    )
                })
                }
            </div>
        )

    }
}

export default Display