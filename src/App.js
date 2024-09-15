// ... (previous imports and components remain unchanged)

export default function Component() {
  // ... (state and effects remain unchanged)

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-[#FFA500] text-[#006400]'} font-['Fredoka_One']`}>
      {/* ... (header remains unchanged) */}

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-16">
          <h2 className="text-8xl font-extrabold mb-4 animate-pulse text-[#FFFF00]">DEEPJYOTI</h2>
          <p className="text-4xl mb-8 italic">The cow worshipped by billions!</p>
          
          <div className="bg-[#FF4500] p-4 rounded-lg shadow-lg inline-block mb-8">
            <p className="text-2xl font-bold text-[#FFFF00]">$DEEPJYOTI: ${price.toFixed(8)}</p>
          </div>
          
          <VideoPlayer />

          <p className="text-2xl mb-8 font-bold">The deep memecoin you need to buy from the biggest country in the world!</p>
          <p className="text-3xl mb-8 font-bold">🐮🚀🌕 "DEEPJYOTI TO THE MUUUUUUUN!" 🌕🚀🐮</p>
          <a href="https://backup.bullx.io/terminal?chainId=1399811149&address=5sKzmt2SCGaLp99hzZuLWRoZGxNiEJZuMpy84D3vpump&r=F2V9AUSFRR" 
             target="_blank" 
             rel="noopener noreferrer" 
             className="inline-block bg-[#32CD32] text-[#006400] px-8 py-4 rounded-full text-xl font-bold hover:bg-[#FFFF00] transition-colors duration-300 transform hover:scale-105">
            Buy $DEEPJYOTI Now!
          </a>
        </section>

        <section id="legend" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-center text-[#FFFF00]">🐮 The Legend of Deepjyoti 🐮</h3>
          <p className="text-xl mb-4">
            In the land of chai and democracy, a miraculous calf was born. This wasn't just any calf – this was Deepjyoti, the chosen one, the pet of none other than the Primister himself, Narendra Modi!
          </p>
          <p className="text-xl mb-4">
            When Modi first laid eyes on Deepjyoti, he exclaimed, "This calf is so deep, it's destined to be a crypto powerhouse!" And thus, a revolutionary meme(coin) was born.
          </p>
        </section>

        <section id="why" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-center text-[#FFFF00]">Why Deepjyoti Will Dominate</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#FF4500] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-2xl font-bold mb-2 text-[#FFFF00]">Modi-fied</h4>
              <p>The pet of the biggest boss of the biggest democracy. Unbeatable street cred!</p>
            </div>
            <div className="bg-[#FF4500] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-2xl font-bold mb-2 text-[#FFFF00]">Holy Cow, Batman!</h4>
              <p>In India, cows are sacred. Deepjyoti? It's worshipped by billions!</p>
            </div>
            <div className="bg-[#FF4500] p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              <h4 className="text-2xl font-bold mb-2 text-[#FFFF00]">Portfolio Go Green</h4>
              <p>Deepjyoti will turn your portfolio so deep green, you'll think you own the entire spinach industry!</p>
            </div>
          </div>
        </section>

        {/* ... (other sections remain unchanged) */}

        <section id="buy" className="mb-16">
          <h3 className="text-3xl font-bold mb-4 text-center text-[#FFFF00]">How to Mooooove In</h3>
          <div className="bg-[#FF4500] p-6 rounded-lg shadow-lg">
            <p className="text-xl mb-4 text-center">Get your $DEEPJYOTI tokens now:</p>
            <div className="bg-[#FFA500] p-4 rounded text-sm mb-4 overflow-x-auto">
              <code className="whitespace-nowrap text-[#006400]">
                Token Address: 5sKzmt2SCGaLp99hzZuLWRoZGxNiEJZuMpy84D3vpump
              </code>
            </div>
            <div className="text-center">
              <a href="https://backup.bullx.io/terminal?chainId=1399811149&address=5sKzmt2SCGaLp99hzZuLWRoZGxNiEJZuMpy84D3vpump&r=F2V9AUSFRR" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="inline-block bg-[#32CD32] text-[#006400] px-6 py-3 rounded-full text-lg font-bold hover:bg-[#FFFF00] transition-colors duration-300 transform hover:scale-105">
                Buy the DEEP!
              </a>
            </div>
            <p className="text-xl mt-4 text-center">Your memes will become reality!</p>
          </div>
        </section>
      </main>

      <footer className="bg-[#FF4500] text-[#006400] py-8 rounded-t-3xl">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://x.com/deepjyoti_defi" target="_blank" rel="noopener noreferrer" className="text-[#006400] hover:text-[#32CD32]"><Twitter /></a>
            <a href="https://t.me/deepjyotiportal" target="_blank" rel="noopener noreferrer" className="text-[#006400] hover:text-[#32CD32]"><Send /></a>
          </div>
          <p>&copy; 2024 Deepjyoti Memecoin. All rights reserved.</p>
          <p className="mt-2">Disclaimer: Investing in Deepjyoti is like riding a cosmic cow to financial Valhalla. Only invest what you can, and remember: when life gives you lemons, we give you a whole dairy farm!</p>
        </div>
      </footer>
    </div>
  )
}
