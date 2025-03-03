//Input:123
//Output: Một trăm hai mươi ba 

//Trường hợp 1:Người dùng nhập ngoài khoảng từ 0-999 => Thông báo lỗi
//Trường hợp 2:Người dùng nhập 0 =>Đọc thành "Không"
//Trường hợp 3:Người dùng nhập từ 1-999 => Xử lí các điều kiện

const units = [
    "Một", 
    "Hai",
    "Ba",
    "Bốn",
    "Năm",
    "Sáu",
    "Bảy",
    "Tám",
    "Chín",
];

const tens = [
    "mười",
    "hai mươi",
    "ba mươi",
    "bốn mươi",
    "năm mươi",
    "sáu mươi",
    "bảy mươi",
    "tám mươi",
    "chín mươi",
]

//Bước 1:Lấy dữ liệu từ ng dùng : prompt()
const inputNumber = +prompt("Nhập số bạn cần đọc:");
let word = "";

//Bước 2:Kiểm tra tính hợp lệ của dữ liệu
if(inputNumber <0 || inputNumber >999){
    alert("Dữ liệu ng dùng nhập vào ko hợp lệ");
}

//Bước 3:Kiểm tra các điều kiện để đọc dữ liệu
if(inputNumber == 0 ){
    alert(inputNumber +  "đọc là không");
}

//Bước 3.1:Lấy ra các số hàng trăm, chục, đơn vị
const hundred = Math.floor(inputNumber / 100);
const ten = Math.floor(inputNumber % 100) / 10;
const unit = inputNumber % 10;
console.log("hundred", hundred);
console.log("ten", ten);
console.log("unit", unit);

//Bước 3.2:Kiểm tra điều kiện của các khoảng trên và nối chuỗi
//Kiểm tra hàng trăm
if(hundred > 0 ){
    //Gán lại nội dung số hàng trăm 
    word += units[hundred] + " trăm ";

    if(ten === 0 && unit >0){
        word += " linh ";
    }
}

//Kiểm tra hàng chục và đơn vị
if(ten >0){
    word += tens[ten];

    if(unit === 5 && ten > 0){
        word += " lăm ";
    }else if(unit === 1){
        word += " mốt ";
    }else if(unit === 4){
        word += " tư ";
    }else if(unit >0){
        word += " " + units[unit]
    }
}else if(unit > 0){
    word += " " + units[unit];
}

//Bước 4:In kết quả ra cho ng dùng
console.log("word",word);
