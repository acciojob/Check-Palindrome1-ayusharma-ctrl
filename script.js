// complete the given function

function palindrome(str){
		let s = str.toLowerCase();
	    let arr = [...s];  
	    let arrReverse = [...s].reverse();
	
	    for (let i = 0; i < arr.length; i++) {
	        if (arr[i] != arrReverse[i]) {
	            return false;
	        }
	    }
		return true;
}
module.exports = palindrome
