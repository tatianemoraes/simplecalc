document.addEventListener("DOMContentLoaded", function(event) {
 
  var n1, n2 = '';
  var operation = ''; 

  var number = document.querySelector('.numbers');
  number.addEventListener('click',function(event) {

    if (operation == '') { 
      if (n1 === undefined){
        n1 = ''
      }

        switch (event.target.value) {
        case 'sum':
          document.querySelector('.resultado').value = n1 + '+';
          operation = '+';
        break;
        case 'minus':
          document.querySelector('.resultado').value = n1 + '-';
          operation = '-';
        break;
        case 'division':
          document.querySelector('.resultado').value = n1 + '/';
          operation = '/';
        break;
        case 'multiplication':
          document.querySelector('.resultado').value = n1 + '*';
          operation = '*';
        break;
        case undefined:
        break;
        case 'equal':
        break;
        default:
          n1 = n1 + event.target.value;
          document.querySelector('.resultado').value = n1; 
        break;
      }

    } else {
     
      if (operation) {      
        if (n2 === undefined){
          n2 = ''
        }
        switch (event.target.value) {
          case 'sum':
            operation = operation;
          break;
          case 'minus':
            operation = operation;
          break;
          case 'division':
            operation = operation;
          break;
          case 'multiplication':
            operation = operation;
          break;
          case 'equal':
            if (operation == '+') {
              document.querySelector('.resultado').value = parseInt(n1) + parseInt(n2);
              operation = '';
              n1 = '';
              n2 = '';
              break;
            }
            else if (operation == '-') {
              document.querySelector('.resultado').value = parseInt(n1) - parseInt(n2);
              operation = '';
              n1 = '';
              n2 = '';
              break;
            }
            else if (operation == '*') {
              document.querySelector('.resultado').value = parseInt(n1) * parseInt(n2);
              operation = '';
              n1 = '';
              n2 = '';
              break;
            }
            else {
              document.querySelector('.resultado').value = parseInt(n1) / parseInt(n2);
              operation = '';
              n1 = '';
              n2 = '';
              break;
            }
            case undefined:
            break;
          default:
            n2 = n2 + event.target.value;
            document.querySelector('.resultado').value = n1 + operation + n2; 
          break;
        }

      }
    }
  })
  
  // should be clear input result
  var btnClear = document.querySelector(".clear");
  btnClear.onclick = function() {
    document.getElementsByClassName('resultado')[0].value = '';
    operation = ''; 
    n1 = ''; 
    n2 = ''; 
  };
});

