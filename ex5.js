let experience = +prompt("Nhập số năm kinh nghiệm của nhân viên:");
let category;
        
if (isNaN(experience) || experience < 0) {
    category = "Vui lòng nhập một số hợp lệ.";
} else if (experience < 1) {
    category = "Mới vào nghề";
} else if (experience >= 1 && experience <= 3) {
    category = "Nhân viên có kinh nghiệm";
} else if (experience >= 4 && experience <= 6) {
    category = "Chuyên viên";
} else {
    category = "Quản lý";
}

alert(category);