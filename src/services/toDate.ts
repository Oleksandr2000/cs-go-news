const toDate = (timestamp: string): string => {
  return timestamp.split("T")[0];
};

export default toDate;
