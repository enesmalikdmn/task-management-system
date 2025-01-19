export const formatDate = (dateString: string | undefined) => {
  if (!dateString) {
    return '';
  }
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Aylar 0'dan başlar
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };