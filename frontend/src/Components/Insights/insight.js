// src/Components/InsightsAndBlog/InsightsAndBlog.js
import React, { useState } from 'react';
import { Typography, Button, TextField, Paper } from '@mui/material';

const InsightsAndBlog = () => {
  const [blogPosts, setBlogPosts] = useState([
    { title: 'The Future of AI', content: 'AI is transforming industries...', author: 'John Doe' },
    { title: 'Getting Started with Web Development', content: 'Web development is a lucrative field...', author: 'Jane Smith' },
  ]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    if (title && content && author) {
      const newPost = { title, content, author };
      setBlogPosts([newPost, ...blogPosts]);
      setTitle('');
      setContent('');
      setAuthor('');
    }
  };

  return (
    <div className="p-8 bg-slate-100 rounded-lg shadow-lg max-w-2xl mx-auto my-8">
      <Typography variant="h4" className="text-center font-extrabold text-blue-900/90 mb-4 pb-4">
      Insights & Blog
      </Typography>

      {/* Blog Submission Form */}
      <Paper elevation={3} className="p-6 mb-8 bg-white rounded-lg shadow-md">
        <Typography variant="h5" className="font-semibold text-black-800 mb-4">
          Submit a Blog Post
        </Typography>
        <TextField 
          label="Blog Title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField 
          label="Blog Content"
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <TextField 
          label="Author Name"
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <Button 
          onClick={handleSubmit} 
          variant="contained"
          color="primary"
          fullWidth
          className="mt-4 bg-blue-900/90 hover:bg-blue-800/90 text-white"
        >
          Submit Blog
        </Button>
      </Paper>

      {/* Blog Posts */}
      <Typography variant="h5" className="font-semibold text-blue-800 mb-4 pb-4">
        Recent Blogs
      </Typography>
      <ul className="space-y-6 ">
        {blogPosts.map((post, index) => (
          <li key={index} className="p-6 border bg-white rounded-lg shadow-md hover:bg-yellow-50/20 hover:border-yellow-500 transition duration-300 ease-in-out">
            <Typography variant="h6" className="font-bold text-sky-800 mb-1">
              {post.title}
            </Typography>
            <Typography variant="body2" className="text-gray-700 mb-2">
              {post.content}
            </Typography>
            <Typography variant="caption" className="text-gray-600">
              By {post.author}
            </Typography>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InsightsAndBlog;