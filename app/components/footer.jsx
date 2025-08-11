export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-purple-700 via-purple-800 to-purple-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left side */}
          <div className="text-center md:text-left">
            <h2 className="font-bold text-lg">Katelyn Lee</h2>
            <p className="text-sm opacity-80">Bioengineering • Neuro • Human-centered projects</p>
          </div>
  
          {/* Middle: links */}
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:kl65@illinois.edu" className="hover:text-purple-300">Email</a>
            <a href="https://github.com/katelynllee" target="_blank" className="hover:text-purple-300">GitHub</a>
            <a href="https://linkedin.com/in/katelyn-l-lee" target="_blank" className="hover:text-purple-300">LinkedIn</a>
            <a href="/resume.pdf" target="_blank" className="hover:text-purple-300">Resume</a>
          </div>
  
          {/* Right side */}
          <p className="text-xs opacity-60">
            © {new Date().getFullYear()} Katelyn Lee • Built with Next.js & Tailwind
          </p>
        </div>
      </footer>
    );
  }
  