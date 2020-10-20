$(document).ready(() => {
    //const $arrow = $(".container__main_box__right_side__questions__arrow");
    const $answer = $('.container__main_box__right_side__questions__answer');
    const $arrow1 = $('#one-button');
    const $arrow2 = $('#two-button');
    const $arrow3 = $('#three-button');
    const $arrow4 = $('#four-button');
    const $arrow5 = $('#five-button');
    const $answer1 = $('#one-answer');
    const $answer2 = $('#two-answer');
    const $answer3 = $('#three-answer');
    const $answer4 = $('#four-answer');
    const $answer5 = $('#five-answer');
    const $question1 = $('#one-question');
    const $question2 = $('#two-question');
    const $question3 = $('#three-question');
    const $question4 = $('#four-question');
    const $question5 = $('#five-question');

    
    $($arrow1).on('click', (event) => {
        $(event.currentTarget).toggleClass('rotate');
        $($answer1).slideToggle();
        $($question1).toggleClass('bold');
    });

    $($arrow2).on('click', (event) => {
        $(event.currentTarget).toggleClass('rotate');
        $($answer2).slideToggle();
        $($question2).toggleClass('bold');
    });

    $($arrow3).on('click', (event) => {
        $(event.currentTarget).toggleClass('rotate');
        $($answer3).slideToggle();
        $($question3).toggleClass('bold');
    });

    $($arrow4).on('click', (event) => {
        $(event.currentTarget).toggleClass('rotate');
        $($answer4).slideToggle();
        $($question4).toggleClass('bold');
    });

    $($arrow5).on('click', (event) => {
        $(event.currentTarget).toggleClass('rotate');
        $($answer5).slideToggle();
        $($question5).toggleClass('bold');
    });
    

});

//<p class="container__main_box__right_side__questions__answer two"></p>      

/*      
const answer = document.querySelector('.container__main_box__right_side__questions__answer');
const arrow = querySelector('.container__main_box__right_side__questions__arrow');

arrow.addEventListener("click", () => {
    answer.style.display = 'block';
});
*/