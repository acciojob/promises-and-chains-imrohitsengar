//your JS code here. If required.
let form=document.getElementById('form');
let btn=document.getElementById('btn');
form.addEventListener('submit',(e)=>{
	e.preventDefault();
	let age=document.getElementById('age');
	let name=document.getElementById('name');
	if( age.value==="" || name.value===""){
		alert("Please enter valid details.")
		return;
	}
	const promise= new Promise((res,rej)=>{
		if(age.value>18){
			setTimeout(()=>{
				res("Welcome, . You can vote.")
			},4000)
		}else{
			setTimeout(()=>{
				rej("Oh sorry . You aren't old enough.")
			},4000)
		}
	})
	promise.then((res)=> alert(`${res}`))
		.catch((rej)=> alert(`${rej}`))
})