const formatDate = (date) => {
    const d = date ? new Date(date) : new Date();
    const dateOptions = { year: "numeric", month: "long", day: "numeric" };
    const timeOptions = { hour: "2-digit", minute: "2-digit" };
    const formattedDate = d.toLocaleDateString(undefined, dateOptions);
    const formattedTime = d.toLocaleTimeString(undefined, timeOptions);
    return [formattedDate, formattedTime];
};

export default formatDate;