import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { Trash, ThumbsUp } from 'phosphor-react';

export const Comment = ({ content, onDeleteComment }) => {
    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLikeComment = () => {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
             <Avatar src="https://github.com/Gabrielmtvp.png" hasBorder={false} />

             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Gabriel Gomes</strong>
                            <time title="11 de Maio as 03:13h" dateTime="2022-05-11 08:12:30">Cerca de 1h atras</time>
                        </div>
                        
                        <button onClick={handleDeleteComment} title="Deletar Comentario">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
             </div>
        </div>
    )
}