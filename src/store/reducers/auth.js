import { UPDATE_TOKEN, UPDATE_USERINFO  } from "../actions/types/auth";


const initialState = {
  user_id: [],
  email: [],
  username: [],
  access: [],
  refresh: []
};

export default function todoReducer(state = initialState, action) {
	switch (action.type) {
  
	  case UPDATE_TOKEN: {
		const { access, refresh } = action.payload;
  
		return {
		   ...state,
		   access:access,
		   refresh:refresh
		};
  
	  }

	  case UPDATE_USERINFO: {
		const { user_id, email,username } = action.payload;
  
		return {
		   ...state,
		   user_id:user_id,
		   email:email,
		   username:username
		};
  
	  }
  
	  default:
		return state;
	}
  }

// import { ADD_TODO, TOGGLE_TODO, DEL_TODO } from '../actions/types/todo';

// const initialState = {
// 	allIds: [],
// 	byIds: {},
// };

// export default function todoReducer(state = initialState, action) {
// 	switch (action.type) {
// 		case ADD_TODO: {
// 			const { id, content } = action.payload;

// 			return {
// 				...state,

// 				allIds: [...state.allIds, id],

// 				byIds: {
// 					...state.byIds,

// 					[id]: {
// 						content,
// 						complete: false,
// 					},
// 				},
// 			};
// 		}

// 		case TOGGLE_TODO: {
// 			const { id } = action.payload;

// 			const targetTodo = state.byIds[id];

// 			return {
// 				...state,

// 				byIds: {
// 					...state.byIds,
// 					[id]: {
// 						...targetTodo,
// 						complete: !targetTodo.complete,
// 					},
// 				},
// 			};
// 		}

// 		case DEL_TODO: {
// 			const { id } = action.payload;

// 			delete { ...state.byIds[id] };

// 			return {
// 				...state,
// 				allIds: state.allIds.filter((item) => item !== id),
// 				byIds: {
// 					...state.byIds,
// 				},
// 			};
// 		}

// 		default:
// 			return state;
// 	}
// }
