

// js implementation for the template function
let body, firstscripttag;
const getBasicReferences = () => {
    body = document.querySelector('body');
    // identity the first script tag in the body
    firstscripttag = document.querySelector('body script:nth-child(1)');
}

// function setTabTitle() {
//     document.title = webpagedata.title;
// } // FUNCTION EXPRESSION - HOISTED ALONG WITH DEFINITION

//add title to tab
const setTabTitle = () => {
    document.title = webpagedata.title;
} // FUNCTION STATEMENT


//add initial styles to body
const setBodyStyles = () => {
    body.style.backgroundColor = webpagedata.bgcolor ? webpagedata.bgcolor : 'white';
    body.style.color = webpagedata.fontColor ? webpagedata.fontColor : 'black';
}



// add footer to the page
const setPageFooter = () => {
    footernode = document.createElement('footer');
    body.insertBefore(footernode, firstscripttag);
    footer = document.querySelector('footer');
    footer.innerText = webpagedata.footer;
}


// add the title to page
const setTitle = () => {

    let doctitle = document.createElement('h1'); // create an element
    doctitle.setAttribute('id', 'doctitle');
    // console.log(getscripts)
    body.insertBefore(doctitle, footer);
    // document.insertBefore('script', document.getElementById('doctitle')); // append it to its parent
    doctitle.innerText = webpagedata.title; // do any with that element
    doctitle.style.textAlign = 'center'; //

    doctitle.appendChild(document.createElement('hr'));
}

const itemBoxContainer = () => {
    let node = document.createElement('div');
    node.setAttribute('id', 'item-box-container')
    body.insertBefore(node, footer);
}
const createItemBox = () => {
    let node = document.createElement('div');
    node.className = 'item-box';
    document.getElementById('item-box-container').appendChild(node);

}


// body.innerHTML = `<h1>${webpagedata.title}</h1>`

//create a test div
// let testdivnode = document.createElement('div');
// body.insertBefore(testdivnode, footer);
// let testdiv = document.querySelector('div');


