//program to find the amstrong or not 
/* An amstrong number of three digits is an integer 
such thst the sum of the cubes of its digits is 
equal to the number itself.for example
371 is an amstrong number sice 3*3+7*3+1*3=371 */
var n;
n=prompt("enter the number");
s=0;
l=n.length;
for(i=0;i<l;i++)
{
s+=n[i]**l;
}
    //alert(sum);
if(n==s)

alert(n+ "is an amstrong number");

else 
    alert(n+" not an amstrong number");



