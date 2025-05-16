export const calculateDate = (incomingDate) => {
    const day = incomingDate.getDate();
    const month = incomingDate.getMonth() + 1;
    const year = incomingDate.getFullYear();
    return `${day}/${month}/${year}`;
}