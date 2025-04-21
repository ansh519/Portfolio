function Home() {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-16">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h2>
          <p className="text-xl mb-6">
            A [Your Profession, e.g., Web Developer] passionate about creating
            amazing things.
          </p>
          <a
            href="/projects"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200"
          >
            View My Work
          </a>
        </div>
      </section>
    );
  }
  
  export default Home;