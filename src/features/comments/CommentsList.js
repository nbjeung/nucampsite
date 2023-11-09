import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Comment from './Comment';
import { selectCommentsByCampsiteId } from './commentsSlice';
import CommentForm from './CommentForm';
// import AnimatedComment from './AnimatedComment';

const CommentsList = ({ campsiteId }) => {
    const comments = useSelector(selectCommentsByCampsiteId(campsiteId));

    if (comments && comments.length > 0) {
        return (
            <Col md='5' className='m-1'>
                <h4>Comments</h4>
                {comments.map((comment, idx) => {
                    return (
                        <Comment key={comment.id} comment={comment} />
                        // <AnimatedComment
                        //     key={comment.id} 
                        //     comment={comment}
                        //     idx={idx}
                        // />
                    );
                })}
                <CommentForm campsiteId={campsiteId}></CommentForm>
            </Col>
        );
    }
    return (
        <Col md='5' className='m-1'>
            There are no comments for this campsite yet.
        </Col>
    )
};

export default CommentsList;