import BonusLevelScreenComponent from './bonus_level_screen_component';

export default function (props, ref, key) {
    return BonusLevelScreenComponent(props, ref, key, {
        id: 'bonus-level-one',
        levelNumber: 1,
        timeout: 30000,
        itemCount: 13,
        pointValue: 150,
        openOnStart: 'instructions',
        map: `${MEDIA.IMAGE}labryinth-01.png`,
        image: `${MEDIA.IMAGE}map-01.png`,
        vos: [
            <skoash.Audio
                ref="instructions"
                type="voiceOver"
                src={`${MEDIA.VO}InThisBonusLevel.mp3`}
            />,
            <skoash.Audio
                ref="countdown"
                type="voiceOver"
                src={`${MEDIA.VO}Countdown.mp3`}
            />
        ],
        revealList: [
            <skoash.Component ref="instructions" className="reveal-frame labyrinth-frame instructions">
                <h1 className="header">
                    INSTRUCTIONS
                </h1>
                <span className="copy">
                    In this bonus round, try to
                    <br />
                    get as many milkweed leaves
                    <br />
                    as you can before the
                    <br />
                    timer runs out
                </span>
            </skoash.Component>,
            <skoash.Component ref="countdown" className="reveal-frame labyrinth-frame countdown">
                <span className="number three">3</span>
                <span className="number two">2</span>
                <span className="number one">1</span>
            </skoash.Component>,
            <skoash.Component ref="complete" className="reveal-frame complete">
                <span className="char1">W</span>
                <span className="char2">O</span>
                <span className="char3">W</span>
                <span className="char4">!</span>
                <span className="char5">!</span>
                <span className="char6">!</span>
            </skoash.Component>,
        ]
    });
}
