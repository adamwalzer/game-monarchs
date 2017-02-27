export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="instructions-1"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}MoveCaterpillar.mp3`}
            />

            <skoash.Component className="frame standard">
                <h1 className="header">
                    INSTRUCTIONS
                </h1>
                <span className="copy">
                    Move the caterpillar from square
                    <br />
                    to square. Collect the milkweed
                    <br />
                    leaves before the timer runs out,
                    <br />
                    and look out for predators!
                    <br />
                    Flowers will bring you to a
                    <br />
                    special bonus level!
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
