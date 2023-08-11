// encryption.js

function showEncryptedContent(address) {
    var password = prompt('Please Enter Password');
    if (password === '7777777') {
        if (address==="index"){
        window.location.href = 'pdfs/CV_Chinese_version.pdf';
       }
       else if (address ==="subpages"){
        window.location.href = '../pdfs/CV_Chinese_version.pdf';
       }
    }
    else {
        alert('Failed');
    }
}