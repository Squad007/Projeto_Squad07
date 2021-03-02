// ------------------------------ Formatação da data
const formatDate = (rawDate) => {
  const myDate = new Date(rawDate);
  const d = myDate.getUTCDate();
  const mo = myDate.getUTCMonth() + 1;
  const y = myDate.getUTCFullYear();
  // const h = myDate.getHours();
  // const mi = myDate.getMinutes();

  return `${pad(d)}/${pad(mo)}/${y}`;
};

export default formatDate;

function pad(num, size = 2) {
  num = num.toString();
  while (num.length < size) num = '0' + num;
  return num;
}
