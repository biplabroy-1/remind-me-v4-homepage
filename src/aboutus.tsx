import { motion } from "framer-motion";
import { Mail, MapPin, Users } from "lucide-react";

const AboutUs = () => (
  <motion.section
    key="about-us"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="w-full py-12 md:py-24 lg:py-32"
  >
    <div className="container mx-auto px-4 md:px-6 max-w-7xl">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
        About Us
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-300 mb-6">
            At Remind Me, our mission is to simplify and enhance the academic
            experience for students worldwide. We believe that effective time
            management is key to academic success, and our app is designed to
            empower students to take control of their schedules.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Team</h3>
          <p className="text-gray-300 mb-6">
            We are a dedicated team of developers, designers, and former educators
            who understand the challenges students face. Our diverse backgrounds
            and shared passion for education drive us to create innovative
            solutions that make a real difference in students' lives.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-6 w-6 mr-2 text-blue-400" />
              <p className="text-gray-300">support@remindme.com</p>
            </div>
            <div className="flex items-center">
              <MapPin className="h-6 w-6 mr-2 text-blue-400" />
              <p className="text-gray-300">123 App Street, Tech City, TC 12345</p>
            </div>
            <div className="flex items-center">
              <Users className="h-6 w-6 mr-2 text-blue-400" />
              <p className="text-gray-300">Join our community on social media</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default AboutUs;
