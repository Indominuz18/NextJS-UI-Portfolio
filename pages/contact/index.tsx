import {
  Input,
  Textarea,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import DefaultLayout from "@/layouts/default";

import classes from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
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
          message: "",
        });
      }, 1500);
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 px-4">
        <motion.h1
          animate={{ opacity: 1, y: 0 }}
          className={classes.title}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me!
        </motion.h1>
        <section
          className={`${classes.content} flex flex-col-reverse md:flex-row gap-8 md:gap-16 w-full max-w-5xl`}
        >
          <motion.form
            animate={{ opacity: 1, x: 0 }}
            className={`${classes.form} flex flex-col gap-5 justify-center text-center w-full md:w-1/2`}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            <h1 className="text-xl font-bold mb-4">
              Don&apos;t Worry Coffee's on me!
            </h1>

            <Input
              isRequired
              errorMessage={formErrors.email}
              isInvalid={!!formErrors.email}
              label="Email"
              name="email"
              placeholder="you@example.com"
              type="email"
              value={formData.email}
              variant="underlined"
              onChange={handleChange}
            />

            <Input
              isRequired
              errorMessage={formErrors.name}
              isInvalid={!!formErrors.name}
              label="Name"
              name="name"
              placeholder="Your Name"
              type="text"
              value={formData.name}
              variant="underlined"
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="phone"
              placeholder="+1 (XXX) XXX XXXX"
              type="tel"
              value={formData.phone}
              variant="underlined"
              onChange={handleChange}
            />

            <Textarea
              isRequired
              errorMessage={formErrors.message}
              isInvalid={!!formErrors.message}
              label="Message"
              name="message"
              placeholder="Enter your message here"
              value={formData.message}
              variant="underlined"
              onChange={handleChange}
            />

            <Button
              className={`mx-auto ${classes.Button}`}
              disabled={isSubmitting}
              isLoading={isSubmitting}
              type="submit"
            >
              <p>Send Message</p>
            </Button>
          </motion.form>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              priority
              alt="contact-hero"
              className={`${classes.img}`}
              height={300}
              src="/hero-contact.png"
              width={300}
            />
          </motion.div>
        </section>
      </section>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Message Sent!</ModalHeader>
          <ModalBody>
            <p>
              Thank you for reaching out. I'll get back to you as soon as
              possible!
            </p>
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
