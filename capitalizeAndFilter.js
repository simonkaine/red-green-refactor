const capitalizeAndFilter = (arr) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        if (arr[i].charAt(0) !== 'F') {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};
      
export default capitalizeAndFilter;

