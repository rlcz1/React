import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
    width: 100%;
`;

const Symbol = styled.div`
    font-size: 24px;
    margin-right: 16px;
`;

const Title = styled.div`
    width: 200px;
`;

const Keywords = styled.div`
    flex : 1;
`;

const EmojiListItem = ({ emoji }) => {
    return (
        <ListItem onClick={() => navigator.clipboard.writeText(emoji.symbol)}>
            <Link to={`/Emoji/${emoji.title}`}>
                <Symbol>{emoji.symbol}</Symbol>
                <Title>{emoji.title}</Title>
                <Keywords>{emoji.keywords}</Keywords>
            </Link>
        </ListItem>
    )
}

export default EmojiListItem;