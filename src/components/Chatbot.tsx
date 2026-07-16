import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Phone, MessageCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hello! I am G.M, the virtual assistant for Gautam Marble. How can I help you today? Would you like to book an appointment or make an inquiry?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(1) // skip the initial greeting if needed, or pass it all
        })
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response');
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: 'model', text: data.text }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I am having trouble connecting to my server right now. Please try again later or contact us directly at 090789 58414.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const contactNumber = "09078958414";

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col gap-3"
            >
              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/91${contactNumber}?text=Hello, I would like to make an inquiry.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-6 h-6" />
              </a>

              {/* Call Button */}
              <a
                href={`tel:+91${contactNumber}`}
                className="w-12 h-12 bg-blue-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                title="Call Us"
              >
                <Phone className="w-5 h-5" />
              </a>

              {/* Chatbot Toggle Button */}
              <button
                onClick={() => setIsOpen(true)}
                className="w-14 h-14 bg-black rounded-full shadow-2xl flex items-center justify-center text-white hover:bg-gray-800 transition-colors border border-gray-700"
                title="Chat with G.M Assistant"
              >
                <MessageSquare className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-[360px] sm:w-[360px] h-[550px] max-h-[85vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 font-sans"
          >
            {/* Header */}
            <div className="bg-black text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <span className="font-serif font-bold text-sm">GM</span>
                </div>
                <div>
                  <h3 className="font-medium text-sm">G.M Assistant</h3>
                  <p className="text-xs text-gray-400">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions inside chat */}
            <div className="bg-gray-50 border-b border-gray-200 p-3 flex gap-2 justify-center">
              <a
                href={`https://wa.me/91${contactNumber}?text=Hello, I would like to book an appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-green-50 text-green-700 text-xs font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 hover:bg-green-100 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`tel:+91${contactNumber}`}
                className="flex-1 bg-blue-50 text-blue-700 text-xs font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 hover:bg-blue-100 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-black text-white rounded-tr-sm'
                        : 'bg-gray-100 text-gray-800 rounded-tl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-sm text-sm">
                    <Loader2 className="w-4 h-4 animate-spin text-gray-500" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-gray-100 flex items-end gap-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask G.M about our collection..."
                className="flex-1 max-h-32 min-h-[44px] text-sm p-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-black focus:ring-1 focus:ring-black resize-none"
                rows={1}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-11 h-11 flex-shrink-0 bg-black text-white rounded-xl flex items-center justify-center disabled:opacity-50 hover:bg-gray-800 transition-colors"
              >
                <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
