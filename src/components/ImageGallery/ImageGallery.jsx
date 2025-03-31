import ImageCard from '../GalleryCard/ImageCard.jsx';

export default function ImageGallery({images, onImageClick}) {
    return (
        <ul>
	{images.map(({id, imageUrl, alt }) => (
    <li key={id} onClick={()=> onImageClick(imageUrl, alt)}>
        <ImageCard
        imageUrl={imageUrl }
        alt={alt}
        /> 
    </li>
    ))}
       </ul>    
  )
}
