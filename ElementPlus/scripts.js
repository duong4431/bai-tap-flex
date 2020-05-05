class ElementPlus{
    constructor(id,label,minWidth)
    {
        this.id = id;
        this.label = label;
        this.minWidth = minWidth;
    }    
}

class SelecBox extends ElementPlus
{
    constructor(id,label,minWidth,arr = [])
    {   
        super(id,label,minWidth);        
        this.arr = arr;

        this.selectBox = document.getElementById(id);          

        //Tạo nhãn cho selecBox
        this.selectedItem = document.createElement("span");
        this.selectedItem.style.minWidth = minWidth;
        this.selectedItem.setAttribute('class','selectBoxLabel');
        this.selectedItem.innerHTML = label;
        var selectedValue = document.createAttribute('dataValue');
        selectedValue.value = -1;
        this.selectedItem.setAttributeNode(selectedValue);

        
        this.selectBox.appendChild(this.selectedItem);

        //Tạo div bao bọc các item
        this.itemWrap = document.createElement("div");        
        this.selectBox.appendChild(this.itemWrap);
        
        //Thêm các item vào selecBox
        //Khi click vào item thì nội dung sẽ được chọn lên
        this.arr.forEach(arrItem => {
            var item = document.createElement("div");
            item.innerHTML = arrItem.name;            
            item.addEventListener("click", () => {
                this.selectedItem.innerHTML = item.innerHTML;
                this.selectedItem.setAttribute('dataValue',arrItem.id);
            })
            this.itemWrap.appendChild(item);
        });
        
        //Khi click vào selectBox thì hiện hoặc ẩn các item
        this.selectBox.addEventListener("click", () => {                               
            if(this.itemWrap.classList.contains('opened')){                
                this.itemWrap.classList.remove('opened');  
                this.selectedItem.classList.remove('clicked');  
            }              
            else
            {
                this.itemWrap.classList.add('opened');
                this.selectedItem.classList.add('clicked');
            }             
        });

        //Khi click ra ngoài thì ẩn các item
        document.addEventListener("click", () => {            
            if(event.target != this.selectedItem){
                this.itemWrap.classList.remove('opened');  
                this.selectedItem.classList.remove('clicked'); 
            }            
        });
    }
    
}

class Tab extends ElementPlus{
    constructor(id,label,minWidth,arrTabLabel = ["Tab 1"],arrContent = ["Tab content 1"])
    {
        super(id,label,minWidth);
        this.arrTabLabel = arrTabLabel;
        this.arrContent = arrContent;

        this.tabPlus = document.getElementById(id); 
        this.tabPlus.style.minWidth = minWidth;       

        this.ulTablabel = document.createElement("ul");
        this.ulTablabel.classList.add('tabLabels');                
        
        this.tabContent = document.createElement("div");
        this.tabContent.classList.add('tabContent');        

        //Tạo các tab label
        var countLabel = 0;
        this.arrTabLabel.forEach(item => {
            countLabel++;
            var h3 = document.createElement("h3");
            h3.innerHTML = item;
            var li = document.createElement("li");
            var dataIndex = document.createAttribute('dataIndex');
            dataIndex.value = countLabel;
            li.setAttributeNode(dataIndex);
            li.appendChild(h3);
            this.ulTablabel.appendChild(li);
        });
        //Active tab đầu tiên
        this.ulTablabel.querySelector('li').classList.add('active');

        //Tạo các tab content
        var countDiv = 0;
        this.arrContent.forEach(content => {
            countDiv++;
            var div = document.createElement("div");
            div.innerHTML = content;
            var dataIndex = document.createAttribute('dataIndex');
            dataIndex.value = countDiv;
            div.setAttributeNode(dataIndex);
            this.tabContent.appendChild(div);
        })
        //Active content đầu tiên
        this.tabContent.querySelector('div').classList.add('active');


        this.tabPlus.appendChild(this.ulTablabel);
        this.tabPlus.appendChild(this.tabContent);
        
        //Khi click vào từng tab thì active nó lên
        this.tabLabels = document.querySelectorAll('#' + id + ' ul > li > h3');
        this.tabLabels.forEach(tabLabel => {            
            tabLabel.addEventListener("click", () => {  
                //Xóa tất cả các tab có class là active                
                var lis = document.querySelectorAll('#' + id + ' ul > li');
                lis.forEach(li => {
                    if(li.classList.contains('active'))
                        li.classList.remove('active');
                });       
                var divs = document.querySelectorAll('#' + id + ' > div > div');
                divs.forEach(div => {
                    if(div.classList.contains('active'))
                        div.classList.remove('active');                    
                    if(div.getAttribute('dataIndex') == tabLabel.parentElement.getAttribute('dataIndex')){
                        console.log("test");
                        div.classList.add('active');
                    }                        
                })          
                //active tab vừa được click
                if(tabLabel.parentElement.classList.contains('active'))
                    tabLabel.parentElement.classList.remove('active');
                else
                    tabLabel.parentElement.classList.add('active');
                //active tabconent vừa được click

            });
        })
    }
}

// demo select box
var listTinhThanh = [
    {id:1, name:"Hà Nội"},
    {id:2, name:"Hải Phòng"},
    {id:3, name:"Hưng Yên"},
    {id:4, name:"Hà Nam"}
];
var selectTinhThanh = new SelecBox("tinhThanh","Chọn tỉnh thành",120,listTinhThanh);

var listNangKhieu = [
    {id:1, name:"Lập trình"},
    {id:2, name:"Copy"},
    {id:3, name:"Tạo bug"},
    {id:4, name:"Nhảy múa"}
];
var selectTinhThanh = new SelecBox("nangKhieu","Chọn năng khiếu",120,listNangKhieu);

//demo tab plus
var arrTabLabel = ["Tin mới", "Xem nhiều nhất", "Nổi bật"];
var arrContent = [
    "<h4>1. Thi tốt nghiệp THPT trong hai ngày</h4><p>1...Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam porro est itaque totam quo dolor optio saepe deserunt necessitatibus! Delectus ipsa alias recusandae rerum. Dolorum ipsam architecto dignissimos tenetur eius, in eaque minima blanditiis adipisci molestias dolore doloribus eos, nulla praesentium enim animi, alias illum. Nisi obcaecati corporis omnis?</p> <a href='#' class='btnViewMore'>View more</a>",
    "<h4>2. Khu du lịch Đồ Sơn sau 100 năm</h4><p>2....Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam porro est itaque totam quo dolor optio saepe deserunt necessitatibus! Delectus ipsa alias recusandae rerum. Dolorum ipsam architecto dignissimos tenetur eius, in eaque minima blanditiis adipisci molestias dolore doloribus eos, nulla praesentium enim animi, alias illum. Nisi obcaecati corporis omnis?</p> <a href='#' class='btnViewMore'>View more</a>",
    "<h4>3. Thêm hai tỉnh cho phép tắm biển</h4><p>3...Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam porro est itaque totam quo dolor optio saepe deserunt necessitatibus! Delectus ipsa alias recusandae rerum. Dolorum ipsam architecto dignissimos tenetur eius, in eaque minima blanditiis adipisci molestias dolore doloribus eos, nulla praesentium enim animi, alias illum. Nisi obcaecati corporis omnis?</p> <a href='#' class='btnViewMore'>View more</a>"
]
var tabTinTuc = new Tab("tabTinTuc","",600,arrTabLabel,arrContent);