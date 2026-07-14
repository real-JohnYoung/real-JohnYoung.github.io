// encryption.js

function showEncryptedContent() {
    var password = prompt('Please Enter Password');
    if (password === '7777777') {
        window.location.href = 'pdfs/CV_Chinese_version.pdf';
    }
    else {
        alert('Failed');
    }
}
