import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const starterFeatures = [
    'Up to 500 conversations / month',
    'Smart Auto-Replies',
    'Manual Order Creation',
    'Basic Stock Management',
    'Community Support'
  ];

  const proFeatures = [
    'Unlimited conversations',
    'Smart Auto-Replies in Tounsi',
    'Automatic Order Conversion',
    'Advanced Stock Management',
    'Sales & Business Analytics',
    'Priority Email & Chat Support'
  ];

  const faqItems = [
    {
      q: 'How does Elijeweb connect to my social media accounts?',
      a: 'Connecting Elijeweb is simple and secure. You authorize Elijeweb to access your Facebook Page and Instagram Business account through the official Meta API. We never ask for your password.'
    },
    {
      q: 'Is it safe? Is my data private?',
      a: 'Absolutely. We use industry-standard encryption and follow best practices for data security. Your customer data and business information are confidential and are never shared with third parties.'
    },
    {
      q: 'Can I customize the replies?',
      a: 'Yes! While our AI is pre-trained to handle common Tunisian e-commerce questions, you can customize replies for specific products, add your brand\'s unique voice, and set up custom Q&A flows in the dashboard.'
    },
    {
      q: 'What happens if the AI doesn\'t know the answer?',
      a: 'If Elijeweb encounters a question it cannot answer, it will gracefully notify you and the customer that a human agent will take over. You will receive a notification in your dashboard to manually reply to the message.'
    },
    {
      q: 'What languages does it support?',
      a: 'Elijeweb is specifically designed for the Tunisian market. It fluidly understands and responds in Tunisian Arabic (Tounsi), French, and "Franco-Arabic" (Arabic written with Latin letters).'
    }
  ];

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="bg-ios-bg dark:bg-ios-bg-dark text-ios-text-primary dark:text-ios-text-primary-dark font-sans antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-ios-bg/80 dark:bg-ios-bg-dark/80 backdrop-blur-lg border-b border-ios-border dark:border-ios-border-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ios-blue">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-bold text-xl text-ios-text-primary dark:text-ios-text-primary-dark">Elijeweb</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium text-ios-text-secondary dark:text-ios-text-secondary-dark hover:text-ios-blue dark:hover:text-ios-blue transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium text-ios-text-secondary dark:text-ios-text-secondary-dark hover:text-ios-blue dark:hover:text-ios-blue transition-colors">Pricing</a>
              <a href="#faq" className="text-sm font-medium text-ios-text-secondary dark:text-ios-text-secondary-dark hover:text-ios-blue dark:hover:text-ios-blue transition-colors">FAQ</a>
              <a href="#dashboard" className="text-sm font-medium text-ios-text-secondary dark:text-ios-text-secondary-dark hover:text-ios-blue dark:hover:text-ios-blue transition-colors">Dashboard</a>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-ios-panel-contrast dark:hover:bg-ios-panel-contrast-dark transition-colors">
                {!darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ios-text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-ios-text-secondary-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                )}
              </button>
              <a href="#login" className="hidden md:inline-block text-sm font-medium text-ios-blue dark:text-ios-blue hover:text-ios-text-primary dark:hover:text-ios-text-primary-dark transition-colors">Login</a>
              <a href="#register" className="hidden md:inline-block text-sm font-medium px-4 py-2 bg-ios-blue text-white rounded-lg hover:opacity-90 transition-opacity">Sign Up Free</a>
              <a href="#" className="hidden md:inline-block text-sm font-medium px-4 py-2 bg-ios-blue text-white rounded-lg hover:opacity-90 transition-opacity">Get Started Free</a>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-full hover:bg-ios-panel-contrast dark:hover:bg-ios-panel-contrast-dark transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden" onClick={() => setIsMenuOpen(false)}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-ios-border dark:border-ios-border-dark">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-ios-text-primary dark:text-ios-text-primary-dark hover:bg-ios-panel-contrast dark:hover:bg-ios-panel-contrast-dark">Features</a>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-ios-text-primary dark:text-ios-text-primary-dark hover:bg-ios-panel-contrast dark:hover:bg-ios-panel-contrast-dark">Pricing</a>
              <a href="#faq" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-ios-text-primary dark:text-ios-text-primary-dark hover:bg-ios-panel-contrast dark:hover:bg-ios-panel-contrast-dark">FAQ</a>
              <a href="#dashboard" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-ios-text-primary dark:text-ios-text-primary-dark hover:bg-ios-panel-contrast dark:hover:bg-ios-panel-contrast-dark">Dashboard</a>
              <a href="#login" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-ios-text-primary dark:text-ios-text-primary-dark hover:bg-ios-panel-contrast dark:hover:bg-ios-panel-contrast-dark">Login</a>
              <a href="#register" onClick={() => setIsMenuOpen(false)} className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-white bg-ios-blue mt-2">Sign Up Free</a>
              <a href="#" className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-white bg-ios-blue mt-2">Get Started Free</a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-ios-text-primary dark:text-ios-text-primary-dark">
              Your Tunisian Virtual Seller. <br />
              <span className="gradient-text">Automated. Smart. In your DMs.</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg lg:text-xl text-ios-text-secondary dark:text-ios-text-secondary-dark">
              Elijeweb is an AI agent that replies to customers, manages orders, stock, and sales — all from your Meta inbox. No more missed sales, no more Excel chaos.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#pricing" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-white bg-ios-blue rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:scale-105">
                Start Your Free Trial
              </a>
              <a href="#" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold text-ios-blue bg-ios-panel dark:bg-ios-panel-contrast-dark rounded-xl border border-ios-border dark:border-ios-border-dark hover:bg-ios-panel-contrast dark:hover:bg-ios-panel-dark transition-all transform hover:scale-105">
                See a Demo
              </a>
            </div>

            {/* Mockup UI */}
            <div className="mt-16 lg:mt-24 max-w-5xl mx-auto">
              <div className="relative rounded-2xl border border-ios-border dark:border-ios-border-dark bg-ios-panel dark:bg-ios-panel-dark p-2 shadow-2xl shadow-gray-200/50 dark:shadow-black/50">
                <div className="aspect-video w-full h-full bg-ios-bg dark:bg-ios-bg-dark rounded-xl p-4 lg:p-6 flex flex-col md:flex-row gap-4 lg:gap-6">
                  {/* Left Panel: Chat */}
                  <div className="w-full md:w-1/3 bg-ios-panel dark:bg-ios-panel-dark rounded-lg p-3 border border-ios-border dark:border-ios-border-dark flex flex-col">
                    <div className="flex items-center space-x-2 pb-2 border-b border-ios-border dark:border-ios-border-dark mb-2">
                      <div className="w-8 h-8 rounded-full bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark"></div>
                      <div>
                        <p className="text-sm font-semibold text-left">Amina K.</p>
                        <p className="text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark text-left">@amina.khalil</p>
                      </div>
                    </div>
                    <div className="space-y-2 flex-grow">
                      <div className="flex justify-end"><div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-xs text-right">b chkadek el robe?</div></div>
                      <div className="flex justify-start"><div className="bg-ios-blue text-white p-2 rounded-lg text-xs text-left">120dt, livraison 7dt fi Tounes 🇹🇳</div></div>
                      <div className="flex justify-end"><div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-xs text-right">ok nheb wa7da M</div></div>
                    </div>
                    <div className="mt-2 text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark font-mono">[elijeweb] 🤖 Order created...</div>
                  </div>
                  {/* Right Panel: Dashboard */}
                  <div className="w-full md:w-2/3 bg-ios-panel dark:bg-ios-panel-dark rounded-lg p-3 border border-ios-border dark:border-ios-border-dark flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold">Sales Overview</h3>
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-red-400 border-2 border-ios-panel dark:border-ios-panel-dark"></div>
                        <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-ios-panel dark:border-ios-panel-dark"></div>
                        <div className="w-6 h-6 rounded-full bg-green-400 border-2 border-ios-panel dark:border-ios-panel-dark"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark p-2 rounded-md"><p className="text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark">Today</p><p className="font-bold text-lg">450<span className="text-xs">dt</span></p></div>
                      <div className="bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark p-2 rounded-md"><p className="text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark">Week</p><p className="font-bold text-lg">2,150<span className="text-xs">dt</span></p></div>
                      <div className="bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark p-2 rounded-md"><p className="text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark">Month</p><p className="font-bold text-lg">9,800<span className="text-xs">dt</span></p></div>
                    </div>
                    <div className="flex-grow bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-md p-2 flex items-end space-x-1">
                      <div className="w-full h-1/3 bg-ios-blue/30 rounded-t-sm"></div>
                      <div className="w-full h-2/3 bg-ios-blue/50 rounded-t-sm"></div>
                      <div className="w-full h-1/2 bg-ios-blue/40 rounded-t-sm"></div>
                      <div className="w-full h-3/4 bg-ios-blue/60 rounded-t-sm"></div>
                      <div className="w-full h-full bg-ios-blue/80 rounded-t-sm"></div>
                      <div className="w-full h-2/3 bg-ios-blue/50 rounded-t-sm"></div>
                      <div className="w-full h-1/2 bg-ios-blue/40 rounded-t-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-24 lg:py-32 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Everything you need to sell on Social Media</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-ios-text-secondary dark:text-ios-text-secondary-dark">From automated replies in Tunisian dialect to real-time stock management, Elijeweb has you covered.</p>
            </div>

            <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Feature 1: Smart Auto-Replies */}
              <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center p-3 bg-ios-blue/10 dark:bg-ios-blue/20 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ios-blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 9h8" /><path d="M8 13h6" /><path d="M9 18h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-3l-3 3l-3 -3z" /><path d="M16 3.5c.913 .243 1.696 .831 2.228 1.583" /><path d="M8.5 3c-.913 .243 -1.696 .831 -2.228 1.583" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold">Smart Auto-Replies in Tounsi</h3>
                  <p className="mt-2 text-ios-text-secondary dark:text-ios-text-secondary-dark">Elijeweb understands and replies to customer inquiries in Tounsi, French, or Franco-Arabic. It handles questions about price, sizes, and payment methods instantly, across DMs, comments, and story replies.</p>
                </div>
                <div className="lg:w-1/2 w-full max-w-sm">
                  <div className="bg-ios-panel dark:bg-ios-panel-dark p-4 rounded-lg shadow-md border border-ios-border dark:border-ios-border-dark">
                    <p className="font-mono text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark mb-4">// Instagram DM</p>
                    <div className="space-y-3">
                      <div className="flex justify-end"><div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm text-right">Prix svp?</div></div>
                      <div className="flex justify-start items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-ios-blue flex items-center justify-center text-white text-xs font-bold">E</div>
                        <div className="bg-ios-blue text-white p-2 rounded-lg text-sm text-left">45dt livraison 7dt fi Tounes kamla 🇹🇳</div>
                      </div>
                      <div className="flex justify-end"><div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm text-right">كيفاش نخلص؟</div></div>
                      <div className="flex justify-start items-start gap-2">
                        <div className="w-6 h-6 rounded-full bg-ios-blue flex items-center justify-center text-white text-xs font-bold">E</div>
                        <div className="bg-ios-blue text-white p-2 rounded-lg text-sm text-left">تدفع عند التسليم، الكوريور يجيبلك الكوموند لباب الدار.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 2: Order Conversion */}
              <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center p-3 bg-ios-blue/10 dark:bg-ios-blue/20 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ios-blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 16l6 -7l5 5l5 -6" /><path d="M15 14m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M10 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M4 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M20 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" /><path d="M17 3l4 4" /><path d="M20 3v4h-4" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold">Automatic Order Conversion</h3>
                  <p className="mt-2 text-ios-text-secondary dark:text-ios-text-secondary-dark">Turn conversations into sales. Elijeweb automatically captures customer details like name, phone, and address from the chat to create an order. You can then track its status from Pending to Delivered, all in one dashboard.</p>
                </div>
                <div className="lg:w-1/2 w-full max-w-sm">
                  <div className="bg-ios-panel dark:bg-ios-panel-dark p-4 rounded-lg shadow-md border border-ios-border dark:border-ios-border-dark">
                    <p className="font-mono text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark mb-4">// New Order #1024</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center"><span className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Customer:</span><span className="font-medium">Feryel Ben Ali</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Phone:</span><span className="font-medium">98 123 456</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Product:</span><span className="font-medium">Robe "Sahara" (M)</span></div>
                      <div className="flex justify-between items-center"><span className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Total:</span><span className="font-medium">52.00 DT</span></div>
                      <div className="mt-4 pt-4 border-t border-ios-border dark:border-ios-border-dark">
                        <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark mb-2">Status:</p>
                        <div className="flex items-center space-x-2">
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 text-xs font-medium rounded-full">Pending</span>
                          <span className="px-2 py-1 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark text-ios-text-secondary dark:text-ios-text-secondary-dark text-xs font-medium rounded-full">Confirmed</span>
                          <span className="px-2 py-1 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark text-ios-text-secondary dark:text-ios-text-secondary-dark text-xs font-medium rounded-full">Delivered</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 3: Stock Management */}
              <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center p-3 bg-ios-blue/10 dark:bg-ios-blue/20 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ios-blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12v9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold">Real-Time Stock Management</h3>
                  <p className="mt-2 text-ios-text-secondary dark:text-ios-text-secondary-dark">Easily add your products, including variations like size and color. Your stock quantity is automatically updated with every confirmed order, and you'll receive alerts when items are running low.</p>
                </div>
                <div className="lg:w-1/2 w-full max-w-sm">
                  <div className="bg-ios-panel dark:bg-ios-panel-dark p-4 rounded-lg shadow-md border border-ios-border dark:border-ios-border-dark">
                    <p className="font-mono text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark mb-4">// Products &gt; In Stock</p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 rounded-md bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark">
                        <span className="font-medium text-sm">Robe "Sahara" - Blue</span>
                        <div className="flex items-center space-x-2 text-sm"><span className="font-mono font-medium text-green-500">23</span><span className="text-ios-text-secondary dark:text-ios-text-secondary-dark">in stock</span></div>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark">
                        <span className="font-medium text-sm">Chemise "Oasis" - White</span>
                        <div className="flex items-center space-x-2 text-sm"><span className="font-mono font-medium text-green-500">15</span><span className="text-ios-text-secondary dark:text-ios-text-secondary-dark">in stock</span></div>
                      </div>
                      <div className="flex justify-between items-center p-2 rounded-md bg-red-500/10 dark:bg-red-500/20 ring-1 ring-red-500/30">
                        <span className="font-medium text-sm text-red-700 dark:text-red-400">Sac "Carthage" - Leather</span>
                        <div className="flex items-center space-x-2 text-sm"><span className="font-mono font-medium text-red-500">2</span><span className="text-red-700 dark:text-red-400">low stock</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature 4: Analytics */}
              <div className="flex flex-col-reverse lg:flex-row-reverse items-center gap-8 lg:gap-12">
                <div className="lg:w-1/2">
                  <div className="inline-flex items-center justify-center p-3 bg-ios-blue/10 dark:bg-ios-blue/20 rounded-xl mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ios-blue" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 7v5l3 3" /><path d="M3.5 9h-1.5" /><path d="M22 12l-1.5 0" /><path d="M12 3.5v-1.5" /><path d="M20.5 9l1.5 0" /><path d="M12 20.5v1.5" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold">Powerful Business Analytics</h3>
                  <p className="mt-2 text-ios-text-secondary dark:text-ios-text-secondary-dark">Make data-driven decisions. Get a clear view of your total sales, best-selling products, and conversion rates. Understand your business better with insights into canceled orders and delivery performance by region.</p>
                </div>
                <div className="lg:w-1/2 w-full max-w-sm">
                  <div className="bg-ios-panel dark:bg-ios-panel-dark p-4 rounded-lg shadow-md border border-ios-border dark:border-ios-border-dark">
                    <p className="font-mono text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark mb-4">// Analytics Dashboard</p>
                    <div className="space-y-3">
                      <div className="p-3 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg">
                        <div className="flex justify-between items-baseline">
                          <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Conversion Rate</p>
                          <p className="text-2xl font-bold text-green-500">18.5%</p>
                        </div>
                        <p className="text-xs text-ios-text-secondary dark:text-ios-text-secondary-dark mt-1">DMs that turned into sales this month.</p>
                      </div>
                      <div className="p-3 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg">
                        <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark mb-2">Best Seller (Today)</p>
                        <p className="font-semibold">Robe "Sahara"</p>
                        <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">5 units sold</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Simple Pricing for Every Business</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-ios-text-secondary dark:text-ios-text-secondary-dark">Start for free, then choose a plan that grows with you. No hidden fees. Cancel anytime.</p>
            </div>

            <div className="mt-16 max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
              {/* Pro Plan */}
              <div className="relative p-8 bg-ios-panel dark:bg-ios-panel-dark border-2 border-ios-blue rounded-2xl shadow-xl">
                <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 px-3 py-1 text-sm font-semibold tracking-wide text-white bg-ios-blue rounded-full">Most Popular</span>
                <h3 className="text-2xl font-bold">Pro Plan</h3>
                <p className="mt-2 text-ios-text-secondary dark:text-ios-text-secondary-dark">For growing businesses who want to automate and scale.</p>
                <p className="mt-6">
                  <span className="text-5xl font-extrabold">99<span className="text-3xl">dt</span></span>
                  <span className="text-base font-medium text-ios-text-secondary dark:text-ios-text-secondary-dark">/ month</span>
                </p>
                <a href="#" className="mt-8 block w-full px-6 py-3 text-center font-semibold text-white bg-ios-blue rounded-lg hover:opacity-90 transition-opacity">Start 14-Day Free Trial</a>
                <ul className="mt-8 space-y-4 text-sm">
                  {proFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span className="ml-3 text-ios-text-primary dark:text-ios-text-primary-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Starter Plan */}
              <div className="p-8 bg-ios-panel dark:bg-ios-panel-dark border border-ios-border dark:border-ios-border-dark rounded-2xl">
                <h3 className="text-2xl font-bold">Starter Plan</h3>
                <p className="mt-2 text-ios-text-secondary dark:text-ios-text-secondary-dark">For new sellers getting started on social media.</p>
                <p className="mt-6">
                  <span className="text-5xl font-extrabold">49<span className="text-3xl">dt</span></span>
                  <span className="text-base font-medium text-ios-text-secondary dark:text-ios-text-secondary-dark">/ month</span>
                </p>
                <a href="#" className="mt-8 block w-full px-6 py-3 text-center font-semibold text-ios-blue bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg hover:bg-gray-200 dark:hover:bg-ios-panel-dark transition-colors">Get Started</a>
                <ul className="mt-8 space-y-4 text-sm">
                  {starterFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span className="ml-3 text-ios-text-primary dark:text-ios-text-primary-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* NEW: Login Section */}
        <section id="login" className="py-20 sm:py-24 lg:py-32 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
            <div className="bg-ios-panel dark:bg-ios-panel-dark p-8 rounded-2xl shadow-lg border border-ios-border dark:border-ios-border-dark text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Login to Elijeweb</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="login-email" className="sr-only">Email address</label>
                  <input id="login-email" name="email" type="email" autoComplete="email" required className="block w-full px-4 py-3 rounded-lg border border-ios-border dark:border-ios-border-dark bg-ios-bg dark:bg-ios-bg-dark placeholder-ios-text-secondary dark:placeholder-ios-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-ios-blue focus:border-transparent text-ios-text-primary dark:text-ios-text-primary-dark text-base" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="login-password" className="sr-only">Password</label>
                  <input id="login-password" name="password" type="password" autoComplete="current-password" required className="block w-full px-4 py-3 rounded-lg border border-ios-border dark:border-ios-border-dark bg-ios-bg dark:bg-ios-bg-dark placeholder-ios-text-secondary dark:placeholder-ios-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-ios-blue focus:border-transparent text-ios-text-primary dark:text-ios-text-primary-dark text-base" placeholder="Password" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a href="#reset-password" className="font-medium text-ios-blue hover:text-opacity-80 transition-colors">Forgot your password?</a>
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-ios-blue hover:opacity-90 transition-opacity">
                    Login
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">
                Don't have an account?
                <a href="#register" className="font-medium text-ios-blue hover:text-opacity-80 transition-colors">Register here</a>
              </p>
            </div>
          </div>
        </section>

        {/* NEW: Register Section */}
        <section id="register" className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
            <div className="bg-ios-panel dark:bg-ios-panel-dark p-8 rounded-2xl shadow-lg border border-ios-border dark:border-ios-border-dark text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Create Your Elijeweb Account</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="register-name" className="sr-only">Full Name</label>
                  <input id="register-name" name="name" type="text" autoComplete="name" required className="block w-full px-4 py-3 rounded-lg border border-ios-border dark:border-ios-border-dark bg-ios-bg dark:bg-ios-bg-dark placeholder-ios-text-secondary dark:placeholder-ios-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-ios-blue focus:border-transparent text-ios-text-primary dark:text-ios-text-primary-dark text-base" placeholder="Full Name" />
                </div>
                <div>
                  <label htmlFor="register-email" className="sr-only">Email address</label>
                  <input id="register-email" name="email" type="email" autoComplete="email" required className="block w-full px-4 py-3 rounded-lg border border-ios-border dark:border-ios-border-dark bg-ios-bg dark:bg-ios-bg-dark placeholder-ios-text-secondary dark:placeholder-ios-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-ios-blue focus:border-transparent text-ios-text-primary dark:text-ios-text-primary-dark text-base" placeholder="Email address" />
                </div>
                <div>
                  <label htmlFor="register-password" className="sr-only">Password</label>
                  <input id="register-password" name="password" type="password" autoComplete="new-password" required className="block w-full px-4 py-3 rounded-lg border border-ios-border dark:border-ios-border-dark bg-ios-bg dark:bg-ios-bg-dark placeholder-ios-text-secondary dark:placeholder-ios-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-ios-blue focus:border-transparent text-ios-text-primary dark:text-ios-text-primary-dark text-base" placeholder="Password" />
                </div>
                <div>
                  <label htmlFor="register-confirm-password" className="sr-only">Confirm Password</label>
                  <input id="register-confirm-password" name="confirm-password" type="password" autoComplete="new-password" required className="block w-full px-4 py-3 rounded-lg border border-ios-border dark:border-ios-border-dark bg-ios-bg dark:bg-ios-bg-dark placeholder-ios-text-secondary dark:placeholder-ios-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-ios-blue focus:border-transparent text-ios-text-primary dark:text-ios-text-primary-dark text-base" placeholder="Confirm Password" />
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-ios-blue hover:opacity-90 transition-opacity">
                    Register
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">
                Already have an account?
                <a href="#login" className="font-medium text-ios-blue hover:text-opacity-80 transition-colors">Login here</a>
              </p>
            </div>
          </div>
        </section>

        {/* NEW: Reset Password Section */}
        <section id="reset-password" className="py-20 sm:py-24 lg:py-32 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md">
            <div className="bg-ios-panel dark:bg-ios-panel-dark p-8 rounded-2xl shadow-lg border border-ios-border dark:border-ios-border-dark text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Reset Your Password</h2>
              <p className="text-ios-text-secondary dark:text-ios-text-secondary-dark mb-6">Enter your email address and we'll send you a link to reset your password.</p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="reset-email" className="sr-only">Email address</label>
                  <input id="reset-email" name="email" type="email" autoComplete="email" required className="block w-full px-4 py-3 rounded-lg border border-ios-border dark:border-ios-border-dark bg-ios-bg dark:bg-ios-bg-dark placeholder-ios-text-secondary dark:placeholder-ios-text-secondary-dark focus:outline-none focus:ring-2 focus:ring-ios-blue focus:border-transparent text-ios-text-primary dark:text-ios-text-primary-dark text-base" placeholder="Email address" />
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-ios-blue hover:opacity-90 transition-opacity">
                    Send Reset Link
                  </button>
                </div>
              </form>
              <p className="mt-6 text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">
                <a href="#login" className="font-medium text-ios-blue hover:text-opacity-80 transition-colors">Back to Login</a>
              </p>
            </div>
          </div>
        </section>

        {/* NEW: Detailed Dashboard Section */}
        <section id="dashboard" className="py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Your Elijeweb Dashboard</h2>
              <p className="mt-4 text-lg text-ios-text-secondary dark:text-ios-text-secondary-dark">Everything you need to manage your sales and grow your business.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Welcome / Quick Actions Panel */}
              <div className="lg:col-span-1 bg-ios-panel dark:bg-ios-panel-dark p-6 rounded-2xl shadow-lg border border-ios-border dark:border-ios-border-dark flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Welcome, Seller!</h3>
                  <p className="text-ios-text-secondary dark:text-ios-text-secondary-dark mb-6">Here's a quick overview of your business performance.</p>
                </div>
                <div className="space-y-4">
                  <a href="#" className="block w-full px-6 py-3 text-center font-semibold text-white bg-ios-blue rounded-lg hover:opacity-90 transition-opacity">
                    <div className="flex items-center justify-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                      <span>Add New Product</span>
                    </div>
                  </a>
                  <a href="#" className="block w-full px-6 py-3 text-center font-semibold text-ios-blue bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg hover:bg-gray-200 dark:hover:bg-ios-panel-dark transition-colors">
                    <div className="flex items-center justify-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 6l7 7m-13 0l-7 7m14 0l-7 -7m-7 0l7 7m-12 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0m8 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0m-8 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /></svg>
                      <span>View All Orders</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Sales Overview */}
              <div className="lg:col-span-2 bg-ios-panel dark:bg-ios-panel-dark p-6 rounded-2xl shadow-lg border border-ios-border dark:border-ios-border-dark">
                <h3 className="text-2xl font-bold mb-4">Sales Performance</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <div className="bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark p-4 rounded-lg">
                    <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Today's Sales</p>
                    <p className="text-3xl font-extrabold mt-1">450<span className="text-lg">dt</span></p>
                  </div>
                  <div className="bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark p-4 rounded-lg">
                    <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">This Week</p>
                    <p className="text-3xl font-extrabold mt-1">2,150<span className="text-lg">dt</span></p>
                  </div>
                  <div className="bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark p-4 rounded-lg">
                    <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">This Month</p>
                    <p className="text-3xl font-extrabold mt-1">9,800<span className="text-lg">dt</span></p>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-3">Revenue Trend</h4>
                <div className="h-48 bg-ios-bg dark:bg-ios-bg-dark rounded-lg flex items-end space-x-2 p-2">
                  {/* Placeholder for chart bars */}
                  <div className="w-full h-1/3 bg-ios-blue/30 rounded-t-sm"></div>
                  <div className="w-full h-2/3 bg-ios-blue/50 rounded-t-sm"></div>
                  <div className="w-full h-1/2 bg-ios-blue/40 rounded-t-sm"></div>
                  <div className="w-full h-3/4 bg-ios-blue/60 rounded-t-sm"></div>
                  <div className="w-full h-full bg-ios-blue/80 rounded-t-sm"></div>
                  <div className="w-full h-2/3 bg-ios-blue/50 rounded-t-sm"></div>
                  <div className="w-full h-1/2 bg-ios-blue/40 rounded-t-sm"></div>
                  <div className="w-full h-4/5 bg-ios-blue/70 rounded-t-sm"></div>
                  <div className="w-full h-1/4 bg-ios-blue/20 rounded-t-sm"></div>
                  <div className="w-full h-3/5 bg-ios-blue/40 rounded-t-sm"></div>
                  <div className="w-full h-full bg-ios-blue/80 rounded-t-sm"></div>
                  <div className="w-full h-2/3 bg-ios-blue/50 rounded-t-sm"></div>
                  <div className="w-full h-1/2 bg-ios-blue/40 rounded-t-sm"></div>
                  <div className="w-full h-3/4 bg-ios-blue/60 rounded-t-sm"></div>
                  <div className="w-full h-full bg-ios-blue/80 rounded-t-sm"></div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
              {/* Recent Orders */}
              <div className="bg-ios-panel dark:bg-ios-panel-dark p-6 rounded-2xl shadow-lg border border-ios-border dark:border-ios-border-dark">
                <h3 className="text-2xl font-bold mb-4">Recent Orders</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg">
                    <div>
                      <p className="font-medium">Order #1029</p>
                      <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Amina K. - Robe "Sahara" (M)</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">127dt</span>
                      <span className="block text-xs px-2 py-0.5 bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 rounded-full">Delivered</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg">
                    <div>
                      <p className="font-medium">Order #1028</p>
                      <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Khaled S. - Chemise "Oasis" (L)</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">87dt</span>
                      <span className="block text-xs px-2 py-0.5 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300 rounded-full">Pending</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg">
                    <div>
                      <p className="font-medium">Order #1027</p>
                      <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Sara M. - Sac "Carthage"</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold">187dt</span>
                      <span className="block text-xs px-2 py-0.5 bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300 rounded-full">Canceled</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stock & Analytics Quick View */}
              <div className="space-y-8">
                <div className="bg-ios-panel dark:bg-ios-panel-dark p-6 rounded-2xl shadow-lg border border-ios-border dark:border-ios-border-dark">
                  <h3 className="text-2xl font-bold mb-4">Stock Levels</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-2 rounded-md bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark">
                      <span className="font-medium text-sm">Robe "Sahara" - Blue</span>
                      <div className="flex items-center space-x-2 text-sm"><span className="font-mono font-medium text-green-500">23</span><span className="text-ios-text-secondary dark:text-ios-text-secondary-dark">in stock</span></div>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-md bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark">
                      <span className="font-medium text-sm">Chemise "Oasis" - White</span>
                      <div className="flex items-center space-x-2 text-sm"><span className="font-mono font-medium text-green-500">15</span><span className="text-ios-text-secondary dark:text-ios-text-secondary-dark">in stock</span></div>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-md bg-red-500/10 dark:bg-red-500/20 ring-1 ring-red-500/30">
                      <span className="font-medium text-sm text-red-700 dark:text-red-400">Sac "Carthage" - Leather</span>
                      <div className="flex items-center space-x-2 text-sm"><span className="font-mono font-medium text-red-500">2</span><span className="text-red-700 dark:text-red-400">low stock</span></div>
                    </div>
                  </div>
                </div>

                <div className="bg-ios-panel dark:bg-ios-panel-dark p-6 rounded-2xl shadow-lg border border-ios-border dark:border-ios-border-dark">
                  <h3 className="text-2xl font-bold mb-4">Key Metrics</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg">
                      <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Conversion Rate</p>
                      <p className="text-xl font-bold text-green-500 mt-1">18.5%</p>
                    </div>
                    <div className="p-3 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg">
                      <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Avg Order Value</p>
                      <p className="text-xl font-bold mt-1">95.00<span className="text-base">dt</span></p>
                    </div>
                    <div className="p-3 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg">
                      <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Best Seller (Month)</p>
                      <p className="text-lg font-semibold mt-1">Robe "Sahara"</p>
                    </div>
                    <div className="p-3 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark rounded-lg">
                      <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">Canceled Orders</p>
                      <p className="text-xl font-bold text-red-500 mt-1">7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 sm:py-24 lg:py-32 bg-ios-panel-contrast dark:bg-ios-panel-contrast-dark/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-ios-text-secondary dark:text-ios-text-secondary-dark">Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.</p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto">
              <div className="divide-y divide-ios-border dark:divide-ios-border-dark">
                {faqItems.map((item, index) => (
                  <div key={index} className="py-6">
                    <button onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="w-full flex justify-between items-center text-left">
                      <span className="text-lg font-medium">{item.q}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 text-ios-text-secondary dark:text-ios-text-secondary-dark transform transition-transform ${activeFaq === index ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    </button>
                    {activeFaq === index && (
                      <div className="mt-4 pr-12 text-ios-text-secondary dark:text-ios-text-secondary-dark" dangerouslySetInnerHTML={{ __html: item.a }}></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center bg-ios-panel dark:bg-ios-panel-dark p-8 sm:p-12 lg:p-16 rounded-3xl border border-ios-border dark:border-ios-border-dark">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Ready to Stop Wasting Time?
              </h2>
              <p className="mt-6 max-w-xl mx-auto text-lg text-ios-text-secondary dark:text-ios-text-secondary-dark">
                Automate your sales and focus on what you do best: growing your business. Get started with Elijeweb today.
              </p>
              <div className="mt-10">
                <a href="#pricing" className="inline-block px-10 py-4 text-lg font-semibold text-white bg-ios-blue rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:scale-105">
                  Start Selling Smarter
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-ios-panel-contrast dark:bg-ios-panel-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-ios-blue">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="font-bold text-lg">Elijeweb</span>
            </div>
            <p className="text-sm text-ios-text-secondary dark:text-ios-text-secondary-dark">© 2024 Elijeweb. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-ios-text-secondary dark:text-ios-text-secondary-dark hover:text-ios-text-primary dark:hover:text-ios-text-primary-dark">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-ios-text-secondary dark:text-ios-text-secondary-dark hover:text-ios-text-primary dark:hover:text-ios-text-primary-dark">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.316 1.363.364 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.316-2.427.364-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.316-1.363-.364-2.427C2.013 16.013 2 15.673 2 12.95v-.08c0-2.643.012-2.987.06-4.043.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.316 2.427-.364C8.901 2.013 9.241 2 11.875 2h.44zM12 6.848c-2.846 0-5.152 2.306-5.152 5.152s2.306 5.152 5.152 5.152 5.152-2.306 5.152-5.152S14.846 6.848 12 6.848zM12 15.318c-1.797 0-3.237-1.44-3.237-3.237s1.44-3.237 3.237-3.237 3.237 1.44 3.237 3.237-1.44 3.237-3.237 3.237zM16.426 7.648a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;