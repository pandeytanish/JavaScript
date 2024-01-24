function getdata(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            document.write(this.responseText)
        }
    }
    // xhttp.open("GET", "https://jsonplaceholder.typicode.com/albums", true);
    // xhttp.send();
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/comments?postId=1", true);
    xhttp.send();
}