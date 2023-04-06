function init() {
    displayAge();
}

function displayAge() {
    const MY_AGE = calcAge();
    if (document.getElementById('my_age_ja') != null) { displayAgeJa(MY_AGE); }
    else if (document.getElementById('my_age_en') != null) { displayAgeEn(MY_AGE); }
}

function displayAgeJa(MY_AGE) {
    let displayAgeJa = '現在' + MY_AGE + '歳';
    let text = document.getElementById('my_age_ja');
    text.textContent = displayAgeJa;
}

function displayAgeEn(MY_AGE) {
    let displayAgeEn = 'Now ' + MY_AGE + ' years old';
    let text_en = document.getElementById('my_age_en');
    text_en.textContent = displayAgeEn;
}

function calcAge() {
    const TODAY = new Date();
    const YEAR = TODAY.getFullYear();
    const MONTH = TODAY.getMonth() + 1;
    const DAY = TODAY.getDate();

    const MY_BIRTHDAY = '20010617';

    let dateStr = '' + YEAR + ('0' + MONTH).slice(-2) + ('0' + DAY).slice(-2);
    const MY_AGE = Math.trunc((parseInt(dateStr) - parseInt(MY_BIRTHDAY)) / 10000);
    return MY_AGE;
}