const requestQuote = () => {
    $('.SW22-01-B-RQ').css("display", "block");
    $("#SW25-01-RQ-form").trigger("reset");
}

const cancelButton = () => {
    $('.SW22-01-B-RQ').css("display", "none");
}


let projectData = [
    {title: "Project 1",
    description: "We had rich experience of doing JCB cylinder. We can do any kind of JCB hydraulic cylinders. In this project, the fork lifting cylinder to be serviced and its seal to be replaced. We have delivered this project in 5 working days. Our client is happy with quick delivery which saved their productive hours.",
    preview: "/images/sc2_p1.jpg",
    altText: "Image1",
    from: "Jan-2020",
    to: "Jan-2020"
    }
];

let htmlstrSW25 = "";



projectData.map((item, key) => {
    console.log(item);
    htmlstrSW25 += `<div class="SW25-01-service-projects-cards" id="SW25-01-service-projects-cards${key + 1}" onclick="projectPreview${key + 1}()">
    <div class="SW25-01-service-projects-cards-img-wrapper">
        <img src="${item.preview}" alt="${item.altText}">
    </div>
    <div class="SW25-01-service-projects-title">${item.title}</div>
    <div class="SW25-01-service-projects-date"> <span>${item.from}</span>&nbsp - &nbsp<span>${item.to}</span></div>
</div>`;
});


$('.SW25-01-service-projects-cards-wrapper').html(htmlstrSW25);
$('#SW25-01-service-projects-cards1').addClass("active-card-thumbnail");


const projectPreview1 = () => {
    $('.SW25-01-service-projects-cards').removeClass("active-card-thumbnail");
    $('#SW25-01-service-projects-cards1').addClass("active-card-thumbnail");
    $('.SW25-01-service-projects-details-heading').html(projectData[0].title);
    $('.SW25-01-service-projects-details-description').html(projectData[0].description);
    $('#SW25-01-service-projects-details-img-preview').prop('src', projectData[0].preview);
    $('#SW25-01-service-projects-details-img-preview').prop('alt', projectData[0].altText);
}

const projectPreview2 = () => {
    $('.SW25-01-service-projects-cards').removeClass("active-card-thumbnail");
    $('#SW25-01-service-projects-cards2').addClass("active-card-thumbnail");
    $('.SW25-01-service-projects-details-heading').html(projectData[1].title);
    $('.SW25-01-service-projects-details-description').html(projectData[1].description);
    $('#SW25-01-service-projects-details-img-preview').prop('src', projectData[1].preview);
    $('#SW25-01-service-projects-details-img-preview').prop('alt', projectData[1].altText);
}

const projectPreview3 = () => {
    $('.SW25-01-service-projects-cards').removeClass("active-card-thumbnail");
    $('#SW25-01-service-projects-cards3').addClass("active-card-thumbnail");
    $('.SW25-01-service-projects-details-heading').html(projectData[2].title);
    $('.SW25-01-service-projects-details-description').html(projectData[2].description);
    $('#SW25-01-service-projects-details-img-preview').prop('src', projectData[2].preview);
    $('#SW25-01-service-projects-details-img-preview').prop('alt', projectData[2].altText);
}

projectPreview1();
