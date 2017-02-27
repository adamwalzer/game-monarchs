import MonarchGenerationsScreenComponent from './monarch_generations_screen_component';

export default function (props, ref, key) {
    return MonarchGenerationsScreenComponent(props, ref, key, {
        level: 1,
        openOnStart: 'instructions',
        factVO: 'FourGenerations',
        factContent: (
            <p>
                Every summer, Monarchs produce<br/>
                four generations. The first three<br/>
                generations have 2-6 week life<br/>
                spans. It all starts in Mexico<br/>
                during late March and early April,<br/>
                when the first eggs are laid as the<br/>
                Monarchs migrate north.
            </p>
        ),
    });
}
