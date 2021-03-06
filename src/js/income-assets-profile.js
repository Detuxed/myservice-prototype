/* On page scrolling */

function scrollToAdd() {
  $("html, body").animate(
    {
      scrollTop: $("#add-options").offset().top
    },
    500
  );
}

/* Clicks on "add" on tile */

function showNewCard(cardType) {

  if ( cardType == "purchased-income-streams") {
    alert ("See build for this category")
    return;
  }
  captureUserList();
  hideAll();
  var myDiv = "#" + cardType + "-card";
  var myForm = myDiv + " #myForm";
  var myDelete = myDiv + " #deleteButton";
  var myAdd = myDiv + " #addButton";
  $(myDiv).find("#date-container").show();
  $(myAdd).html("Add");
  $(myDelete).hide();
  $(myForm).trigger("reset");
  $(myDiv).show();
  $("html, body").animate(
    {
      scrollTop: $("#user-list").offset().top
    },
    1000
  );
}

/* Clicks on "add" on full card */

function addSummary(cardType) {
  hideAll();
  var myDiv = "#" + cardType + "-summary";
  userEntries.push($(myDiv));
  displayUserList();
  $(myDiv)
    .find(".status-label")
    .css("display", "inline-block");
  $("html, body").animate(
    {
      scrollTop: $("#user-list").offset().top
    },
    1000
  );
}

/* Clicks on "edit" on Summary Card */

function editCard(cardType) {
  captureUserList();
  hideAll();
  var myDiv = "#" + cardType + "-card";
  var myDelete = myDiv + " #deleteButton";
  var myAdd = myDiv + " #addButton";
  $(myDelete).show();
  $(myDiv).show();
}

/* Clicks on "delete" on prepop card edit */

function deletePrePop(cardType) {
  $("#perm-close-1").prop("checked", false);
  var myDiv = "#" + cardType + "-card";
  $(myDiv)
    .find(".delete-content")
    .show();
  $(myDiv)
    .find(".edit-content")
    .hide();
}

/* Confirms delete on prepop */

function confirmDeletePrePop(cardType) {
  var myCard = "#" + cardType + "-card";
  var mySummary = "#" + cardType + "-summary";
  var mySummaryDeleted = "#" + cardType + "-summary-deleted";
  displayUserList();
  $(myCard).hide();
  $(mySummary).hide();
  $(mySummaryDeleted).show();
  $("#add-anchor-link-return").show();
  $("#main-pagination").show();
}

/* Cancels delete on prepop */

function cancelDeletePrePop() {
  $(".delete-content").hide();
  $(".edit-content").show();
}

/* Undo delete on preoop */

function undoDeletePrePop(cardType) {
  var myDiv = "#" + cardType + "-summary-deleted";
  $(myDiv).hide();
  var myDiv = "#" + cardType + "-summary";
  $(myDiv).find("#date-container").show();
  $(myDiv).show();
  var myDiv = "#" + cardType + "-card";
  $(myDiv)
    .find(".delete-content")
    .hide();
  $(myDiv)
    .find(".edit-content")
    .show();
}

/* Clicks on "delete" on new card edit */

function removeSummary(cardType) {
  hideAll();
  var myDiv = "#" + cardType + "-summary";
  userEntries.splice($.inArray(myDiv, userEntries), 1);
  displayUserList();
  $("html, body").animate(
    {
      scrollTop: $("#user-list").offset().top
    },
    1000
  );
}

/* Clicks on "cancel" on full card */

function cancelCard(cardType) {
  hideAll();
  $("html, body").animate(
    {
      scrollTop: $("#user-list").offset().top
    },
    1000
  );
  displayUserList();
}

/* Update list after interaction */

var userEntries = [];

function captureUserList() {
  userEntries = $("[id*=summary]:visible");
}

function displayUserList() {
  $.each(userEntries, function(index, value) {
    $(value).show();
  });
  if (userEntries.length > 0) {
    $("#add-anchor-link-start").hide();
    $("#add-anchor-link-return").show();
  } else {
    $("#add-anchor-link-start").show();
    $("#add-anchor-link-return").hide();
  }
  $("#user-list").show();
  $("#main-pagination").show();
}

/* show empty state */

function showEmptyState() {
  captureUserList();
  hideAll();
  $("#add-anchor-link-start").show();
  $("#user-list").show();
  $("#main-pagination").show();
}

/* show pop state */

function showPopState() {
  displayUserList();
  $("#add-anchor-link-return").show();
}

/* Generic hide all */

function hideAll() {
  $("#user-list").hide();
  $("#main-pagination").hide();
  $(".hide-on-load").hide();
  $("#add-anchor-link-start").hide();
  $("#add-anchor-link-return").hide();

  $("#bank-accounts-update-card").hide();
  $("#bank-accounts-update-summary").hide();
  $("#bank-accounts-update-summary-deleted").hide();

  $("#bank-accounts-church-update-card").hide();
  $("#bank-accounts-church-update-summary").hide();
  $("#bank-accounts-church-update-summary-deleted").hide();

  $("#bank-accounts-overseas-update-card").hide();
  $("#bank-accounts-overseas-update-summary").hide();
  $("#bank-accounts-overseas-update-summary-deleted").hide();

  $("#bank-accounts-card").hide();
  $("#bank-accounts-summary").hide();

  $("#shares-listed-update-card").hide();
  $("#shares-listed-update-summary").hide();
  $("#shares-listed-update-summary-deleted").hide();

  $("#shares-unlisted-update-card").hide();
  $("#shares-unlisted-update-summary").hide();
  $("#shares-unlisted-update-summary-deleted").hide();

  $("#shares-card").hide();
  $("#shares-summary").hide();

  $("#cash-held-update-card").hide();
  $("#cash-held-update-summary").hide();
  $("#cash-held-update-summary-deleted").hide();

  $("#cash-held-card").hide();
  $("#cash-held-summary").hide();

  $("#gifts-update-card").hide();
  $("#gifts-update-summary").hide();
  $("#gifts-update-summary-deleted").hide();

  $("#gifts-card").hide();
  $("#gifts-summary").hide();

  $("#money-loaned-update-card").hide();
  $("#money-loaned-update-summary").hide();
  $("#money-loaned-update-summary-deleted").hide();

  $("#money-loaned-card").hide();
  $("#money-loaned-summary").hide();

  $("#managed-investments-update-card").hide();
  $("#managed-investments-update-summary").hide();
  $("#managed-investments-update-summary-deleted").hide();

  $("#managed-investments-prepaid-update-card").hide();
  $("#managed-investments-prepaid-update-summary").hide();
  $("#managed-investments-prepaid-update-summary-deleted").hide();

  $("#managed-investments-bonds-update-card").hide();
  $("#managed-investments-bonds-update-summary").hide();
  $("#managed-investments-bonds-update-summary-deleted").hide();

  $("#managed-investments-card").hide();
  $("#managed-investments-summary").hide();

  $("#vehicles-update-card").hide();
  $("#vehicles-update-summary").hide();
  $("#vehicles-update-summary-deleted").hide();

  $("#vehicles-card").hide();
  $("#vehicles-summary").hide();

  $("#bonds-and-debentures-update-card").hide();
  $("#bonds-and-debentures-update-summary").hide();
  $("#bonds-and-debentures-update-summary-deleted").hide();

  $("#bonds-and-debentures-card").hide();
  $("#bonds-and-debentures-summary").hide();

  $("#boarders-and-lodgers-update-card").hide();
  $("#boarders-and-lodgers-update-summary").hide();
  $("#boarders-and-lodgers-update-summary-deleted").hide();

  $("#boarders-and-lodgers-card").hide();
  $("#boarders-and-lodgers-summary").hide();

  $("#home-contents-update-card").hide();
  $("#home-contents-update-summary").hide();
  $("#home-contents-update-summary-deleted").hide();

  $("#home-contents-card").hide();
  $("#home-contents-summary").hide();

  $("#other-financial-investments-update-card").hide();
  $("#other-financial-investments-update-summary").hide();
  $("#other-financial-investments-update-summary-deleted").hide();

  $("#other-investments-card").hide();
  $("#other-investments-summary").hide();

  $("#other-payments-update-card").hide();
  $("#other-payments-update-summary").hide();
  $("#other-payments-update-summary-deleted").hide();

  $("#other-payments-card").hide();
  $("#other-payments-summary").hide();

  $("#employment-income-update-card").hide();
  $("#employment-income-update-summary").hide();
  $("#employment-income-update-summary-deleted").hide();

  $("#employment-income-card").hide();
  $("#employment-income-summary").hide();

  $("#purchased-income-streams-update-card").hide();
  $("#purchased-income-streams-update-summary").hide();
  $("#purchased-income-streams-update-summary-deleted").hide();

  $("#purchased-income-streams-card").hide();
  $("#purchased-income-streams-summary").hide();

  $("#foreign-pension-update-card").hide();
  $("#foreign-pension-update-summary").hide();
  $("#foreign-pension-update-summary-deleted").hide();

  $("#foreign-pension-card").hide();
  $("#foreign-pension-summary").hide();

  $("#life-insurance-update-card").hide();
  $("#life-insurance-update-summary").hide();
  $("#life-insurance-update-summary-deleted").hide();

  $("#life-insurance-card").hide();
  $("#life-insurance-summary").hide();

  $("#other-personal-assets-update-card").hide();
  $("#other-personal-assets-update-summary").hide();
  $("#other-personal-assets-update-summary-deleted").hide();

  $("#other-personal-assets-card").hide();
  $("#other-personal-assets-summary").hide();

}

$(Document).ready(function() {
  captureUserList();
  displayUserList();
});
