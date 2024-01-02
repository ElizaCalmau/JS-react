import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export const UserPage = () => {
    const history = useHistory()
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const currentUser = users.users.find((user) => user.id === parseInt(id));

    const onBack = () => {
        history.goBack()
    }
   
    return (
        <>
            {currentUser && <button onClick={onBack}>Back</button>}
            <div>
                {currentUser && 
                    Object.entries(currentUser).map(([key,value]) => {
                        console.log(key, typeof value)
                        if(typeof value != 'object'){
                            if (key === 'image') {
                                return <img key={value} src={value} alt='img'/>
                            }
                            return <div key={key}>{key} : {value}</div>  
                        }
                     })}
            </div>  
        </>
      );
}