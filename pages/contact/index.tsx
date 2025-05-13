import classes from "./contact.module.css";
import DefaultLayout from "@/layouts/default";
import { Input, Textarea, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.name) {
      errors.name = "Name is required";
    }
    
    if (!formData.message) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        onOpen();
        // Reset form
        setFormData({
          email: "",
          name: "",
          phone: "",
          message: ""
        });
      }, 1500);
    }
  };
  
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 px-4">
        <motion.h1 
          className={classes.title}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me!
        </motion.h1>
        <section className={`${classes.content} flex flex-col-reverse md:flex-row gap-8 md:gap-16 w-full max-w-5xl`}>
          <motion.form
            className={`${classes.form} flex flex-col gap-5 justify-center text-center w-full md:w-1/2`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl font-bold mb-4">Don&apos;t Worry Coffee's on me!</h1>
            
            <Input
              type="email"
              label="Email"
              name="email"
              variant="underlined"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              isInvalid={!!formErrors.email}
              errorMessage={formErrors.email}
              isRequired
            />

            <Input
              type="text"
              label="Name"
              name="name"
              variant="underlined"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              isInvalid={!!formErrors.name}
              errorMessage={formErrors.name}
              isRequired
            />
            
            <Input
              type="tel"
              label="Phone Number"
              name="phone"
              variant="underlined"
              placeholder="+1 (XXX) XXX XXXX"
              value={formData.phone}
              onChange={handleChange}
            />
            
            <Textarea
              label="Message"
              name="message"
              variant="underlined"
              placeholder="Enter your message here"
              value={formData.message}
              onChange={handleChange}
              isInvalid={!!formErrors.message}
              errorMessage={formErrors.message}
              isRequired
            />
            
            <Button 
              className={`mx-auto ${classes.Button}`} 
              type="submit"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              <p>Send Message</p>
            </Button>
          </motion.form>

          <motion.div 
            className="flex items-center justify-center w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              alt="contact-hero"
              src="/hero-contact.png"
              width={300}
              height={300}
              className={`${classes.img}`}
              priority
            />
          </motion.div>
        </section>
      </section>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Message Sent!</ModalHeader>
          <ModalBody>
            <p>Thank you for reaching out. I'll get back to you as soon as possible!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </DefaultLayout>
  );
}
