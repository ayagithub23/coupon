// [2019-01-15] 作業
// TODO: 1) 可以檢查一組折扣碼，並append商品
// TODO: 2) 新增可對應多組折扣碼的檢查
// TODO: 3) 加上折扣碼開始和到期日

// [2019-01-22] 作業
// TODO: 4) ABCD如果正確的話，我要讓商品變成商品ABCD EFGH HIJK
// TODO: 5) 導入同時清空原本的商品123
// TODO: 6) 折扣碼大小寫都OK
// TODO: 7) 輸入錯誤的折扣碼時以及INPUT="" 跳出ERROR

var coupon = [{
    code: "ABCD",
    dayStart:"2018-12-05",
    dayEnd:"2018-12-31",
    products:[{
        skuid:"1",
        title:"淡水馬克杯",
        price:"400"
    }]
},{
    code: "EFGH",
    dayStart:"2019-01-01",
    dayEnd:"2019-01-31",
    products:[{
        skuid:"2",
        title:"澎湖馬克杯",
        price:"400"
    }]
},{
    code: "HIJK",
    dayStart:"2019-02-01",
    dayEnd:"2019-02-28",
    products:[{
        skuid:"3",
        title:"金門馬克杯",
        price:"400"
    }]
}
]
// coupon[0].code


// TODO: 1) 可以檢查一組折扣碼，並append商品
$("button").click(function(){
    var $inputText = $("#inputText");
    // TODO: 6) 折扣碼大小寫都OK
    var addInputText = $inputText.val().trim().toUpperCase();
    // TODO: 2) 新增可對應多組折扣碼的檢查
    for(var i = 0; i < coupon.length;i++ ){
        if(addInputText === coupon[i].code){
            console.log("進來檢查折扣碼");
            // TODO: 3) 加上折扣碼開始和到期日 卡住了
            // moment('2019-01-20').isBefore('2018-12-05', 'day');
            // moment('2019-01-20').isAfter('2019-02-28', 'day'); 
            // 現在的日期晚於2018-12-30
            if(moment().isAfter(coupon[i].dayEnd, "day")){
                alert("折扣碼已到期");
            // 現在的日期早於於2019-02-01
            } else if (moment().isBefore(coupon[i].dayStart, "day")) {
                alert("折扣碼尚未開始");
            }else{
                $("option").remove();
                // TODO: 4) ABCD如果正確的話，我要讓商品變成商品ABCD EFGH HIJK
                $("select").append(`<option>${coupon[i].products[0].title}</option>`);
                // TODO: 5) 導入同時清空原本的商品123
                $("#inputText").val("");
            }
        }else{
            // TODO: 7) 輸入錯誤的折扣碼時以及INPUT="" 跳出ERROR
            alert("輸入錯誤，請重新輸入");
            // ----- ▲ ▲ ▲ 重複執行三次，怎麼辦 ▲ ▲ ▲ ----- //
        };
    };
});