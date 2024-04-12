export const fomatDateAtDrive = (datetimeString: string) => {
  const datetime = new Date(datetimeString);
  const day = ('0' + datetime.getDate()).slice(-2);
  const month = ('0' + (datetime.getMonth() + 1)).slice(-2);
  const year = datetime.getFullYear();
  const hours = ('0' + datetime.getHours()).slice(-2);
  const minutes = ('0' + datetime.getMinutes()).slice(-2);
  const formattedString = `${day}-${month}-${year} ${hours}:${minutes}`;
  return formattedString
} 