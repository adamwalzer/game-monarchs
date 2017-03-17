export default function (props, ref, key, opts = {}) {
    let startScreen;
    let onScreenStart;
    let onScreenStop;
    let onOpenReveal;
    let onCloseReveal;
    let onTimerComplete;
    let onScoreComplete;

    startScreen = function (screenStart = true) {
        this.updateGameState({
            path: 'game',
            data: {
                screenStart,
            },
        });
    };

    onScreenStart = function (screenStart = true) {
        let gameData = _.get(props, 'gameState.data.game');

        startScreen.call(this, screenStart);

        if (_.get(gameData, `levels.${opts.level}.complete`, false)) {
            _.assign(gameData, {
                levels: {
                    [opts.level]: {
                        complete: false,
                    }
                }
            });
        }

        this.updateGameData({
            key: 'game',
            data: _.defaults({
                state: opts.level,
            }, gameData, {
                levels: {
                    [opts.level]: {
                        hits: 0,
                        score: 0,
                        stars: 0,
                    }
                },
            }),
        });
    };

    onScreenStop = function () {
        this.updateGameData({
            key: 'game',
            data: {
                levels: {
                    [opts.level]: {
                        start: false,
                    }
                },
                state: 'default',
            },
        });
    };

    onOpenReveal = function (message) {
        setTimeout(() => {
            this.updateScreenData({
                key: 'd-pad',
                data: {
                    pause: true
                },
            });
        }, 500);

        this.updateGameData({
            key: 'game',
            data: {
                levels: {
                    [opts.level]: {
                        start: false,
                    }
                }
            },
        });

        if (message === 'replay') {
            this.updateGameData({
                key: 'game',
                data: {
                    state: 'default',
                },
                callback: onScreenStart.bind(this)
            });
        }
    };

    onCloseReveal = function (prevMessage) {
        let stars = _.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0);

        if (!prevMessage) return;

        this.updateScreenData({
            key: 'd-pad',
            data: {
                pause: false
            },
        });

        if (prevMessage === 'instructions') {
            this.updateScreenData({
                key: 'reveal',
                data: {
                    open: null,
                }
            });

            this.updateGameData({
                key: 'game',
                data: {
                    levels: {
                        [opts.level]: {
                            start: true,
                        }
                    }
                },
            });
        } else if (prevMessage === 'replay') {
            onScreenStart.call(this, false);

            this.updateScreenData({
                key: 'reveal',
                data: {
                    open: null,
                }
            });

            this.updateGameData({
                key: 'game',
                data: {
                    levels: {
                        [opts.level]: {
                            start: true,
                        }
                    }
                },
            });
        } else if (prevMessage === 'fact-1' && stars > 1) {
            this.updateScreenData({
                key: 'reveal',
                data: {
                    open: 'fact-2',
                }
            });
        } else if (prevMessage === 'fact-2' && stars > 2) {
            this.updateScreenData({
                key: 'reveal',
                data: {
                    open: 'fact-3',
                }
            });
        } else {
            skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
        }
    };

    onTimerComplete = function () {
        let stars = _.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0);

        if (!_.get(props, `gameState.data.game.levels.${opts.level}.start`, false)) return;

        if (!stars) {
            this.updateScreenData({
                key: 'reveal',
                data: {
                    open: 'replay',
                }
            });
        } else {
            this.updateGameData({
                key: 'game',
                data: {
                    levels: {
                        [opts.level]: {
                            complete: true,
                            mostStars: Math.max(stars,
                                _.get(props, `gameState.data.game.levels.${opts.level}.mostStars`, 0)),
                            fact2Complete: stars === 1,
                            fact3Complete: stars > 0 && stars < 3,
                            start: false,
                        }
                    }
                },
            });

            this.updateScreenData({
                key: 'reveal',
                data: {
                    open: 'fact-1',
                }
            });
        }
    };

    onScoreComplete = function () {
        this.updateGameData({
            key: 'game',
            data: {
                levels: {
                    [opts.level]: {
                        stars: _.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0) + 1,
                        score: 0,
                    }
                }
            },
        });
    };

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id={`phaser-level-${opts.level}`}
            onStart={onScreenStart}
            onStop={onScreenStop}
        >
            <skoash.Timer
                countDown
                timeout={120000}
                onComplete={onTimerComplete}
                pause={
                    !_.get(props, `gameState.data.game.levels.${opts.level}.start`, false) ||
                    _.get(props, 'data.reveal.open', false)
                }
                resume={
                    _.get(props, `gameState.data.game.levels.${opts.level}.start`, false) &&
                    !_.get(props, 'data.reveal.open', false)
                }
                stop={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
                complete={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
                checkComplete={_.get(props, `gameState.data.game.levels.${opts.level}.start`, false)}
                restart={_.get(props, `gameState.data.game.levels.${opts.level}.start`, false)}
            />
            <skoash.Component
                className="gauges"
                complete={_.get(props, `gameState.data.game.levels.${opts.level}.complete`, false)}
            >
                <skoash.DPad
                    onKeyAction={function (keyCode) {
                        if (keyCode === 32) return 'up';
                    }}
                />
                <skoash.Score
                    className="star-score"
                    correct={Math.min(3, _.get(props, `gameState.data.game.levels.${opts.level}.stars`, 0))}
                    setScore={true}
                />
                <skoash.Score
                    className="level-score"
                    max={10}
                    correct={_.get(props, `gameState.data.game.levels.${opts.level}.score`, 0)}
                    setScore={true}
                    onComplete={onScoreComplete}
                />
                <skoash.Score
                    className="life"
                    max={0}
                    incorrect={10}
                    correct={_.get(props, `gameState.data.game.levels.${opts.level}.hits`, 0) || 0}
                    setScore={true}
                    onComplete={onTimerComplete}
                />
            </skoash.Component>
            <skoash.Reveal
                openOnStart="instructions"
                openTarget="reveal"
                openReveal={_.get(props, 'data.reveal.open', false)}
                closeReveal={_.get(props, 'data.reveal.close', false)}
                onClose={onCloseReveal}
                onOpen={onOpenReveal}
                complete
                list={[
                    <skoash.Component
                        ref="instructions"
                        className="frame square instructions"
                        type="li"
                    >
                        <div className="content">
                            {opts.instructions}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-1"
                        className="fact frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.fact1Content}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-2"
                        className="fact frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.fact2Content}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="fact-3"
                        className="fact frame square"
                        type="li"
                    >
                        <div className="content">
                            {opts.fact3Content}
                        </div>
                    </skoash.Component>,
                    <skoash.Component
                        ref="replay"
                        className="replay frame square"
                        type="li"
                    >
                        <div className="content">
                            <p>
                                Don't give up!<br/>
                                You still have another<br/>
                                chance to help the<br/>
                                Monarch complete<br/>
                                its mission!
                            </p>
                        </div>
                    </skoash.Component>,
                ]}
            />
            <skoash.MediaCollection
                play={_.get(props, 'data.reveal.open')}
            >
                <skoash.Audio
                    type="voiceOver"
                    ref="instructions"
                    src={`${MEDIA.VO}${opts.instructionsVO}.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="fact-1"
                    src={`${MEDIA.VO}${opts.fact1VO}.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="fact-2"
                    src={`${MEDIA.VO}${opts.fact2VO}.mp3`}
                    complete={_.get(props, `gameState.data.game.levels.${opts.level}.fact2Complete`, false)}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="fact-3"
                    src={`${MEDIA.VO}${opts.fact3VO}.mp3`}
                    complete={_.get(props, `gameState.data.game.levels.${opts.level}.fact3Complete`, false)}
                />
                <skoash.Audio
                    type="voiceOver"
                    ref="replay"
                    src={`${MEDIA.VO}DontGiveUp.mp3`}
                    complete
                />
            </skoash.MediaCollection>
        </skoash.Screen>
    );
}
