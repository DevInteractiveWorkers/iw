export const navbar = [
        {
            "title":"About us",
            "link":"/about",
            "disabled":""
        },
        {
            "title":"Carrers",
            "link":"/carrers",
            "disabled":"True"
        },
        {
            "title":"+1 332-206-2891",
            "link":"tel:13322062891",
            "disabled":""
        },
        {
            "title":"VA's",
            "link":"/vas",
            "disabled":""
        },
        {
            "title":"Dispatch",
            "link":"/dispatch",
            "disabled":""
        },
        {
            "title":"Blog",
            "link":"/blog",
            "disabled":"True"
        },
        {
            "title":"Portfolio",
            "link":"/portfolio",
            "disabled":"True"
        },
        {
            "title":"Contact us",
            "link":"/contact",
            "disabled":""
        }
]

export interface navbarModel {
    title:string,
    link:string,
    disabled?:string
}