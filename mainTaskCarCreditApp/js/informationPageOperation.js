function createTable(selected_object){
    Object.defineProperty(selected_object,'src',{enumerable:false});
    let i=0;
   for(let f in selected_object){
       let td=createElement('td',null,null,selected_object[f],document.getElementsByTagName('tr')[i]);
       i++;
   }
}

function calculateCredit(number,devideNumebr,month){
    if(month==6){
        return ((number-devideNumebr)*1.04)/6;
    }else  if(month==12){
        return ((number-devideNumebr)*1.1)/12;
    }else  if(month==18){
        return ((number-devideNumebr)*1.14)/18;
    }

}

//function createElement(element, klass = null, cssProp = null, text = null, appendLocation = null)