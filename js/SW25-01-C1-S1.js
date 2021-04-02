// Servce Section - Request Quote Btn Feature
const requestQuote = () => {
    $('.SW22-01-B-RQ').css("display", "block");
    $("#SW25-01-RQ-form").trigger("reset");
}

const cancelButton = () => {
    $('.SW22-01-B-RQ').css("display", "none");
}



// Horizontal scroll 
    const scrollButtonRight = document.getElementById('scroll-next');
    const scrollButtonLeft = document.getElementById('scroll-prev');

    scrollButtonRight.onclick = function () {
      document.getElementById('scroll-container').scrollLeft += 220;
    };
    scrollButtonLeft.onclick = function () {
      document.getElementById('scroll-container').scrollLeft -= 220;
    };