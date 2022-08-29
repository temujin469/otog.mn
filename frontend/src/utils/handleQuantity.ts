const  handleQuant = (setter: React.Dispatch<React.SetStateAction<number>>,operation:"+" | "-")=>{
  operation === "+" ? setter(previous=> previous + 1) : setter(previous => previous - 1)
 }


 export default handleQuant