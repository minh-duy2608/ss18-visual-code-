let number = prompt("Nhập một số từ 0 đến 9:");
let result;

switch (number) {
    case "0":
        result = "Số Không";
        break;
    case "1":
        result = "Số Một";
        break;
    case "2":
        result = "Số Hai";
        break;
    case "3":
        result = "Số Ba";
        break;
    case "4":
        result = "Số Bốn";
        break;
    case "5":
        result = "Số Năm";
        break;
    case "6":
        result = "Số Sáu";
        break;
    case "7":
        result = "Số Bảy";
        break;
    case "8":
        result = "Số Tám";
        break;
    case "9":
        result = "Số Chín";
        break;
    default:
        result = "Vui lòng nhập một số từ 0 đến 9";
}

alert(result);