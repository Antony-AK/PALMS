import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const replies = {
  "What is PALMS?":
    "PALMS Training & Consulting (P) Ltd. is a soft skills training organisation offering programmes in managerial skills, leadership development, business excellence, personal effectiveness, and professional growth. Our mission is to support personal, professional, and organisational development through meaningful learning experiences.",

  "How can I join PALMS?":
    "You can become a PALMS member by choosing a membership plan that best suits your needs. Please visit the Membership section of our website to explore available membership plans, benefits, and learning opportunities.",

  "Do you offer leadership training?":
    "Yes. PALMS offers a wide range of programmes on leadership development, communication skills, managerial effectiveness, emotional intelligence, team building, business excellence, and personal effectiveness.",

  "Where is PALMS located?":
    "PALMS Training & Consulting (P) Ltd. is based in Thoothukudi, Tamil Nadu, India. We also conduct programmes across Tamil Nadu and offer selected online learning programmes.",

  "How can I contact PALMS?":
    "You can contact PALMS through Email: info@palmsindia.org, Mobile/WhatsApp: +91 82203 44477, or Phone: 0461-2330856.",

  "Do you conduct events?":
    "Yes. PALMS regularly organises monthly learning programmes for members, in-house corporate training programmes, outbound experiential learning programmes, special public workshops, leadership forums, and networking events.",

  "Is there a PALMS membership?":
    "Yes. PALMS operates on a membership model. Members enjoy continuous learning opportunities, networking, programme discounts, exclusive resources, and participation in various professional development activities.",

  "Do u provide career guidance?":
    "Yes. PALMS provides Career Guidance services for school students (Std IX and above), college students, working professionals, and executives. Our guidance process helps individuals discover their strengths and make informed education and career decisions."
};

// const questions = Object.keys(replies);

const questions = [
  "What is PALMS?",
  "How can I join PALMS?",
  "Do you offer leadership training?",
  "Where is PALMS located?",
  "How can I contact PALMS?",
  "Do you conduct events?",
  "Is there a PALMS membership?",
  "Do u provide career guidance?"
];

export default function SupportBot() {

  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState("");
  const [awaitingEmail, setAwaitingEmail] = useState(false);
  const [pendingQuestion, setPendingQuestion] = useState("");
  const [step, setStep] = useState("question");
  const [userName, setUserName] = useState("");

  const [messages, setMessages] = useState([
    {
  sender: "bot",
  text: "👋 Hi! I'm the PALMS Assistant. I can help you with information about our programmes, membership plans, events, leadership development initiatives, and career guidance services. How may I assist you today?"
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

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);

    // STEP 1 → question
    if (step === "question") {
      if (replies[input]) {
        setTyping(true);

        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { sender: "bot", text: replies[input] }
          ]);
          setTyping(false);
        }, 800);
      } else {
        setPendingQuestion(input);

        setTimeout(() => {
          setMessages(prev => [
            ...prev,
            { sender: "bot", text: "I’d be happy to help you with that. If you’d like, our team can get in touch and assist you further. May I have your name?" }
          ]);
          setStep("name");
        }, 500);
      }
    }

    // STEP 2 → name
    else if (step === "name") {
      setUserName(input);

      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "Thank you. Could you also share your email address so our team can reach out to you?" }
      ]);

      setStep("email");
    }



    // STEP 3 → email
    else if (step === "email") {
      const emailValue = input.trim();
      handleEmailSubmit(emailValue);
    }

    setInput("");
  };


  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailSubmit = async (email) => {
    setTyping(true);

    if (!isValidEmail(email)) {
      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "Please enter a valid email address (example: name@gmail.com)."
        }
      ]);
      setTyping(false);
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "06a5404f-769b-493c-91b4-3afdac2b1d90",
          subject: "New Query from Support Bot",
          from_name: "PALMS Assistant",
          from_email: email,
          replyto: email,
          name: userName,
          email: email,
          message: pendingQuestion,
          source: "Chatbot",

        }),
      });

      const data = await res.json();

      console.log(data);
      console.log("Sending:", {
        name: userName,
        email,
        question: pendingQuestion
      });

      if (data.success) {
        setMessages(prev => [
          ...prev,
          {
            sender: "bot",
            text: `Thanks ${userName}! Our team will contact you shortly 🙌`
          }


        ]);
        // ✅ RESET FLOW
        setStep("question");
        setPendingQuestion("");
        setUserName("");
      } else {
        throw new Error("Failed");
      }

    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          sender: "bot",
          text: "Something went wrong. Please try again later."
        }
      ]);
      setStep("email");
    }

    setTyping(false);
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
                    className={`px-4 py-2 text-sm rounded-2xl max-w-[70%] shadow-sm ${m.sender === "bot"
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

                {questions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => ask(q)}
                    className="text-left text-xs px-3 py-2 rounded-lg
                    bg-gray-100 hover:bg-gray-200 transition"
                  >
                    {q}
                  </button>
                ))}

              </div>

            </div>

            <div className="p-4 border-t bg-white flex gap-2">

              <input
                type="text"
                placeholder="Ask your question..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3 py-2 text-sm border rounded-lg outline-none"
              />

              <button
                onClick={handleSend}
                className="px-4 py-2 bg-[var(--palms-blue)] text-white rounded-lg text-sm"
              >
                Send
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
    </>
  );
}