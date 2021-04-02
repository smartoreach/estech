// Client Section - Generate Cards
let logoData = [
{ url: './images/client1.png', name: 'Delphi TVS', altText: 'Delphi TVS Logo', link: 'https://www.brenntag.com/'},
{ url: './images/client2.png', name: 'Rane Engine Value', altText: 'Rane Engine Value Logo', link: 'http://www.amines.com/'},
{ url: './images/client3.png', name: 'Rane Madras Co Private Limited', altText: 'Rane Madras Co Private Limited Logo', link: 'http://www.amines.com/'},
{ url: './images/client4.png', name: 'Nittan India Tech', altText: 'Nittan India Tech Logo', link: 'http://www.amines.com/'},
{ url: './images/client5.png', name: 'TOHOKU STEELS', altText: 'TOHOKU STEELS Logo', link: 'http://www.amines.com/'},
{ url: './images/client6.png', name: 'JTEKT INDIA', altText: 'JTEKT INDIA Logo', link: 'http://www.amines.com/'},
{ url: './images/client7.png', name: 'SUNDARM CLAYTON', altText: 'SUNDARM CLAYTON Logo', link: 'http://www.amines.com/'},
{ url: './images/client8.png', name: 'Woosu', altText: 'Woosu Logo', link: 'http://www.amines.com/'}
];

let htmlstr = "";


logoData.map(item => {
    console.log(item)
htmlstr += `<a href=${item.link} target="_blank" class='SW24-01-card'>
<div class='SW24-01-img-cover'>
<img class='SW24-01-img' title=${item.name} src=${item.url} alt=${item.altText}>
</div>
</a> `
});

$('.SW24-01-cards-wrapper').html(htmlstr);
