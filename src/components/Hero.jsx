
const Hero = () => {
  return (
    <section id="hero" className="bg-gray-800 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I am Chaithanya</h1>
        <p className="text-xl mt-4">A passionate developer crafting amazing web experiences.</p>
        <a href="#projects">
          <button className="mt-8 px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-lg">View My Work</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
