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
                We do not store your data in database cause we do not have any database!<br />
                Most likely, it never won't.
              </p>
              <p className="text-gray-400 text-sm">
                Technically, we are caching data in <span className="text-blue-400 font-semibold">RAM</span> then delete it in 15 minutes.
              </p>
            </div>
          </div>

    )
}

export default Hero
