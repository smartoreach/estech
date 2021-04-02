// Navigation bar
import {ClientData} from '/js/clientData.js';

console.log(ClientData);
console.log(ClientData.nav.logo.logoAlt);

// Navigation items
let SW01_01_B_nav_item = '';
ClientData.nav.sectionList.map((item,key) => {
    SW01_01_B_nav_item += `<li class="nav-item">
    <a class="nav-link" href="${item.sectionLink}"> ${item.sectionName} <span class="sr-only">(current)</span></a>
  </li>`
})

// Navigation bar content
let SW01_01_B = `<a class="navbar-brand" href="/">
<img id="nav-logo" src="${ClientData.nav.logo.logoUrl}" alt="Logo">
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse SW01-01-B-nav-links" id="navbarSupportedContent">
        <ul class="navbar-nav nav mr-auto justify-content-center">
            ${SW01_01_B_nav_item}
        </ul>
        <a class="SW01-01-B-btn-callnow" href="tel:${ClientData.contact.phone}"><img src="/images/phone-call-grey.svg" alt="">${ClientData.contact.phone}</a>
        <a class="SW01-01-B-btn-whatsapp" target="_blank" href="${ClientData.contact.whatsapp}"><img src="/images/whatsapp-button.png " alt=""></a>
      </div>`;

// Update HTML
$('#SW01-01-B').html(SW01_01_B);


$('.nav-link[href$="/products-and-services"]').closest("li").addClass('dropdown');

let productsAmdServicesList = ``;
ClientData.productsAndServices.map((item) => {
  productsAmdServicesList += `<a class="dropdown-item" href="${item.href}"> ${item.name} </a>`
});

let productsAmdServicesHTML = `<a class="nav-link " href="/products-and-services" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Products & Services
</a>
<div class="dropdown-menu SW01-01-B-product-dropdown" aria-labelledby="navbarDropdown2">
            ${productsAmdServicesList}
          </div>
`;
$('.nav-link[href$="/products-and-services"]').closest("li").html(productsAmdServicesHTML);

// Highlight current location
let currentLocation = location.href.split(ClientData.domain);
let href = currentLocation[1].split("/")[1];
console.log(href);
// $('.nav-link[href$="' + href + '"' ).addClass('active');
console.log(  $('.nav-link[href$="' + href + '"]' ));
if (currentLocation[1] === '/' ) {
  $('.nav-link[href="/"]').addClass('active');
} else {
  $('.nav-link[href$="' + href + '"]' ).addClass('active');
}
