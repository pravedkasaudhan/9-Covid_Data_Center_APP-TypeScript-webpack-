import '../style.css';
import {addCountry} from './option'
import {addData} from './table'
import {graph} from './graph'
console.log("this is api app");



addCountry();
addData();
// graph();

// async function history(country){
// 	const a=await fetch("https://api.covid19api.com/total/country/" + country + "/status/confirmed", {
// 		"method": "GET",
//          "redirect": "follow",
// 	})
// 	const b= a.json();
// 	return b;
// }
// history("india").then(data=>{
// 	console.log(data);
// })


