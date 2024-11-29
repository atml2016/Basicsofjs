/*
let num = [10,33,44,22,43];
for(i=0;i<=num.length;i++)
{
    console.log('num[' + i + ']:' + num[i]);
}
*/

/*
let text= '';
for(i=0;i<10;i++)
{
    if(i==4){
        continue;
    }
   text=text+i;
}
console.log(text);
*/


/*
let text= '';
for(i=0;i<10;i++)
{
    if(i==4){
        break;
    }
   text=text+i;
}
console.log(text);
*/


/*
let text=0;
let i=0;
do
{
    i=i+1;
   text=text+i;
}while(i<5);
console.log(text);
*/



const object = {a:1,b:2,c:3}

for(const property in object){
    console.log(`${property}:${object[property]}`);
}
