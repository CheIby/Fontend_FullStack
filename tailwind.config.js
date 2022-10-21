module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'homeBg' : "url('./img/homeBg.jpg')",
        'events' : "url('./img/events.png')",
        
      },
      fontFamily:{
        Itim:['Itim', 'cursive'],
        Abril_Fatface:['Abril Fatface'," cursive"],
        Kanit:['Kanit', "sans-serif"],
        Barlow:['Barlow', 'sans-serif'],
        Raleway:['Raleway', 'sans-serif'],
        NotoSansThai:['Noto Sans Thai', 'sans-serif']
      },
      width:{
        '320':'320px'
      },
      height:{
        '420':'420px'
      },
      gridTemplateColumns: {
        'layout':'repeat(auto-fill ,minmax(256px,1fr))',
      },
      gridTemplateRows:{
        'res':'220px 1fr',
        'res2' : '300px 1fr'
      },
      maxWidth:{
        'maxCon' : 'calc(100% - 80px)'
      }
    },
  },
  plugins: [],
}
