// getting all required elements


const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox= searchWrapper.querySelector(".autocom");



inputBox.onkeyup = (e) =>{
    
    let userData=e.target.value;
    if(e.keyCode===32){console.log('fuck off')
            inputBox.value += words[Math.floor(Math.random() * 10)];
            inputBox.value += ' ';


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







