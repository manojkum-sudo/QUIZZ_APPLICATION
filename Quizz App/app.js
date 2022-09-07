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

let index = 0;
let total = questions.length;
let right =0;
let wrong = 0;
const quesbox = document.getElementById("quesBox");
const optionsInputs = document.querySelectorAll('.options');
const loadQuestions =()=>{
    if(index == total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    //console.log(data);
    quesbox.innerText = `${index+1}) ${data.que}`;
    optionsInputs[0].nextElementSibling.innerText=data.a;
    optionsInputs[1].nextElementSibling.innerText=data.b;
    optionsInputs[2].nextElementSibling.innerText=data.c;
    optionsInputs[3].nextElementSibling.innerText=data.d;
    
}

const submitQuiz=()=>{
    const data = questions[index];
    const ans = getAnswer()
    if(ans == data.correct){
        right++;
    }else{
        wrong--;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer=()=>{
    let answer;
    optionsInputs.forEach(
        (input)=>{
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionsInputs.forEach(
        (input)=>{
            input.checked= false;
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
     <h3>Thank You for playing the quiz!</h3>
     <h2>${right} / ${total} are correct</h2>
    `
}

//initial call
loadQuestions();