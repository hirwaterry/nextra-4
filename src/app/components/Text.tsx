import RotatingText from "./Rotate";

  
import React from 'react'

const Text = () => {
  return (
    <div className="flex gap-3 items-center">
        <div className="text-7xl font-bold ">
            Creative
        </div>
        <div>
            <RotatingText
            texts={['Experience', 'Thinking', 'Designs', 'Cool!', 'Coding']}
            mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-7xl text-black font-bold overflow-hidden py-3 sm:py-1 md:py-4 justify-center rounded-lg transition duration-500 ease-in-out"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animatePresenceMode="wait"
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
            />
        </div>
        
    </div>
  )
}

export default Text

