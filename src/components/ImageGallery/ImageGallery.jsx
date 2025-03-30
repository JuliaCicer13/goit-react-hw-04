import ImageCard from '../GalleryCard/ImageCard.jsx';

export default function ImageGallery({images}) {
    return (
        <ul>
	{images.map(({id, imageUrl, alt }) => (
    <li key={id} >
        <ImageCard
        imageUrl={imageUrl }
        alt={alt}
        />
        
    </li>
    ))}
       </ul>    
  )
}
