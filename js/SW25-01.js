const requestQuote = () => {
    $('.SW22-01-B-RQ').css("display", "block");
    $("#SW25-01-RQ-form").trigger("reset");
}

const cancelButton = () => {
    $('.SW22-01-B-RQ').css("display", "none");
}


let projectData = [
    {title: "Project Title 1", 
    description: "Project description 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    preview: "/images/sc1_p1.JPG",
    altText: "Image1",
    from: "Nov-2019",
    to: "Dec-2019"
    },
    {title: "Project Title 2", 
    description: "Project description 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    preview: "/images/sc1_p2.JPG",
    altText: "Image2",
    from: "Nov-2020",
    to: "Dec-2020"
    }
];

let htmlstrSW25 = "";



projectData.map((item, key) => {
    console.log(item);
    htmlstrSW25 += `<div class="SW25-01-service-projects-cards" id="SW25-01-service-projects-cards${key + 1}" onclick="projectPreview${key + 1}()">
    <div class="SW25-01-service-projects-cards-img-wrapper SW25-01-service-projects-cards-img-url${key + 1}">
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
