export default function ImageCard ({ imageUrl, alt}) {

return (
    <div>
        <img src={imageUrl} alt={alt} />
    </div>
)

}