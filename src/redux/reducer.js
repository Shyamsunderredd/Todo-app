import { createSlice } from '@reduxjs/toolkit'

const initialState={
    todos:[],
    
}

const TodoSlice=createSlice({
    name:"Todos",
    initialState:initialState,
    reducers:
    {
        add:(state,action)=>{
            state.todos.push({text:action.payload,
                completed:false,
            
            });
           

        },
        toggle:(state,action)=>
        {
            state.todos.map((todos,i)=>{
                if(i==action.payload){
                    todos.completed=!todos.completed;
                    

                }
                return todos;
            }
            )

        },
        delete:(state,action)=>{
            state.todos.splice(action.payload,1);
        },
        
    },
   
})
export const TodoReducer=TodoSlice.reducer;
export const actions=TodoSlice.actions;
export const Todoselector=((state)=>state.TodoReducer.todos);