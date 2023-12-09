const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart');
});

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');

const prodcuctList = document.querySelector('.filters-content');
//Lista para todos los productos 
let allproducts = [];

let valorTotal = document.querySelector('.total-pagar');
const countProducts = document.querySelector('#contador-productos');

const agregarProductoAlCarrito = (e) => {
    if (e.target.classList.contains('btn-add-cart')) {
        const product = e.target.parentElement;

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h5').textContent,
            price: product.querySelector('h6').textContent,
        };


        //Comparar si existe el producto
        const exist = allproducts.some(product => product.title === infoProduct.title)


        if (exist) {
            const products = allproducts.map(product => {
                if (product.title === infoProduct.title) {
                    product.quantity++;
                    return product;
                } else {
                    return product;
                }
            });
            allproducts = [...products];
        } else {

            allproducts = [...allproducts, infoProduct];
        }

        showHTML();
    }
};

    

rowProduct.addEventListener('click', e => {
    if (e.target.classList.contains('icon-close')) {
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allproducts = allproducts.filter(
            product => product.title !== title
        );

        showHTML();
    }
});

const showHTML = () => {
    // Limpiar
    rowProduct.innerHTML = '';

    if (!allproducts.length) {
        // Si no hay productos en el carrito
        rowProduct.innerHTML = `
            <p class="cart-empty">El carrito está vacío</p>
        `;
        valorTotal.innerText = '$0'; // También podrías establecer el total en cero
        countProducts.innerText = '0';
    } else {
        let total = 0;
        let totalProducts = 0;

        allproducts.forEach(product => {
            const containerProduct = document.createElement('div');
            containerProduct.classList.add('cart-product');

            containerProduct.innerHTML = ` 
                    <div class="info-cart-product">
                    <span class="cantidad-producto-carrito">${product.quantity}</span>
                    <p class="titulo-producto-carrito">${product.title}</p>
                    <span class="precio-producto-carrito">${product.price}</span>
                    </div>
                   
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="icon-close">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    
                        `;

            rowProduct.append(containerProduct);

            total =
                total + parseInt(product.quantity * product.price.slice(1));
            totalProducts = totalProducts + product.quantity;
        });

        valorTotal.innerText = `$${total}`;

        countProducts.innerText = totalProducts;
        console.log(total);
        enviarTotalAlServidor(total);

    }

    // Debugging: Mostrar el estado actual de allproducts

};



// ...

prodcuctList.addEventListener('click', agregarProductoAlCarrito);

// Función para enviar el total al servidor mediante AJAX
const enviarTotalAlServidor = (total, callback) => {
    $.ajax({
        url: '/payment/',  // Ajusta la URL según la configuración de tus URLs en Django
        method: 'POST',
        headers: { 'X-CSRFToken': '{{ csrf_token }}' },
        data: { 'total': total },
        success: function (data) {
            if (callback) {
                callback(data);
            }
        },
        error: function (_error) {
            console.error('Error al enviar el total al servidor');
        }
    });
};



