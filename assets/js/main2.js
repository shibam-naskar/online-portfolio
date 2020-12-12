
firebase.initializeApp(config);

var messageRef = firebase.database();



//listin for submin
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    //geting values

    var name = getInputVal('name');
    var email = getInputVal('email');
    var msg = getInputVal('message');

    


    
}



//function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
    
}
