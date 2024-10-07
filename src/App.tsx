import {
  ArrowRight,
  Download,
  Smartphone,
  Calendar,
  Bell,
  Filter,
  Wifi,
  Clock,
  Volume2,
} from "lucide-react";
import image from "./assets/screenshot.png";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AboutUs from "./aboutus";

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  size?: "md" | "lg";
  variant?: "default" | "outline";
  onClick?: () => void;
  disabled?: boolean;
}> = ({ children, className, size = "md", variant = "default", onClick, disabled = false }) => {
  const sizeClasses = size === "lg" ? "px-6 py-3" : "px-4 py-2";
  const variantClasses =
    variant === "outline"
      ? "bg-transparent border border-white hover:bg-white hover:text-gray-900"
      : "bg-white text-gray-900 hover:bg-gray-300";
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${sizeClasses} ${variantClasses} ${disabledClasses} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default function App() {
  const featuresRef = useRef<HTMLElement>(null);
  const downloadRef = useRef<HTMLElement>(null);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const scrollToFeatures = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAboutUs(false);
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAboutUs(false);
    downloadRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleAboutUs = () => {
    
    setShowAboutUs(!showAboutUs);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-gradient-to-r from-gray-900/80 to-gray-800/80 shadow-lg">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between max-w-7xl">
          <p className="flex items-center justify-center group cursor-pointer">
            <Smartphone className="h-8 w-8 mr-3 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
            <span className="font-bold text-xl">Remind Me</span>
          </p>
          <nav className="flex gap-6 sm:gap-8 justify-center items-center">
            {!showAboutUs && (
              <>
                <p
                  className="text-sm cursor-pointer font-medium hover:text-blue-400 transition-colors duration-300 relative group"
                  onClick={scrollToFeatures}
                >
                  Features
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </p>
                <p
                  className="text-sm cursor-pointer font-medium hover:text-blue-400 transition-colors duration-300 relative group"
                  onClick={scrollToDownload}
                >
                  Download
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </p>
              </>
            )}
            <Button variant="default" size="lg" onClick={toggleAboutUs}>
              About Us
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-20">
        <AnimatePresence mode="wait">
          {showAboutUs ? (
            <AboutUs />
          ) : (
            <motion.div
              key="main-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="flex flex-col justify-center space-y-4 lg:w-1/2">
                      <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center lg:text-left bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                          Experience the Future of Class Scheduling
                        </h1>
                        <p className="max-w-[600px] text-gray-300 md:text-xl text-center lg:text-left">
                          Download our revolutionary app and transform the way
                          you manage your class schedule. Sleek, powerful, and
                          intuitive.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
                        <Button
                          size="lg"
                          onClick={() =>
                            (window.location.href =
                              "https://github.com/biplabroy-1/remind-me-v4/releases/download/last_test/app-arm64-v8a-release.apk")
                          }
                        >
                          Download Now
                          <Download className="ml-2 h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="lg">
                          Learn More
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[640px] rounded-[40px] border-[14px] border-gray-800 shadow-xl">
                      <div className="absolute inset-0 bg-gray-900 rounded-[26px] overflow-hidden">
                        <img
                          alt="App Screenshot"
                          className="absolute inset-0 h-full w-full object-cover"
                          src={image}
                          style={{
                            aspectRatio: "640/1280",
                            objectFit: "fill",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section ref={featuresRef}>
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
                    Our App Features
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                    <div className="flex flex-col items-center space-y-4 text-center bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="bg-gray-800 p-4 rounded-full">
                        <Calendar className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Class Schedule Overview
                      </h3>
                      <p className="text-gray-300">
                        View your schedule in daily and weekly formats for
                        better planning.
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="bg-gray-800 p-4 rounded-full">
                        <Bell className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Class Reminders & Notifications
                      </h3>
                      <p className="text-gray-300">
                        Never miss a class with timely reminders and
                        notifications.
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="bg-gray-800 p-4 rounded-full">
                        <Filter className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Class Grouping & Filtering
                      </h3>
                      <p className="text-gray-300">
                        Organize and filter your classes for easy management.
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="bg-gray-800 p-4 rounded-full">
                        <Wifi className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">Offline Access</h3>
                      <p className="text-gray-300">
                        Sync your schedule locally for offline viewing anytime,
                        anywhere.
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="bg-gray-800 p-4 rounded-full">
                        <Clock className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">Customizable Alarms</h3>
                      <p className="text-gray-300">
                        Set up alarms that automatically activate based on class
                        start times.
                      </p>
                    </div>
                    <div className="flex flex-col items-center space-y-4 text-center bg-gray-900 p-6 rounded-lg shadow-lg">
                      <div className="bg-gray-800 p-4 rounded-full">
                        <Volume2 className="h-10 w-10 text-green-500" />
                      </div>
                      <h3 className="text-xl font-bold">
                        Personalized Notifications
                      </h3>
                      <p className="text-gray-300">
                        Customize sound and vibration patterns for class start
                        reminders.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <section
                ref={downloadRef}
                className="w-full py-12 md:py-24 lg:py-32"
              >
                <div className="container mx-auto px-4 md:px-6 max-w-7xl">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                        Ready to Get Started?
                      </h2>
                      <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Download our app now and experience the future of class
                        scheduling. Available for Android.
                      </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                      <Button
                        size="lg"
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/biplabroy-1/remind-me-v4/releases/download/last_test/app-arm64-v8a-release.apk")
                        }
                      >
                        Download for Android
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button size="lg" variant="outline" disabled={true}>
                        Download for iOS
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <footer className="w-full shrink-0 border-t border-gray-700">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row py-6 items-center justify-between">
            <p className="text-xs text-gray-400">
              © 2024 Remind Me. All rights reserved.
            </p>
            <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
              <a
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="#"
              >
                Privacy
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
