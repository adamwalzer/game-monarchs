import MonarchGenerationsScreenComponent from './monarch_generations_screen_component';

export default function (props, ref, key) {
    return MonarchGenerationsScreenComponent(props, ref, key, {
        level: 4,
        factVO: 'FourthGeneration',
        factContent: (
            <p>
                The fourth generation will migrate<br/>
                south for the winter and this<br/>
                group can live up to nine months!<br/>
                Living off of the sweet nectar, they<br/>
                patiently wait for the beginning<br/>
                of the spring so the whole process<br/>
                can begin again!
            </p>
        ),
    });
}
