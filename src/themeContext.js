import React from 'react'

export const themes = {
    light: {
        background: '#eee',
        color: '#222'
    },
    dark: {
        background: '#222',
        color: '#eee'
    },
    groovy: {
        background: '#BADA55',
        color: '#00aacc'
    }
}

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {}
})