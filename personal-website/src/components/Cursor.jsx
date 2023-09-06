import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
    const [cursorX, setCursorX] = useState();
    const [cursorY, setCursorY] = useState();

    useEffect(() => {
        document.addEventListener("mousemove", mouseMoveHandler);
        return () => {
            document.removeEventListener("mousemove", mouseMoveHandler);
        };
    });

    const mouseMoveHandler = (e) => {
        setCursorX(e.clientX);
        setCursorY(e.clientY);
    };

    return (
        <>
            <div
                className="cursor-dot"
                style={{ left: cursorX, top: cursorY }}
            ></div>
            <motion.div
                className="cursor-outline"
                animate={{
                    x: cursorX - 15,
                    y: cursorY - 15,
                }}
                transition={{ duration: 0.5 }}
            ></motion.div>
        </>
    );
};

export default Cursor;
