const markmass =78;
 const markheight = 1.69;
const johnmass = 92; 
const  johnheight = 1.95;


const bmiM = markmass/(markheight*markheight);
const bmiJ = johnmass/(johnheight*johnheight);

 const markhigherbmi = (bmiM>bmiJ); 
 console.log(bmiM , bmiJ , markhigherbmi);

if(bmiM>bmiJ){
    console.log('Mark has higher bmi....');
}else{
    console.log('john has higher bmi');
}