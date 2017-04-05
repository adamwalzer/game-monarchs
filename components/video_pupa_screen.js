const SRC = `${CMWN.MEDIA.VIDEO}monarch-transformation.mp4`;

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
