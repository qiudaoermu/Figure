var a = 3;
var b = 4;
console.log(a+b);
var log = console.log;

var sentence = "the quick brown fox jumped over the lazy dog";
/**1.
 * 字符串.split(分隔符) 将字符串生成为数组
 * */
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
    log("word " + i + ": " + words[i]);
}
/*简单递归*/

function factorial(number){
      if(number==1){
        return number;
      }else{
        return (number)*factorial(number-1);
      }
}
log(factorial(5));



/*找三个最大*/
let arr = [23,45,23,46,1,100,14];


function findMin(ca){
	var t = ca[0];
	var v = '';
	for(var i=0;i<ca.length;i++){
		if(ca[i]<t){
			t = ca[i];

		}
	}
	for(var j=0;j<ca.length;j++){
		if(t==ca[j]){
			v = j;
		}
	}
	return [t,v];
}

function findMax3(arr){

	var tempArr = [arr[0],arr[1],arr[2]];
	for(var i=0;i<arr.length;i++){
		var min = findMin(tempArr);
		if(arr[i]>min[0]){
			tempArr[min[1]] = arr[i];
		}
	}
	return tempArr;

}
//console.log(findMax3(arr));

//冒泡排序(从小到大)

function bubbling(arr){
	for(var j=0;j<arr.length;j++){
		for(var i=0;i<arr.length;i++){
			if(arr[i]>arr[i+1]){
				    var  tepm = arr[i]
					arr[i] = arr[i+1];
					arr[i+1] = tepm;
			}
		}
	}
	return arr;
}
log(bubbling(arr));

function Figure(){

}
Figure.prototype = {
		/*简单递归*/
		factorial:function(number){
			  if(number==1){
		        return number;
		      }else{
		        return (number)*this.factorial(number-1);
		      }
		},
		/*冒泡排序*/
		bubbling(arr){
			for(var j=0;j<arr.length;j++){
				for(var i=0;i<arr.length;i++){
					if(arr[i]>arr[i+1]){
						    var  tepm = arr[i]
							arr[i] = arr[i+1];
							arr[i+1] = tepm;
					}
				}
			}
			return arr;
		},
		findMax3(){
			var tempArr = [arr[0],arr[1],arr[2]];
			for(var i=0;i<arr.length;i++){
				var min = this.findMin(tempArr);
				if(arr[i]>min[0]){
					tempArr[min[1]] = arr[i];
				}
			}
			return tempArr;
		},
		findMin(ca){
			var t = ca[0];
			var v = '';
			for(var i=0;i<ca.length;i++){
				if(ca[i]<t){
					t = ca[i];
				}
			}
			for(var j=0;j<ca.length;j++){
				if(t==ca[j]){
					v = j;
				}
			}
			return [t,v];
		}
};

var f = new Figure();
log(f.factorial(5));
log(f.bubbling(arr));
log(findMax3(arr));





