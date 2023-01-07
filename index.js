$("#pizz").click(()=>{
$("#pizz").css("backgroundColor","black").css("color","white")
$("#des").css("backgroundColor","white").css("color","black")
$("#drin").css("backgroundColor","white").css("color","black")
$("#burg").css("backgroundColor","white").css("color","black")
$("#sand").css("backgroundColor","white").css("color","black")
$("#sal").css("backgroundColor","white").css("color","black")
    $("#burger").hide();
    $("#pizza").show();
    $("#desserts").hide();
    $("#salad").hide();
    $("#Sandwich").hide();
    $("#drinks").hide();
    console.log("uilh");
});
$("#des").click(()=>{
    $("#des").css("backgroundColor","black").css("color","white")
    $("#pizz").css("backgroundColor","white").css("color","black")
    $("#drin").css("backgroundColor","white").css("color","black")
    $("#burg").css("backgroundColor","white").css("color","black")
    $("#sand").css("backgroundColor","white").css("color","black")
    $("#sal").css("backgroundColor","white").css("color","black")
    $("#desserts").show();
    $("#burger").hide();
    $("#pizza").hide();
    $("#salad").hide();
    $("#Sandwich").hide();
    $("#drinks").hide();
})
$("#sal").click(()=>{
    $("#pizz").css("backgroundColor","white").css("color","black")
$("#des").css("backgroundColor","white").css("color","black")
$("#drin").css("backgroundColor","white").css("color","black")
$("#burg").css("backgroundColor","white").css("color","black")
$("#sand").css("backgroundColor","white").css("color","black")
$("#sal").css("backgroundColor","black").css("color","white")
    $("#desserts").hide();
    $("#burger").hide();
    $("#pizza").hide();
    $("#salad").show();
    $("#Sandwich").hide();
    $("#drinks").hide();
})
$("#burg").click(()=>{
    $("#pizz").css("backgroundColor","white").css("color","black")
$("#des").css("backgroundColor","white").css("color","black")
$("#drin").css("backgroundColor","white").css("color","black")
$("#burg").css("backgroundColor","black").css("color","white")
$("#sand").css("backgroundColor","white").css("color","black")
$("#sal").css("backgroundColor","white").css("color","black")
    $("#desserts").hide();
    $("#pizza").hide();
    $("#salad").hide();
    $("#burger").show();
    $("#Sandwich").hide();
    $("#drinks").hide();
})
$("#sand").click(()=>{
    $("#pizz").css("backgroundColor","white").css("color","black")
$("#des").css("backgroundColor","white").css("color","black")
$("#drin").css("backgroundColor","white").css("color","black")
$("#burg").css("backgroundColor","white").css("color","black")
$("#sand").css("backgroundColor","black").css("color","white")
$("#sal").css("backgroundColor","white").css("color","black")
    $("#desserts").hide();
    $("#pizza").hide();
    $("#salad").hide();
    $("#burger").hide();
    $("#Sandwich").show();
    $("#drinks").hide();
})
$("#drin").click(()=>{
    $("#pizz").css("backgroundColor","white").css("color","black")
$("#des").css("backgroundColor","white").css("color","black")
$("#drin").css("backgroundColor","black").css("color","white")
$("#burg").css("backgroundColor","white").css("color","black")
$("#sand").css("backgroundColor","white").css("color","black")
$("#sal").css("backgroundColor","white").css("color","black")
    $("#desserts").hide();
    $("#burger").hide();
    $("#pizza").hide();
    $("#salad").hide();
    $("#Sandwich").hide();
    $("#drinks").show();
})

$(".cart-logo img").click(()=>{
    
   $(".main").toggle();
 
    $(".home").toggle();
    console.log("il");
    $(".items").toggle(()=>{
        
    })
})
/* function cvalue(){
    
if(cartitem==0){
    let item=document.querySelector(".items");
    item.innerHTML="Sorry!"
    let cartitem=cartvalue.children.length;
}
} */
$("#nav-burger").click(()=>{
    $("#burger").show();
})
$("#b-cart1").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Chicken Burger</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>124</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=124*b;
    mrp.html(mrpsub)
    }
    else{
        let b=1;
        additem.html(b);
        let mrpsub=124*b;
        mrp.html(mrpsub)
    }
 
  
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=124*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
function cartlen(){
let cartvalue=document.querySelector(".items");
let cartitem=cartvalue.children.length;
console.log(cartitem);
let clen=document.getElementById("c-value");
clen.innerHTML=cartitem;
}
$("#b-cart2").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Mutton Burger</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>164</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=164*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=164*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#b-cart3").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://cc.cz/wp-content/uploads/2020/11/bigmac-bacon-820x436.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Mexican Burger</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>216</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=216*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=216*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#b-cart4").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://images.unsplash.com/photo-1603573561692-d36965bd5096?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Mini Burger</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>100</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=100*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=100*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#d-cart1").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://thebakermama.com/wp-content/uploads/2021/08/IMG_4652-scaled.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Milk Shakes</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>120</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=120*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=120*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#d-cart2").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://info.haskells.com/hubfs/AdobeStock_63693451-1.jpeg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Mojitos</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>90</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=90*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=90*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#d-cart3").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Thick Shakes</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>160</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=160*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=160*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#d-cart4").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://www.nicepng.com/png/detail/65-651979_fruit-juice-png-bebidas-png.png');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Fresh Juice</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>100</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=100*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=100*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#s-cart1").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://www.licious.in/blog/wp-content/uploads/2020/12/Grilled-Chicken-Sandwich-750x750.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Chicken Sandwich</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>120</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=120*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=120*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#s-cart2").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://realfood.tesco.com/media/images/1400x919-Tesco-5For15-13256-CoronationEggMayonnaiseSandwich-ac3643ec-8a99-4574-a566-c2f619e45e17-0-1400x919.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Egg Sandwich</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>80</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=80*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=80*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#s-cart3").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://vaya.in/recipes/wp-content/uploads/2018/06/Veggie-Club-Sandwich.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Veg Sandwich</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>60</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=60*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=60*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#s-cart4").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://recipes.timesofindia.com/thumb/84786018.cms?width=1200&height=900');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Ham Sandwich</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>150</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=150*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=150*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#sd-cart1").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://saladswithanastasia.com/wp-content/uploads/2021/12/radish-green-salad-land1.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Green Salad</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>100</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=100*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=100*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#sd-cart2").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://www.jocooks.com/wp-content/uploads/2016/05/summer-salad-1.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Vegetable Salad</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>90</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=90*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=90*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#sd-cart3").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://hips.hearstapps.com/hmg-prod/images/pasta-salad-horizontal-jpg-1522265695.jpg?crop=1xw:0.7498500299940012xh;center,top&resize=1200:*');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Fruit Salad</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>140</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=140*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=140*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#sd-cart4").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://www.wholesomeyum.com/wp-content/uploads/2019/07/wholesomeyum-spicy-thai-beef-salad-recipe.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Meat Salad</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>160</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=160*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=160*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#ds-cart1").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://cdn.shopify.com/s/files/1/0856/0804/collections/Cutter_Squidge_Vanilla_Dream_Cake_375x.jpg?v=1627396113%201x,%20//cdn.shopify.com/s/files/1/0856/0804/collections/Cutter_Squidge_Vanilla_Dream_Cake_750x.jpg?v=1627396113%202x');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Cakes</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>160</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=160*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=160*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#ds-cart2").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://static.fanpage.it/wp-content/uploads/sites/22/2022/02/Chocolate-chip-cookies-14.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Cookies</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>140</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=140*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=140*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#ds-cart3").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://uploads-ssl.webflow.com/5e9ebc3fff165933f19fbdbe/61b31c9d289e22335b6753b2_Ice%20Cream%202.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Ice Creams</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>140</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=140*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=140*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#ds-cart4").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://restaurantclicks.com/wp-content/uploads/2022/10/Discontinued-Candy.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Candies</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>110</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=110*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=110*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#p-cart1").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://hips.hearstapps.com/hmg-prod/images/190226-buffalo-chicken-pizza-370-1552084943.jpg?crop=1.00xw:0.752xh;0,0.106xh&resize=1200:*');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Chicken Pizza</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>140</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=140*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=140*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#p-cart2").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://10minutesrecipe.com/wp-content/uploads/2022/03/Italian-Chicken-Pizza-Recipe.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Italian Pizza</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>160</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=160*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=160*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#p-cart3").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://food-images.files.bbci.co.uk/food/recipes/sicilian_pizza_47364_16x9.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Sicilian Pizza</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>200</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=200*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=200*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})
$("#p-cart4").click(()=>{
    cartlen();
   let bdiv1=$('<div></div>');
   $(bdiv1).addClass("bdiv")
   console.log("rfdg");
   $(".items").append(bdiv1)
   bdiv1.attr('style','')
   let cb=$('<img></img>')
   $(cb).addClass("cb")
   $(bdiv1).append(cb)
   cb.attr('src','https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/double-cheese.3c8885f8bc6f18facedc7626368f5105.1.jpg');
   cb.attr('style','')
   let fdiv=$('<div></div>')
   $(bdiv1).append(fdiv)
  let cbhead=$('<h1>Cheese Pizza</h1>')
  $(fdiv).append(cbhead)
  cbhead.attr('style','color:black')
  let cbcnt=$('<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio consequuntur corporis alias dolore nesciunt est? Deleniti, alias. Deleniti aut cumque, velit dolorem alias, labore temporibus optio sit, architecto incidunt iusto.</p>')
  $(fdiv).append(cbcnt)
  cbcnt.attr('style','color:black')
  let price=$('<h2>Price ($)</h2>')
  $(fdiv).append(price)
  price.attr("style","color:black;font-size:2.0em")
  let mrp=$('<h2>170</h2>')
  mrp.attr('style','color:black')
  $(fdiv).append(mrp)
  let remove=$('<button>Qty</button>')
$(fdiv).append(remove)
remove.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px')
let minus=$('<button>-</button>')
$(fdiv).append(minus)
minus.attr("style","border:none;background-color:white;color:black;box-shadow:1px 1px 3px gray;border-radius:50px;line-height:0px;margin-left:20px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
minus.click(()=>{
    console.log("uhj");
    if(additem.html()>1){
        console.log("nouilj");
    let b=Number(additem.html())-1;
    additem.html(b);
    let mrpsub=170*b;
    mrp.html(mrpsub)
    }
})
let additem=$('<button>1</button>')
$(fdiv).append(additem)
additem.attr("style","border:none;background-color:black;color:white;padding:5px;border-radius:10px;margin-left:5px;width:60px")
let plus=$('<button>+</button>')
$(fdiv).append(plus)
plus.attr("style","border:none;background-color:white;color:black;text-align:center;box-shadow:1px 1px 3px gray;text-align:center;line-height:0px;border-radius:50px;margin-left:5px;width:20px;height:20px;font-size:1.6em;font-weight:bolder")
plus.click(()=>{
   let a=Number(additem.html())+1;
   additem.html(a)
let mrpadd=170*a;
mrp.html(mrpadd)
    console.log(additem);
})
let cancel=$('<button>Remove Item</button>')
$(fdiv).append(cancel)
cancel.attr('style','background-color:black;color:white;padding:6px;border:none;border-radius:10px;margin-top:20px;margin-left:30px')
cancel.click(()=>{
    bdiv1.remove();
    console.log("uilhkj");
    cartlen();
})
cartlen()
})