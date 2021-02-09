
document.getElementById("button").innerHTML = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".replace(/\S/g, "<button class='char'>$&</button>");
const wordlist = ["cord","handle","order","mind","wacky","grade","flashy","geese","veil","bushes","fall","wish","desire","rainy","terrify","cease","rigid","creature","crackle"];
let guessLetters =[];
let rand= Math.floor(Math.random()*wordlist.length);
let hiddenWord = wordlist[rand];
console.log(hiddenWord);
let Wrong = 0;
let Correct = 0;
let CorrectL = 0;
let MaxWrongchoices = 6;
let Answer = [];
let lives = document.getElementById("lives");
lives.innerHTML = MaxWrongchoices;
for (let index = 0; index < hiddenWord.length; index++) {
    Answer[index] = " _ ";  
}
document.getElementById("reset").addEventListener("click",
        () => {
           for (const item of bArray) {
                item.disabled = false;
            } 
            
            let newrand = Math.floor(Math.random()*wordlist.length);
            hiddenWord = wordlist[newrand];
            console.log(hiddenWord);
            
            document.getElementById("result").innerHTML = "welcome back";
        
            Answer = []; 
            for (let index = 0; index < hiddenWord.length; index++) {
                Answer[index] = " _ ";  
            }
            ;
            guessLetters =[];
            document.getElementById("gLetters").innerHTML = guessLetters;
            Wrong = 0;
            Correct = 0;
            CorrectL = 0;
            lives.innerHTML = MaxWrongchoices;
            
            document.getElementById("answer").innerHTML = Answer;
        }
        
        )


document.getElementById("answer").innerHTML = Answer;
const bArray = Array.from(document.querySelectorAll("button.char"));
bArray.forEach($btn =>{
    $btn.addEventListener(
        "click",
        ()=>{
            Correct = 0;
            guessLetters.push($btn.textContent.toLowerCase());
            document.getElementById("gLetters").innerHTML = guessLetters;
            $btn.disabled =true;
            for (let index = 0; index < hiddenWord.length; index++) {
                if(hiddenWord[index] === $btn.textContent.toLowerCase()){
                    Answer[index] = $btn.textContent.toLowerCase();
                    document.getElementById("answer").innerHTML = Answer;
                    Correct += 1;    
                }     
                   
            }
            CorrectL = CorrectL + Correct;
           
            if (Correct === 0) {
                Wrong = Wrong +1;
                
            }
             lives.innerHTML = MaxWrongchoices-Wrong;
           
            if (CorrectL ===  hiddenWord.length) {
                for (const item of bArray) {
                    item.disabled =true;
                }
                document.getElementById("result").innerHTML = "congrats you\'ve wone click reset to start another game" ;
                document.getElementById("result").style.backgroundColor = "green";
                document.getElementById("result").style.color = "white";
            }
            else if (Wrong === MaxWrongchoices) {
                document.getElementById("result").style.backgroundColor = "red";
                document.getElementById("result").style.color = "white";
                document.getElementById("result").innerHTML = "Game over you\'ve lost click reset to start another game";
                for (const item of bArray) {
                    item.disabled =true;
                };
            }
            
        }  
        );
        

})
