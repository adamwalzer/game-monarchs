export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="flip"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}Flip.mp3`}
            />

            <skoash.Image
                className="butterfly"
                src={`${MEDIA.IMAGE}monarch-side.png`}
            />

            <skoash.Image
                className="flip animated"
                src={`${MEDIA.BASE}Flips/Monarch%20Flip/MON_Animated_Earned_Flip/MON.AnimatedEarnedFlip.gif`}
            />

            <skoash.Component className="copy-container">
                <span className="copy">
                    Understanding these
                    <br />
                    beautiful insects is
                    <br />
                    the first step to
                    <br />
                    making a difference.
                    <br />
                    Here's your
                    <span className="flip">FLIP!</span>
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
