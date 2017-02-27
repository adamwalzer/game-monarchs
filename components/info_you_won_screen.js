export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-you-won"
        >
            <skoash.MediaSequence>
                <skoash.Audio
                    type="voiceOver"
                    src={`${MEDIA.VO}YouveWon.mp3`}
                />
            </skoash.MediaSequence>

            <skoash.MediaSequence>
                <skoash.Audio
                    type="sfx"
                    src={`${MEDIA.EFFECT}GameWin_G1.mp3`}
                />
            </skoash.MediaSequence>

            <h1 className="header">YOU'VE WON THE GAME!</h1>

            <skoash.Component className="frame standard">
                <span className="copy">
                    Thank you for helping find the
                    <br />
                    milkweed leaves and avoid predators!
                    <br />
                    <br />
                    Now watch me transform from a
                    <br />
                    caterpillar to a butterfly right
                    <br />
                    before your eyes!
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
