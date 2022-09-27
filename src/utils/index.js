export const sortByLastName = (nameList, sort) => {
  const sortedNameList = nameList.sort((prevEl, el) => {
    if(prevEl.last_name < el.last_name) {
      return sort === "desc" ? 1 : -1;
    } else if (prevEl.last_name === el.last_name) {
      return 0;
    } else 
    return sort === "desc" ? -1 : 1;
  })

  return sortedNameList;
};

export const getFibonacci = (num) => {
  if (num <= 1) return num;
  return getFibonacci(num - 1) + getFibonacci(num - 2);
}
