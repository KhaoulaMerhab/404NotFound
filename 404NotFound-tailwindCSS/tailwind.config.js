module.exports = {
  purge: {
    enabled: true,
    content: ['./public/**/*.html'],
  }, // or 'media' or 'class'
  theme: {
    fontFamily: {
      "space" :['Space Mono'],
      "inco" :['Inconsolata'],
      "montse" :['Montserrat'] 
    },

    colors :{
      primary :'#fff',

      gray: {
        "darkest" :'#333333',
        "dark" :'#4f4f4f',
        "light" : '#bdbdbd',
      }
      
    },

    letterSpacing: {
      supersm : '-0.125px',
      logo : '-1.5px',
      title : '-2px',
      titleLg :'-4px'
    },

    fontSize: {
      '5.5xl' :'4rem' ,
      '4.5xl':'2.75rem'
    },

    height: {
      mobile :'949px',
      des :'120vh',
    },
    
    extend: {},
  },
  variants: {
    
    extend: {},
  },
  plugins: [],
}
