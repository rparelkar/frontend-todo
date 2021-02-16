function toDoList() {
    return {
        newTodo: "",
        todos: [],
        todoEmail: [],
        initVar: 1,
        addToDo(type) {
            if(type === 'todo'){
                this.todos.push({
                    todo: this.newTodo,
                    completed: false
                });
                this.writeCookie('todoStorage', JSON.stringify(this.todos))
            } else{
                this.todoEmail.push({
                    todo: this.newTodo,
                    completed: false
                });
                this.writeCookie('todoEmail', JSON.stringify(this.todoEmail))
            }
            this.newTodo = "";
        },
        toggleToDoCompleted(index, type) {
            if(type === 'todo'){
                this.todos[index].completed = !this.todos[index].completed;
                this.writeCookie('todoStorage', JSON.stringify(this.todos))
            } else {
                this.todoEmail[index].completed = !this.todoEmail[index].completed;
                this.writeCookie('todoEmail', JSON.stringify(this.todoEmail))
            }

        },
        deleteToDo(index, type) {
            if(type === 'todo'){
                this.todos = this.todos.filter((todo, todoIndex) => {
                return index !== todoIndex
            });
            this.writeCookie('todoStorage', JSON.stringify(this.todos));
             } else {
                this.todoEmail = this.todoEmail.filter((todo, todoIndex) => {
                return index !== todoIndex
                });
            this.writeCookie('todoEmail', JSON.stringify(this.todoEmail));
            }

        },
        numberOfToDosCompleted(type) {
            if(type === 'todo'){
                return this.todos.filter(todo => todo.completed).length;
            } else {
                return this.todoEmail.filter(todo => todo.completed).length;
            }
        },
        toDoCount(type) {
            if(type === 'todo'){
                return this.todos.length
            } else {
                return this.todoEmail.length
            }
        },
        isLastToDo(index, type) {
            if(type === 'todo'){
                return this.todos.length - 1 === index
            } else {
                return this.todoEmail.length - 1 === index
            }
        },
        readCookie(type){
            if(this.initVar){
                if(type === 'todo'){
                    console.log('reading cookie..');
                    todoCookies = document.cookie.match(new RegExp('(^| )' + 'todoStorage' + '=([^;]+)'));
                    //todoCookies = [{"todo":"hey","completed":false},{"todo":"hi","completed":false},{"todo":"how are you?","completed":false}];
                    if(todoCookies){
                        this.todos = JSON.parse(todoCookies[2])
                    }
                } else {
                    console.log('reading cookie..');
                    todoCookies = document.cookie.match(new RegExp('(^| )' + 'todoEmail' + '=([^;]+)'));
                    //todoCookies = [{"todo":"hey","completed":false},{"todo":"hi","completed":false},{"todo":"how are you?","completed":false}];
                    if(todoCookies){
                        this.todoEmail = JSON.parse(todoCookies[2])
                    }
                }

            }
            this.initVar = 0;
        },
        writeCookie(name, value) {
            console.log('writing cookie..');
            // Build the set-cookie string:
            cookie_string = name + " = " + value + "; path=/; max-age=31536000";
            // Create/update the cookie:
            document.cookie = cookie_string;
        }
    };
}