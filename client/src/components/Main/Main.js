import './Main.css'
import Menu from './SideMenu/Menu'

const Main = () => {
    return (
        <div className="Main flex">
            <div className="Main__left">
                <Menu />
            </div>
            <div className="Main__center">
                Posts section
            </div>
            <div className="Main__right">
                Suggested users
            </div>
        </div>
    )
}

export default Main
