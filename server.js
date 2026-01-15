/**
 * Basic Development Server for Task Management Starter Project
 * 
 * This is a minimal static file server that serves HTML, CSS, and JavaScript files.
 * Students will build upon this foundation throughout the 5-day course.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve source files for development
app.use('/src', express.static(path.join(__dirname, 'src')));

// Handle all routes - serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Development server running at http://localhost:${PORT}`);
    console.log(`📁 Serving files from: ${path.join(__dirname, 'public')}`);
    console.log(`\n📖 Ready for development!`);
    console.log(`\n🛑 Press Ctrl+C to stop the server`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server...');
    process.exit(0);
});

module.exports = app;