
export default function Welcome(){

    
    return(
        <main
        className="min-h-screen flex flex-col items-center justify-center text-center gap-8 bg-cover bg-center"
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1528543606781-2f6e6857f318?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cnVubmluZyUyMGluJTIwbmF0dXJlfGVufDB8fDB8fHww)'}}>
            <div className="flex flex-col items- justify-center bg-black/10 backdrop-blur-sm p-2 rounded-2xl shadow-xl font-mono font-thin">
            <h1 className="font-extrabold font-mono text-2xl">Welcome to your personal Fitness Tracker!</h1>
            <p className="font-extrabold font-mono">Scroll to begin your Fitness Experience.</p>
            </div>
        </main>
    )
}