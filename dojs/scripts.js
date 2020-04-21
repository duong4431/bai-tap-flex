// ---------------------Định nghĩa hàm----------------------
///Kiểm tra tên có chứa ký tự nào đó không
///Cách 1 dùng indexOf
function isExitsChar(str,ch)
{
    var arr = str.split(' ');
    return arr[arr.length - 1].indexOf(ch) != -1;
}
///Cách 2 chỉ dùng split
function isExitsChar_v1(str,ch)
{
    var arr = str.split(' ');
    return arr[arr.length - 1].split(ch).length > 1;
}
///Cách 3 dùng replace
function isExitsChar_v2(str,ch)
{
    var arr = str.split(' ');    
    return arr[arr.length - 1].replace(ch,'abcde').length > arr[arr.length - 1].length;
}
///Hàm hỗ trợ bài tập 4
///Tác dụng: để sử dụng với nhiều mảng tránh viết lại code
function doEx4(arr)
{
    var tempArr;
    arr.forEach(item => {
        tempArr = item.map(num => num + 2).filter(num => num % 3 != 0);
        console.log('- Mảng ban đầu: ',item,'- KQ Sau khi xử lý và kiểm tra không chia hết cho 3: ',tempArr);
    });
}
// -------------Định nghĩa bài tập thành từng hàm-----------
function bai1(){
    console.log('+ Bài tập 1:');
    var listName = ['Nguyễn Tiến Đạt','Bùi Văn Nam','Đoàn Anh Hùng','Vũ Hoàng Huy'];
    console.log('Mảng tên người: ',listName);
    console.log('In ra lời chào với từng người: ');
    listName.forEach(name=>{console.log('- Xin chào! Tôi tên là: ' + name);});
    console.log('-----------------------------------------');
}
function bai2()
{
    console.log('+ Bài tập 2');
    var listNum = [1,4,2,3];
    var newlistNum = listNum.map(num => num * 2).sort();
    console.log('Danh sách số cũ: ',listNum);
    console.log('Danh sách số đã nhân 2 và được sắp xếp: ',newlistNum);
    console.log('-----------------------------------------');
}
function bai3()
{
    console.log('+ Bài tập 3');
    var listName = ['nguyen van tung','tao van Nguyen','Tran manh Nam','Nguyen dinh Duc'];
    console.log('Mảng tên người: ',listName);
    var newlistName = listName.filter(name=>isExitsChar_v2(name,'N'));    
    console.log('Số người có chữ N trong tên là: ' + newlistName.length, newlistName);
    console.log('-----------------------------------------');
}
function bai4()
{
    console.log('+ Bài tập 4');
    console.log('Yêu cầu: Mảng các số được cộng thêm 2 và kiểm tra không chia hết cho 3:')
    var arr1 = [1,4], arr2 = [2,5];
    console.log(doEx4([arr1,arr2]));
    console.log('-----------------------------------------');
}
function bai5()
{
    console.log('+ Bài tập 5 cách 1');
    var listHeight = [150, 160, 155, 165, 170, 164, 140, 180, 172];        
    console.log('Số bạn mặc áo size S: ' + listHeight.filter(height => height < 165).length);    
    console.log('Số bạn mặc áo size M: ' + listHeight.filter(height => height >= 165 && height <= 170 ).length);    
    console.log('Số bạn mặc áo size L: ' + listHeight.filter(height => height > 170).length);    
    console.log('-----------------------------------------');
}
function bai5_v1()
{
    console.log('+ Bài tập 5 cách 2');
    var listHeight = [150, 160, 155, 165, 170, 164, 140, 180, 172]; 
    var size = {s:0, m:0, l:0};       
    listHeight.forEach((height) => {
        if(height < 165)
            size.s++;
        else if(height >= 165 && height <=170)
            size.m++;
        else
            size.l++;
    });
    console.log('Số bạn mặc áo size S: ' + size.s);    
    console.log('Số bạn mặc áo size M: ' + size.m);    
    console.log('Số bạn mặc áo size L: ' + size.l);
    console.log('-----------------------------------------');
}
function chaoHoi(str){
    console.log(str);
}
// Gọi hàm
bai1();
bai2();
bai3();
bai4();
bai5();
bai5_v1();
chaoHoi('Em xin hết. Em cảm ơn Thầy!')
