// Footer
import {ClientData} from '/js/ClientData.js';

let SW30_01_nav_links = ``;

ClientData.nav.sectionList.map((item) => {
  if (item.sectionName !== "Products and Services") {
    SW30_01_nav_links += `<li><a href="${item.sectionLink}"> ${item.sectionName}</a> </li>`;
  }
});

let SW30_01_products_html = ``;
let SW30_01_products_links = ``;
let SW30_01_products_links_1 = ``;
let SW30_01_products_links_2 = ``;

let productLength = ClientData.productsAndServices.length;

// if number of products is greater than 4 two columns will be created
if (productLength > 4) {

  ClientData.productsAndServices.map((item, i) => {
    if (i < productLength/2) {
      SW30_01_products_links_1 += `<li><a href="${item.href}"> ${item.name}</a> </li>`;
    } else {
      SW30_01_products_links_2 += `<li><a href="${item.href}"> ${item.name}</a> </li>`;
    }
  });

  SW30_01_products_html = `
    <div>
      <h3>PRODUCTS AND SERVICES</h3>
      <div class="SW30-01-products-grid">
        <ul>
          ${SW30_01_products_links_1}
        </ul>
        <ul>
          ${SW30_01_products_links_2}
        </ul>
      </div>

    </div>
    <div>

    </div>
  `;

// if number of products is less than 4 one column will be created
} else {

  ClientData.productsAndServices.map((item) => {
    SW30_01_products_links += `<li><a href="${item.href}"> ${item.name}</a> </li>`;
  });

  SW30_01_products_html = `
    <div>
      <h3>PRODUCTS AND SERVICES</h3>
      <ul>
        ${SW30_01_products_links}
      </ul>
    </div>
    <div>

    </div>
  `;

}



let SW30_01_social_media = ``;

ClientData.footer.socialMedia.map((item) => {
    SW30_01_social_media += `<div class="SW30-01-sm-icon">
    <a href="${item.link}" target="_blank">
    <img src="${item.img}" alt="${item.name}"></a>
  </div>`
});

let SW30_01_content = `        <div class="SW30-01-grid">
<div class="SW30-01-company">
  <h3>ES TECH</h3>
  <ul>
    ${SW30_01_nav_links}
  </ul>
</div>

${SW30_01_products_html}

<div class="SW30-01-sm">
  <h3>CONNECT WITH US</h3>
  <div class="SW30-01-sm-grid">
    ${SW30_01_social_media}
  </div>
</div>
</div>
`;

$('#SW30-01').html(SW30_01_content);
