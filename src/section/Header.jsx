import { Button } from "../components/Button"
import { Input } from "../components/Input"

export const Header = () => {
    return <header>
        <Input type='text' value='login'/>
        <Input type='password' value='password'/>
        <Button/>
    </header>
}