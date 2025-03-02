let a = parseFloat(prompt("Mời bạn nhập vào số a"));
let b = parseFloat(prompt("Mời bạn nhập vào số b"));
let operator = prompt("Mời bạn nhập vào phép tính (+, -, *, /)");
let result;

if (isNaN(a) || isNaN(b)) {
     result = "Vui lòng nhập số hợp lệ.";
} else {
    switch (operator) {
        case "+":
            result = ` ${a + b}`;
            break;
        case "-":
            result = `${a} - ${b} = ${a - b}`;
            break;
        case "*":
            result = `${a} * ${b} = ${a * b}`;
            break;
        case "/":
            result = b !== 0 ? `${a} / ${b} = ${a / b}` : "Không thể chia cho 0.";
            break;
        default:
            result = "Phép toán không hợp lệ.";
    }
}

alert("Kết quả của phép tính: " + result);