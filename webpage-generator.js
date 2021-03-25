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

regFormContainer()

body.insertBefore(document.createElement('hr'), document.getElementById('regForm'))
remarkContainer()
remarks()
regForm()
regFormFields()