// mocking out components or functions
const React = require('react')
const gatsby = jest.requireActual('gatsby')
module.exports = {
    ...gatsby,
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(
        ({
            activeClassName,
            activeStyle,
            getProps,
            innerRef,
            partiallyActive,
            ref,
            replace,
            to,
            ...rest
        }) => React.createElement("a", {
            ...rest,
            href: to,
        })
    ),
    StaticQuery: () => React.createElement("div", {
        id: "StaticQuery"
    }),
    useStaticQuery: jest.fn(),
}