var num=prompt("enter any number")
var i=1;
document.write('<table>')
for( i=1 ;i<21; i++){
 document.write( "<tr><td>" + num + "X" + i +"=" + num*i + "</tr></td>" );
}
document.write('</table>')