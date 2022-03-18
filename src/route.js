export default Object.freeze({
    HOME:{
        name:'Home',
        route:'/'
    },
    ABOUT:{
        name:'About',
        route:'about',
        subroutes:{
            ABOUT_APP:{
                name:'About App',
                route:'about/about-app'
            },
            ABOUT_AUTHOR:{
                name:'About Author',
                route:'about/about-author'
            }
        }
    },
    NO_MATCH:{
        name:'No Match',
        route: '*'
    }
})