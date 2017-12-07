

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





