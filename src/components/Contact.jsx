
const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 text-gray-800 p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <input type="email" placeholder="Your Email" className="w-full p-2 mb-4 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 mb-4 border rounded"></textarea>
        <button type="submit" className="px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded text-white">Send</button>
      </form>
    </section>
  );
};

export default Contact;
