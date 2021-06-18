/*====== CHANGE HEADER BACKGROUND ON SCROLL =====*/
const show_header = () => {
    const header = document.getElementById("l-header");
    if (this.scrollY >= 50) header.classList.add('show-header');
    else header.classList.remove('show-header');
}

window.addEventListener('scroll', show_header);

/*====== FORM SUBMISSION MODAL ======*/
const form_contact = document.getElementById('form_contact');
const form_modal = document.getElementById('form_modal');
const modal_close = document.getElementById('modal_close_btn');

// CLOSE MODAL
const close_modal = () => {
    if (form_modal.classList.contains('up-modal')) {
        form_modal.classList.remove('up-modal');
    }

    return;
}

/*--- INIATE EMAIL.JS LIBRARY (CDN) ---*/
(function () {
    emailjs.init('user_klfEgDFRS3Us2Vmwu541q');
})();

/*-- SERVICE ID --*/
const service_id = 'service_ktnn1lb';
/*-- TEMPLATE ID --*/
const template_id = 'template_j0cqdzl';

/*--- INITIATE FORM INFO ---*/
/*var templateParams = {
    from_name: 'Mounir el bertouli',
    to_name: 'pergola.339mb@gmail.com',
          message: 'Hey from JavaScript client-side via Email.JS',
    occupation: 'Software Enginner'
};*/

/*--- SEND E-MAIL FUNCTION ---*/

const sendMail = (templateParams) => {
    emailjs.send(service_id, template_id, templateParams)
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

modal_close.addEventListener('click', close_modal);

const submit_form = (e) => {
    e.preventDefault();
    /* if (!form_modal.classList.contains('up-modal')) {
         form_modal.classList.add('up-modal');
     }*/

    const fullName = document.getElementById('fullname');
    const email = document.getElementById('email');
    const occupation = document.getElementById('occupation');
    const msg = document.getElementById('msg');

    /*--- DATA OBJECT ---*/
    const form_data = {};

    // FORM VALIDATOR 
    (function () {
        if (fullName == "" || email == "" || occupation == "" || msg == "") {
            alert('Form Fields Cannot be empty!')
            return;
        } else {
            form_data.from_name = fullName.value;
            form_data.to_name = email.value;
            form_data.occupation = occupation.value;
            form_data.message = msg.value;
        }
    })()

    if (!sendMail(form_data)) {
        form_modal.classList.add('up-modal');
        return;
    } else {
        alert('Ooops! Something Went Wrong! Try again later')
        return;
    }
};

form_contact.addEventListener('submit', submit_form);



