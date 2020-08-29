import React, { useState } from "react";
import useInterval from "@use-it/interval";
import { motion } from "framer-motion";
import "./App.css";

const messages = [
  { text: "How do I get better at React?" },
  { text: "Just build something!" },
  { text: "OK! What should I build?" },
  { text: "I don't know. Just Google it?" },
  { text: "Oh! This course looks cool!" },
  { text: "Send me the link?" },
  { text: "frontendmentor.io!" },
  { text: "Do they give solutions?" },
  { text: "Nope, a few directions & a slack channel to shout for help" },
  { text: "Sounds fun, I will check it out" },
];

export default function App() {
  const [messageToShow, setMessageToShow] = useState(0);

  useInterval(() => {
    setMessageToShow((messageToShow) => messageToShow + 1);
  }, 2000);
  return (
    <div className="app">
      <div className="walkthrough">
        {messages.map((message, index) => {
          const even = index % 2 === 0;
          // message is being typed
          if (messageToShow + 1 === index) {
            return <TypingIndicator key={index} even={even} />;
          }

          //ready to show the message
          if (index > messageToShow) return <div key={index} />;
          return <Message key={index} message={message} />;
        })}
      </div>
    </div>
  );
}

// destructure the props passed from parent
function TypingIndicator({ even }) {
  return (
    <motion.div
      className={`typing ${even ? "is-right" : "is-left"}`}
      initial={{ rotate: 10, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
    >
      <div className="dots">
        <div />
        <div />
        <div />
      </div>
    </motion.div>
  );
}

// access the message from props by destructuring
function Message({ message }) {
  return (
    <motion.div
      className="message"
      initial={{ rotate: -5, scale: 0 }}
      animate={{ rotate: 0, scale: 1 }}
    >
      <div className="avatar">👩</div>
      <div className="text">{message.text}</div>
      <div className="avatar">🧑</div>
    </motion.div>
  );
}
