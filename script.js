function shortcut(s1, s2) {
	if(s1==="" || s2===""){
		return("")
	}else{
	let f1=s1.charAt(0);
	let f2=s2.charAt(0);
	return(f1+f2);}
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
