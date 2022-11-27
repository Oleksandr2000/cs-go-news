const toTime = (timestamp: string): string => {
  return timestamp.split("T")[1].substring(0, 5);
};

export default toTime;
