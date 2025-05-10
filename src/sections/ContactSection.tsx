export default function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to work together!
      </p>
      <a
        href="mailto:you@example.com"
        className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full font-medium hover:opacity-80"
      >
        Say Hello
      </a>
    </section>
  );
}