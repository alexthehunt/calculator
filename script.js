// add event listener to calculator buttons
const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = screenContent.textContent

        if (!action) {
            if (displayedNum === '0') {
                screenContent.textContent = keyContent
            } else {
                screenContent.textContent = displayedNum + keyContent
            }
        }


        if (action === 'decimal') {
            screenContent.textContent = displayedNum + keyContent
        }

        if (action === 'add') {
            screenContent.textContent = displayedNum + ' ' + keyContent + ' '
        }

        if (action === 'subtract') {
            screenContent.textContent = displayedNum + ' ' + keyContent + ' '
        }

        if (action === 'multiply') {
            screenContent.textContent = displayedNum + ' ' + keyContent + ' '
        }

        if (action === 'divide') {
            screenContent.textContent = displayedNum + ' ' + keyContent + ' '
        }

        if (action === 'equal') {
            const secondNum = displayedNum

        }


        if (!action) {
            console.log('number key!')
          }
        
          if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
          ) {
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
            console.log('operator key!')
          }
        
        if (action === 'decimal') {
            console.log('decimal key!')
        }
        
        if (action === 'clear') {
            console.log('clear key!')
        }
        
        if (action === 'delete') {
            console.log('delete key!')
        }
        
        if (action === 'equal') {
            console.log('equal key!')
        }
    }
   })
