const preview1 = () => {
    $('#SW22-01-B-products-img-preview').src = "/images/PC1_item1_1.png";
    $('.SW22-01-B-products-img-thumbnail').removeClass("active-thumbnail");
    $('#SW22-01-B-products-img1').addClass("active-thumbnail");
}
const preview2 = () => {
    $('#SW22-01-B-products-img-preview').src = "/images/PC1_item1_2.JPG";
    $('.SW22-01-B-products-img-thumbnail').removeClass("active-thumbnail");
    $('#SW22-01-B-products-img2').addClass("active-thumbnail");
}
const preview3 = () => {
    $('#SW22-01-B-products-img-preview').src = "/images/PC1_item1_3.JPG";
    $('.SW22-01-B-products-img-thumbnail').removeClass("active-thumbnail");
    $('#SW22-01-B-products-img3').addClass("active-thumbnail");
}
const preview4 = () => {
    $('#SW22-01-B-products-img-preview').src = "/images/PC1_item1_4.JPG";
    $('.SW22-01-B-products-img-thumbnail').removeClass("active-thumbnail");
    $('#SW22-01-B-products-img4').addClass("active-thumbnail");
}

const requestQuote = () => {
    $('.SW22-01-B-RQ').css("display", "block");
    $("#SW22-01-B-RQ-form").trigger("reset");
}

const cancelButton = () => {
    $('.SW22-01-B-RQ').css("display", "none");
}
