import Menu from '../components/Menu'
import '../css/Main.css'

const Main = ({ Center, Suggestions = null }) => {
    return (
        <div className="Main flex">
            <div className="Main__left">
                <Menu />
            </div>
            <div className="Main__center flex">
                <Center />
            </div>
            {
                Suggestions && <div className="Main__right">
                    <Suggestions />
                </div>
            }
        </div>
    )
}

export default Main
