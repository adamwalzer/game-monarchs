import MonarchGenerationsScreenComponent from './monarch_generations_screen_component';

export default function (props, ref, key) {
    return MonarchGenerationsScreenComponent(props, ref, key, {
        level: 3,
        factVO: 'MigrationJourney',
        factContent: (
            <p>
                As the summer proceeds, the butterfly<br/>
                generations mature and continue<br/>
                migrating north. They will need all<br/>
                the energy they can get from flower<br/>
                nectar in order to flap their wings<br/>
                for the thousands of miles<br/>
                of their migration journey!
            </p>
        ),
    });
}
