function gettime() {
    const d = new Date();
    document.getElementById("date").textContent = "Date: " + d;
}
setInterval(gettime, 1000);
gettime();

function submit_form(){
    var fname = document.getElementById("fname");
    var msgname = document.getElementById("msgname");
    var email = document.getElementById("email");
    var msgemail = document.getElementById("msgemail");
    var cmmt = document.getElementById("cmmt");
    var msgcmmt = document.getElementById("msgcmmt");
    var confirm_email = email.value.split('@');
    var good_email = false;
    var phone_number = document.getElementById("phone_number");
    var msgphone = document.getElementById("msgphone");
    var phonenum=document.getElementById("phonenum");
    var email_choice=document.getElementById("email_choice");
    var msgpref=document.getElementById("msgpref");
    var contact_opts=0;
    var reason = document.getElementById("reason");
    var msgreason = document.getElementById("msgreason");

    if (email.value===""){
        msgemail.textContent="No email provided";
        msgemail.style.color="blue";
    }
    else if(confirm_email.length!=2){
        msgemail.textContent="Invalid email provided";
        msgemail.style.color="blue";
    }
    else{
        msgemail.textContent="";
        good_email=true;
    }
    
    if (phone_number.value.length!=10 || isNaN(phone_number.value)){
        msgphone.textContent="Invalid phone number provided";
        msgphone.style.color="blue";
    }
    else{
        msgphone.textContent="";
    }

    if (fname.value===""){
        msgname.textContent="No name provided";
        msgname.style.color="blue";
    }
    else{
        msgname.textContent="";
    }
    if (cmmt.value==="Write Comments Here" || cmmt.value===""){
        msgcmmt.textContent="Please leave a message regarding your custom order";
        msgcmmt.style.color="blue";
    }
    else{
        msgcmmt.textContent="";
    }

    if (phonenum.checked===true){
        contact_opts = contact_opts + 1;
    }
    if (email_choice.checked===true){
        contact_opts = contact_opts + 1;
    }
    if (contact_opts<1){
        msgpref.textContent="Please select a preferred contact method";
        msgpref.style.color="blue";
    }
    else{
        msgpref.textContent="";
    }

    if (reason.value===''){
        msgreason.textContent="No reason selected";
        msgreason.style.color="blue";
    }
    else{
        msgreason.textContent="";
    }

    if(fname.value!="" && good_email===true && (cmmt.value!="Write Comments Here" && cmmt.value!="") && (phone_number.value.length===10 && isNaN(phone_number.value) === false) && contact_opts>0 && reason.value!=''){
        window.open('mailto:meowgal700@gmail.com?subject='+ reason.value +'body=' + cmmt.value);
        alert("Thank you for reaching out! I will reply to your message as soon as possible!")
    }
    else{
        return;
    }
}