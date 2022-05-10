//fibonacci - resolva a formula (1,1,3,5,8,13,21,...,100)//
//  F(n) + F(n + 1) = F(n + 2) //



let n1 = 1
let n2 = 0
let n3 = 1

while (n3 < 100)
{
console.log (n3);
n3 = n1 + n2;
n2 = n1
n1 = n3
} 
// and n3 if(n3 / 2 = 0)// 