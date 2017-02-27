import BonusLevelScreenComponent from './bonus_level_screen_component';

export default function (props, ref, key) {
    return BonusLevelScreenComponent(props, ref, key, {
        id: 'bonus-level-two',
        levelNumber: 1,
        timeout: 30000,
        itemCount: 13,
        pointValue: 150,
        map: `${MEDIA.IMAGE}Labryinth-02.png`,
        image: `${MEDIA.IMAGE}map-02.png`,
        revealList: [
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
