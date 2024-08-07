import React, { useState } from 'react';
import { Modal, Button, Select, Input } from 'antd';
import { AiOutlineComment } from 'react-icons/ai';

const { Option } = Select;
const { TextArea } = Input;

const CommentModal = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [sortOrder, setSortOrder] = useState('Newest');
    const [visibleCommentsCount, setVisibleCommentsCount] = useState(2);
    const [isExpanded, setIsExpanded] = useState(false);
    type RepliesMap = Record<number, string>;

    const [reply, setReply] = useState<RepliesMap>({});
    const [replyVisible, setReplyVisible] = useState<Record<number, boolean>>({});

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSortChange = (value: string) => {
        setSortOrder(value);
    };

    const handleViewMoreComments = () => {
        setVisibleCommentsCount(prevCount => prevCount + 2);
        if (visibleCommentsCount + 2 >= comments.length) {
            setIsExpanded(true);
        }
    };

    const handleViewLessComments = () => {
        setVisibleCommentsCount(2);
        setIsExpanded(false);
    };

    const handleReplyChange = (commentId: number, value: string) => {
        setReply(prev => ({ ...prev, [commentId]: value }));
    };

    const handleReplySubmit = (commentId: number) => {
        console.log(`Reply to comment ${commentId}:`, reply[commentId]);
        setReply(prev => ({ ...prev, [commentId]: '' }));
        setReplyVisible(prev => ({ ...prev, [commentId]: false }));
    };

    const toggleReplyVisibility = (commentId: number) => {
        setReplyVisible(prev => ({ ...prev, [commentId]: !prev[commentId] }));
    };


    const toggleExpandComments = () => {
        if (isExpanded) {
            handleViewLessComments();
        } else {
            handleViewMoreComments();
        }
    };

    const comments = [
        {
            id: 1,
            user: 'User 1',
            avatar: 'H',
            comment: 'This is a comment from User 1.',
            time: '2024-07-30 14:23',
            replies: [
                { id: 1, user: 'Auth', avatar: 'A', reply: 'This is a reply to User 1\'s comment.', time: '2024-07-30 14:45' }
            ]
        },
        {
            id: 2,
            user: 'User 2',
            avatar: 'T',
            comment: 'Another comment from User 2.',
            time: '2024-07-30 15:00',
            replies: []
        },
        {
            id: 3,
            user: 'User 3',
            avatar: 'N',
            comment: 'This is a comment from User 3.',
            time: '2024-07-30 15:15',
            replies: [{ id: 1, user: 'Auth', avatar: 'A', reply: 'This is a reply to User 3\'s comment.', time: '2024-07-30 14:45' }]
        },
        {
            id: 4,
            user: 'User 4',
            avatar: 'Q',
            comment: 'Another comment from User 4.',
            time: '2024-07-30 15:30',
            replies: []
        },
        {
            id: 5,
            user: 'User 5',
            avatar: 'K',
            comment: 'This is a comment from User 5.',
            time: '2024-07-30 15:45',
            replies: [{ id: 1, user: 'Auth', avatar: 'A', reply: 'This is a reply to User 1\'s comment.', time: '2024-07-30 14:45' }]
        }
    ];

    return (
        <>
            <div className="flex items-center space-x-1 cursor-pointer" onClick={showModal}>
                <span>100k</span>
                <AiOutlineComment className='w-[24px] h-[24px]' />
            </div>
            <Modal
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                closable={false}
                footer={
                    <div className="flex flex-col space-y-2">
                        {!isExpanded && visibleCommentsCount < comments.length && (
                            <Button
                                type="primary"
                                className="text-gray-500 py-3 px-4"
                                onClick={handleViewMoreComments}
                            >
                                Xem thêm {comments.length - visibleCommentsCount} bình luận
                            </Button>
                        )}
                        {isExpanded && (
                            <Button
                                type="default"
                                className="text-gray-500 py-3 px-4"
                                onClick={toggleExpandComments}
                            >
                                Thu gọn bình luận
                            </Button>
                        )}
                        <hr className="my-2 border-gray-300" />
                    </div>
                }
                title={
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center pb-5">
                            <span className="font-semibold text-black">{comments.length} Comments</span>
                            <div className="flex items-center space-x-2">
                                <span className='font-normal text-black'>Sort by: </span>
                                <Select
                                    defaultValue={sortOrder}
                                    onChange={handleSortChange}
                                    className="w-30"
                                >
                                    <Option value="Oldest">Oldest</Option>
                                    <Option value="Newest">Newest</Option>
                                </Select>
                            </div>
                        </div>
                        <hr className="my-2 border-gray-300" />
                    </div>
                }
            >
                <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-white text-xl">A</span>
                    </div>
                    <textarea
                        className="flex-1 p-2 border border-gray-300 rounded-lg"
                        placeholder="Enter your comment here..."
                    ></textarea>
                </div>

                <div className="flex justify-end">
                    <Button type="primary" onClick={handleOk}>
                        Đăng
                    </Button>
                </div>

                <div>
                    {comments.slice(0, visibleCommentsCount).map(comment => (
                        <div key={comment.id} className="border-gray-200 mb-4">
                            <div className="flex items-start space-x-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                                    <span className="text-white text-sm">{comment.avatar}</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-blue-800">{comment.user}</p>
                                    <p className="text-black">{comment.comment}</p>
                                    <div className="flex items-center space-x-4 mb-2">
                                        <div>
                                            {!replyVisible[comment.id] && (
                                                <p
                                                    className='text-blue-700 cursor-pointer'
                                                    onClick={() => toggleReplyVisibility(comment.id)}
                                                >
                                                    Reply
                                                </p>
                                            )}
                                            {replyVisible[comment.id] && (
                                                <>
                                                    <TextArea
                                                        rows={2}
                                                        value={reply[comment.id] || ''}
                                                        onChange={(e) => handleReplyChange(comment.id, e.target.value)}
                                                        placeholder="Reply to this comment..."
                                                    />
                                                    <Button
                                                        type="primary"
                                                        className="mt-2"
                                                        onClick={() => handleReplySubmit(comment.id)}
                                                    >
                                                        Reply
                                                    </Button>
                                                </>
                                            )}
                                        </div>
                                        <p className="text-gray-500 text-sm">{comment.time}</p>
                                    </div>

                                </div>
                            </div>

                            {comment.replies.length > 0 && (
                                <div className="ml-8">
                                    {comment.replies.map(reply => (
                                        <div key={reply.id} className="flex flex-col space-y-2 mb-2">
                                            <div className="flex items-start space-x-2">
                                                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                                                    <span className="text-white text-xs">{reply.avatar}</span>
                                                </div>
                                                <div>
                                                    <div className="flex items-center">
                                                        <p className="font-semibold text-blue-800">{reply.user}</p>
                                                        <p className="text-gray-500 text-xs ml-2">{reply.time}</p>
                                                    </div>
                                                    <p className="text-black">{reply.reply}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    );
};

export default CommentModal;