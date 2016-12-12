var Task = function(text){
    this.text = text;
    this.isDone = false;
    this._lastId = Task._generateId();
};
Task._lastId = 0;
Task._generateId = function(){
    return Task._lastId ++;
};
Task.prototype.check = function(){
    this.isDone = true;
};
Task.prototype.uncheck = function(){
    this.isDone = false;
};
Task.prototype.toggleCheck = function(){
    this.isDone = !this.isDone;
};

var TaskList = function(){
    this.tasks =[];
};
TaskList.prototype.size = function(){
    return this.tasks.length;
};
TaskList.prototype.add = function(new_text){
    return new Task(new_text);
};
TaskList.prototype.getById = function(){
    this.id = Task._lastId;

};