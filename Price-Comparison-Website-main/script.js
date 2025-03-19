const searchBtn = document.getElementById('search-btn');
const itemList = document.getElementById('item');
const itemDetailsContent = document.getElementById('product-details-content');
const compareCloseBtn = document.getElementById('compare-close-btn');
const detailContent = document.getElementById('product-details');

// event listeners
searchBtn.addEventListener('click', getItemList);
itemList.addEventListener('click', getItemCompare);
compareCloseBtn.addEventListener('click', () => {
    itemDetailsContent.parentElement.classList.remove('showItem');
});


// get item list
function getItemList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();

    fetch(`https://price-api.datayuge.com/api/v1/compare/search?api_key=ysSse3b7wv8C8TFEETaUNOcJQotvviIGpFq&product=${searchInputTxt}`).then(response => response.json())
        .then(data => {
            let html = "";
            if (data.data) {
                data.data.forEach(item => {
                    html += `
                 <div class="product-item" data-id="${item.product_id}">
                    <div class="product-img">
                        <img src="${item.product_image}" alt="product image">
                        <h2>price:₹${item.product_lowest_price}</h2>

                    </div>
                     <div class="item-name">
                        <h3>${item.product_title}</h3>
                         <a href="#" class="compare-btn">Compare</a>
                     </div>
                 </div>
                `;
                });
                itemList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any product!";
                itemList.classList.add('notFound');
            }
            itemList.innerHTML = html;
        });
}


// get item
function getItemCompare(e) {
    e.preventDefault();
    if (e.target.classList.contains('compare-btn')) {
        let productItem = e.target.parentElement.parentElement;
        fetch(`https://price-api.datayuge.com/api/v1/compare/detail?api_key=ysSse3b7wv8C8TFEETaUNOcJQotvviIGpFq&id=${productItem.dataset.id}`)
            .then(response => response.json())
            .then(data => productModal(data.data));
    }
}

// create a modal
function productModal(item) {
    console.log(item);
    let html = `
        <div class="compare-img">
            <img src="${item.product_images[0]}" alt="product img">
            <img src="${item.product_images[1]}" alt="product img">
            <img src="${item.product_images[2]}" alt="product img">
            <img src="${item.product_images[3]}" alt="product img">
        </div>
        <div class="product-data">
            <h3 class="product-name">Name: ${item.product_name}</h3>
            <h3 class="product_model">Model: ${item.product_model}</h3>
            <h3 class="product_brand">Brand: ${item.product_brand}</h3>
            <h3 class="product_id">ID: ${item.product_id}</h3>
            <h3 class="product_ratings">Ratings: ${item.product_ratings}</h3>
            <h3 class="product_category">catagory: ${item.product_category}</h3>
        </div>
        <div class="store">
            <div class="namelogo">
              <h2 class="product-store">amazon</h2>
              <img src="${item.stores[0].amazon.product_store_logo}" alt="" class="store-logo">
            </div>
            <a href="${item.stores[0].amazon.product_store_url}" target="_blank" class="store-link">product link</a>
            <h3 class="product_color">${item.stores[0].amazon.product_color}</h3>
            <h3 class="product-price">₹ ${item.stores[0].amazon.product_price}</h3>
        </div>
        <div class="store">
            <div class="namelogo">
              <h2 class="product-store">fliipkart</h2>
              <img src="${item.stores[1].flipkart.product_store_logo}" alt="" class="store-logo">
            </div>
            <a href="${item.stores[1].flipkart.product_store_url}" target="_blank" class="store-link">product link</a>
            <h3 class="product_color">${item.stores[1].flipkart.product_color}</h3>
            <h3 class="product-price">₹ ${item.stores[1].flipkart.product_price}</h3>
        </div>
        <div class="store">
            <div class="namelogo">
              <h2 class="product-store">ebay</h2>
              <img src="${item.stores[3].ebay.product_store_logo}" alt="" class="store-logo">
            </div>
            <a href="${item.stores[3].ebay.product_store_url}" target="_blank" class="store-link">product link</a>
            <h3 class="product_color">${item.stores[3].ebay.product_color}</h3>
            <h3 class="product-price">₹ ${item.stores[3].ebay.product_price}</h3>
            </div> 
            <div class="store">
            <div class="namelogo">
            <h2 class="product-store">croma</h2>
            <img src="${item.stores[5].croma.product_store_logo}" alt="" class="store-logo">
            </div>
            <a href="${item.stores[5].croma.product_store_url}" target="_blank" class="store-link">product link</a>
            <h3 class="product_color">${item.stores[5].croma.product_color}</h3>
            <h3 class="product-price">₹ ${item.stores[5].croma.product_price}</h3>
        </div> 
    `;
    itemDetailsContent.innerHTML= html;
    detailContent.classList.add('showItem');
}