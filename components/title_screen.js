export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="title"
        >
            <skoash.MediaSequence>
                <skoash.Audio
                    type="sfx"
                    delay={1000}
                    src={`${MEDIA.EFFECT}Shake.mp3`}
                    onComplete={function () {
                        this.play();
                    }}
                />
            </skoash.MediaSequence>
        </skoash.Screen>
    );
}
