window.addEventListener('load', function () {
    const result = document.querySelector('#result').value;
    const hostnameref = document.querySelector('#hostnameref');
    const url = window.location.host + `/${result}`;
    hostnameref.innerHTML = url;
    hostnameref.href = `/${result}`;
});

const copy2clipboard = () => {
    const msg = document.querySelector('#clipboard-msg');
    const result = document.querySelector('#result').value;
    const url = `${window.location.host}/${result}`;

    // Copy the text inside the text field
    navigator.clipboard.writeText(url);

    msg.style.opacity = 100;
    msg.style.fontSize = '1rem';
    setTimeout(() => {
        msg.style.opacity = 0;
        msg.style.fontSize = '0rem';
    }, 2000);
};
