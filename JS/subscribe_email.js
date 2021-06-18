/*--- INIATE EMAIL.JS LIBRARY (CDN) ---*/
(function () {
    emailjs.init('user_klfEgDFRS3Us2Vmwu541q');
})();

const news_letter = document.getElementById('newsletter-form');
/*-- SERVICE ID --*/
const service_id = 'service_ktnn1lb';
/*-- TEMPLATE ID --*/
const template_id = 'template_9wzn9gz';

/*--- NEWSLETTER SUBSCRIPTION FORM  ---*/
const subscribe_email = (params) => {
    emailjs.send(service_id, template_id, params)
        .then(function (response) {
            /*console.log('SUCCESS!', response.status, response.text);*/
            console.log(response)
            return true;
        }, function (error) {
            //console.log('FAILED...', error);
            console.log(error)
            return false;
        });
}

const submit_email_form = (e) => {
    e.preventDefault();
    // GET EMAIL VALUE 
    const email_v = document.getElementById('email-newsletter').value;
    console.log(email_v);
    // EMAIL DATA
    const email_obj = {};
    // Email Pattern RegEx
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,4}$/;
    // CHECK IF EMAIL VALUE IS MATCHED WITH EMAIL PATTERN
    if (email_v.match(emailPattern)) {
        email_obj.subscriber_email = email_v;
        subscribe_email(email_obj);
        alert('Thank You For Subscribing To Our News-letter!')
        return;
    } else {
        alert('E-mail Not Valid! Try another one.');
        return;
    }

};

news_letter.addEventListener('submit', submit_email_form);