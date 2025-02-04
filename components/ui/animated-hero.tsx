'use client'

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Business", "Enterprise", "Industry", "Government"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black pointer-events-none" />
      <div className="container relative mx-auto px-4">
        <div className="flex gap-12 py-32 items-center justify-center flex-col">
          <div>
            <div className="flex items-center rounded-full border border-white/10 bg-black/40 p-1.5 shadow-lg shadow-black/10 backdrop-blur-sm">
              <div className="flex -space-x-1.5">
                <img
                  className="rounded-full ring-1 ring-white/10"
                  src="https://originui.com/avatar-80-03.jpg"
                  width={24}
                  height={24}
                  alt="Avatar 01"
                />
                <img
                  className="rounded-full ring-1 ring-white/10"
                  src="https://originui.com/avatar-80-04.jpg"
                  width={24}
                  height={24}
                  alt="Avatar 02"
                />
                <img
                  className="rounded-full ring-1 ring-white/10"
                  src="https://originui.com/avatar-80-05.jpg"
                  width={24}
                  height={24}
                  alt="Avatar 03"
                />
                <img
                  className="rounded-full ring-1 ring-white/10"
                  src="https://originui.com/avatar-80-06.jpg"
                  width={24}
                  height={24}
                  alt="Avatar 04"
                />
              </div>
              <p className="px-3 text-sm text-white/70">
                Trusted by <strong className="font-medium text-white">60K+</strong> developers.
              </p>
            </div>
          </div>
          <div className="flex gap-6 flex-col max-w-4xl">
            <h1 className="text-6xl md:text-8xl tracking-tighter text-center font-regular">
              <span className="text-spektr-cyan-50">AI Powered</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-xl md:text-2xl leading-relaxed tracking-tight text-muted-foreground text-center">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              Jump on a call <PhoneCall className="w-4 h-4 ml-2" />
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center rounded-full bg-black px-8 py-3 text-sm font-medium text-white ring-1 ring-white/20 transition-all hover:ring-white/40"
            >
              Sign up here <MoveRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero }; 