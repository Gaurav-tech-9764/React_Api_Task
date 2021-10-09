function UsersReducers(state={
  
    Users:[] ,
  
    total:0
     }, action){
        
            switch(action.type){
        
                case "ADDUSERS":{
                      
                        state = {...state}
                        state.Users.push( action.payload?.data)
                        state.total=state.Users.length
                       
                        console.log('this i add USERS reducers', state.Users)
                    return state
                       
                }
                case "LISTUSERS":{      
                          
                        state = {...state}
                       
                        state.Users= action.payload?.data
                      
                        state.total=state.Users.length
                      
                        console.log('this is list lenght reducers', state.total)
    
                    return state
            }
            
                
            case "DELETEUSERS":{
    
                state={...state}
                
              state.Users.splice(state.Users.indexOf(action.payload?.data),action.payload?.data);
                 
              state.total=state.Users.length
            
             
              
             console.log("this is the state delete user.!!",state)
              
                return state
                
                   
            }
              
                
           
               
                        default : return state
            }
        } 
        
        
        
        export default UsersReducers