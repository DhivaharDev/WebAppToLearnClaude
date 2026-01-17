# String Formatter SPA

A high-performance, responsive Single Page Application for string formatting built with Next.js, Tailwind CSS, and Three.js.

## Features

- **String Formatting**: Split space-separated strings, remove duplicates, wrap in quotes, and join with commas
- **Bracket Wrapping**: Optional checkbox to wrap output in parentheses
- **Copy to Clipboard**: One-click copy with visual success notification
- **Input Sanitization**: XSS prevention through input sanitization
- **Accessibility**: Comprehensive ARIA labels for all interactive elements
- **Beautiful UI**: Clean, minimalist card-based design with responsive layout
- **3D Animation**: Subtle Three.js particle background animation
- **Toast Notifications**: Real-time feedback with count of formatted strings

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Hot Toast** - Beautiful notifications

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

1. Enter space-separated strings in the input field
2. Check "Include Brackets" if you want parentheses around the output
3. Click "Format" to process the input
4. Click "Copy" to copy the result to clipboard
5. Click "Clear" to reset both fields

### Example

**Input:**
```
OOps P-10000 apple 123 apple OOps
```

**Output (with brackets):**
```
('OOps', 'P-10000', 'apple', '123')
```

## Security

- Input sanitization prevents XSS attacks
- No external data fetching
- Client-side only processing

## Accessibility

- ARIA labels on all interactive elements
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML structure
