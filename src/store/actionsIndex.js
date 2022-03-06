export const incrementByOne = ()=>{
    return {
        type:"ADD_ONE"
    };
};
export const decrementByOne = ()=>{
    return {
        type:"REMOVE_ONE"
    };
};
export const incrementByFive = ()=>{
    return {
        type:"ADD_FIVE"
    };
};
export const decrementByFive = ()=>{
    return {
        type:"REMOVE_FIVE"
    };
};
export const reset = ()=>{
    return {
        type:"RESET"
    };
};