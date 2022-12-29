/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./themes/**/layouts/**/*.html",
    "./themes/**/content/**/*.{html,md}",
    "./static/scripts/xss/**/*.js"
  ],
  safelist: ['-rotate-90'],
  theme: {
    extend: {
      backgroundPosition: {
        "left-4": "1rem center",
        "right-2": "right 0.5rem center"
      },
      colors: {
        "ebony": "#302F45",
        "ebony-light": "#4A495E",
        "grey": "#F0F2F5",
        "pink": "#FFBDBB",
        "pink-light": "#FFD9D9",
        "primary-darker": "#171719",
        "skye": "#4786FF",
        "skye-light": "#E7F0FF",
        "skye-dark": "#1664FF",
        "slate": "#5F5E70",
        "stone": "#E7E7E7",
      },
      fontFamily: {
        sans: ["Overpass", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
        mono: ["SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
      },
      gridTemplateColumns: {
        "80-20": "minmax(20rem,80%) minmax(10rem,20%)",
      },
      spacing: {
        "fullv": "100vh",
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.skye-dark'),
              textDecoration: 'none',
              fontWeight: '400',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            code: {
              marginBottom: '0',
              color: theme('colors.skye'),
              backgroundColor: theme('colors.stone'),
              fontWeight: '400',
              padding: '0.25rem',
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            h2: {
              display: 'inline',
              img: {
                display: 'inline',
              },
              fontWeight: '900',
            },
            h3: {
              display: 'inline',
              img: {
                display: 'inline',
              },
              fontWeight: '500',
            },
            h4: {
              display: 'inline',
              img: {
                display: 'inline',
              },
              fontWeight: '300',
            },
            h5: {
              display: 'inline',
              img: {
                display: 'inline',
              },
              fontWeight: '400',
            },
            h6: {
              display: 'inline',
              img: {
                display: 'inline',
              },
              fontWeight: '500',
            },
            p: {
              color: theme('colors.ebony-light'),
            },
            pre: {
              backgroundColor: theme('colors.stone'),
              borderRadius: '0',
              color: theme('colors.ebony-light'),
              lineHeight: '1.5rem',
              marginTop: '0',
            },
            table: {
              tableLayout: 'fixed',
            },
            td: {
              border: `1px solid ${theme('colors.stone')}`,
            },
            th: {
              backgroundColor: theme('colors.stone'),
              padding: '0.5rem',
            },
            thead: {
              'th:first-child': {
                paddingLeft: '0.5rem',
              },
              tr: {
                position: 'sticky',
                top: '6rem',
              },
            },
          },
        },
        lg: {
          css: {
            pre: {
              lineHeight: '1.5rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}