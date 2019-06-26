const getNormalRevenueValue = (value) => {
   if(value.length < 4) return `$ ${value}`;
   
   let valueStr = value.split("").reverse();

   let res = "";
   
   for(let i = 0; i < value.length; i += 3) {
     res += valueStr.slice(i, i + 3).join("") + ",";
   }

   return `$${res.split("").reverse().join("").replace(/^,(\d)/, "$1")}`;
}

export default getNormalRevenueValue;