import Animated,{ useSharedValue,useAnimatedGestureHandler,useAnimatedStyle } from "react-native-reanimated";
import { TapGestureHandler } from "react-native-gesture-handler";

export default SaveScreen = () => {

    const pressed = useSharedValue(false);

    const uas = useAnimatedStyle(() => {
        return {
          backgroundColor: pressed.value ? '#FEEF86' : '#001972',
          transform: [{ scale: pressed.value ? 1.2 : 1 }],
        };
      });

    const eventHandler = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
          pressed.value = true;
        },
        onEnd: (event, ctx) => {
          pressed.value = false;
        },
      });


    return (
        <>
            <TapGestureHandler onGestureEvent={eventHandler}>
                <Animated style={[{width:100,heighy:100},uas]} />
            </TapGestureHandler>
        </>
    )
}

