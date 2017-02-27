const SRC = 'https://res.cloudinary.com/changemyworldnow/video/upload/' +
    'v1486138692/Monarch_Workout_hmotnk_qdftsp.mp4';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-video-two"
        >
            <skoash.Component
                className="video-container"
            >
                <skoash.Video
                    src={SRC}
                />
            </skoash.Component>

        </skoash.Screen>
    );
}
