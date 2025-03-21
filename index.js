let currentPage = 1;

function loadGoods() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `data_${currentPage}.json`, true);

    xhr.onload = function() {
        if (xhr.status === 200) {
           const datas = JSON.parse(xhr.responseText);
           console.log(datas);
           
           const container = document.getElementById('allmenu');
           datas.forEach(data => {
            const menuDiv = document.createElement('div');
            menuDiv.classList.add("menucard");
            const menuDiv1 = document.createElement('div');
            menuDiv1.classList.add("cardphoto");
            const menuDiv2 = document.createElement('div');
            menuDiv2.classList.add("cardtext");
            menuDiv1.innerHTML = `
            <img class="images" src = ${data.link} ></img>`;
            menuDiv2.innerHTML = `
            <h3>${data.name}</h3>
            <p class="foodtext">${data.text}</p>
            <div class="price">
                    <h3 class="qsan">20$</h3>
                    <i class="fa-solid fa-cart-shopping teleshka"></i>
            </div>
            `;
            container.appendChild(menuDiv)
            menuDiv.appendChild(menuDiv1)
            menuDiv.appendChild(menuDiv2)
           });

           currentPage++;
           
        } else {
            console.error('Սխալ հարցում:', xhr.status);
        }
    };

    xhr.send();
}

window.onload = function() {
    loadGoods();
}


  function loadMenu() {
    const xhr = new XMLHttpRequest(); 
    xhr.open('GET', `menuData.json`, true); 

    xhr.onload = function() {
        if (xhr.status === 200) {
            const datas = JSON.parse(xhr.responseText);
            const container = document.getElementById('linkpar');

            const menuList = document.createElement('ul');
            menuList.classList.add('links');

            datas.forEach(data => {
                const menuItem = document.createElement('li');
                menuItem.innerHTML = `<a class="linksHover" href="${data.href}">${data.title}</a>`;
                menuList.append(menuItem); 
            });

            container.prepend(menuList); 
        } else {
            console.error('Սխալ հարցում:', xhr.status);
        }
    };

    xhr.onerror = function() {
        console.error('Սերվերի կամ ցանցի խնդիր');
    };

    xhr.send(); 
}

loadMenu();
