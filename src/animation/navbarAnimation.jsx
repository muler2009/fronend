export const nav_header_animator = {
    init: {
        opacity: 0,
        x: 500,
    }, 
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            
            delay: 0.2,
            duration: 0.5
        }
    },
    exitAnimation: {
        opacity: 0,
        x: 500,
        transition: {
            delay: 0.2,
            duration: 0.8
        }
    }
}

