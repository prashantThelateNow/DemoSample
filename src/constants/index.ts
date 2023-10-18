interface Navigation {
    name: string;
    path: string;
    target?: string;
}

const navigations: Navigation[] = [
    {
        name: "About",
        path: "/about"
    },
    {
        name: "GitHub",
        path: "https://github.com/mindfiredigital",
        target: "_blank"
    }
];

export { navigations };