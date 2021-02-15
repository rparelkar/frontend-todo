function toDoList() {
    return {
        newTodo: "",
        todos: [],
        initVar: 1,
        addToDo() {
            this.todos.push({
                todo: this.newTodo,
                completed: false
            });

            this.newTodo = "";
            this.writeCookie('todoStorage', JSON.stringify(this.todos))
        },
        toggleToDoCompleted(index) {
            this.todos[index].completed = !this.todos[index].completed;
        },
        deleteToDo(index) {
            this.todos = this.todos.filter((todo, todoIndex) => {
                return index !== todoIndex
            });
            this.writeCookie('todoStorage', JSON.stringify(this.todos));
        },
        numberOfToDosCompleted() {
            return this.todos.filter(todo => todo.completed).length;
        },
        toDoCount() {
            return this.todos.length
        },
        isLastToDo(index) {
            return this.todos.length - 1 === index
        },
        readCookie(){
            if(this.initVar){
                console.log('reading cookie..');
                // todoCookies = document.cookie.match(new RegExp('(^| )' + 'todoStorage' + '=([^;]+)'));
                todoCookies = [{"todo":"hey","completed":false},{"todo":"hi","completed":false},{"todo":"how are you?","completed":false}];
                console.log(todoCookies)
                this.todos = todoCookies
                this.initVar = 0;
            }
        },
        writeCookie(name, value) {
            console.log('writing cookie..');
            console.log("name = " + name + ", value = " + value);
            // Build the set-cookie string:
            cookie_string = name + " = " + value + "; path=/; max-age=31536000";
            // Create/update the cookie:
            document.cookie = cookie_string;
        }
    };
}