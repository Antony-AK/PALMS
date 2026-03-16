import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const replies = {
  "What is PALMS?":
    "PALMS Training & Consulting is a leadership development organization providing professional learning, consulting and leadership programmes.",

  "How can I join PALMS?":
    "You can join PALMS through our membership programs available on the website.",

  "Do you offer leadership training?":
    "Yes. PALMS offers leadership development and executive training programs.",

  "Where is PALMS located?":
    "PALMS Training & Consulting is located in Thoothukudi, Tamil Nadu, India.",

  "How can I contact PALMS?":
    "You can contact PALMS at info@palmsindia.org or call 0461-2330856.",

  "Do you conduct events?":
    "Yes. PALMS regularly hosts leadership forums, conferences and networking events.",

  "Is there a PALMS membership?":
    "Yes. PALMS membership provides access to leadership networks and events.",

  "Do you provide consulting services?":
    "Yes. PALMS offers consulting services for leadership development and organisational strategy."
};

const questions = Object.keys(replies);

export default function SupportBot() {

  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi 👋 I'm the PALMS Assistant. Ask me anything about our programs or membership."
    }
  ]);

  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const ask = (q) => {

    const user = { sender: "user", text: q };
    setMessages(prev => [...prev, user]);

    setTyping(true);

    setTimeout(() => {

      const bot = {
        sender: "bot",
        text: replies[q]
      };

      setMessages(prev => [...prev, bot]);
      setTyping(false);

    }, 800);
  };

  return (
    <>
      {/* Floating Button */}

      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-6 right-6 z-[9999] p-4 rounded-full text-white shadow-xl
            bg-[var(--palms-blue)]"
          >
            <MessageCircle size={26} />
          </motion.button>
        )}
      </AnimatePresence>


      {/* Chat Window */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            className="fixed bottom-6 right-6 w-[380px] h-[85vh] z-[9999]
            bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden"
          >

            {/* Header */}

            <div className="bg-[var(--palms-blue)] text-white p-5 flex justify-between">

              <div>
                <h3 className="font-semibold text-lg">PALMS Assistant</h3>
                <p className="text-xs opacity-80">Online now</p>
              </div>

              <X
                size={20}
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              />

            </div>


            {/* Messages */}

            <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-[#f7f9fc]">

              {messages.map((m, i) => (

                <div
                  key={i}
                  className={`flex ${m.sender === "user" ? "justify-end" : ""}`}
                >

                  <div
                    className={`px-4 py-2 text-sm rounded-2xl max-w-[70%] shadow-sm ${
                      m.sender === "bot"
                        ? "bg-white"
                        : "bg-[#0A2C56] text-white"
                    }`}
                  >
                    {m.text}
                  </div>

                </div>

              ))}

              {typing && (
                <div className="text-sm text-gray-400">
                  Assistant is typing...
                </div>
              )}

              <div ref={bottomRef} />

            </div>


            {/* Suggested Questions */}

            <div className="p-4 bg-white">

              <p className="text-xs text-gray-400 mb-3">
                Suggested questions
              </p>

              <div className="grid grid-cols-2 gap-2">

                {questions.map((q,i)=>(
                  <button
                    key={i}
                    onClick={()=>ask(q)}
                    className="text-left text-xs px-3 py-2 rounded-lg
                    bg-gray-100 hover:bg-gray-200 transition"
                  >
                    {q}
                  </button>
                ))}

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}