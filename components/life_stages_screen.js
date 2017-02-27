export default function (props, ref, key) {
    var onSelect;
    var onPlay;

    onSelect = function (open) {
        this.updateGameState({
            path: 'reveal',
            data: {
                open
            }
        });
    };

    onPlay = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: null
            }
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="life-stages"
        >

            <skoash.Audio
                ref="stages"
                type="voiceOver"
                src={`${MEDIA.VO}ClickStages.mp3`}
            />

            <skoash.Component className="header">
                <h1>
                    CLICK TO REVEAL THE STAGES OF
                    <br />
                    A MONARCH'S LIFE
                </h1>
            </skoash.Component>

            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open', null)}
                onPlay={onPlay}
            >
                <skoash.Audio
                    ref="egg"
                    type="voiceOver"
                    src={`${MEDIA.VO}FourDays.mp3`}
                />
                <skoash.Audio
                    ref="caterpillar"
                    type="voiceOver"
                    src={`${MEDIA.VO}Milkweed.mp3`}
                />
                <skoash.Audio
                    ref="pupa"
                    type="voiceOver"
                    src={`${MEDIA.VO}Pupa.mp3`}
                />
                <skoash.Audio
                    ref="monarch"
                    type="voiceOver"
                    src={`${MEDIA.VO}MonarchEmerges.mp3`}
                />
            </skoash.MediaCollection>

            <skoash.Selectable
                dataTarget="selectable"
                selectClass="HIGHLIGHTED"
                onSelect={onSelect}
                list={[
                    <skoash.Component
                        data-ref="egg"
                        className="question-mark egg"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="caterpillar"
                        className="question-mark caterpillar"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="pupa"
                        className="question-mark pupa"
                        correct={true}
                    />,
                    <skoash.Component
                        data-ref="monarch"
                        className="question-mark monarch"
                        correct={true}
                    />
                ]}
            />

            <skoash.Reveal
                openTarget="reveal"
                closeTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', null)}
                list={[
                    <skoash.Component
                        ref="egg"
                        className="frame standard egg"
                    >
                        <skoash.Component
                            className="life"
                        />
                        <h2 className="label">
                            Egg
                        </h2>
                        <span className="copy">
                            The Monarch starts
                            <br/>
                            as a tiny egg,
                            <br />
                            which hatches
                            <br />
                            in four days.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="caterpillar"
                        className="frame standard caterpillar"
                    >
                        <h2 className="label">
                            Caterpillar
                        </h2>
                        <skoash.Component
                            className="life"
                        />
                        <span className="copy">
                            Then the caterpillar,
                            <br />
                            which is the larval
                            <br />
                            stage of the butterfly,
                            <br />
                            spends its time eating
                            <br />
                            the milkweed for
                            <br />
                            two weeks.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="pupa"
                        className="frame standard pupa"
                    >
                        <skoash.Component
                            className="life"
                        />
                        <h2 className="label">
                            Pupa
                        </h2>
                        <span className="copy">
                            The caterpillar then
                            <br />
                            weaves a pupa,
                            <br />
                            or chrysalis, around
                            <br />
                            itself and stays
                            <br />
                            inside for 10 days.
                        </span>
                    </skoash.Component>,
                    <skoash.Component
                        ref="monarch"
                        className="frame standard monarch"
                    >
                        <skoash.Component
                            className="life"
                        />
                        <h2 className="label">
                            Monarch
                        </h2>
                        <span className="copy">
                            Finally, the Monarch
                            <br />
                            Butterfly emerges
                            <br />
                            from the pupa!
                        </span>
                    </skoash.Component>
                ]}
            />
        </skoash.Screen>
    );
}
