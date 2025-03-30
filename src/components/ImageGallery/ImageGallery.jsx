import ImageCard from '../GalleryCard/ImageCard.jsx';

export default function ImageGallery({images}) {
    return (
        <ul>
	{images.map(({id, imageUrl, alt }) => (
    <li key={id} >
        <ImageCard
        imageUrl={imageUrl || "fallback-image-url.jpg"}
        alt={alt || "No description"}
        />
        
    </li>
    ))}
       </ul>    
  )
}
