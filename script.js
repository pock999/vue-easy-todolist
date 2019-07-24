var app = new Vue({
    el:'#app',
    data:{
        title:'TodoList Implementation',
        todotitle:'TodoInput',
        trashtitle:'Trash Can',
        newthing:'',
        todolist:[],
        trashlist:[],
    },
    methods:{
        addItem:function(){
            if(this.newthing == ''){
                alert('input is null!!!');
            }else{
                this.todolist.push({text:this.newthing,isFinish:false});
            }
            this.newthing = '';
        },
        toggleFinish:function(item){
            item.isFinish = !item.isFinish;
        },
        deleteItem:function(item){
            var len = this.todolist.length;
            for(var i = 0 ; i < len ; i++){
                if(item.text == this.todolist[i].text && item.isFinish == this.todolist[i].isFinish){
                    let finishItem = this.todolist.slice(i,i+1);
                    this.todolist.splice(i,1);
                    this.trashlist.push(finishItem[0].text)
                    break;
                }
            }
        },
    },
});