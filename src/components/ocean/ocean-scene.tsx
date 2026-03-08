import Bottle from "../bottle/bottle"
import Fish from "./fish"
import Seaweed from "./seaweed"
import Bubble from "./bubble"
import Jellyfish from "./jellyfish"

export default function OceanScene({ message }: any) {
    return (
        <div
            className="relative w-full h-screen overflow-hidden
      bg-gradient-to-b from-sky-300 via-blue-400 to-blue-800"
        >
            {/* waves overlay */}
            <div className="absolute bottom-0 w-full h-40
        bg-gradient-to-t from-blue-900/60 to-transparent"
            />

            {/* fish */}
            <Fish delay={0} top="30%" />
            <Fish delay={4} top="60%" />
            <Fish delay={8} top="45%" />

            {/* jellyfish */}
            <Jellyfish left="20%" delay={0} />
            <Jellyfish left="80%" delay={10} />

            {/* seaweed */}
            <Seaweed left="5%" />
            <Seaweed left="15%" />
            <Seaweed left="85%" />
            <Seaweed left="70%" />

            {/* bubbles */}
            <Bubble left="10%" delay={0} />
            <Bubble left="30%" delay={2} />
            <Bubble left="50%" delay={5} />
            <Bubble left="75%" delay={3} />

            {/* bottle */}
            <Bottle message={message} />
        </div>
    )
}