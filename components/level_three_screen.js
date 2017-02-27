import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 3,
        instructionsVO: 'Level3Generations',
        fact1VO: 'MPH',
        fact2VO: '3000Milesmp3',
        fact3VO: 'Roost',
        instructions: (
            <p>
                <span>LEVEL THREE</span>
                Hitch a ride on wind thermals to<br/>
                move ahead in your migration!<br/>
                Be sure to collect fruit and water<br/>
                for energy. Speed and distance<br/>
                is what this generation is about!
            </p>
        ),
        fact1Content: (
            <p>
                Monarchs fly between<br/>
                12 and 15 miles per hour.
            </p>
        ),
        fact2Content: (
            <p>
                North American Monarchs<br/>
                are the only butterflies<br/>
                that migrate such a long<br/>
                distance—up to 3,000 miles.
            </p>
        ),
        fact3Content: (
            <p>
                In Mexico they roost in trees<br/>
                in HUGE groups that may<br/>
                have millions of butterflies.
            </p>
        ),
    });
}
