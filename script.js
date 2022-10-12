class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear(){
        this.previousOperand = ''
        this.currentOperand = ''
        this.operation = undefined
    }

    delete(){

    }
// בפונקציה הזו אני מוסיף את ההוראות דהיינו פונקציה לאיך השורה התחתונה נמאת, מה שקורה הוא שמוסיפים לסטרינג של השורה את המספר ומונע את זה מלהתחבר כמו בתרגיל
// וגם עוצר את הפונקציה אם מדובר ביותר מנקודה עשרונית אחת
    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation){
        // אם השורה התחתונה כבר נמחקה הפונקציה עוצרת כדי שלא 
        // ילחצו על שני פעולות חשבון ואז זה יתאפס
        // כי כאשר לוחצים על פעולה הוא מעביר את מה שבתחתונה לעליונה וכאמור הא כבר ריקה
        if (this.currentOperand === '') return
        if (this.previousOperand !== ''){
            this.compute()
        }
        // קודם כל נכניס את הזמני לתוך הפונקציה
        this.operation = operation
        // נעביר את השורה הגדולה לעליונה ואז נאפס אותה
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){

    }

    updateDispley(){
        // לוקח את מה שבתוך הנעלם ושם אותו בתור טקסט לתצוגה
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}

// פה הכנסנו את הנעלמים לקוד
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// עכשיו אני קורא לפונקציה ונותן לה שני נעלמים זמניים
// הנעלמים הזמניים הם בתוך הדיב השחור של מסך המחשבון
// ובעצם כל השאר זה רק לקחת את מה שהמשתמש לחץ עליו
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
// עכשיו אני מטפל באיך להוסיף את מה שלחצו עליו לפונקציה של המחשבון
numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerText)
        calculator.updateDispley()
    })
})
// אותו דבר עם פעולות החשבון אך יש עוד קצת מתמטיקה
operationButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDispley()
    })
})