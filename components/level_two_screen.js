import PhaserGameScreenComponent from './phaser_game_screen_component';

export default function (props, ref, key) {
    return PhaserGameScreenComponent(props, ref, key, {
        level: 2,
        instructionsVO: 'LevelTwoGenerations',
        fact1VO: 'Tarsi',
        fact2VO: 'Proboscis',
        fact3VO: 'WaterAndFruitJuice',
        instructions: (
            <p>
                <span>LEVEL TWO</span>
                Migrating Monarchs have a big appetite!<br/>
                Collect enough nectar from the flowers<br/>
                in order to get to the next level.<br/>
                Avoid getting tangled in spider webs<br/>
                and collect the power flowers<br/>
                to get extra strength.
            </p>
        ),
        fact1Content: (
            <p>
                Monarch smell with their<br/>
                antennae and taste with their feet!<br/>
                The feet have receptors called<br/>
                tarsi that taste the sweet nectar.
            </p>
        ),
        fact2Content: (
            <p>
                Adult Monarchs feed on<br/>
                flower nectar by sucking it through<br/>
                a tube called a proboscis.
            </p>
        ),
        fact3Content: (
            <p>
                In addition to flower nectar,<br/>
                Monarchs can also feed on<br/>
                water and fruit juice.
            </p>
        ),
    });
}
