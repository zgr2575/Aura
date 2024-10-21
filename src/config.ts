import { ActivityType } from 'discord.js';
import { BotConfig } from './structures/types';

export const config: BotConfig = {
    groupId: 35107897,
    slashCommands: true,
    legacyCommands: {
        enabled: true,
        prefixes: ['!'],
    },
    permissions: {
        all: ['1297789138417750036'],
        ranking: ['1272386908399472831'],
        users: ['1272386908399472831'],
        shout: ['1272386908399472831'],
        join: [''],
        signal: [''],
        admin: [''],
    },
    logChannels: {
        actions: '1297789750568026263',
        shout: '1297790756680892507',
    },
    api: true,
    maximumRank: 255,
    verificationChecks: true,
    bloxlinkGuildId: '1297785199547125812',
    firedRank: 1,
    suspendedRank: 3,
    recordManualActions: true,
    memberCount: {
        enabled: true,
        channelId: '1297790814361227315',
        milestone: 100,
        onlyMilestones: false,
    },
    xpSystem: {
        enabled: false,
        autoRankup: false,
        roles: [],
    },
    antiAbuse: {
        enabled: true,
        clearDuration: 1 * 60,
        threshold: 10,
        demotionRank: 1,
    },
    activity: {
        enabled: true,
        type: ActivityType.Watching,
        value: 'Alejandros Ranks!',
    },
    status: 'online',
    deleteWallURLs: true,
}
