import React from 'react'

function Hero() {
  return (
    <div className="lg:w-1/2 space-y-6 pt-8">
      <h2 className="text-4xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 leading-tight font-display mb-8">
        Easy, Fast and<br />
        Secure online text<br />
        sharing
      </h2>
      <div className="space-y-4 mb-12">
        <p className="text-gray-400 text-sm">
          Your data is securely stored using Google Firebase.<br />
          Messages are automatically removed after 15 minutes for your privacy.
        </p>
        <p className="text-gray-400 text-sm">
          We use <span className="text-blue-400 font-semibold">Firebase Realtime Database</span> to ensure quick and reliable message delivery.
        </p>
      </div>
    </div>

  )
}

export default Hero
