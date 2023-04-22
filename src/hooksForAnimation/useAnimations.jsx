import { useSpring } from 'react-spring';

const useAnimations = () => {

    const fade = useSpring({ from: { opacity: 0}, opacity: 1, loop: true, config: {delay: 10, duration: 1000} });

   
    return{
        fade,
    }

}

export default useAnimations
