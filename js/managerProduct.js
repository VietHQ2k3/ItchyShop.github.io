document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const productList = document.getElementById('productList');

    productForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const productName = document.getElementById('productName').value;
        const productPrice = document.getElementById('productPrice').value;
        const productQuantity = document.getElementById('productQuantity').value;
        const fileInput = document.getElementById('fileInput').files[0];

        if (fileInput) {
            const reader = new FileReader();
            reader.onload = (event) => {
                addProduct(event.target.result, productName, productPrice, productQuantity);
            };
            reader.readAsDataURL(fileInput);
        } else {
            addProduct('', productName, productPrice, productQuantity);
        }

        productForm.reset();
    });

    const addProduct = (imageSrc, name, price, quantity) => {
        const li = document.createElement('li');
        li.classList.add('product-item');

        const productDetails = document.createElement('div');
        const imgTag = imageSrc ? `<img src="${imageSrc}" alt="${name}" width="100" height="100">` : '';

        productDetails.innerHTML = `${imgTag} <h3>${name}</h3> <p>Giá: ${price} VND</p> <p>Số lượng: ${quantity}</p>`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Xóa';
        deleteButton.addEventListener('click', () => {
            productList.removeChild(li);
        });

        li.appendChild(productDetails);
        li.appendChild(deleteButton);
        productList.appendChild(li);
    };
});


    // Đối tượng để lưu trữ thông tin thống kê
    const productStats = {};

    // Hàm thống kê số lượng sản phẩm đã bán
    const updateProductStats = () => {
        // Đặt lại thông tin thống kê trước đó
        Object.keys(productStats).forEach(product => {
            productStats[product] = 0;
        });

        // Tính toán số lượng sản phẩm đã bán
        productList.querySelectorAll('.product-item').forEach(item => {
            const productName = item.querySelector('h3').innerText;
            const productQuantity = parseInt(item.querySelector('p:last-child').innerText.split(': ')[1]);
            productStats[productName] += productQuantity;
        });

        // Cập nhật bảng thống kê
        const productStatsTable = document.getElementById('productStats');
        const tbody = productStatsTable.querySelector('tbody');
        tbody.innerHTML = '';
        Object.keys(productStats).forEach(product => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${product}</td><td>${productStats[product]}</td>`;
            tbody.appendChild(tr);
        });
    };

    // Gọi hàm thống kê khi thêm hoặc xóa sản phẩm
    const addProduct = (file,name, price, quantity) => {
        // code thêm sản phẩm
        updateProductStats();
    };

    document.addEventListener('DOMContentLoaded', () => {
        // code khởi tạo
    });

    //Ảnh product
    const filer = document.getElementById("filer");
    const fileInput = document.getElementById("fileInput");
    fileInput.onchange = function(){
        filer.src = URL.createObjectURL(fileInput.files[0]);
    }

    


