/* 
* 比较两个版本号 version1 和 version2，
* 如果 version1 > version2 返回 1，
* 如果 version1 < version2 返回 -1， 
* 除此之外返回 0。
*/
export const compareVersion = function(version1,version2){
    const arr1 = version1.split('.')
    const arr2 = version2.split('.')
    const length1 = arr1.length
    const length2 = arr2.length
    for(let i = 0; i < length1 || i < length2; i++){
        let intX = 0, intY = 0;// 定义两个 整型数字 接收版本转成数字
        if(i < length1){
            intX = parseInt(arr1[i]);
        }
        if(i < length2){
            intY = parseInt(arr2[i])
        }
        if(intX > intY){
            return 1
        }
        if(intX < intY){
            return -1
        }
    }
    return 0;//循环走完 那肯定是一致的
}

/* 
题目： 输入一组版本号，输出从大到小的排序
输入： ['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']
输出： ['10.2.1', '5.1.2', '2.1.0.1', '1.0.4.5', '0.402.1']
*/
const versionSort = (array)=>{
    arr.sort((a,b)=>{
        let i = 0;
        const arr1 = a.split('.');// [2,1,0,1]
        const arr2 = b.split('.');
        while(i < arr1.length || i < arr2.length) {
            let intX = 0;let intY = 0;
            if(i < arr1.length){
                intX = parseInt(arr1[i]);
            }
            if(i < arr2.length){
                intY = parseInt(arr2[i])
            }
            if(intX > intY){
                return 1
            }
            if(intX < intY){
                return -1
            }
        }
        
    })
}