const handleStringLength = (string: string, max_length: number, etc: string = "...") => {
  if (string.length > max_length) {
    return string.substring(0, max_length) + etc;
  }
  return string;
};

export default handleStringLength;
