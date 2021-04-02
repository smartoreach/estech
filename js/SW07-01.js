
// Contact us Section - Send SMS
const sendSMS = () => {
    $('#SW07-01-sendSMS-window').css("display", "block");
    $("#SW07-01-sendSMS-form").trigger("reset");
}

const cancelButton = () => {
    $('#SW07-01-sendSMS-window').css("display", "none");
}
