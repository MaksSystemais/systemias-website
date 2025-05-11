import Image from 'next/image';

export default function CustomImage({ src, alt, ...otherProps }) {
  return (
    <figure className="aspect-video relative border border-gray-200 dark:border-gray-800 overflow-hidden">
      <Image
        className="object-cover object-top"
        src={src}
        alt={alt || ''}
        fill={true}
        {...otherProps}
      />
    </figure>
  );
}
