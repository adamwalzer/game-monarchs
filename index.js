import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

import TitleScreen from './components/title_screen';
import InfoVideoOneScreen from './components/info_video_one_screen';
import LifeStagesScreen from './components/life_stages_screen';
import FirstStageScreen from './components/first_stage_screen';
import InstructionsOneScreen from './components/instructions_1_screen';
import BonusLevelOneScreen from './components/bonus_level_one_screen';
import BonusLevelTwoScreen from './components/bonus_level_two_screen';
import VideoPupaScreen from './components/video_pupa_screen';
import InfoYouWonScreen from './components/info_you_won_screen';
import InfoMigrateScreen from './components/info_migrate_screen';
import InfoVideoTwoScreen from './components/info_video_two_screen';
import MonarchGenerationOneScreen from './components/monarch_generation_one_screen';
import LevelOneScreen from './components/level_one_screen';
import MonarchGenerationTwoScreen from './components/monarch_generation_two_screen';
import LevelTwoScreen from './components/level_two_screen';
import MonarchGenerationThreeScreen from './components/monarch_generation_three_screen';
import LevelThreeScreen from './components/level_three_screen';
import MonarchGenerationFourScreen from './components/monarch_generation_four_screen';
import FlipScreen from './components/flip_screen';
import QuitScreen from './components/quit_screen';

let onRespond = function (options) {
    let level = _.get(this, 'props.gameState.data.game.state', 1);

    if (_.get(options, `updateGameState.data.game.levels.${level}.hits`) === 10) {
        this.updateGameData({
            keys: ['game', 'levels', `${level}`, 'complete'],
            data: true,
        });
    }

    if (_.get(options, `updateGameState.data.game.levels.${level}.start`)) {
        window.focus();
    }
};

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screens={[
            iOSScreen,
            TitleScreen,
            /*
            InfoVideoOneScreen,
            LifeStagesScreen,
            FirstStageScreen,
            InstructionsOneScreen,
            BonusLevelOneScreen,
            BonusLevelTwoScreen,
            VideoPupaScreen,
            InfoYouWonScreen,
            InfoMigrateScreen,
            InfoVideoTwoScreen,
            MonarchGenerationOneScreen,
            */
            LevelOneScreen,
            MonarchGenerationTwoScreen,
            LevelTwoScreen,
            MonarchGenerationThreeScreen,
            LevelThreeScreen,
            MonarchGenerationFourScreen,
            FlipScreen,
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.Font name="Chelsea Market" />,
            <skoash.Font name="Japers" />,
            <skoash.Font name="Source Sans Pro" />,
            // <skoash.Font name="CMWN" />,
            <skoash.Image
                className="hidden"
                src={`${MEDIA.FRAME}monarch.fact.png`}
            />,
            <skoash.Image
                className="hidden"
                src={`${MEDIA.FRAME}try.again.frame.png`}
            />,
            <div className="background title" />,
            <div className="background bkg-1" />,
            <div className="background bkg-2" />,
            <div className="background bkg-3" />,
            <div className="background bkg-4" />,
            <div className="background bkg-5" />,
            <skoash.Audio
                ref="button"
                type="sfx"
                src={`${MEDIA.EFFECT}Click.mp3`}
            />,
            <skoash.Audio
                ref="screen-complete"
                type="sfx"
                src={`${MEDIA.EFFECT}NextAppear.mp3`}
            />,
            <skoash.Audio
                ref="bkg-1"
                type="background"
                src={`${MEDIA.EFFECT}BKG_1.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-2"
                type="background"
                src={`${MEDIA.EFFECT}BKG_2.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-3"
                type="background"
                src={`${MEDIA.EFFECT}BKG_3.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-4"
                type="background"
                src={`${MEDIA.EFFECT}BKG_4.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-5"
                type="background"
                src={`${MEDIA.EFFECT}BKG_5.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-6"
                type="background"
                src={`${MEDIA.EFFECT}BKG_6.mp3`}
                loop
            />,
            <skoash.Audio
                ref="bkg-bonus"
                type="background"
                src={`${MEDIA.EFFECT}BonusBKG.mp3`}
            />,
        ]}
        getBackgroundIndex={(index, id) => {
            switch (id) {
                case 'ios-splash': return;
                case 'title':
                    return 'bkg-1';
                case 'life-stages':
                    return 'bkg-2';
                case 'first-stage':
                case 'instructions-1':
                case 'video-pupa':
                case 'video-monarch':
                case 'info-migrate':
                    return 'bkg-3';
                case 'bonus-level-one':
                case 'bonus-level-two':
                case 'info-video-two':
                    return 'bkg-4';
                case 'monarch-generations-1':
                case 'phaser-level-1':
                case 'monarch-generations-2':
                case 'phaser-level-2':
                case 'monarch-generations-3':
                case 'phaser-level-3':
                case 'monarch-generations-4':
                    return 'bkg-3';
                case 'flip':
                    return;
                case 'info-video-one':
                    return; // no bkg audio
            }
        }}
        renderExtras={function () {
            let dPad = _.get(this, `state.data.screens.${this.state.currentScreenIndex}.d-pad`, {});
            let data = _.get(this, 'state.data.game', {});
            return (
                <skoash.GameEmbedder
                    ref="gameEmbedder"
                    controller={dPad}
                    src={'../monarchs-flyer/index.html'}
                    data={data}
                    state={data.state}
                    pause={dPad.pause || this.state.paused}
                    resume={!dPad.pause && !this.state.paused}
                    gameState={this.state}
                    onRespond={onRespond}
                />
            );
        }}
    />
);

if (module.hot) module.hot.accept();
