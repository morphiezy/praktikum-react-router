const routeList = {
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
                route:'about-app'
            },
            ABOUT_AUTHOR:{
                name:'About Author',
                route:'about-author'
            }
        }
    },
}


// Destructuring Route

const {HOME, ABOUT} = routeList;
const {ABOUT_APP, ABOUT_AUTHOR} = ABOUT.subroutes

// Set route pages

const HomeRoute = [HOME, ABOUT];
const AboutRoute = [HOME, ABOUT_APP, ABOUT_AUTHOR]


export {HomeRoute , AboutRoute}