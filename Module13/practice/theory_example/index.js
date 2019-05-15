;(function() {
    function isValue(el, arr) {
        for (let i = 0; i < arr.length; i++) {
                if (el.value) {
                el.classList.add("active");
            } else {
                el.classList.remove("active");
            }
        }
    }
    
    let inputs = document.querySelectorAll(".js_input");
    let newArr = Array.from(inputs);
    let close = document.querySelector('.js_close_icon');
    let form = document.querySelector('.js_form');
    let formWrapper = document.querySelector('.js_container_wrapper');
    let thanksMessageModal = document.querySelector('.js_thanks_message_modal');
    let openModal = document.querySelectorAll('.js-open_modal');
    let bntOkModal = document.querySelector('.js_submit_ok');

    let formContent = document.querySelector('.js_form__content');

    newArr.forEach(element => element.addEventListener("change", () => isValue(element, newArr)));

    function sendForm() {
        event.preventDefault();
        showThanksMessage();
    }

    close.addEventListener('click', function() {
        formWrapper.classList.add('close_modal');
    });
    bntOkModal.addEventListener('click', function() {
        formWrapper.classList.add('close_modal');
    });
    
    function showThanksMessage() {
        thanksMessageModal.classList.add('active');
        formContent.classList.add('hide');
    }
    
    openModal.forEach(element => element.addEventListener('click', function() {
        formWrapper.classList.remove('close_modal');
        thanksMessageModal.classList.remove('active');
        formContent.classList.remove('hide');
        // newArr.forEach(element => element.value = '');
    }));

    form.addEventListener('submit', sendForm);

})();