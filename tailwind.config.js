module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './public/index.html',
  ],
  darkMode:false,
  theme: {
    extend: {
      colors:{
        reddit_dark:{
          DEFAULT:'#030303',
          brighter:"#1a1a1a",
          brightest:'#272728',
        },
        reddit_border:{
          DEFAULT:"#343536"
        },
        reddit_text:{
          DEFAULT:'rgb(215,218, 220)',
          darker:'#818384'
        },
      },
    },
  },
    variants:{
    extend:{},
    
  },
  plugins: [],
}
