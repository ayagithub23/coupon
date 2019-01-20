// TODO: 1) 可以檢查一組折扣碼，並append商品
// TODO: 2) 新增可對應多組折扣碼的檢查
// TODO: 3) 加上折扣碼開始和到期日

var coupon = [{
    code: "ABCD",
    dayStart:"2018-12-05",
    dayEnd:"2018-12-31"
},{
    code: "EFGH",
    dayStart:"2019-01-01",
    dayEnd:"2019-01-31"
},{
    code: "HIGK",
    dayStart:"2019-02-01",
    dayEnd:"2019-02-28"
}
]
// coupon[0].code


// TODO: 1) 可以檢查一組折扣碼，並append商品
$("button").click(function(){
    var $inputText = $("#inputText");
    var addInputText = $inputText.val().trim().toUpperCase();
    // TODO: 2) 新增可對應多組折扣碼的檢查
    for(var i = 0; i < coupon.length;i++ ){
        if(addInputText === coupon[i].code){
            console.log("進來檢查折扣碼");
            // TODO: 3) 加上折扣碼開始和到期日 卡住了
            // moment('2010-10-20').isBefore('2010-12-31', 'day'); 
            if(moment().isBefore(coupon.dayStart, "day")){
                alert("折扣碼已到期");
            } else if (moment().isAfter(coupon.dayEnd, "day")) {
                alert("折扣碼尚未開始");
            }else{
                $("select").append("<option>商品一</option>");
            }
        };
    };
});