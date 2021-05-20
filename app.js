var budgetController= (function(){
    var Item=function(id, type, desc, val){
        this.id=id;
        this.type=type;
        this.desc=desc;
        this.val=val;
    }



    var data={
       allItems:{
           exp:[],
           inc:[]
       },
       totals:{
           exp:0,
           inc:0,
       },
       budget:

    };

    var calculateSum= function(type){
        var sum=0;
        data.allItems[type].array.forEach(element => {
            sum+=element;
        });
        data.totals[type]=sum;
    }


    return {
       addItem: function(type, desc, val){
                var id;
                if(data.allItems[type].length==0)id=0;
                else id=data.allItems.inc[data.allItems[type].length-1].id+1;
                var newItem=new Item(id,type,desc,val);
                data.allItems[type].push(newItem);
                totals[type]+=val;
                return newItem;
       },
       calculateBudget:function(){

       }
       getBudget:{
           budget:
           income:
           expense:
           percent:
       }
   }
})();

var uiController=(function(){
    var domStrings={
        itemType:'.add__type',
        itemDesc:'.add__description',
        itemValue:'.add__value',
        addBtn:'.add__btn',
        incomeList:'.income__list',
        expensesList:'.expenses__list'
    }
    return {
        getInput:function(){
            return{
                type:document.querySelector(domStrings.itemType).value,
                desc:document.querySelector(domStrings.itemDesc).value,
                value:document.querySelector(domStrings.itemValue).value
            };
        },
        getDOMStrings:domStrings,
        updateUI:function(item){
            var element, html
            if(item.type==='inc'){
                element=domStrings.incomeList;
                html='<div class="item clearfix" id="income-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }else{
                element=domStrings.expensesList;
                html='<div class="item clearfix" id="expense-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            var newHtml=html.replace('%id%',item.id);
            newHtml=newHtml.replace('%desc%',item.desc);
            newHtml=newHtml.replace('%value%',item.val);
            document.querySelector(element).insertAdjacentHTML("beforeend" ,newHtml);
        }
    };
})();

var appController=(function(budgetCtrl, uiCtrl){
    var setupEventListeners=function(){
        var domStrings=uiCtrl.getDOMStrings;
        document.querySelector(domStrings.addBtn).addEventListener('click', ctrlAddItems);
        document.querySelector(domStrings.itemValue).addEventListener('keypress',function (event){
            if(event.keyCode===13 ||event.which===13)ctrlAddItems();
        });
    }

    var ctrlAddItems=function(){
        var inputs=uiCtrl.getInput();
        var itemToAdd=budgetCtrl.addItem(inputs.type,inputs.desc,inputs.value);
        uiCtrl.updateUI(itemToAdd)

    }

    return {
        init:function(){
            setupEventListeners();
        }
    }
})(budgetController, uiController);

appController.init();