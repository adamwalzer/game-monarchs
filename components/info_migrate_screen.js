export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-migrate"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}3000Milesmp3.mp3`}
            />

            <skoash.Image
                className="butterfly"
                src={`${MEDIA.IMAGE}Monarchbutterfly.png`}
            />

            <skoash.Component className="copy-container">
                <span className="copy">
                    Monarchs migrate south every
                    <br />
                    winter. Ever wonder what it must
                    <br />
                    be like to fly up to 3,000 miles -
                    <br />
                    without an airplane?
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
