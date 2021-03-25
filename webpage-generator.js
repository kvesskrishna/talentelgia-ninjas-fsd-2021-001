getBasicReferences();
setTabTitle();
setBodyStyles();
setPageFooter();
setTitle();
itemBoxContainer();
webpagedata.items.forEach((item, index) => {

    createItemBox();
    setItemBoxContent(index)
})

