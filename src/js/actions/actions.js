import {ADD_TODO,COMPLETE_TODO,EDIT_TODO,REMOVE_TODO} from "../const/const";

export const addTodo = (newTodo) => ({
    type: ADD_TODO,
    payload: newTodo,
});

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id,
});

export const editTodo = (newTodo)=> ({
    type:EDIT_TODO,
    payload: newTodo,

});

export const completeTodo = (id)=> ({
    type:COMPLETE_TODO,
    payload: id,
});

