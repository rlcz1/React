import { Link, useNavigate } from "react-router-dom";
import Emoji from "./EmojiPage";
const Index = () => {
    const nav = useNavigate();
    return (
        <div>
            <h1>메인 페이지</h1>
            <button>
                <Link to="/Emoji">이모지 페이지</Link>
            </button>
        </div>
    )
}

// export {default as EmojiPage} from './EmojiPage';
export default Index;