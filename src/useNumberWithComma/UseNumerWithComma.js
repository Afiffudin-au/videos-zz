export const UseNumberWithComma = (x,b)=>{
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}