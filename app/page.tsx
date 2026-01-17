'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import ThreeBackground from '@/components/ThreeBackground';

export default function Home() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [includeBrackets, setIncludeBrackets] = useState(false);

  // Input sanitization function to prevent XSS
  const sanitizeInput = (text: string): string => {
    return text
      .replace(/[<>]/g, '') // Remove < and > to prevent script injection
      .trim();
  };

  const formatString = () => {
    if (!input.trim()) {
      toast.error('Please enter some text to format');
      return;
    }

    const sanitizedInput = sanitizeInput(input);

    // Split by whitespace
    const items = sanitizedInput.split(/\s+/).filter(item => item.length > 0);

    // Remove duplicates using Set
    const uniqueItems = Array.from(new Set(items));

    // Wrap each element in single quotes
    const quotedItems = uniqueItems.map(item => `'${item}'`);

    // Join with comma and space
    let result = quotedItems.join(', ');

    // Add brackets if checkbox is checked
    if (includeBrackets) {
      result = `(${result})`;
    }

    setOutput(result);

    // Show notification with count
    toast.success(`Formatted ${uniqueItems.length} unique string${uniqueItems.length !== 1 ? 's' : ''}`);
  };

  const copyToClipboard = async () => {
    if (!output) {
      toast.error('Nothing to copy');
      return;
    }

    try {
      await navigator.clipboard.writeText(output);
      toast.success('Copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy to clipboard');
    }
  };

  const clearFields = () => {
    setInput('');
    setOutput('');
    toast.success('Fields cleared');
  };

  return (
    <>
      <ThreeBackground />
      <main className="min-h-screen flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-2xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-200">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
                String Formatter
              </h1>
              <p className="text-gray-600 text-sm sm:text-base">
                Format, deduplicate, and transform your strings instantly
              </p>
            </div>

            {/* Input Section */}
            <div className="space-y-4 mb-6">
              <div>
                <label
                  htmlFor="input-text"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Input
                </label>
                <textarea
                  id="input-text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter strings separated by spaces (e.g., OOps P-10000 apple 123)"
                  className="w-full h-32 px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  aria-label="Input text area for strings to be formatted"
                  aria-describedby="input-description"
                />
                <p id="input-description" className="sr-only">
                  Enter space-separated strings that will be formatted, deduplicated, wrapped in quotes, and joined with commas
                </p>
              </div>

              {/* Checkbox */}
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="include-brackets"
                  checked={includeBrackets}
                  onChange={(e) => setIncludeBrackets(e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                  aria-label="Include brackets around the formatted output"
                />
                <label
                  htmlFor="include-brackets"
                  className="text-sm font-medium text-gray-700 cursor-pointer"
                >
                  Include Brackets
                </label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              <button
                onClick={formatString}
                className="flex-1 min-w-[120px] px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Format the input text according to the specified rules"
              >
                Format
              </button>
              <button
                onClick={copyToClipboard}
                className="flex-1 min-w-[120px] px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                aria-label="Copy the formatted output to clipboard"
              >
                Copy
              </button>
              <button
                onClick={clearFields}
                className="flex-1 min-w-[120px] px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                aria-label="Clear both input and output fields"
              >
                Clear
              </button>
            </div>

            {/* Output Section */}
            <div>
              <label
                htmlFor="output-text"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Output
              </label>
              <textarea
                id="output-text"
                value={output}
                readOnly
                placeholder="Formatted output will appear here..."
                className="w-full h-32 px-4 py-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-lg outline-none resize-none"
                aria-label="Formatted output text area (read-only)"
                aria-describedby="output-description"
              />
              <p id="output-description" className="sr-only">
                This field displays the formatted result after processing your input
              </p>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                Built with Next.js, Tailwind CSS, and Three.js
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
