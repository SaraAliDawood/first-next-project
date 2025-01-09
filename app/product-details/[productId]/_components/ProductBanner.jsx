import React from 'react';
import Image from 'next/image';

function ProductBanner({ product }) {
  const baseUrl = "http://localhost:1337";

  // Safely construct the image URL
  const imageUrl = product?.banner?.url
    ? `${baseUrl}${product.banner.url}` // Main URL
    : product?.banner?.formats?.thumbnail?.url
    ? `${baseUrl}${product.banner.formats.thumbnail.url}` // Fallback to thumbnail
    : '/placeholder.png'; // Placeholder if no image is available

  // Check if the product data is not available
  if (!product) {
    return (
      <div className="flex justify-center items-center h-[280px] bg-gray-100 rounded-lg">
        <p>Loading...</p> {/* Simple loading message */}
      </div>
    );
  }

  return (
    <div className="m-1 rounded-md h-full hover:scale-y-110 hover:border-primary bg-white">
      <Image
        src={imageUrl}
        alt={product?.banner?.name || 'Product Image'}
        width={600}
        height={400}
        className="rounded-lg h-[280px] object-fill"
      />
    </div>
  );
}

export default ProductBanner;
