import { ADD_TODO, COMPLETE_TODO, EDIT_TODO, REMOVE_TODO } from "../const/const";

const initState = {
    todos: [{ text: "Test item", isCompleted: false, id: 0 }],
};
export default function (state = initState, action) {
    switch (action.type) {

        case ADD_TODO:
            return { ...state, todos: [action.payload, ...state.todos] };

        case REMOVE_TODO:
            return { ...state, todos: [state.todos.filter(todo => todo.id !== action.payload)] };

        case COMPLETE_TODO:
            return {
                ...state, todos: state.todos.map(todo => todo.id === action.payload ? { ...todo, isCompleted: !todo.isCompleted }
                    : todo
                ),
            };

        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.id ? action.payload : todo
                    ),
            };

        default:
            return state;
    }
}


