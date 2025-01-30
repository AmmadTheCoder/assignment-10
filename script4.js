// Write a js program to compare two strings.
var string1=prompt("Enter the first string");
var string2=prompt("Enter the second string");
if(string1.length==string2.length){
    if(typeof string1==typeof string2){
        if(string1===string2){
            console.log("Both strings are equal");
        }
        else{
            console.log("Only type and length of strings are equal but strings are not equal");
        }
    }
    else{
        console.log("Types of Both strings are not equal");
    }
}
else{
    console.log("Length of Both strings are not equal");
}
