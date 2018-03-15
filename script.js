"use:strict"
//4. Compress a String of Characters
function compressString(input3){
	let input4 = input3.split('');		// [a,a,a,b,b,b,b,b,c,c,c,c,a,a,c,c,c,b,b,b,a,a,a,b,b,b,a,a,a]
	let storeResult = "";
	let count = 0;

	for(i = 0; i < input4.length; i++){

		if (i === 0){
			count++;
		}

		else if (input4[i] === input4[i-1]){
			count++;
		}

		else{
			storeResult = storeResult + count + input4[i-1];
			count = 1;
		}
	}
	console.log(storeResult);
}
compressString("aaabbbbbccccaacccbbbaaabbbaaa");