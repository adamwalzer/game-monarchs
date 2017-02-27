export default function (props, ref, key, opts = {}) {
    var itemInteract;
    var onComplete;
    var onOpenReveal;
    var onCloseReveal;
    var items = [];

    itemInteract = function () {
        this.complete();
        this.disable();
        this.updateGameState({
            path: 'correct',
            data: _.get(props, 'data.correct', 0) + 1,
        });
    };

    onComplete = function () {
        this.updateGameState({
            path: 'reveal',
            data: {
                open: 'complete'
            }
        });

        this.updateGameState({
            path: 'game',
            data: {
                complete: true,
            },
        });
    };

    onOpenReveal = function (message) {
        this.updateGameState({
            path: 'game',
            data: {
                stop: true,
                start: false,
                vo: message,
                sfx: message
            }
        });
    };

    onCloseReveal = function (prevMessage) {
        if (prevMessage === 'instructions') {
            this.updateGameState({
                path: 'reveal',
                data: {
                    open: 'countdown'
                }
            });

            setTimeout(() => {
                this.updateGameState({
                    path: 'reveal',
                    data: {
                        open: '',
                        close: true
                    }
                });
            }, 5500);
        }

        this.updateGameState({
            path: 'game',
            data: {
                stop: false,
                start: true,
                restart: false,
            },
        });

        if (prevMessage === 'level-up') {
            skoash.Screen.prototype.goto(parseInt(key, 10) + 1);
        }
    };

    for (let i = 0; i < opts.itemCount; i++) {
        items.push(
            <skoash.InteractiveItem
                className={'item-' + (i + 1)}
                checkComplete={false}
                onInteract={itemInteract}
                children={[
                    <skoash.Audio
                        ref="interact"
                        type="sfx"
                        src={`${MEDIA.EFFECT}MilkweedCollect.mp3`}
                        complete
                    />
                ]}
            />
        );
    }

    return (
        <skoash.Screen
          {...props}
          ref={ref}
          key={key}
          id={opts.id}
        >
            <skoash.MediaCollection
                play={_.get(props, 'data.game.vo')}
                children={opts.vos}
            />

            <skoash.MediaCollection
                play={_.get(props, 'data.game.sfx')}
            >
                <skoash.Audio
                    ref="countdown"
                    type="voiceOver"
                    src={`${MEDIA.EFFECT}BonusCountdown.mp3`}
                    rate={.55}
                    complete
                />
            </skoash.MediaCollection>

            <skoash.Reveal
                openTarget="reveal"
                openOnStart={opts.openOnStart}
                openReveal={_.get(props, 'data.reveal.open', null)}
                closeReveal={_.get(props, 'data.reveal.close')}
                onOpen={onOpenReveal}
                onClose={onCloseReveal}
                list={opts.revealList}
            />

            <skoash.Component className="timer-container">
                <span className="label"><strong>Time: </strong></span>
                <skoash.Timer
                    countDown
                    timeout={opts.timeout}
                    onComplete={onComplete}
                    checkComplete={_.get(props, 'data.game.start', false)}
                    restart={_.get(props, 'data.game.start', false)}
                    complete={_.get(props, 'data.game.complete', false)}
                />
            </skoash.Component>

            <skoash.Component className="score-container">
                <span className="label"><strong>SCORE: </strong></span>
                <skoash.Score
                    increment={opts.pointValue}
                    max={opts.itemCount * opts.pointValue}
                    correct={_.get(props, 'data.correct', 0)}
                    onComplete={onComplete}
                    complete={_.get(props, 'data.game.complete', false)}
                />
            </skoash.Component>

            <skoash.Labyrinth
                img={opts.image}
                map={opts.map}
                input={_.get(props, 'data.d-pad', {})}
                startX={50}
                startY={65}
                speed={3}
                scale={_.get(props, 'gameState.scale', 1)}
                start={_.get(props, 'data.game.start', false)}
                items={items}
                complete={_.get(props, 'data.game.complete', false)}
            />

            <skoash.DPad
                start={_.get(props, 'data.game.start', false)}
                stop={_.get(props, 'data.game.stop', false)}
                assets={[
                    <skoash.Audio
                        ref="keydown"
                        type="sfx"
                        src={`${MEDIA.EFFECT}CaterpillarMove.mp3`}
                        complete
                    />
                ]}
            />
        </skoash.Screen>
    );
}
