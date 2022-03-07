// getting all required elements


const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox= searchWrapper.querySelector(".autocom");


// setInterval( removeText , 1000);

var typingTimer;
var doneTypingInterval = 2000;


  function f1(el) {
        var val = el.value;
      console.log(el.selectionStart);
     //   console.log(val.slice(0, el.selectionStart).length);
    }



function removeText(){
    
    var array=[];
    var lastLetter;
    var newArray=[];

    if(inputBox.value){     
    
        array = inputBox.value;
        lastLetter = array[array.length-1];
        newArray = array.substring(0,array.length-1);
        
        inputBox.value = newArray;
        suggBox.innerHTML = newArray;
        
        if(!newArray){
             searchWrapper.classList.remove('active');
        }

    }

}


inputBox.onkeydown = (e) =>{
    
    f1(document.getElementById('t1'))
    
    
  clearTimeout(typingTimer);
    
}


//user is "finished typing," do something
function doneTyping () {

        inputBox.value += ' ';

        inputBox.value += words[Math.floor(Math.random() * 10)];
        inputBox.value += ' ';
    
  typingTimer = setTimeout(doneTyping, doneTypingInterval);

}

let txt;

inputBox.onkeyup = (e) =>{
    
  clearTimeout(typingTimer);
   typingTimer = setTimeout(doneTyping, doneTypingInterval);
    
    let userData=e.target.value;
    if(Math.random()<0.6){
        if(e.keyCode=== 32 ){ // user finish the sentence
            
            txt = input.value;
            
            
            inputBox.value += words[Math.floor(Math.random() * 10)];
            inputBox.value += ' ';
    }
    }
    let emptyArray =[];
    if(userData){
        emptyArray= suggestions.filter((data)=>{
           
            
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        
        emptyArray = emptyArray.map((data)=>{
            return data =  '<li><a href="https://www.google.com">'+ data +'</a>'+'</li>'; 
            
        });
        
      //  console.log(emptyArray);
        searchWrapper.classList.add('active');
        showSuggestions(emptyArray);

         let allList = suggBox.querySelectorAll('li');
        for (let i=0; i< allList.length; i++){
            allList[i].setAttribute("onclick", 'select(this)');
        }
        
        // detecting if the input value contains any "space"
        
        

    }else{
        searchWrapper.classList.remove('active');
        }
        
    
    
    
    }
    
    
function select(element){
   
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = userValue;
        listData = '<li>'+ userValue +'</li>'
    }else{
        
        listData = list.join('');
        
    }
    suggBox.innerHTML = listData;
}







