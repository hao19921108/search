let searchInput = document.getElementsByClassName("search-input");
let input = document.getElementsByTagName('input');

         let wrapper = document.getElementsByClassName("wrapper");


let inputBox=0;
let isTyping =0;
let myInterval=0;

let inputValue="";
let emptyInterval = 0;

setTimeout(init,1000);


function init(){
    
    inputBox= input[0];
    
    /*
   document.addEventListener("keydown",()=>{ isTyping=1; inputBox.focus();  } );

*/
    inputBox.addEventListener("click", function(){
        
        
        console.log(inputBox.value);
        if(myInterval){
            
            
        }
        
         switch(inputBox.value){
                case 'Prada':
             wrapper[0].innerHTML='<img src="images/sensitive.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Hermes':
             wrapper[0].innerHTML='<img src="images/spinach.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'LV':
             wrapper[0].innerHTML='<img src="images/bag.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Gucci':
             wrapper[0].innerHTML='<img src="images/borocli.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Balenciaga':
             wrapper[0].innerHTML='<img src="images/veggie01.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Rolex':
             wrapper[0].innerHTML='<img src="images/veggie02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Rolls Royce':
             wrapper[0].innerHTML='<img src="images/raddish.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Ferrari':
             wrapper[0].innerHTML='<img src="images/califlower.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Supreme':
             wrapper[0].innerHTML='<img src="images/carrot.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Yves Saint Laurent':
             wrapper[0].innerHTML='<img src="images/celery.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Cartier':
             wrapper[0].innerHTML='<img src="images/corn.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Porsche':
             wrapper[0].innerHTML='<img src="images/lettuce.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Chanel':
             wrapper[0].innerHTML='<img src="images/lettuce02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'COACH':
             wrapper[0].innerHTML='<img src="images/onion.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'CHANEL':
             wrapper[0].innerHTML='<img src="images/potato.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'IKEA':
             wrapper[0].innerHTML='<img src="images/potato2.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Mercedes':
             wrapper[0].innerHTML='<img src="images/banana.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                 
             case 'BMW':
             wrapper[0].innerHTML='<img src="images/bamboo.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Vans':
             wrapper[0].innerHTML='<img src="images/bean.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Maserati':
             wrapper[0].innerHTML='<img src="images/cucumber.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Van Cleef & Arpels':
             wrapper[0].innerHTML='<img src="images/brocoli02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Omega':
             wrapper[0].innerHTML='<img src="images/cabbage.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case "Victoria's Secret":
             wrapper[0].innerHTML='<img src="images/cabbage02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'HONDA':
             wrapper[0].innerHTML='<img src="images/cabbage03.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Ford':
             wrapper[0].innerHTML='<img src="images/corn02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Bulgari':
             wrapper[0].innerHTML='<img src="images/beets.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'McLaren':
             wrapper[0].innerHTML='<img src="images/lettuce04.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                    case 'Fendi':
             wrapper[0].innerHTML='<img src="images/lettuce05.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                       case 'Dior':
             wrapper[0].innerHTML='<img src="images/mint.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                       case 'Bentley':
             wrapper[0].innerHTML='<img src="images/orange.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                       case 'Bottega Veneta':
             wrapper[0].innerHTML='<img src="images/pea.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                       case 'Moncler':
             wrapper[0].innerHTML='<img src="images/raddish02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Lancome':
             wrapper[0].innerHTML='<img src="images/tomato.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'Burberry':
             wrapper[0].innerHTML='<img src="images/sweetpotato.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;         case 'Tiffany&Co':
             wrapper[0].innerHTML='<img src="images/strawberry.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;         case 'Givenchy':
             wrapper[0].innerHTML='<img src="images/squash.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;         case 'Armani':
             wrapper[0].innerHTML='<img src="images/arugula.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Lamborghini':
             wrapper[0].innerHTML='<img src="images/zuchini.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Rolex':
             wrapper[0].innerHTML='<img src="images/lettuce08.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Yeezy':
             wrapper[0].innerHTML='<img src="images/sweetpotato02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'Guerlain':
             wrapper[0].innerHTML='<img src="images/lettuce07.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                      case 'McLaren':
             wrapper[0].innerHTML='<img src="images/pepper.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case 'Lululemon':
             wrapper[0].innerHTML='<img src="images/chill.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case 'LOEWE':
             wrapper[0].innerHTML='<img src="images/lettuce06.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Valentino':
             wrapper[0].innerHTML='<img src="images/mushroom.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Bitcoin':
             wrapper[0].innerHTML='<img src="images/mushroom02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Ford':
             wrapper[0].innerHTML='<img src="images/mushroom03.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Bottega Veneta':
             wrapper[0].innerHTML='<img src="images/watermelon.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                       case 'Bulgari':
             wrapper[0].innerHTML='<img src="images/banana.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                      case 'Dolce & Gabbana':
             wrapper[0].innerHTML='<img src="images/quailegg.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                    case 'Estee Lauder':
             wrapper[0].innerHTML='<img src="images/egg.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                   case 'Salvatore Ferragamo':
             wrapper[0].innerHTML='<img src="images/eggplant.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                  
                    case 'Dolce & Gabbana':
             wrapper[0].innerHTML='<img src="images/quailegg.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                    
                case 'Microsoft Top Secret':
                 wrapper[0].innerHTML='<img src="images/loading.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
                    
                    
                 case 'Apple':
                 wrapper[0].innerHTML='<img src="images/notcare.png" alt="Girl in a jacket" width="80%" height="auto">'
                 break;
                    

                      case 'Baidu':
             wrapper[0].innerHTML='<img src="images/cross06.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case 'Cartier':
             wrapper[0].innerHTML='<img src="images/cross03.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                     case 'Y3':
             wrapper[0].innerHTML='<img src="images/punmkin.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Opensea':
             wrapper[0].innerHTML='<img src="images/notOkay.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'SK-II':
             wrapper[0].innerHTML='<img src="images/mushroom05.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'Opensea':
             wrapper[0].innerHTML='<img src="images/notOkay.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    case 'Loro Piana':
             wrapper[0].innerHTML='<img src="images/mushroom04.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                   case 'Acne Studio':
             wrapper[0].innerHTML='<img src="images/mushroom06.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                  case 'GOAT':
             wrapper[0].innerHTML='<img src="images/nia.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                  case 'Tiktok':
             wrapper[0].innerHTML='<img src="images/cross02.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                     case 'Air Jordan 4 Collector':
             wrapper[0].innerHTML='<img src="images/whocares.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                   case 'Kia':
             wrapper[0].innerHTML='<img src="images/cuoqi.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                  case "Banana's republic":
             wrapper[0].innerHTML='<img src="images/beat.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                 
                default:
             wrapper[0].innerHTML='<img src="images/cene0'+ Math.floor(Math.random() * 6 )+ '.png" alt="Girl in a jacket" width="80%" height="auto">'
                break;
                    
                    
                       
                                   
                       
               }   
        
        
        
//        inputBox.value="This input field is sponsored by";
        inputBox.value+=' '
        inputBox.style.color ="#000";
        
//        emptyInterval = setInterval(removeText,1000);
        
    });
    
    inputBox.addEventListener("keydown", down);
//    inputBox.addEventListener("keyup", up);

    
}

let threshold = 5000;

let maxTimeOut = threshold;

function colorCheck(){
    
    if(input[0] && input[0].style.color=="rgb(0, 0, 0)"){
        
       maxTimeOut -=500;
        
    }
    
    if(maxTimeOut<1){
        maxTimeOut = threshold;    
        input[0].style.color="lightgray";

        myFunction();
        
    }
        
}

let a = setInterval(colorCheck,500);




function down(){    
       if(event.keyCode===13){
 
          
           
           
           
           
      //     wrapper[0].innerHTML='<img src="images/A.jpg" alt="Girl in a jacket" width="100%" height="auto">'
    //       console.log(  wrapper[0].innerHTML);
       }
    
    
    
    
    
}






function removeText(){
    
    var array=[];
    var lastLetter;
    var newArray=[];

    if(inputBox.value){     
    
        array = inputBox.value;
        lastLetter = array[array.length-1]; // last letter 
        newArray = array.substring(0,array.length-1);
        
        inputBox.value = newArray;
        
    }

}



if(!isTyping){
    if(!input[0]){ myInterval = setInterval( myFunction, 5000);}
}

var messages=["Rolex","Ferrari","Cartier","Dior","Baidu","Tiktok","Risotto Restaurant","Okonomiyaki Recipe Company","Sykiyaki Maker","Covid","Ribeye Youtuber",'Tsunami Lover','Balenciaga','Okinawa Hater','Air Jordan 4 Collector','Apple',"Banana's republic","McLaren","Estee Lauder","Fendi","Gucci","Hermes","IKEA","Bentley","Kia","Ford","Loro Piana","Microsoft Top Secret","Nike","SK-II","Lululemon","Opensea","Porsche","Prada","Rolex","Omega","Starbucks","SSENSE","GOAT","Tiffany&Co","Moncler","Acne Studio",'LOEWE','Valentino',"Y3","Yeezy","Yelp","Omega","Bulgari","COACH","Lancome","CHANEL","Hao","Givenchy","HONDA","Bottega Veneta","BMW",'Supreme',"Mercedes","Victoria's Secret","Armani","Van Cleef & Arpels",'Needs money','Hao','Dolce & Gabbana','Rich Daddy',"Sugar Mommy","Candyboy","Yves Saint Laurent",'Lamborghini','Yeezy','LV','Salvatore Ferragamo','Maserati','Burberry','Rolls Royce'];



let i=0;
let flag=0;



function myFunction(){
    
    if(input[0].style.color!="rgb(0, 0, 0)"){
            inputBox.value= messages[Math.floor(Math.random() * messages.length)];
            wrapper[0].innerHTML='';
    }

}



if(!document.body){ setTimeout( addBlackBox,1000);
}





let m=1 , n= 56;
let linksArray;


function search(){
    
    console.log('haha');
}
function GFG_Fun() { 
            var img = document.createElement('img'); 
            img.src =  'logo.png'; 
        img.width=105;
           document.getElementsByClassName('logo')[0].appendChild(img); 
  //          down.innerHTML = "Image Element Added.";  
        }  



function addBlackBox(){
    
    if(!flag){

        linksArray=document.getElementsByTagName('a');

        for( m=0;m<linksArray.length;m++){
            
            if(m!=67 || m!=65){
                
                linksArray[m].classList.add('blur');

            }
            
        }
        
        
        document.getElementsByClassName('gn_logo').innerHTML='';
        document.getElementsByClassName('copyright')[0].innerHTML='';
        document.getElementsByClassName('logo')[0].innerHTML='';
        myFunction();
         GFG_Fun();
        document.getElementsByTagName('title')[0].innerHTML='Search Search';
 //document.getElementsByClassName('s-btn-b')[0].innerText='瞎看看';
        flag=1;
        
    }
    
}


