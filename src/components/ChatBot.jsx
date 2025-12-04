import { useEffect, useState } from 'react'
import { Lightbulb, Users, MessageCircle, Zap, Clock, Wrench, Bot, Code, Gamepad2, Briefcase } from 'lucide-react'
import Lottie from 'lottie-react'
import botAnimation from '../animations/botAnimation.json'

export default function ScrollMonkey() {
    const [showBubble, setShowBubble] = useState(false)
    const [showTip, setShowTip] = useState(false)
    const [currentTip, setCurrentTip] = useState({ text: '', icon: null })
    const [showModal, setShowModal] = useState(false)

    const portfolioTips = [
        { text: "Collaborated closely with teams, PMs, and stakeholders to reach goals.", icon: Users },
        { text: "Strong communication and positive teamwork foster great results.", icon: MessageCircle },
        { text: "Quickly adapts to new technologies and workflows.", icon: Zap },
        { text: "Delivers tasks on time with high quality.", icon: Clock },
        { text: "Proactively suggests improvements to code and workflow.", icon: Wrench },
        { text: "AI tools applied to boost productivity and work quality.", icon: Bot },
        { text: "Experienced with React, Node.js, and many other technologies!", icon: Code },
        { text: "Try playing the Meteor game at the top-right corner!", icon: Gamepad2 }
    ];

    useEffect(() => {
        const bubbleInterval = setInterval(() => {
            setShowBubble(true)
            setTimeout(() => setShowBubble(false), 3000)
        }, 5000)

        return () => clearInterval(bubbleInterval)
    }, [])

    const handleRobotClick = () => {
        const randomTip = portfolioTips[Math.floor(Math.random() * portfolioTips.length)]
        setCurrentTip(randomTip)
        setShowTip(true)
        setShowBubble(false)
        setTimeout(() => setShowTip(false), 4000)
    }

    const handleLightbulbClick = () => {
        setShowModal(true)
        setShowBubble(false)
    }

    const TipIcon = currentTip.icon

    return (
        <>
            {/* Mac Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 pt-20">
                    <div className="relative bg-[#1e1e1e] rounded-xl shadow-2xl overflow-hidden" style={{ maxWidth: '1000px', width: '100%' }}>
                        {/* Mac Title Bar */}
                        <div className="h-12 bg-[#323233] flex items-center px-4 border-b border-[#2d2d30]">
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="w-3 h-3 rounded-full bg-[#ff5f57] hover:bg-[#ff5f57]/80 transition-colors group relative"
                                    title="Close"
                                >
                                    <span className="absolute inset-0 flex items-center justify-center text-[8px] text-[#4d0000] opacity-0 group-hover:opacity-100">✕</span>
                                </button>
                                <button className="w-3 h-3 rounded-full bg-[#febc2e] hover:bg-[#febc2e]/80 transition-colors" />
                                <button className="w-3 h-3 rounded-full bg-[#28c840] hover:bg-[#28c840]/80 transition-colors" />
                            </div>

                            <div className="flex-1 text-center flex items-center justify-center gap-2">
                                <Briefcase className="w-4 h-4 text-gray-300" />
                                <span className="text-gray-300 text-sm font-semibold">Professional Strengths</span>
                            </div>

                            <div className="w-[52px]"></div>
                        </div>

                        {/* Content */}
                        <div className="p-8 bg-[#1e1e1e] max-h-[500px] overflow-y-auto">
                            <div className="space-y-6">
                                {/* Teamwork */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                        <Users className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-200 mb-1">Teamwork & Collaboration</h3>
                                        <p className="text-gray-400 text-sm">Work effectively with teams, PMs, and stakeholders to achieve shared goals through strong collaboration.</p>
                                    </div>
                                </div>

                                {/* Communication */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-200 mb-1">Communication</h3>
                                        <p className="text-gray-400 text-sm">Build strong relationships with positive attitude, ensuring clear and effective communication across all levels.</p>
                                    </div>
                                </div>

                                {/* Adaptability */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                        <Zap className="w-6 h-6 text-purple-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-200 mb-1">Adaptability</h3>
                                        <p className="text-gray-400 text-sm">Quick learner who embraces new technologies, workflows, and team environments with enthusiasm.</p>
                                    </div>
                                </div>

                                {/* Responsibility */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-orange-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-200 mb-1">Responsibility</h3>
                                        <p className="text-gray-400 text-sm">Consistently deliver high-quality work on time, taking full ownership of assigned tasks and commitments.</p>
                                    </div>
                                </div>

                                {/* Problem-Solving */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                                        <Wrench className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-200 mb-1">Problem-Solving</h3>
                                        <p className="text-gray-400 text-sm">Proactively identify issues and contribute innovative ideas to improve code quality and workflow efficiency.</p>
                                    </div>
                                </div>

                                {/* AI Tools */}
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                                        <Bot className="w-6 h-6 text-indigo-400" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-semibold text-gray-200 mb-1">Working with AI</h3>
                                        <p className="text-gray-400 text-sm">Leverage AI tools effectively to enhance productivity and deliver higher quality results.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* AI Robot */}
            <div className="hidden md:block fixed -left-5 bottom-[1%] z-50">
                <div className="relative">
                    {/* Bubble */}
                    {showBubble && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 ml-12 z-50">
                            <div className="relative bg-white rounded-2xl px-6 py-2 shadow-xl flex items-center justify-center gap-2">
                                <button
                                    onClick={handleLightbulbClick}
                                    className="relative w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-yellow-400 animate-bounce-slow"
                                >
                                    <Lightbulb className="w-5 h-5 text-yellow-500" />
                                </button>
                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                            </div>
                        </div>
                    )}

                    {/* Tip bubble */}
                    {showTip && TipIcon && (
                        <div className="absolute top-1/2 left-full -translate-y-1/2 z-50">
                            <div className="relative bg-white rounded-2xl px-4 py-3 shadow-xl max-w-[18rem] w-[18rem] flex items-start gap-2">
                                <TipIcon className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                                <div className="text-sm font-medium text-gray-800">{currentTip.text}</div>
                                {/* Đuôi bong bóng - trỏ sang trái */}
                                <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-4 h-4 bg-white rotate-45"></div>
                            </div>
                        </div>
                    )}

                    {/* AI Robot Animation */}
                    <button
                        onClick={handleRobotClick}
                        className="hover:scale-110 transition-transform duration-300 animate-float relative z-10"
                        title="AI Assistant"
                    >
                        <Lottie
                            animationData={botAnimation}
                            loop={true}
                            style={{
                                width: 168,
                                height: 168,
                                filter: 'drop-shadow(0 8px 16px rgba(59, 130, 246, 0.4))',
                            }}
                        />
                    </button>
                </div>
            </div>
        </>
    )
}
