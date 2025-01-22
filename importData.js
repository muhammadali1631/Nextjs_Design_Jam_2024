import { createClient } from '@sanity/client';
import dotenv from 'dotenv'
import path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
dotenv.config({path: path.resolve(_dirname, './.env.local')})

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
    apiVersion: 'vX'
})

async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`);

    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${imageUrl}`);
    }

    const buffer = await response.arrayBuffer();
    const bufferImage = Buffer.from(buffer);

    const asset = await client.assets.upload('image', bufferImage, {
      filename: imageUrl.split('/').pop(),
    });

    console.log(`Image uploaded successfully: ${asset._id}`);
    return asset._id;
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error);
    return null;
  }
}

async function uploadProduct(product) {
  try {
    // const imageId = await uploadImageToSanity(product.imageUrl);
    // const imageData =  product

    if (true) {
      const document = {
        _type: 'products',
        name: product.name,
        description: product.description,
        price: product.price,
        images: product.images,
        category: product.category,
        discountPercent: product.discountPercent,
        isNew: product.isNew,
        colors: product.colors,
        sizes: product.sizes,
        stock: product.stock,
        tags: product.tags,
        slug: product.slug,
        rating: product.rating
      };

      const createdProduct = await client.create(document);
      console.log(`Product ${product.name} uploaded successfully:, createdProduct`);
    } else {
      console.log(`Product ${product.name} skipped due to image upload failure.`);
    }
  } catch (error) {
    console.error('Error uploading product:', error);
  }
}

async function importProducts() {
  try {
    const response = await fetch('http://localhost:3000/api/products');

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const products = await response.json();

    for (const product of products) {
      await uploadProduct(product);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

importProducts();