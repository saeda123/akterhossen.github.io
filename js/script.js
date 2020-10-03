var fnames = document.getElementById('fname');
var fnames_err = document.getElementById('fname_err');

var lnames = document.getElementById('lname');
var lnames_err = document.getElementById('lname_err');

var emails = document.getElementById('email');
var emails_err = document.getElementById('email_err');
var email_rgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


var password = document.getElementById('pass');
var password_err = document.getElementById('pass_err');
var pass_rgx = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

var re_password = document.getElementById('re_pass');
var re_password_err = document.getElementById('re_pass_err');


var males = document.getElementById('male');
var females = document.getElementById('female');
var genders_err = document.getElementById('gender_err');


function form_validation() {
    if (fnames.value == '') {
        fnames_err.innerHTML = 'Write your 1st name.';
        fnames_err.style = 'color:red';
        fnames.style = 'border-color:red;';
        fnames.focus();

        return false;


    } else if (lnames.value == '') {
        lnames_err.innerHTML = 'Write your last name.'
        lnames_err.style = 'color:red';
        lnames.style = 'border-color:red;';
        lnames.focus();
        return false;


    } else if (emails.value == '') {
        emails_err.innerHTML = 'Write your e-mail.'
        emails_err.style = 'color:red';
        emails.style = 'border-color:red;';
        emails.focus();
        return false;


    } else if (!email_rgx.test(emails.value)) {
        emails_err.innerHTML = 'Your e-mail formate is not correct!'
        emails_err.style = 'color:red';

        return false;
    } else if (password.value == '') {
        password_err.innerHTML = 'Write your Password.'
        password_err.style = 'color:red';
        password.style = 'border-color:red;';
        password.focus();
        return false;


    } else if (!pass_rgx.test(pass.value)) {
        pass_err.innerHTML = 'Your password must be 8 character and A-z and 0-9!'
        pass_err.style = 'color:red';

        return false;
    } else if (re_password.value == '') {
        re_password_err.innerHTML = 'Write your re_password.'
        re_password_err.style = 'color:red';
        re_password.style = 'border-color:red;';
        re_password.focus();

        return false;


    } else if (password.value != re_password.value) {
        re_password_err.innerHTML = 'Your password and re-password is not correct!'

        return false;
    } else if (!(males.checked || females.checked)) {
        genders_err.innerHTML = 'Choose your gender.';
        genders_err.style = 'color:red';

        return false;
    }



}

function remove() {
    if (fnames.value != '') {
        fnames_err.innerHTML = '';
        fnames.style = 'border-color:green;';


    }
    if (lnames.value != '') {
        lnames_err.innerHTML = '';
        lnames.style = 'border-color:green;';


    }
    if (emails.value != '') {
        emails_err.innerHTML = '';
        emails.style = 'border-color:green;';

    }
    if (password.value != '') {
        password_err.innerHTML = '';
        password.style = 'border-color:green;';


    }
    if (re_password.value != '') {
        re_password_err.innerHTML = '';
        re_password.style = 'border-color:green;';


    }
}


fnames.addEventListener('blur', remove);
lnames.addEventListener('blur', remove);
emails.addEventListener('blur', remove);
password.addEventListener('blur', remove);
re_password.addEventListener('blur', remove);


//
//window.alert('you looking my lead magnet');
//condition:
//    var a = 110;
//if (a == 10) {
//    document.write('yes');
//} else {
//    document.write('no');
//}
//var a = prompt('enter your name');
//var b = prompt('enter your gmail');
