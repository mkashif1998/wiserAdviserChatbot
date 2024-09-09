// import React, { useState, useRef, useEffect } from "react";
// import Logo from "../assets/logo.png";

// const LiveChat = () => {
//     const [messages, setMessages] = useState([]);
//     const [inputValue, setInputValue] = useState("");
//     const chatBoxRef = useRef();

//     // Handle input changes
//     const handleInputChange = (event) => {
//         setInputValue(event.target.value);
//     };

//     // Handle sending message
//     const handleSendMessage = async () => {
//         if (!inputValue.trim()) return; // Don't send if input is empty

//         // Add the user's message to the chat
//         setMessages((prevMessages) => [
//             ...prevMessages,
//             { sender: "user", text: inputValue },
//         ]);

//         // Clear the input field
//         setInputValue("");

//         // Simulate a bot response
//         try {
//             // Simulate a delay for bot response
//             await new Promise((resolve) => setTimeout(resolve, 1000));
            
//             // Example bot response (you can replace this with your API call)
//             const botResponse = "This is a simulated response from the bot.";
//             setMessages((prevMessages) => [
//                 ...prevMessages,
//                 { sender: "bot", text: botResponse },
//             ]);
//         } catch (error) {
//             console.error("Error sending message to API:", error);
//         }
//     };

//     // Handle key press events
//     const handleKeyPress = (event) => {
//         if (event.key === "Enter" && !event.shiftKey) {
//             event.preventDefault(); // Prevents newline character
//             handleSendMessage();
//         }
//     };

//     // Scroll to the bottom of the chat
//     const scrollToBottom = () => {
//         if (chatBoxRef.current) {
//             chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//         }
//     };

//     useEffect(() => {
//         scrollToBottom();
//     }, [messages]);

//     return (
//         <div id="chatCon" className="d-flex flex-column">
//             <div className="chat-box d-flex flex-column">
//                 <div className="chatbot_header d-flex justify-content-between align-items-center p-2 p-lg-3">
//                     <div>
//                         <img src={Logo} alt="CHATBOT" width="70" />
//                     </div>
//                     <div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x">
//                             <path d="M18 6L6 18"></path>
//                             <path d="m6 6 12 12"></path>
//                         </svg>
//                     </div>
//                 </div>
//                 <div className="flex-grow-1 overflow-auto" ref={chatBoxRef}>
//                     {messages.map((msg, index) => (
//                         <div key={index} className={`d-flex mt-3 ${msg.sender === "user" ? "me-3 justify-content-end" : "ms-3 gap-3"} align-items-end`}>
//                             {msg.sender === "bot" && (
//                                 <div className="chatbotAvatarWrapper">
//                                     <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAATCAYAAAAao7T0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQpSURBVHgBxVVdbBRVFD7n3plpZ7e7WwqWpkUQUKJCiCZutRUqxJ+kCJKoVVCpaUVsfCCNCYqJD1tjgzbEhJioQIjaloo+WEOaNIiRWunWNo2GEoNgCbjpjy3ttt3t/nRn5l5ndmfoblnBbB/4spvZmXvmu9/57jlnETIEB8DHnt5Rcm5KXC8ywgoXa339bc2/wQKAcWIOuG3bzsV/RKBQiWG2xkErcsFkJesd2ts+MJvuRVdp9evTinwEONVZDBoN8oRArb+78VC6eI/HQ77tvZofDocKOBfkGKOzK5eEBr2trWNWjHD35p1rc0scB4OMPs6YKFoLI1HOL5AnRm0lm3sEGju9lAR++quz9YK1HlOFXEBLiO4TJ6AxQU4W4N5SUeCblLYEwV7WcGp4Q1h13AXcScF8ZXTIFc1x13gdYuSjEe9XP6DkfuOybsaqG3PhCeO4dc+4iEqfXVI+3+UYPn5R04SfJ1Z7GKUVKmiSDNrhYtul+jNnOrRlj1Y+N65lv6kwaSMDKsR5kIF5EHPc1pVpykpp+B6kxTWjGmTlwy1hiTNIZ//MF6e3jnm/ucw5x7q6OtSPgZWXv+w8O2VrDKpZ2wGoKYDcmpppcIfNv0aQOW+ZQV6b2Atv8oYlxIiR7x2P4jv6jz2IyE2l8KsfngkyeXsiaSOWQpK16ZMDBgT5uWudLQPkzrxrDcjUYIKAw82BptNsNk/kX89fzQV2mqA6aGwAhP+3jrgWMznGeK6k7jOfAOS4X907w12H4gQptlrqrVturI7bMVgV7P2ibVnZS89OqfY9CiM52TTSNHW28Yir9JXVQcX1Iwe6Qk95vgJIqRVdjMTD9bG+Y+9B8k6kuOptBvZ6vVUFmHM+3iXxTDnjFPF7pzRdO9nV5JMfqX4hotpOAKGJKtc/i4TAh5PdX74L7ooCEZa+r4BWBSAK5gAxKdFMWK9UVBqiPZ/tN48aUqSvKNnxoJ87PgkqQikQCQ3lCNq0SPhJSgKHw93HvXpZGYepd2FNv4LSujkKvW84Vzbm+e7vOHVywHjiKn1Rd8n5FgHxeZXR/LgGxpk+Kn53YvjARE/zd8n9mrZi12ytLApMQBFmkcAD8uiV9vb2lMG3/qld6/r9zvNzc8Y8cdRgiRjeN9517GByvGfTJuEEXb5qJkQXUVHxXe1s+sdyIxlCOjGX2hqH9IvxhZE063/HhAJAktp9JjcCWT4/3tPRoRq010OxGdLhfwyBGyGiqqQ1VXcnxngUMkRGYmSMDQJXeUrrXi9B5SJkiIzEvFZ23xX9lHyJCWsCEx0n2vgvkCEQMkT2w7sPRJl9v1UrhjMCj3SpfUc3QIbIyBkDLhJpQb2VwRpJer1QkXwACwCFDBEaPD8mFK6NMpSeNNTIEPo42nv0U7idcD5UXW4v3l1p/HvDAvEvTce9eginXaYAAAAASUVORK5CYII=" alt="CHATBOT2" width="30" />
//                                 </div>
//                             )}
//                             <div className="chatbot_send w-75 p-0 m-0">
//                                 <p className="chatbt_send_p pt-2 pb-2 ps-3 pe-3 m-0">
//                                     {msg.text}
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="chatbot_footer p-3">
//                     <div className="d-flex justify-content-between mt-3">
//                         <div className="w-90 flex-wrap">
//                             <textarea
//                                 className="chatbox_input"
//                                 placeholder="Type your message..."
//                                 rows="3"
//                                 value={inputValue}
//                                 onChange={handleInputChange}
//                                 onKeyPress={handleKeyPress}
//                             />
//                         </div>
//                         <div className="cursor-pointer d-flex align-items-center" onClick={handleSendMessage}>
//                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.3337 1.66797L12.5003 18.3346L9.16699 10.8346L1.66699 7.5013L18.3337 1.66797Z" stroke="#172D52" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.3337 1.66797L9.16699 10.8346" stroke="#172D52" stroke-linecap="round" stroke-linejoin="round"></path>
//                         </svg>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LiveChat;
import React from 'react';

const IframeComponent = () => {
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <iframe
                src="http://18.225.57.61:7860/"
                style={{ border: 'none', height: '100%', width: '100%' }}
                title="External Content"
                allowFullScreen
            />
        </div>
    );
};

export default IframeComponent;
