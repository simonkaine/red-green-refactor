const capitalizeAndFilter = (arr) => {
    const newArr = arr.map((item) => {
        const arrUpper = item.charAt(0).toUpperCase() + item.slice(1);
        return arrUpper;
    });
    return newArr.filter((item) => item.charAt(0) !== 'F');
};

export default capitalizeAndFilter;


