import { ActivityType } from 'discord.js';
import { BotConfig } from './structures/types';

export const config: BotConfig = {
    groupId: 000000,
    slashCommands: true,
    legacyCommands: {
        enabled: true,
        prefixes: ['!'],
    },
    permissions: {
        all: [''],
        ranking: [''],
        users: [''],
        shout: [''],
        join: [''],
        signal: [''],
        admin: [''],
    },
    logChannels: {
        actions: '',
        shout: '',
    },
    api: true,
    maximumRank: 255,
    verificationChecks: true,
    bloxlinkGuildId: '',
    firedRank: 1,
    suspendedRank: 3,
    recordManualActions: true,
    memberCount: {
        enabled: true,
        channelId: '',
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
        value: 'Aura +!',
    },
    status: 'online',
    deleteWallURLs: true,
}
