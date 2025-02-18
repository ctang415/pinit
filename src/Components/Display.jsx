import Image from "./Image"
import {dummyCollections, dummyImages, dummyAccounts} from "../dummydata"

const Display = ({collection}) => {
    if (collection) {
        return (
            <div>
                <div className="flex justify-center gap-20">
                    {dummyCollections.map(collection  => {
                        return (
                            <div className="flex flex-col w-60">
                                <div className="grid grid-cols-2 h-40">
                                    {collection.imagesInCollection.map(img => {
                                        return (
                                            <div className="overflow-hidden">
                                                <Image resize={true} image={img.imageId} />
                                            </div>
                                        )
                                    })}
                                </div>
                                <div>
                                    <p className="font-bold">{collection.title}</p>
                                    <p>{collection.creator}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="flex flex-wrap justify-between items-center">
                    {dummyImages.map(image => {
                        return (
                            <Image resize={false} image={image}/>
                        )
                    })
                    }
                </div>
            </div>
        )

    }
}

export default Display