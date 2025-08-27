// 代码生成时间: 2025-08-27 22:08:06
(function($) {
    //购物车对象
    var ShoppingCart = {
        "items": [], 
        "itemCount": 0
    };
    
    //添加商品到购物车
    ShoppingCart.addItem = function(item) {
        if (!item || !item.id || !item.price || !item.quantity) {
            //错误处理：商品信息不完整
            console.error('Invalid item details.');
            return;
        }
        
        //检查商品是否已存在
        var existingItem = ShoppingCart.items.find(x => x.id === item.id);
        if (existingItem) {
            //更新商品数量
            existingItem.quantity += item.quantity;
        } else {
            //添加新商品到购物车
            ShoppingCart.items.push(item);
            ShoppingCart.itemCount++;
        }
        
        //更新UI
        ShoppingCart.updateCartUI();
    };
    
    //从购物车中移除商品
    ShoppingCart.removeItem = function(itemId) {
        var index = ShoppingCart.items.findIndex(x => x.id === itemId);
        if (index === -1) {
            //错误处理：商品不存在
            console.error('Item not found in cart.');
            return;
        }
        
        //移除商品
        ShoppingCart.items.splice(index, 1);
        ShoppingCart.itemCount--;
        
        //更新UI
        ShoppingCart.updateCartUI();
    };
    
    //清空购物车
    ShoppingCart.clearCart = function() {
        ShoppingCart.items = [];
        ShoppingCart.itemCount = 0;
        
        //更新UI
        ShoppingCart.updateCartUI();
    };
    
    //更新购物车UI
    ShoppingCart.updateCartUI = function() {
        //更新购物车商品数量显示
        $("#cartItemCount").text(ShoppingCart.itemCount);
        
        //更新购物车列表
        var cartListHtml = "";
        ShoppingCart.items.forEach(function(item) {
            cartListHtml += "<li>Product ID: " + item.id + ", Quantity: " + item.quantity + ", Price: $" + item.price + "</li>";
        });
        $('#cartList').html(cartListHtml);
    };
};

// 使用jQuery扩展暴露ShoppingCart模块
$.ShoppingCart = ShoppingCart;

//使用jQuery插件方式初始化购物车模块
$(function() {
    //绑定添加商品到购物车的事件
    $("#addToCartButton").click(function() {
        var productId = $("#productId\).val();
        var productPrice = parseFloat($("#productPrice").val());
        var productQuantity = parseInt($("#productQuantity\).val(), 10);
        
        //创建商品对象
        var item = {
            "id": productId,
            "price": productPrice,
            "quantity": productQuantity
        };
        
        //添加商品到购物车
        $.ShoppingCart.addItem(item);
    });
    
    //绑定从购物车中移除商品的事件
    $("#removeFromCartButton").click(function() {
        var productId = $("#productId\).val();
        
        //移除商品
        $.ShoppingCart.removeItem(productId);
    });
    
    //绑定清空购物车的事件
    $("#clearCartButton\).click(function() {
        //清空购物车
        $.ShoppingCart.clearCart();
    });
});