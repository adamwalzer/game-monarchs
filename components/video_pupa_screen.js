const SRC = 'https://res.cloudinary.com/changemyworldnow/video/upload/' +
    'v1486138208/Monarch_Transformation_fmbavs.mp4';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-video-pupa"
        >
            <skoash.Component className="video-container">
                <skoash.Video
                    src={SRC}
                />
            </skoash.Component>

        </skoash.Screen>
    );
}
