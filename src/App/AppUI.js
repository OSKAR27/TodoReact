import React from "react";
import {TodoCounter} from "../TodoCounter/TodoCounter";
import {TodoSearch} from "../TodoSearch/TodoSearch";
import {TodoList} from "../TodoList/TodoList";
import {TodoItem} from "../TodoItem/TodoItem";
import {CreateTodoButton} from "../CreateTodoButton/CreateTodoButton";
import logo from '../platzi.webp';
import App from "./App";
import {TodosLoading} from "../TodosLoading/TodosLoading";
import {TodosError} from "../TodosError/TodosError";
import {TodosEmpty} from "../TodosEmpty/TodosEmpty";
import {TodoContext} from "../TodoContext";
import {Modal} from "../Modal";
import {TodoForm} from "../TodoForm/TodoForm";

function AppUI()
{
    const {
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);

    return (
        <>
            <TodoCounter />
            <TodoSearch />

            <TodoContext.Consumer>
                {({
                      loading,
                      error,
                      searchedTodos,
                      completeTodo,
                      deleteTodo,
                  }) => (
                    <TodoList>
                        {loading && (
                            <>
                                <TodosLoading />
                                <TodosLoading />
                                <TodosLoading />
                            </>
                        )}
                        {error && <TodosError/>}
                        {(!loading && searchedTodos.length === 0) && <TodosEmpty />}

                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        ))}
                    </TodoList>
                )}
            </TodoContext.Consumer>

            <CreateTodoButton />

            {
               openModal && (
                    <Modal>
                        <TodoForm></TodoForm>
                    </Modal>
                )
            }
        </>
    );
}


export {AppUI};