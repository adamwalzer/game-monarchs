const SRC = 'https://res.cloudinary.com/changemyworldnow/video/upload/v1486137157/MonarchNewVideo_gt0adm.mp4';

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="info-video-one"
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
