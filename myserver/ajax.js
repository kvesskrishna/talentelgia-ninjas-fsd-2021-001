function ajaxcall() {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = requestdemo;

    function requestdemo() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                document.getElementById("result").innerHTML = xmlhttp.responseText;
            }
            else if (xmlhttp.status == 400) {
                alert('There was an error 400');
            }
            else {
                alert('something else other than 200 was returned');
            }
        }
    }

    xmlhttp.open("GET", "http://localhost:3000/gethtmlresult/ajaxcontent", true);
    xmlhttp.send();
}


