import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        Hi, I’m Ahmed Mahmood — a passionate software engineer who transforms
        ideas into powerful digital experiences. With a strong foundation in
        mobile app development (Ionic Angular, Flutter), backend systems (PHP
        Laravel), and UI/UX design, I bring creativity and technical precision
        to every project I work on.
        <br /> I thrive on challenges and love to push the boundaries of what’s
        crafting smart features like profile setup wizards and interactive
        progress indicators, I’m driven by solving real-world problems through
        clean, user-friendly code.
        <br /> I'm always exploring new technologies, developing unique app
        concepts, and refining my skills to stay ahead in the fast-moving tech
        world.
      </p>
    </section>
  );
}
