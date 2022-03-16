const initialData = {
    list: []
}
const todoReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const { id, data } = action.payload
           if(data.length>2){
            return {
                ...state,
                list: [...state.list,
                {
                    id: id,
                    data: data
                }
                ]
            }
           }
           else{
               alert('Pleas fill Atleast 3 Values');
           }
           
      
        case 'DEL_TODO':
           const newList = state.list.filter((elem)=> elem.id !== action.id)
            return {
                ...state,
                list: newList
            }
        case 'REM_TODO':
           
            return {
                ...state,
                list: []
            }
        default: return state
    }
}

export default todoReducers