export type LockData = {
  name: string;
  pid: string;
  port: string;
  password: string;
  protocol: string;
}

export type Client = {
  platform: string;
  version: string;
}


export type MatchDto = {
  matchInfo: MatchInfoDto;
  players: PlayerDto[];
  coaches: CoachDto[];
  teams: TeamDto[];
  roundResults: RoundResultDto[];
}

type MatchInfoDto = {
  matchId: string;
  mapId: string;
  gameLengthMillis: int;
  gameStartMillis: long;
  provisioningFlowId: string;	
  isCompleted: boolean;
  customGameName: string;
  queueId: string;
  gameMode: string;
  isRanked: boolean;
  seasonId: string;
}

type PlayerDto = {
  puuid: string;
  gameName: string;
  tagLine: string;
  teamId: string;
  partyId: string;
  characterId: string;
  stats: PlayerStatsDto;
  competitiveTier: int;
  playerCard: string;
  playerTitle: string;
}

type PlayerStatsDto = {
  score: int;
  roundsPlayed: int;
  kills: int;
  deaths: int;
  assists: int;
  playtimeMillis: int;
  abilityCasts: AbilityCastsDto;
}

type AbilityCastsDto = {
  grenadeCasts: int;
  ability1Casts: int;
  ability2Casts: int;
  ultimateCasts: int;
}

type CoachDto = {
  puuid: string;
  teamId: string;
}

type TeamDto = {
  teamId: string;
  won: boolean;
  roundsPlayed: int;
  roundsWon: int;
  numPoints: int;
}

type RoundResultDto = {
  roundNum: int;
  roundResult: string;
  roundCeremony: string;
  winningTeam: string;
  bombPlanter: string;
  bombDefuser: string;
  plantRoundTime: int;
  plantPlayerLocations: PlayerLocationsDto[];
  plantLocation: LocationDto;
  plantSite: string;
  defuseRoundTime: int;
  defusePlayerLocations: PlayerLocationsDto[];
  defuseLocation: LocationDto;
  playerStats: PlayerRoundStatsDto[];
  roundResultCode: string;
}

type PlayerLocationsDto = {
  puuid: string;
  viewRadians: float;
  location: LocationDto;
}

type LocationDto = {
  x: int;
  y: int;
}

type PlayerRoundStatsDto = {
  puuid: string;
  kills: KillDto[];
  damage: DamageDto[];
  score: int;
  economy: EconomyDto;
  ability: AbilityDto;
}

type KillDto = {
  timeSinceGameStartMillis: int;
  timeSinceRoundStartMillis: int;
  killer: string;
  victim: string;
  victimLocation: LocationDto;
  assistants: string[];
  playerLocations: PlayerLocationsDto[];
  finishingDamage: FinishingDamageDto;
}

type FinishingDamageDto = {
  damageType: string;
  damageItem: string;
  isSecondaryFireMode: boolean;
}

type DamageDto = {
  receiver: string;
  damage: int;
  legshots: int;
  bodyshots: int;
  headshots: int;
}

type EconomyDto = {
  loadoutValue: int;
  weapon: string;
  armor: string;
  remaining: int;
  spent: int;
}

type AbilityDto = {
  grenadeEffects: string;
  ability1Effects: string;
  ability2Effects: string;
  ultimateEffects: string;
}

type int = number;
type long = number;
type float = number;
