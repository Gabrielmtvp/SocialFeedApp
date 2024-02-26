import {formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';

export const Post = ({author, content, publishedAt}) => {
    const [comments, setComments] = useState([
        'Well done , amazing Post!'
    ]);
    const [commentNewText, setCommentNewText] = useState('');
    const isNewCommentEmpty = commentNewText.length === 0;

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const handleNewCommentChange = () => {
        event.target.setCustomValidity("");
        setCommentNewText(event.target.value);
    }

    const handleCreateNewComment = () => {
        event.preventDefault();

        setComments([...comments, commentNewText]);

        setCommentNewText('');
    }

    const deleteComment = (commentToDelete) => {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete;
        });
        setComments(commentsWithoutDeletedOne);
    }

    const handleNewCommentInvalid = () => {
        event.target.setCustomValidity("This field is required");
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title="11 de Maio as 03:13h" dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>
            <div className={styles.content}>
                { 
                    content.map(line => {
                        if( line.type === "paragraph" ) {
                            return <p key={line.content}>{line.content}</p>
                        } else if ( line.type === "link" ) {
                            return <p key={line.content}><a href='#'>{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentario' 
                    name="comment"
                    value={commentNewText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map( comment => {
                        return <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
                    })
                }
            </div>
        </article>
    );
}