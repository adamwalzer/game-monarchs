import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 1,
        instructionsVO: 'LevelOneGenerations',
        fact1VO: '250Eggs', // needs to be updated
        fact2VO: '250Eggs',
        fact3VO: '1179',
        instructions: (
            <p>
                <span>LEVEL ONE</span>
                It takes energy to reproduce offspring!<br/>
                Land on milkweed leaves and lay all of your<br/>
                eggs for this season to win. Be sure to<br/>
                monitor your energy levels, stay hydrated,<br/>
                and watch out for predators.<br/>
                Collect stars for extra points!
            </p>
        ),
        fact1Content: (
            <p>
                While most Monarch eggs<br/>
                are laid on milkweed leaves,<br/>
                accidents do happen and eggs<br/>
                could be found on other plants.
            </p>
        ),
        fact2Content: (
            <p>
                Monarchs can lay a maximum<br/>
                of 250 eggs per day,<br/>
                one egg at a time.
            </p>
        ),
        fact3Content: (
            <p>
                The highest number of eggs<br/>
                laid by a Monarch in<br/>
                captivity is 1179
            </p>
        ),
    });
}
