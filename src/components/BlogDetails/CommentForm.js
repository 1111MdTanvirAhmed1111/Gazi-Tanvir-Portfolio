// components/CommentForm.tsx
'use client';
import { useState } from 'react';

export default function CommentForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to an API)
    console.log({ name, email, comment, saveInfo });
    // Reset form
    setName('');
    setEmail('');
    setComment('');
    setSaveInfo(false);
  };

  return (
    <div className="bg-[#2a003f] p-6 rounded-lg mb-8 border border-[#00bcd4]/20">
      <h4 className="text-base sm:text-lg font-medium mb-4 text-white">Leave a comment</h4>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent bg-[#0a1f44] text-white"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent bg-[#0a1f44] text-white"
              placeholder="Your email (will not be published)"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-1">
            Comment
          </label>
          <textarea
            id="comment"
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 border border-[#00bcd4]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00bcd4] focus:border-transparent bg-[#0a1f44] text-white"
            placeholder="Share your thoughts..."
            required
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="save-info"
            checked={saveInfo}
            onChange={(e) => setSaveInfo(e.target.checked)}
            className="h-4 w-4 text-[#00bcd4] focus:ring-[#00bcd4] border-[#00bcd4]/30 rounded bg-[#0a1f44]"
          />
          <label htmlFor="save-info" className="ml-2 block text-sm text-gray-300">
            Save my name and email for the next time I comment
          </label>
        </div>
        <button
          type="submit"
          className="bg-[#00bcd4] hover:bg-[#2a003f] text-white font-medium py-2 px-6 rounded-md transition-all duration-200 hover:shadow-md border border-[#00bcd4]"
        >
          Post Comment
        </button>
      </form>
    </div>
  );
}