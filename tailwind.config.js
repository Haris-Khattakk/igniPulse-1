module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        jaro: ['Jaro', 'sans-serif'],  // Add the Jaro font here
        playfairDisplay: ['Playfair Display', 'serif'],
        audiowide: ['Audiowide', 'sans-serif'],
        jersey10: ['Jersey 10', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        aguDisplay: ['Agu Display', 'sans-serif'],
        frankRuhlLibre: ['Frank Ruhl Libre', 'serif'],
        ibm: ['"IBM Plex Sans"', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
        readex: ['Readex Pro', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'], // Added Orbitron
        audiowide: ['Audiowide', 'sans-serif'], // Added Audiowide
        sans: [...require('tailwindcss/defaultTheme').fontFamily.sans],
        serif: [...require('tailwindcss/defaultTheme').fontFamily.serif],
        mono: [...require('tailwindcss/defaultTheme').fontFamily.mono],
        rubikVinyl: ['Rubik Vinyl', 'sans-serif'],  // Adding Rubik Vinyl font





      },
      gradientColorStops: {
        golden: {
          start: '#FFD700',
          end: '#FFB700',
        },
        red: {
          start: '#FF0000',
          end: '#FF6347',
        },
        green: {
          start: '#00FF00',
          end: '#7CFC00',
        },
        blue: {
          start: '#1E90FF',
          end: '#00BFFF',
        },
        black: {
          start: '#000000',
          end: '#434343',
        },
        orange: {
          start: '#FFA500',
          end: '#FF8C00',
        },
        purple: {
          start: '#8A2BE2',
          end: '#DDA0DD',
        },
        pink: {
          start: '#FF1493',
          end: '#FF69B4',
        },
        yellow: {
          start: '#FFFF00',
          end: '#FFD700',
        },
        cyan: {
          start: '#00FFFF',
          end: '#00BFFF',
        },
        teal: {
          start: '#008080',
          end: '#00CED1',
        },
      },
      backgroundImage: {
        // Gradient definitions for text
        'gradient-text-golden': 'linear-gradient(to right, #FFD700, #FFB700)',
        'gradient-text-red': 'linear-gradient(to right, #FF0000, #FF6347)',
        'gradient-text-green': 'linear-gradient(to right, #00FF00, #7CFC00)',
        'gradient-text-blue': 'linear-gradient(to right, #1E90FF, #00BFFF)',
        'gradient-text-black': 'linear-gradient(to right, #000000, #434343)',
        'gradient-text-orange': 'linear-gradient(to right, #FFA500, #FF8C00)',
        'gradient-text-purple': 'linear-gradient(to right, #8A2BE2, #DDA0DD)',
        'gradient-text-pink': 'linear-gradient(to right, #FF1493, #FF69B4)',
        'gradient-text-yellow': 'linear-gradient(to right, #FFFF00, #FFD700)',
        'gradient-text-cyan': 'linear-gradient(to right, #00FFFF, #00BFFF)',
        'gradient-text-teal': 'linear-gradient(to right, #008080, #00CED1)',
        'gradient-text-mix-1': 'linear-gradient(to right, #FF0000, #FFD700, #00FF00)',
        'gradient-text-mix-2': 'linear-gradient(to right, #00BFFF, #8A2BE2, #FF1493)',
        'gradient-text-mix-3': 'linear-gradient(to right, #1E90FF, #FF6347, #FFFF00)',
        'gradient-text-mix-4': 'linear-gradient(to right, #FFA500, #8A2BE2, #FF69B4)',
        'gradient-text-mix-5': 'linear-gradient(to right, #DDA0DD, #FF6347, #00FF00)',
        'gradient-text-mix-6': 'linear-gradient(to right, #FF0000, #00CED1, #FFD700)',
        'gradient-text-mix-7': 'linear-gradient(to right, #FF1493, #00BFFF, #008080)',
        'gradient-text-mix-8': 'linear-gradient(to right, #1E90FF, #FF8C00, #7CFC00)',
        'gradient-text-mix-9': 'linear-gradient(to right, #FF6347, #00FF00, #FF1493)',
        'gradient-text-mix-10': 'linear-gradient(to right, #8A2BE2, #FFFF00, #FFD700)',
        'gradient-text-mix-11': 'linear-gradient(to right, #00BFFF, #FF6347, #FFA500)',
        'gradient-text-mix-12': 'linear-gradient(to right, #FF8C00, #DDA0DD, #00FF00)',
        'gradient-text-mix-13': 'linear-gradient(to right, #FF1493, #FFD700, #1E90FF)',
        'gradient-text-mix-14': 'linear-gradient(to right, #FF6347, #8A2BE2, #7CFC00)',
        'gradient-text-mix-15': 'linear-gradient(to right, #008080, #00CED1, #FF0000)',
        'gradient-text-mix-16': 'linear-gradient(to right, #FF69B4, #FFD700, #FF1493)',
        'gradient-text-mix-17': 'linear-gradient(to right, #FF8C00, #00BFFF, #1E90FF)',
        'gradient-text-mix-18': 'linear-gradient(to right, #FFFF00, #8A2BE2, #00FF00)',
        'gradient-text-mix-19': 'linear-gradient(to right, #7CFC00, #008080, #00CED1)',
        'gradient-text-mix-20': 'linear-gradient(to right, #FF1493, #FF0000, #00FF00)',
        'gradient-3-1': 'linear-gradient(to right, #ff7e5f, #feb47b, #ff6a00)',
        'gradient-3-2': 'linear-gradient(to right, #6a11cb, #2575fc, #2c3e50)',
        'gradient-3-3': 'linear-gradient(to right, #8e44ad, #3498db, #e74c3c)',
        'gradient-3-4': 'linear-gradient(to right, #ff0099, #493240, #ff8c00)',
        'gradient-3-5': 'linear-gradient(to right, #00b09b, #96c93d, #ff00ff)',
        'gradient-3-6': 'linear-gradient(to right, #f3ec78, #af4261, #d9a7c7)',
        'gradient-3-7': 'linear-gradient(to right, #ff5f6d, #ffc3a0, #6a82fb)',
        'gradient-3-8': 'linear-gradient(to right, #f79c42, #f14e7e, #333333)',
        'gradient-3-9': 'linear-gradient(to right, #fc00ff, #00dbde, #00c6ff)',
        'gradient-3-10': 'linear-gradient(to right, #c94b64, #4b134f, #c94b64)',

        // 2 colors gradient classes (20)
        'gradient-2-1': 'linear-gradient(to right, #ff7e5f, #feb47b)',
        'gradient-2-2': 'linear-gradient(to right, #6a11cb, #2575fc)',
        'gradient-2-3': 'linear-gradient(to right, #8e44ad, #3498db)',
        'gradient-2-4': 'linear-gradient(to right, #ff0099, #493240)',
        'gradient-2-5': 'linear-gradient(to right, #00b09b, #96c93d)',
        'gradient-2-6': 'linear-gradient(to right, #f3ec78, #af4261)',
        'gradient-2-7': 'linear-gradient(to right, #ff5f6d, #ffc3a0)',
        'gradient-2-8': 'linear-gradient(to right, #f79c42, #f14e7e)',
        'gradient-2-9': 'linear-gradient(to right, #fc00ff, #00dbde)',
        'gradient-2-10': 'linear-gradient(to right, #c94b64, #4b134f)',
        'gradient-2-11': 'linear-gradient(to right, #ff6a00, #d6a50e)',
        'gradient-2-12': 'linear-gradient(to right, #76b852, #8DC26F)',
        'gradient-2-13': 'linear-gradient(to right, #2980b9, #6dd5fa)',
        'gradient-2-14': 'linear-gradient(to right, #00c6ff, #0072ff)',
        'gradient-2-15': 'linear-gradient(to right, #c4e0e5, #acb6e5)',
        'gradient-2-16': 'linear-gradient(to right, #ff7eb3, #ff65a3)',
        'gradient-2-17': 'linear-gradient(to right, #a18cd1, #fbc2eb)',
        'gradient-2-18': 'linear-gradient(to right, #faaca8, #ddd6f3)',
        'gradient-2-19': 'linear-gradient(to right, #fbc2eb, #a18cd1)',
        'gradient-2-20': 'linear-gradient(to right, #b6e3f3, #e4d1e0)',
      },


      backgroundImage: {
        // 3 colors gradient classes (10)
       
      },
    
      
      colors: {
        'gradient-red': '#FF4C4C', // Red gradient for hover
        'gradient-light-red': '#FF7F7F', // Lighter red gradient for non-hovered state
      },
      backgroundImage: {
        'bg-gradient-black-white': 'linear-gradient(to right, #000000, #ffffff)',
        'bg-gradient-black-gray': 'linear-gradient(to right, #000000, #808080)',
      },
      animation: {
        'char-animate': 'charAnimate 1s ease-in-out forwards', // Animation for single character
      },
      keyframes: {
        charAnimate: {
          '0%': {
            transform: 'scale(1)',
            backgroundImage: 'none',
            color: '#', // Default Red color for normal state
          },
          '50%': {
            transform: 'scale(1.9)', // Increase size on hover
            backgroundImage: 'linear-gradient(to right, #FF6347, #FF4C4C)', // Richer red gradient for hover
            color: 'transparent',
            '-webkit-background-clip': 'text',
            'background-clip': 'text',
          },
          '100%': {
            transform: 'scale(1)',
            backgroundImage: 'none',
            color: '#FF4C4C', // Reset back to red color
          },
        },
      },
      

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.gradient-text-golden': {
          backgroundImage: 'linear-gradient(to right, #FFD700, #FFB700)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-red': {
          backgroundImage: 'linear-gradient(to right, #FF0000, #FF6347)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-green': {
          backgroundImage: 'linear-gradient(to right, #00FF00, #7CFC00)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-blue': {
          backgroundImage: 'linear-gradient(to right, #1E90FF, #00BFFF)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-black': {
          backgroundImage: 'linear-gradient(to right, #000000, #434343)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-orange': {
          backgroundImage: 'linear-gradient(to right, #FFA500, #FF8C00)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-purple': {
          backgroundImage: 'linear-gradient(to right, #8A2BE2, #DDA0DD)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-pink': {
          backgroundImage: 'linear-gradient(to right, #FF1493, #FF69B4)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-yellow': {
          backgroundImage: 'linear-gradient(to right, #FFFF00, #FFD700)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-cyan': {
          backgroundImage: 'linear-gradient(to right, #00FFFF, #00BFFF)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-teal': {
          backgroundImage: 'linear-gradient(to right, #008080, #00CED1)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        // Multi-color text gradients
        '.gradient-text-mix-1': {
          backgroundImage: 'linear-gradient(to right, #FF0000, #FFD700, #00FF00)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-mix-2': {
          backgroundImage: 'linear-gradient(to right, #00BFFF, #8A2BE2, #FF1493)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-mix-3': {
          backgroundImage: 'linear-gradient(to right, #1E90FF, #FF6347, #FFFF00)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.gradient-text-mix-4': {
          backgroundImage: 'linear-gradient(to right, #FFA500, #8A2BE2, #FF69B4)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
      });
    },
  ],
};
