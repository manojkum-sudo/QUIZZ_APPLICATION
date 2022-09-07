const questions = [
    {
        'que':'Which of the follwing is the markup lanuage?',
        'a':'HTML',
        'b':'CSS',
        'c':'JavaScript',
        'd':'PHP',
        'correct':'a'
    },
    {
        'que':'which year JavaScript lauched',
        'a':'1996',
        'b':'2007',
        'c':'2008',
        'd':'2009',
        'correct':'a'
    },
    {
        'que':'Who is the owner of facebook?',
        'a':'Mark zukerburg',
        'b':'Elon mask',
        'c':'Bill gates',
        'd':' Larry page',
        'correct':'a'
    }

];

let index =0;
let total = questions.length;
let right =0;
let wrong =0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

const loadQuestion=()=>{
    if(index== total){
        return endQuiz();
    }
    reset();
    const data= questions[index];
    
    console.log(data);
    quesBox.innerText = `${index+1} ) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText=data.a;
    optionInputs[1].nextElementSibling.innerText=data.b;
    optionInputs[2].nextElementSibling.innerText=data.c;
    optionInputs[3].nextElementSibling.innerText=data.d;
    
}


const submitQuiz =()=>{
    const ans = getAnswer();
    const data= questions[index];
    if( ans == data.correct){
       right++; 
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
}

const getAnswer=()=>{
    let ans;
    
    optionInputs.forEach((input)=>{
       if(input.checked){
           ans = input.value;
       }
    })
    return ans;
    


}

const reset =()=>{
    optionInputs.forEach((input)=>{
        input.checked =false;
    })
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
     <h3>Thank You for playing the quiz!</h3>
     <h2>${right} / ${total} are correct</h2>
    `
}
loadQuestion();