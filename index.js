
var words = ['it', 'is', 'said', 'that', 'of', 'all', 'english', 'sentences', 'can', 'be', 'formed', 'using', 'just', 'the', 'most', 'common', 'words', 'You', 'do', 'not', 'need', 'many', 'words', 'to', 'speak', 'english', 'well', 'you', 'must', 'learn', 'to', 'use', 'words', 'these', 'words', 'are', 'sometimes', 'called', 'tricky', 'words', 'sight', 'words', 'or', 'camera', 'words', 'in', 'addition', 'to', 'being', 'difficult', 'to', 'sound', 'out', 'most', 'of', 'the', 'high', 'frequency', 'words', 'have', 'a', 'rather', 'abstract', 'meaning', 'which', 'is', 'hard', 'to', 'explain', 'to', 'a', 'child', 'below', 'you', 'can', 'download', 'our', 'first', 'and', 'second', 'most', 'commonly', 'used', 'words', 'chart', 'for', 'your', 'classroom', 'as', 'a', 'display', 'or', 'simply', 'to', 'put', 'in', 'front', 'of', 'your', 'child', 'when', 'they', 'are', 'doing', 'their', 'homework', 'to', 'assist', 'them', 'with'];
var wordElems=[]
var totalCorrect = 0;
var totalIncorrect= 0;
var totalTyped = 0;

for (var i=0; i<30; i++){
    
    var randInt = Math.floor(Math.random()*(words.length));
    
    var newElement = document.createElement("span")
    newElement.className="refrenceElement";
    newElement.innerText=words[randInt]
    $("div.box_refrence")[0].append(newElement);

    wordElems.push(newElement)
    
    
    // $(wordElems).css("transform: skewX(10deg)")
    // console.log(newElement)  
}


document.addEventListener("keyup", adding);
document.addEventListener("keyup", function()
{
    for (let j=1; j<=60; j++){
        setTimeout(function(){
            $("h1.second")[0].innerText = j;
        }, 1000*j)
    }
},{
    once: true
});


var index = 0;

function adding(i){
    keyPressed = i.key;
    console.log(keyPressed);
    refrenceWord = wordElems[index].innerText;
    inputWord = $("div.Box_input")[0].innerText;

    
    if (keyPressed == " "){

        if (inputWord.trim() == refrenceWord){
            $("span")[index].classList.add("green"); 
            totalCorrect+= 1;
            $("h1.correct_words")[0].innerText = totalCorrect;
        }
        else{
            $("span")[index].classList.add("red");
            totalIncorrect += 1;
            $("h1.incorrect_words")[0].innerText = totalIncorrect;
        }
        
        $("div.Box_input")[0].innerText = "";
        totalTyped = totalCorrect + totalIncorrect;
        $("h1.total_typed")[0].innerText = totalTyped;
        index += 1;
        
    }
}













    // console.log($("span")[index])
    
    
    // while (refrenceWord.length >= input)


    
    

    

    // console.log($("div.box_input")[0].innerText)
    
    






// $("h1.input").innerHTML += keyPressed;

//     var element1 = $("h1.refrence").innerHTML[index];
//     var element2 = $("h1.input").innerHTML[index];
//     if (element1 == element2){
//         element2.
//     }



// if ((keyPressed == "Backspace")&&($("h1.input").length != 0)){
//     var length = $("h1.input").length;
//     $("h1.input")[length-1].remove();

//     index -= 1;

// }
// else{
//     if (keyPressed == "Enter"){
//         addingElement = '<br>';
    
//         index -= 1;
//     }
//     else if ($("h1.refrence")[0].innerHTML[index] == keyPressed){
    
//         addingElement = '<h1 class="input feature1">' + keyPressed + '</h1>';
//     }
//     else if (($("h1.refrence")[0].innerHTML[index] == " ") && keyPressed == "&nbsp"){
        
//         addingElement = '<h1 class="input feature1">' + keyPressed + '</h1>';
//     }
//     else{
//         addingElement = '<h1 class="input feature2">' + keyPressed + '</h1>';
//     }
    
//     $("h1.input").append(addingElement);
//     index += 1;

// }




// keyPressed = i.key;
//     if(keyPressed==" "){
//         keyPressed="&nbsp";
//     }