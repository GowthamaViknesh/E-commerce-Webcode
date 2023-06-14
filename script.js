async function fetchData() {
  try {
    const response = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

function displayData(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = "";
    
  products.forEach(product => {
    const { brand, name, price, image_link, product_link, description } = product;

    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const brandName = document.createElement('h2');
    brandName.textContent = `Brand: ${brand}`;

    const productName = document.createElement('h3');
    productName.textContent = `Product: ${name}`;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${price}`;

    const productImage = document.createElement('img');
    productImage.src = image_link;
    productImage.alt = name;

    const productLink = document.createElement('a');
    productLink.href = product_link;
    productLink.textContent = 'Product Link';

    const productDescription = document.createElement('p');
    productDescription.textContent = description;

    productDiv.appendChild(brandName);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productLink);
    productDiv.appendChild(productDescription);
    productList.appendChild(productDiv);
  });
}

fetchData()
  .then(products => displayData(products));



  