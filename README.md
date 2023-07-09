# Interview Mini Project

### Key points

- 1. Prepare product response values for at least 2 categories having up to 5 products each.
- 2. If the API key is missing in the Headers, an error response of 403 (Unauthorised) must be thrown.
- 3. Keep all the data in either DynamoDB or in Mongo DB (either local or hosted).
- 4. The responses must be real-time.
- 5. Use Node JS (version 16+) and Express JS to build the server.
- 6. Host the server on an AWS ec2 instance. (Instance type and size can be chosen according to availability and cost),
- 7. Please note: the AWS services for the sake of the interview should be used within the Free Tier Quota of AWS. The cost of the server will not be borne by Felesys for the same.
- 8. The code must be properly structured as per industry standards.

- Output to be shared: Once the hosting is done, please share the IP address or default instance Address provided by AWS.

## FEATURE I - User

### Models

- Product Model

```yaml
{
  productName: { string },
  price: { number },
  brand: { string },
  productImage: { string },
  categoryId: { number },
  createdAt: { timestamp },
  updatedAt: { timestamp },
}
```

- Category Model

```yaml
{
  categoryName: { type: String },
  categoryId: { type: Number },
  createdAt: { timestamp },
  updatedAt: { timestamp },
}
```

## Product APIs (\_authentication required as authorization header - x-api-key: abcd-efgh-ijlk-1234)

### POST/api/product/save (create product)

### response

```yaml
{
  "message": "Product saved sucesfully",
  "data":
    {
      "productId": 9,
      "productName": "Puma Kids' Logo Graphic T-Shirt",
      "price": 19.99,
      "productImage": "https://example.com/puma-kids-tshirt.jpg",
      "brand": "Puma",
      "categoryId": 2,
      "_id": "64aa756afca6a26ef49e70de",
      "createdAt": "2023-07-09T08:52:58.914Z",
      "updatedAt": "2023-07-09T08:52:58.914Z",
      "__v": 0,
    },
}
```

## Category APIs (\_authentication required as authorization header - x-api-key: abcd-efgh-ijlk-1234)

### POST/api/product/categories (create Category)

### response

```yaml
{
  "message": "category created successfully",
  "data":
    {
      "categoryName": "Jeans",
      "categoryId": 4,
      "_id": "64aa6d20de3e006d38054cc0",
      "createdAt": "2023-07-09T08:17:36.394Z",
      "updatedAt": "2023-07-09T08:17:36.394Z",
      "__v": 0,
    },
}
```

## Category APIs (\_authentication required as authorization header - x-api-key: abcd-efgh-ijlk-1234)

### GET/api/product/categories (get categories)

### response

```yaml
{
  "totalCategories": 4,
  "category":
    [
      {
        "_id": "64aa6cf7de3e006d38054cb4",
        "categoryName": "Footwear",
        "categoryId": 1,
        "createdAt": "2023-07-09T08:16:55.543Z",
        "updatedAt": "2023-07-09T08:16:55.543Z",
        "__v": 0,
      },
      {
        "_id": "64aa6d0fde3e006d38054cb8",
        "categoryName": "T-Shirts",
        "categoryId": 2,
        "createdAt": "2023-07-09T08:17:19.227Z",
        "updatedAt": "2023-07-09T08:17:19.227Z",
        "__v": 0,
      },
      {
        "_id": "64aa6d18de3e006d38054cbc",
        "categoryName": "Jackets",
        "categoryId": 3,
        "createdAt": "2023-07-09T08:17:28.645Z",
        "updatedAt": "2023-07-09T08:17:28.645Z",
        "__v": 0,
      },
      {
        "_id": "64aa6d20de3e006d38054cc0",
        "categoryName": "Jeans",
        "categoryId": 4,
        "createdAt": "2023-07-09T08:17:36.394Z",
        "updatedAt": "2023-07-09T08:17:36.394Z",
        "__v": 0,
      },
    ],
}
```

## Category APIs (\_authentication required as authorization header - x-api-key: abcd-efgh-ijlk-1234)

### GET/api/product/list?categoryId=1/2/3 (get product with categoryId)

### response

```yaml
{
  "categoryId": "2",
  "categoryName": "T-Shirts",
  "data":
    [
      {
        "_id": "64aa7492fca6a26ef49e70d2",
        "productId": 5,
        "productName": "Puma Classic T-Shirt",
        "price": 2999,
        "productImage": "https://example.com/product4.jpg",
        "brand": "Puma",
        "categoryId": 2,
        "createdAt": "2023-07-09T08:49:22.186Z",
        "updatedAt": "2023-07-09T08:49:22.186Z",
        "__v": 0,
      },
      {
        "_id": "64aa7543fca6a26ef49e70d5",
        "productId": 6,
        "productName": "Polo Ralph Lauren Men's Classic Fit T-Shirt",
        "price": 49.99,
        "productImage": "https://example.com/polo-tshirt.jpg",
        "brand": "Polo",
        "categoryId": 2,
        "createdAt": "2023-07-09T08:52:19.508Z",
        "updatedAt": "2023-07-09T08:52:19.508Z",
        "__v": 0,
      },
      {
        "_id": "64aa755afca6a26ef49e70d8",
        "productId": 7,
        "productName": "Puma Women's Graphic Print T-Shirt",
        "price": 34.99,
        "productImage": "https://example.com/puma-women-tshirt.jpg",
        "brand": "Puma",
        "categoryId": 2,
        "createdAt": "2023-07-09T08:52:42.846Z",
        "updatedAt": "2023-07-09T08:52:42.846Z",
        "__v": 0,
      },
      {
        "_id": "64aa7563fca6a26ef49e70db",
        "productId": 8,
        "productName": "Polo Ralph Lauren Men's Custom Slim Fit T-Shirt",
        "price": 54.99,
        "productImage": "https://example.com/polo-slimfit-tshirt.jpg",
        "brand": "Polo",
        "categoryId": 2,
        "createdAt": "2023-07-09T08:52:51.183Z",
        "updatedAt": "2023-07-09T08:52:51.183Z",
        "__v": 0,
      },
      {
        "_id": "64aa756afca6a26ef49e70de",
        "productId": 9,
        "productName": "Puma Kids' Logo Graphic T-Shirt",
        "price": 19.99,
        "productImage": "https://example.com/puma-kids-tshirt.jpg",
        "brand": "Puma",
        "categoryId": 2,
        "createdAt": "2023-07-09T08:52:58.914Z",
        "updatedAt": "2023-07-09T08:52:58.914Z",
        "__v": 0,
      },
    ],
}
```
