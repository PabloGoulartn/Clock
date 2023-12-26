function getCurrentDate()
{
    return new Date();
}

function formatTimeValue(value)
{
    return String(value).padStart(2, "0");
}

function updateClock()
{
    const currentDate = getCurrentDate();

    document.querySelector('.hour').innerHTML = currentDate.getHours() + ":";
    document.querySelector('.minutes').innerHTML = formatTimeValue(currentDate.getMinutes()) + ":";
    document.querySelector('.seconds').innerHTML = formatTimeValue(currentDate.getSeconds());

    setTimeout(updateClock, 1000);
}

updateClock();