let year = +prompt("Nhập một năm bất kỳ:");
let info;

if (isNaN(year) || year <= 0) {
    info = "Vui lòng nhập một năm hợp lệ.";
} else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    info = year + " là năm nhuận.";
} else {
    info = year + " không phải là năm nhuận.";
}

alert(info);