import { client } from "@/sanity/lib/client";

async function uploadImageToSanity(imageUrl: string) {
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

const Data = [
  {
    "category": "hoodie",
    "discountPercent": 20,
    "isNew": true,
    "_id": "0dc7c847-8599-45d0-b02c-34429f7a639e",
    "name": "Casual Bomber Jacket",
    "description":
      "This stylish  bomber jacket offers a sleek and modern twist on a classic design. Made from soft and comfortable fabric, it features snap buttons and ribbed cuffs, giving it a sporty yet refined look. The minimalist style makes it perfect for layering over casual t-shirts or hoodies. Whether you're out with friends or just lounging, this jacket provides a laid-back yet fashionable vibe. Its muted green color adds a subtle, earthy tone that pairs well with a variety of outfits, making it a versatile addition to your casual wardrobe.",
    "price": 300,
    "images": [
      {
        "color": "Black",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61pBzbcbjeL._AC_SX466_.jpg") 
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61SO3dv0T7L._AC_SY550_.jpg") 
            }
          }
        ]
      },
      {
        "color": "Blue",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61i6bJ3ck5L._AC_SX425_.jpg") 
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/71tA-tb4TmL._AC_SY550_.jpg") 
            }
          }
        ]
      },
      {
        "color": "Red",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/712X2PSlChL._AC_SY550_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61aek3dGZtL._AC_SX466_.jpg")
            }
          }
        ]
      }
    ],
    "sizes": ["S", "XXL", "XL", "L"],
    "colors": ["Blue", "Red", "Black"],
    "slug": "casual-bomber-jacket",
    "stock": 20,
    "tags": ["s", "xxl", "xl", "l", "blue", "red", "black", "new", "best"],
    rating: 4.5
  },
  {
    "category": "jacket",
    "discountPercent": 20,
    "isNew": true,
    "name": "Decrum Mens Leather Jacket",
    "description":
      "Handcrafted from 100% high-quality real lambskin leather, our black leather jacket men featuring a soft polyester lining for ultimate comfort and durability.",
    "price": 20,
    "images": [
      {
        "color": "Brown",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/615Ir3YA0XL._AC_SY550_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/81GMB8oy-pL._AC_SX466_.jpg")
            }
          }
        ]
      },
      {
        "color": "White",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/814IItrUN-L._AC_SX425_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/81Fd1CFkVVL._AC_SX425_.jpg")
            }
          }
        ]
      },
      {
        "color": "Blue",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/81HifdpzWaL._AC_SX425_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/91eAlg109iL._AC_SX425_.jpg")
            }
          }
        ]
      }
    ],
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["Brown", "White", "Blue"],
    "slug": "decrum-men-leather-jacket",
    "stock": 15,
    "tags": ["m", "l", "xl", "xxl", "brown", "black", "gray", "new", "best"],
    rating: 3.5
  },
  {
    "category": "shirt",
    "discountPercent": 10,
    "isNew": true,
    "name": "Men's Dress Shirts Stretch",
    "description":
      "This mens long sleeve dress shirt is made of 4-way stretch fabric that is soft and comfortable, allowing your body to move more flexibly",
    "price": 19,
    "images": [
      {
        "color": "Brown",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/614gyMSp7fL._AC_SX425_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61o9ekCxOeL._AC_SX425_.jpg")
            }
          }
        ]
      },
      {
        "color": "White",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61pa-lAqfxL._AC_SX425_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61HMXGZ1gjL._AC_SX425_.jpg")
            }
          }
        ]
      },
      {
        "color": "Black",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61asXEuE7xL._AC_SX425_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61wAPYqN1CL._AC_SX425_.jpg")
            }
          }
        ]
      }
    ],
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["Brown", "White", "Black"],
    "slug": "men-dress-shirts-stretch",
    "stock": 25,
    "tags": ["m", "l", "xl", "xxl", "brown", "black", "gray", "new", "formal"],
    rating: 4.5
  },
  {
    "category": "court",
    "discountPercent": 15,
    "isNew": false,
    "name": "Men's Dress Party Floral",
    "description":
      "Single-breasted Suit Jacket Two Buttons Closure Notched Lapel Back Center Vent Blazer with Hot Stamping Printing Technology",
    "price": 45,
    "images": [
      {
        "color": "Green",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/91+2gl1SRaL._AC_SX569_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/91BWfoCtuUL._AC_SX569_.jpg")
            }
          }
        ]
      },
      {
        "color": "Blue",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/91zfuNuL4XL._AC_SX569_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/81DS+SUOenL._AC_SX569_.jpg")
            }
          }
        ]
      },
      {
        "color": "Black",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/81hO9NqG5GL._AC_SY550_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/71Ozb2vvG0L._AC_SY550_.jpg")
            }
          }
        ]
      }
    ],
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["Black", "Green", "Blue"],
    "slug": "men-dress-party-floral",
    "stock": 45,
    "tags": ["m", "l", "xl", "xxl", "white", "black", "green", "best", "party"],
    rating: 4.5
  },
  {
    "category": "t-shirt",
    "discountPercent": 10,
    "isNew": false,
    "name": "Under Armour Men's Tech",
    "description":
      "UA Tech is our original go-to training gear: loose, light, and it keeps you cool. That's why this men's training T-shirt is everything you need.",
    "price": 17,
    "images": [
      {
        "color": "Red",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/713faYVyhcL._AC_SX569_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/7113sTynB+L._AC_SX569_.jpg")
            }
          }
        ]
      },
      {
        "color": "Green",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/51p+o2bIZlL._AC_SX569_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/41x27KX7zrL._AC_SX569_.jpg")
            }
          }
        ]
      },
      {
        "color": "White",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/61Up-nkBuUL._AC_SX569_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/6168J8e1tjL._AC_SX569_.jpg")
            }
          }
        ]
      }
    ],
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["Red", "Green", "White"],
    "slug": "under-armour-men-tech",
    "stock": 75,
    "tags": ["m", "l", "xl", "xxl", "white", "red", "green", "best", "gym"],
    rating: 5
  },
  {
    "category": "t-shirt",
    "discountPercent": 10,
    "isNew": true,
    "name": "KLIEGOU Mens Hipster Hiphop Tees",
    "description":
      "The Product Description has detailed size information. Please select the appropriate size according to the size chart we provide.",
    "price": 23,
    "images": [
      {
        "color": "White",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/81oi90hgMbL._AC_SX569_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/81X3O-qjMCL._AC_SY550_.jpg")
            }
          }
        ]
      },
      {
        "color": "Red",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/815hlbpYJpL._AC_SX569_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/81ZoeExKhUL._AC_SY550_.jpg")
            }
          }
        ]
      },
      {
        "color": "Blue",
        "image": [
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/91hJpywdUsL._AC_SX569_.jpg")
            }
          },
          {
            "_type": "image",
            "asset": {
              "_ref": await uploadImageToSanity("https://m.media-amazon.com/images/I/81tKq1gc+XL._AC_SY550_.jpg")
            }
          }
        ]
      }
    ],
    "sizes": ["M", "L", "XL", "XXL"],
    "colors": ["White", "Red", "Blue"],
    "slug": "kiegou-mens-hipster-hiphop-tees",
    "stock": 75,
    "tags": ["m", "l", "xl", "xxl", "white", "red", "blue", "new", "casual"],
    rating: 5
  },
  ]
export default Data;
