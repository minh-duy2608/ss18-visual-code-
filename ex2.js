let a = +prompt("Nhập điểm toán:")
let b = +prompt("Nhập điểm văn:");
let c = +prompt("Nhập điểm anh:");
let avg = (a+b+c) / 3;
if(avg >=8 && avg <=10){
    document.write(`Hoc luc gioi`);
}else if(avg >=6.5 && avg<8){
    document.write(`Hoc luc kha`);
}else if(avg >=5.0 && avg <6.5){
    document.write(`Hoc luc trung binh`);
}else{
    document.write(`Hoc luc yeu`);
}