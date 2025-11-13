# Task Management App

A modern, full-featured task management application built with Next.js, React, and Tailwind CSS.

## Overview

This is a productivity app designed to help you organize and manage your daily tasks efficiently. Features include task creation, editing, deletion, status management, and persistent storage using localStorage.

## Features

- **Add Tasks** - Create new tasks with title and description
- **Edit Tasks** - Update task details and status
- **Delete Tasks** - Remove tasks you no longer need
- **Task Status** - Manage task status (In Progress, Pending, Completed)
- **Search & Filter** - Find tasks quickly with search functionality
- **Status Filtering** - View tasks by status with live task counts
- **Persistent Storage** - All tasks are automatically saved to localStorage
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Modern UI** - Clean, intuitive interface with smooth animations

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Storage**: Browser localStorage
- **State Management**: React Hooks

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/YOUR_USERNAME/task-management-app.git
   cd task-management-app
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Usage

### Adding a Task

- Click the blue "+" button in the bottom right
- Enter task title and description
- Select a status (In Progress, Pending, Completed)
- Click "ADD" to create the task

### Editing a Task

- Hover over a task card and click the edit icon
- Update the task details
- Click "Update" to save changes

### Deleting a Task

- Hover over a task card and click the trash icon
- Confirm deletion

### Filtering Tasks

- Use the sidebar to view tasks by status
- Search for tasks using the search bar
- View task counts for each status

## Project Structure

\`\`\`
task-management-app/
├── app/
│ ├── layout.tsx # Root layout
│ ├── page.tsx # Main page
│ └── globals.css # Global styles
├── components/
│ ├── sidebar.tsx # Left sidebar with filters
│ ├── task-panel.tsx # Main task list area
│ ├── task-card.tsx # Individual task card
│ ├── task-modal.tsx # Add/Edit task modal
│ ├── task-form.tsx # Task form component
│ └── task-filters.tsx # Status filter component
├── lib/
│ └── utils.ts # Utility functions
└── public/ # Static assets
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features Roadmap

- Drag and drop to reorder tasks
- Task priorities and categories
- Due dates and reminders
- Task sharing and collaboration
- Dark mode toggle
- Export tasks to PDF or CSV

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.
