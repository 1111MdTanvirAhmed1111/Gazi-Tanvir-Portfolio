'use client';
import { useState } from 'react';

export default function CommentsSection({ initialComments }) {
  const [comments, setComments] = useState(initialComments);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyName, setReplyName] = useState('');
  const [replyEmail, setReplyEmail] = useState('');
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = (e, commentId) => {
    e.preventDefault();
    const newReply = {
      id: `${commentId}-${Date.now()}`,
      author: replyName,
      avatar: "https://randomuser.me/api/portraits/lego/1.jpg",
      text: replyText,
      date: "Just now",
    };

    setComments(comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, replies: [...comment.replies, newReply] }
        : comment
    ));

    setReplyName('');
    setReplyEmail('');
    setReplyText('');
    setReplyingTo(null);
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl sm:text-2xl font-bold mb-6 text-[#00bcd4]">
        Comments ({comments.length})
      </h3>
      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-[#2a003f] p-6 rounded-lg shadow-md border border-[#00bcd4]/10"
          >
            <div className="flex items-start space-x-4">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-12 h-12 rounded-full object-cover border-2 border-[#00bcd4]/40"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <h5 className="font-bold text-white">{comment.author}</h5>
                  <span className="text-xs text-gray-400">{comment.date}</span>
                </div>
                <p className="text-gray-300 mb-3">{comment.text}</p>
                <button
                  onClick={() => setReplyingTo(comment.id)}
                  className="text-[#00bcd4] text-sm hover:underline transition-colors duration-200 flex items-center"
                >
                  <span className="material-symbols-outlined text-sm mr-1">reply</span> Reply
                </button>
              </div>
            </div>

            {comment.replies.length > 0 && (
              <div className="ml-16 mt-4 pt-4 border-t border-[#00bcd4]/10 bg-[#0a1f44]/60 p-4 rounded-lg">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex items-start space-x-4 mb-4 last:mb-0">
                    <img
                      src={reply.avatar}
                      alt={reply.author}
                      className="w-10 h-10 rounded-full object-cover border-2 border-[#00bcd4]/40"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <h5 className="font-bold text-white">
                          {reply.author}
                          {reply.isAuthor && (
                            <span className="text-[#00bcd4] text-xs ml-2">(Author)</span>
                          )}
                        </h5>
                        <span className="text-xs text-gray-400">{reply.date}</span>
                      </div>
                      <p className="text-gray-300">{reply.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {replyingTo === comment.id && (
              <form
                onSubmit={(e) => handleReplySubmit(e, comment.id)}
                className="mt-4 ml-16 bg-[#0a1f44]/60 p-4 rounded-lg border border-[#00bcd4]/20"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor={`reply-name-${comment.id}`} className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id={`reply-name-${comment.id}`}
                      value={replyName}
                      onChange={(e) => setReplyName(e.target.value)}
                      className="w-full px-4 py-2 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] bg-[#0a1f44] text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={`reply-email-${comment.id}`} className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id={`reply-email-${comment.id}`}
                      value={replyEmail}
                      onChange={(e) => setReplyEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] bg-[#0a1f44] text-white"
                      placeholder="Your email (will not be published)"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor={`reply-text-${comment.id}`} className="block text-sm font-medium text-gray-300 mb-1">
                    Reply
                  </label>
                  <textarea
                    id={`reply-text-${comment.id}`}
                    rows={3}
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    className="w-full px-4 py-2 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] bg-[#0a1f44] text-white"
                    placeholder="Your reply..."
                    required
                  />
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="bg-[#00bcd4] hover:bg-[#2a003f] text-white font-medium py-2 px-6 rounded-md transition-all duration-200 hover:shadow-md border border-[#00bcd4]"
                  >
                    Post Reply
                  </button>
                  <button
                    type="button"
                    onClick={() => setReplyingTo(null)}
                    className="text-[#00bcd4] hover:underline"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        ))}
      </div>
      <button
        className="mt-6 border border-[#00bcd4]/30 bg-[#2a003f] hover:bg-[#0a1f44] text-[#00bcd4] font-medium py-2 px-6 rounded-md w-full transition-all duration-200 hover:shadow-[#00bcd4]/20 hover:shadow-md hover:border-[#00bcd4]/50"
      >
        Load More Comments
      </button>
    </div>
  );
}