import { useContext } from "react"
import { UserContext } from "../provider/UserProvider"
import { InputContext } from "../provider/InputProvider";
import './LogButton.css'

export const LogButton = () => {
    const {values} = useContext(InputContext);
    const {log, setLog} = useContext(UserContext);

    const handleLogin = async() => {
        try{
            const resp = await fetch('https://dummyjson.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  username: values.login,
                  password: values.password,
                }),
              });
              const data = await resp.json();
              console.log(data)
              if(resp.ok){
                setLog('logged');
              }
        } catch(err) {
            console.error(err)
        }
        
    }   
    return <>
    <button type="submit" onClick={handleLogin} className={log === 'logged' ? 'btn-logged' : 'btn-unlogged'}>
        {log === 'logged' ? '' : 'Log in, please'}
        </button>

    <p> {log === 'logged' ? 'posts:' : 'Log in, please'}
    </p>
    </>
}