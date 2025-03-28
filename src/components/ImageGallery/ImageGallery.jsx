import ImageCard from './ImageCard';

export default function ImageGallery({images}) {
    return (
        <>
        <ul>
	{images.map(({id, urls, alt_description }) => (
    <li key={id} >
        <ImageCard
        imageUrl={urls.small}
        alt={alt_description}
        />
    </li>
    ))}
       </ul>
        </>
  )
}