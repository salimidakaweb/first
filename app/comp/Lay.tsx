import Cont from './Cont'
import Nav from './Nav'
interface ILay {
    children: React.ReactNode
}
function Lay({ children }: ILay) {
    return (
        <div>
            <Cont>
                <Nav />
                {children}
            </Cont>
        </div>
    )
}
export default Lay