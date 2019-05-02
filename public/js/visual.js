

function setActivePage(pageId) {
    $(".menuItem").removeClass("active")
    
    $("#" + pageId).addClass("active")
    
    console.log("Setting active page to " + pageId)
}