const compareDate = (date: string): string => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const currentDay = new Date().getDate();

  const today = `${currentYear}-${currentMonth + 1}-${currentDay}`;

  const yeasterday = `${currentYear}-${currentMonth + 1}-${currentDay - 1}`;

  if (today === date) {
    return "Today`s news";
  }

  if (yeasterday === date) {
    return "Yeasterday`s news";
  }

  return date;
};

export default compareDate;
