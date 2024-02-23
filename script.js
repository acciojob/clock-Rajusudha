//your JS code here. If required.
const para=document.querySelector("#timer");
function currentTime(){
	let date=new Date()
	let hour=date.getHours()
	let min=date.getMinutes()
	let sec=date.getSeconds()
	let day=date.getDay()
	let month=date.getMonth()
	let year=date.getFullYear()
	let time=hour+":"+min+":"+sec
	para.innerHTML=`${month}/${day}/${year},${time}`
	return `${month}/${day}/${year},${time}`
	
}
let ans=currentTime()
alert(ans)
setInterval(currentTime,1000)