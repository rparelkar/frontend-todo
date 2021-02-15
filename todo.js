function toDoList() {
    return {
        newTodo: "",
        todos: [],
        addToDo() {
            this.todos.push({
                todo: this.newTodo,
                completed: false
            });

            this.newTodo = "";
            if(this.readCookie()){
                this.writeCookie('todoStorage', JSON.stringify(this.todos))
            }
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
            console.log('reading cookie..');
            cookies = decodeURIComponent(document.cookie).split(';');
            todoCookies = cookies.filter(cookie => cookie === 'todoStorage')
            todos = todoCookies.value
            return true;
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