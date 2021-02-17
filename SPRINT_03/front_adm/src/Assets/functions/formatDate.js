  // ------------------------------ Formatação da data
const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getDay();
    const mo = myDate.getMonth() + 1;
    const y = myDate.getFullYear();
    // const h = myDate.getHours();
    // const mi = myDate.getMinutes();

  return `${d}/${mo}/${y}`; {/*- ${h}:${mi}*/};
  };

  export default formatDate;