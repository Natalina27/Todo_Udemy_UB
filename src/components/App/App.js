import React, {Component} from "react";
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import styles from './App.module.css'
import Container from '@material-ui/core/Container';
import InputTask from "../InputTask/InputTask";
import Footer from "../Footer/Footer";


class App extends Component {
    maxId = 100;
    state = {
        todoData: [
            this.createTodoItem('DRINK COFFEE'),
            this.createTodoItem('BUILD APP'),
            this.createTodoItem('HAVE A LUNCH'),
            ]
    };

    createTodoItem (label){
        return{
            label,
            important: false,
            id: this.maxId++,
            done: false,
            toDo: 3
        };

    };

    deleteItem = (id) => {
        this.setState(
            ({todoData}) => {
                const indx = todoData.findIndex((el) => el.id === id);
                const newArray =[
                    ...todoData.slice(0,indx),
                    ...todoData.slice(indx+1)
                ];

                //const newArray = [...todoData].filter((el) => el.id !== id); //another way
                return {
                    todoData: newArray
                };
            }
            )};
    addItem = (text)=> {
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });


    };

    toggleProperty(arr, id, propName){
        const indx = arr.findIndex((el) => el.id === id);
        //1.update object
        const oldItem = arr[indx];
        const newItem = {...oldItem,  [propName]: !oldItem[propName] };

        //2. construct new array
        return [
            ...arr.slice(0,indx),
            newItem,
            ...arr.slice(indx+1)
        ];

    }
    onToggleDone = (id) => {
        this.setState(({todoData}) =>{

            return {
                todoData:  this.toggleProperty(todoData, id, 'done')
            }

                });
    };
    onToggleImportant = (id) => {
        this.setState(({todoData}) =>{

            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }

        });

    };

        render() {
            const {todoData} = this.state;
            const doneCount = todoData.filter((el) => el.done).length;
            const todoCount = todoData.length - doneCount;
                return (
                    <Container maxWidth='sm'>
                        <div className={styles.wrap}>
                            <AppHeader/>
                            <SearchPanel/>
                            <TodoList
                                todos={todoData}
                                onDeleted={this.deleteItem}
                                onToggleDone={this.onToggleDone}
                                onToggleImportant={this.onToggleImportant}
                            />
                            <InputTask onAdded={this.addItem}/>
                            <Footer toDo={todoCount} done={doneCount}/>
                        </div>
                    </Container>
                );
        }
}


export default App;