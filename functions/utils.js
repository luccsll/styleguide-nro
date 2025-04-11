function formatDateInfo(date) {
    const currentDate = new Date();
    const currentDateOnly = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const hour = `${hours}:${minutes}`;
    const shortDate = `${day}/${month}`;

    let resultDate = '';
    let progressWidth = 0;
    let barColor = 'white';

    if (date.getTime() < currentDate.getTime()) {
        progressWidth = 100;
        barColor = 'var(--color-danger) !important';
    }

    if (dateOnly.getTime() === currentDateOnly.getTime()) {
        resultDate = "Hoje às " + hour;
    } else if (dateOnly.getTime() === currentDateOnly.getTime() + 24 * 60 * 60 * 1000) {
        resultDate = "Amanhã às " + hour;
    } else if (date.getTime() < currentDate.getTime()) {
        resultDate = "Vencido em " + shortDate + " às " + hour;
    } else {
        resultDate = shortDate + " às " + hour;
    }

    return {
        hour,
        shortDate,
        resultDate,
        progressWidth,
        barColor
    };
}