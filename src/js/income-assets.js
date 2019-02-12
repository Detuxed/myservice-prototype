/* On page scrolling */

function scrollToAdd() {
  $('html, body').animate({
    scrollTop: $("#add-options").offset().top
  }, 1000);
}

/* Clicks on "add" on tile */

function showNewCard(cardType) {
  captureUserList();
  hideAll();
  myDiv = "#" + cardType + "-card";
  myForm = myDiv + " #myForm";
  myDelete = myDiv + " #deleteButton";
  $(myDelete).hide();
  $(myForm).trigger("reset");
  $(myDiv).show();
  $("#footer-buttons-mask").show();
  $('html, body').animate({
    scrollTop: $("#user-list").offset().top
  }, 1000);
}

/* Clicks on "add" on full card */

function addSummary(cardType) {
  hideAll();
  myDiv = "#" + cardType + "-summary";
  userEntries.push($(myDiv));
  displayUserList();
  $('html, body').animate({
    scrollTop: $("#user-list").offset().top
  }, 1000);
};

/* Clicks on "edit" on Summary Card */

function editCard(cardType) {
  captureUserList();
  hideAll();
  myDiv = "#" + cardType + "-card";
  myDelete = myDiv + " #deleteButton";
  $(myDelete).show();
  $(myDiv).show();
}

/* Clicks on "delete" on full card */

function removeSummary(cardType) {
  hideAll();
  myDiv = "#" + cardType + "-summary";
  userEntries.splice($.inArray(myDiv, userEntries), 1);
  displayUserList();
  $('html, body').animate({
    scrollTop: $("#user-list").offset().top
  }, 1000);
};

/* Clicks on "cancel" on full card */

function cancelCard(cardType) {
  hideAll();
  $('html, body').animate({
    scrollTop: $("#user-list").offset().top
  }, 1000);
  displayUserList();
}

/* Update list after interaction */

var userEntries = [];

function captureUserList() {
  userEntries = $("[id*=summary]:visible");
}

function displayUserList() {
  $.each(userEntries, function (index, value) {
    $(value).show();
  });
  if (userEntries.length > 0) {
    $("#add-anchor-link-start").hide();
    $("#add-anchor-link-return").show();
  } else {
    $("#add-anchor-link-start").show();
    $("#add-anchor-link-return").hide();
  }
  $("#add-options").show();
}

/* Generic hide all */

function hideAll() {

  $("#bank-accounts-card").hide();
  $("#bank-accounts-summary").hide();
  $("#church-account-ref").hide();

  $("#cash-held-card").hide();
  $("#cash-held-summary").hide();

  $("#money-loaned-card").hide();
  $("#money-loaned-summary").hide();

  $("#bonds-and-debentures-card").hide();
  $("#bonds-and-debentures-summary").hide();

  $("#other-payments-card").hide();
  $("#other-payments-summary").hide();

  $("#employment-income-card").hide();
  $("#employment-income-summary").hide();

  $("#past-employment-card").hide();
  $("#past-employment-summary").hide();

  $("#super-pension-card").hide();
  $("#super-pension-summary").hide();

  $("#foreign-pension-card").hide();
  $("#foreign-pension-summary").hide();

  $("#annuities-and-pensions-card").hide();
  $("#fannuities-and-pensions-summary").hide();

  $("#foreign-income-and-assets-card").hide();
  $("#foreign-income-and-assets-summary").hide();

  $("#real-estate-card").hide();
  $("#real-estate-summary").hide();

  $("#farm-card").hide();
  $("#farm-summary").hide();

  $("#businesses-card").hide();
  $("#businesses-summary").hide();

  $("#home-contents-card").hide();
  $("#home-contents-summary").hide();

  $("#vehicles-card").hide();
  $("#vehicles-summary").hide();

  $("#other-personal-assets-card").hide();
  $("#other-personal-assets-summary").hide();

  $("#life-insurance-card").hide();
  $("#life-insurance-summary").hide();

  $("#gifts-card").hide();
  $("#gifts-summary").hide();

  $("#maintenance-paid-to-former-partner-card").hide();
  $("#maintenance-paid-to-former-partner-summary").hide();

  $("#addtional-other-personal-assets-card").hide();
  $("#addtional-other-personal-assets-summary").hide();

  $("#add-options").hide();
  $("#add-anchor-link-start").hide();
  $("#add-anchor-link-return").hide();
  $("#footer-buttons-mask").hide();
}