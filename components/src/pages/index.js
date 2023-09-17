import { Link, useNavigate } from "react-router-dom";
import Emoji from "./EmojiPage";
import Location from "./Location";
const Index = () => {
    const nav = useNavigate();
    return (
        <div>
            <h1>메인 페이지</h1>
            <button>
                <Link to="/Emoji">이모지 페이지</Link>
            </button>
            <button>
                <Link to="/Location">위치 페이지</Link>
            </button>
        </div>
    )
}

// export {default as EmojiPage} from './EmojiPage';
export default Index;