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
                        if (_.get(props, 'gameState.currentScreenIndex') !== key) return;
                        this.play();
                    }}
                />
            </skoash.MediaSequence>
        </skoash.Screen>
    );
}
