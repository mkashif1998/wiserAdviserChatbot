import React, { useEffect } from "react";
import wiserbee from "../assets/Maskgroup.png";
import { Link } from "react-router-dom";
import Picture1 from "../assets/Picture1.jpg"
import Picture2 from "../assets/Picture2.jpg"
import Picture3 from "../assets/Picture3.jpg"
import Picture4 from "../assets/Picture4.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="container">
            <div className="row mt-10 mb-5">
                <div className="col-md-6" >
                    <h1 className="fontSize64">Wiser-Adviser: Your AI-Powered Mental Wellness Companion</h1>
                    <h4>
                        Empowering minds for better well-being and learning
                    </h4>
                    <p className="text-start mt-4">
                        <Link className="reqDemoBtn" to="/liveChat">Start a Conversation</Link>
                    </p>
                </div>
                <div className="col-md-6" data-aos="zoom-in">
                    <img className="w-100 h-100" src={wiserbee} alt="wiserbee" />
                </div>
            </div>
            <div className="row mt-10">
                <div className="col-md-6">
                    <h1>What is Wiser-Adviser?</h1>
                    <p className="pargrphSize">Wiser-Adviser is an AI-driven chatbot designed to provide personalized mental wellness support. Whether you're seeking emotional balance, stress relief, or guidance, Wiser-Adviser is here to listen, understand, and offer actionable insights. Future features will include enhanced learning support, helping students achieve academic success and emotional well-being.</p>
                </div>
                <div className="col-md-6" data-aos="fade-left">
                    <img className="w-100 h-75" src={Picture1} alt="Picture1" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6" data-aos="flip-down">
                    <img className="w-100 h-75" src={Picture2} alt="Picture2" />
                </div>
                <div className="col-md-6">
                    <h1>How Wiser-Adviser Supports You</h1>
                    <p className="pargrphSize mb-0">Emotional Check-ins</p>
                    <p>Regularly monitor and assess your emotional well-being. </p>
                    <p className="pargrphSize mb-0">Stress Relief Techniques</p>
                    <p>Access mindfulness exercises, breathing techniques, and more.
                    </p>
                    <p className="pargrphSize mb-0">Personalized Advice</p>
                    <p>Tailored suggestions based on your emotional state and goals.
                    </p>
                    <p className="pargrphSize mb-0">Future-Ready for Learning: </p>
                    <p>Coming soon—AI-powered learning guidance to help students thrive academically.
                    </p>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6">
                    <h1>How Does Wiser-Adviser Work?</h1>
                    <p className="pargrphSize">Wiser-Adviser uses advanced AI algorithms to understand your emotions through simple conversations. You’ll receive tailored advice, coping strategies, and resources for mental wellness. The chatbot learns from every interaction, ensuring personalized care and future integration with academic assistance.
                    </p>
                </div>
                <div className="col-md-6" data-aos="flip-left">
                    <img className="w-100 h-75" src={Picture3} alt="Picture3" />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-6" data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <img className="w-100 h-50" src={Picture4} alt="Picture4" />
                </div>
                <div className="col-md-6">
                    <h1>Why Wiser-Adviser?</h1>
                    <p className="pargrphSize">Wiser-Adviser stands out because it goes beyond traditional wellness apps by integrating mental health support with a vision to enhance learning. Whether you need help balancing emotions or excelling in your studies, Wiser-Adviser is with you every step of the way.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Home;