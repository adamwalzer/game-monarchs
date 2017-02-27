export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="first-stage"
        >
            <skoash.Audio
                type="voiceOver"
                src={`${MEDIA.VO}FirstStage.mp3`}
            />

            <skoash.Component className="frame standard">
                <h1 className="header">
                    Let's start with my first stage of life,
                    <br />
                    the Caterpillar!
                </h1>
                <span className="copy">
                    Only able to crawl, I am very vulnerable
                    <br />
                    and have to avoid predators as I look for
                    <br />
                    milkweed leaves to eat.
                    <br />
                    <br />
                    You can help me as I go about
                    <br />
                    my daily life in the game ahead!
                </span>
            </skoash.Component>
        </skoash.Screen>
    );
}
