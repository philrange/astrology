

function setActivePage(pageId) {
    $(".menuItem").removeClass("activePage")
    
    $("#" + pageId).addClass("activePage")
    
    console.log("Setting active page to " + pageId)
}