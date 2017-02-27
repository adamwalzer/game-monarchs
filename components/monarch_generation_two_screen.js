import MonarchGenerationsScreenComponent from './monarch_generations_screen_component';

export default function (props, ref, key) {
    return MonarchGenerationsScreenComponent(props, ref, key, {
        level: 2,
        factVO: 'SpringGeneration',
        factContent: (
            <p>
                The spring Monarch generation<br/>
                then migrates further north as the<br/>
                weather gets warmer, starting in<br/>
                late April and continuing through<br/>
                June. Like the first generation,<br/>
                they lay their eggs and<br/>
                die weeks after.
            </p>
        ),
    });
}
