const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    portfolioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Portfolio', required: true },
    title: { type: String, required: true },
    mediaFiles: [String], // Array of file URLs or paths for uploaded media
    createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
