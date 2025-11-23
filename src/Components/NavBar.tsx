export function Navbar() {
  return (
        <>
          <header className="bg-white shadow">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold text-blue-600">DevStudio</a>
                    
                    <nav className="space-x-6">
                        <a href="/tutorialsLanding/" className="hover:text-blue-600">Lessons</a>
                        <a href="/aboutPage" className="hover:text-blue-600">About</a>
                        <a href="/contactPage" className="hover:text-blue-600">Contact</a>
                    </nav>
                </div>
            </header>  
        </> 
    )

}   