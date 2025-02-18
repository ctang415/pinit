import {dummyImages} from "../dummydata"

const Image = ({image, resize}) => {
    if (resize) {
        return (
            <img src={ dummyImages.find( x => x.id == image).link } alt={dummyImages.find(x => x.id == image).tags[0]}
            className="block w-full h-full object-cover"
            />
        )
    } else {
        return (
            <img src={image.link} alt={`${image.tags[0]} image`}
            className="max-w-3xs"
            />
        )
    }
}

export default Image