import './Main.css'

const Main = ({ Menu = null, Center, Suggestions = null }) => {
    return (
        <div className="Main flex">
            {
                Menu && <div className="Main__left">
                    <Menu />
                </div>
            }
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
