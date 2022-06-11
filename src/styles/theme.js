const primary = "white"
const mid = "grey"
const light = "#D9D6D0"
const dark = "black"
const cta = "#BF8706"
const borderRadius = 5
const btnPadding = '.5rem 1rem'
const letterSpacing = '1.8px'

export const theme = {
    // COLORS
    colors: {
        // text colors
        text: {
            primary,
            mid,
            light,
            dark,
            cta
        },
        // backgound colors
        bg: {
            primary,
            mid,
            light,
            dark,
            cta
        }
    },
    // SPACING
    spacing: {
        padding: {
            small: "1.75em",
            medium: "2em",
            large: "3em",
        },
        margin: {
            small: "0.25em",
            medium: "1.5em",
            large: "3em",
        }
    },
    font: {
        family: ('Source Sans Pro', 'Helvetica', 'sans - serif'),
        weight: {
            primary: 300,
            bold: 600,
            heading: 700
        },
        kern: {
            primary: "0.1em"
        }
    },
    button: {
        cta: {
            backgroundColor: cta,
            color: light,
            borderRadius,
            border: 0,
            padding: btnPadding,
            cursor: 'pointer',
            fontSize: '0.8rem',
            letterSpacing,
            fontWeight: '600',
            textDecoration: 'none',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            '&:hover': {
                backgroundColor: light,
                color: dark,
            },
            '@media(max-width: 820px)': {
                padding: '.5rem .5rem',

            }
        }
    },
    input: {

    }






    //     breakpoints: {
    //         xlarge:
    //         {
    //             "1281px",
    //             "1680px"
    //             },
    //         large: (
    //             981px,
    //         1280px,
    //     ),
    // medium: (
    //     737px,
    //         980px,
    //     ),
    // small: (
    //     481px,
    //         736px,
    //     ),
    // xsmall: (
    //     361px,
    //         480px,
    //     ),
    // xxsmall: (
    //     null,
    //     360px,
    //     ),
    //     }
    // }
}
