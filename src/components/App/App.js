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
            {label: 'Drink coffee', important: false, id: 1},
            {label: 'Build app', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ],
        toDo: 3,
        done: 0
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
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

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

    onToggleDone = (id) => {console.log('Toggle Done', id)};
    onToggleImportant = (id) => {console.log('Toggle Important', id)};

    render() {

        return (
            <Container maxWidth='sm'>
                <div className={styles.wrap}>
                    <AppHeader/>
                    <SearchPanel/>
                    <TodoList
                        todos={this.state.todoData}
                        onDeleted={this.deleteItem}
                        onToggleDone={this.onToggleDone}
                        onToggleImportant={this.onToggleImportant}
                    />
                    <InputTask onAdded={this.addItem}/>
                    <Footer toDo={this.state.toDo} done={this.state.done}/>
                </div>
            </Container>
        );
    }
}

export default App;