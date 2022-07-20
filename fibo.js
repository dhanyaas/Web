// Program to find first n fibonacci numbers
var f1=0,f2=1,f3;
n=prompt("Enter the limit:");
//msg=prompt("Fibonacci series:");
console.log(f1 + "\n" + f2 );
document.write("<h2 style='color=hotpink'>The Fibonacci series upto" + n + "is:");
document.write("<br/>"+f1 + "<br/>" +f2 + "<br/>");
 for(i=3;i<=n;i++)
{
    
    f3=f1+f2;
    document.write(f3 + "<br />");

f1=f2;
    f2=f3;
}
//document.write(f3);


