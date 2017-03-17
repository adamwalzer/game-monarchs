import classNames from 'classnames';

let hiddenImagesSrcs = [
    `${MEDIA.SPRITE}sprite.circles.png`,
    `${MEDIA.SPRITE}sprite.starmap.png`,
    `${MEDIA.SPRITE}sprite.butterflyhover.png`,
    `${MEDIA.IMAGE}path.png`,
    `${MEDIA.FRAME}frame.big.png`,
];

let hiddenImages = _.map(hiddenImagesSrcs, image =>
    <skoash.Image className="hidden" src={image} />
);

export default function (props, ref, key, opts = {}) {
    var onCloseReveal;
    var onSelect;
    var onAnimationEnd;
    var getStarClassNames;

    onCloseReveal = function (prevMessage) {
        if (!prevMessage) return;

        this.updateGameState({
            path: 'reveal',
            data: {
                open: null,
            }
        });

        if (prevMessage !== 'instructions') {
            this.updateGameState({
                path: ['animate'],
                data: {
                    [opts.level]: true,
                }
            });
        }
    };

    onSelect = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'fact',
            }
        });
    };

    onAnimationEnd = function () {
        if (_.get(props, 'gameState.currentScreenIndex') !== parseInt(key, 10)) return;
        skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
    };

    getStarClassNames = function (level, star) {
        return classNames({
            earned: _.get(props, `gameState.data.game.levels.${level}.mostStars`, 0) >= star,
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`monarch-generations-${opts.level}`}
        >
            <skoash.Component>
                {hiddenImages}
            </skoash.Component>
            <skoash.Component
                className="path"
            >
                <skoash.Component>
                    {_.map([1, 2, 3], level =>
                        <skoash.Component
                            className={`circle-${level}`}
                        >
                            {_.map([1, 2, 3], star =>
                                <div className={getStarClassNames(level, star)}/>
                            )}
                        </skoash.Component>
                    )}
                </skoash.Component>
                <skoash.Selectable
                    onSelect={onSelect}
                    list={_.map([1, 2, 3, 4], star =>
                        <skoash.Component
                            type="li"
                            className={classNames(`butterfly-${star}`, {
                                animate: _.get(props, `gameState.data.animate.${star}`)
                            })}
                            onAnimationEnd={onAnimationEnd}
                        />
                    )}
                />
            </skoash.Component>
            <skoash.Reveal
                openOnStart={opts.openOnStart}
                openTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', false)}
                closeReveal={_.get(props, 'data.reveal.close', false)}
                onClose={onCloseReveal}
                list={[
                    <skoash.Component
                        ref="instructions"
                        className="instructions"
                        type="li"
                    >
                        <h4>
                            click anywhere on the screen to continue
                        </h4>
                        <p>
                            Click to reveal interesting<br/>
                            facts about the four<br/>
                            generations of Monarchs.
                        </p>
                        <skoash.Image
                            className="butterfly-a"
                            src={`${MEDIA.IMAGE}orange.butterfly.png`}
                        />
                        <skoash.Image
                            className="butterfly-b"
                            src={`${MEDIA.IMAGE}orange.butterfly.png`}
                        />
                        <skoash.Image
                            className="arrow-1"
                            src={`${MEDIA.IMAGE}orange.arrow.png`}
                        />
                        <skoash.Image
                            className="arrow-2"
                            src={`${MEDIA.IMAGE}orange.arrow.png`}
                        />
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact"
                        className="fact"
                        type="li"
                    >
                        {opts.factContent}
                    </skoash.Component>,
                ]}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
                <skoash.MediaSequence
                    ref="instructions"
                    silentOnStart
                    complete={!opts.openOnStart}
                >
                    <skoash.Audio
                        type="voiceOver"
                        src={`${MEDIA.VO}ClickAnywhere.mp3`}
                    />
                    <skoash.Audio
                        type="voiceOver"
                        ref="instructions"
                        src={`${MEDIA.VO}FourGenerations.mp3`}
                    />
                </skoash.MediaSequence>
                <skoash.Audio
                    type="voiceOver"
                    ref="fact"
                    src={`${MEDIA.VO}${opts.factVO}.mp3`}
                />
            </skoash.MediaCollection>
        </skoash.Screen>
    );
}
