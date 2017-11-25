export enum PacketType {
    FAILURE = 0,
    CREATESUCCESS = 21,
    CREATE = 46,
    PLAYERSHOOT = 92,
    MOVE = 84,
    PLAYERTEXT = 76,
    TEXT = 26,
    SERVERPLAYERSHOOT = 90,
    DAMAGE = 10,
    UPDATE = 5,
    UPDATEACK = 62,
    NOTIFICATION = 8,
    NEWTICK = 68,
    INVSWAP = 1,
    USEITEM = 13,
    SHOWEFFECT = 61,
    HELLO = 41,
    GOTO = 95,
    INVDROP = 11,
    INVRESULT = 47,
    RECONNECT = 3,
    PING = 83,
    PONG = 80,
    MAPINFO = 67,
    LOAD = 97,
    PIC = 30,
    SETCONDITION = 65,
    TELEPORT = 40,
    USEPORTAL = 4,
    DEATH = 104,
    BUY = 52,
    BUYRESULT = 89,
    AOE = 88,
    GROUNDDAMAGE = 81,
    PLAYERHIT = 16,
    ENEMYHIT = 102,
    AOEACK = 50,
    SHOOTACK = 79,
    OTHERHIT = 51,
    SQUAREHIT = 86,
    GOTOACK = 19,
    EDITACCOUNTLIST = 56,
    ACCOUNTLIST = 59,
    QUESTOBJID = 75,
    CHOOSENAME = 78,
    NAMERESULT = 48,
    CREATEGUILD = 93,
    GUILDRESULT = 42,
    GUILDREMOVE = 33,
    GUILDINVITE = 22,
    ALLYSHOOT = 49,
    ENEMYSHOOT = 64,
    REQUESTTRADE = 36,
    TRADEREQUESTED = 24,
    TRADESTART = 17,
    CHANGETRADE = 7,
    TRADECHANGED = 96,
    ACCEPTTRADE = 91,
    CANCELTRADE = 100,
    TRADEDONE = 25,
    TRADEACCEPTED = 6,
    CLIENTSTAT = 39,
    CHECKCREDITS = 103,
    ESCAPE = 101,
    FILE = 35,
    INVITEDTOGUILD = 28,
    JOINGUILD = 77,
    CHANGEGUILDRANK = 99,
    PLAYSOUND = 94,
    GLOBALNOTIFICATION = 9,
    RESKIN = 44,
    PETUPGRADEREQUEST = 15,
    ACTIVEPET_UPDATE_REQUEST = 12,
    ACTIVEPETUPDATE = 55,
    NEWABILITY = 20,
    PETYARDUPDATE = 31,
    EVOLVEPET = 34,
    DELETEPET = 85,
    HATCHPET = 37,
    ENTERARENA = 57,
    IMMINENTARENA_WAVE = 53,
    ARENADEATH = 69,
    ACCEPTARENA_DEATH = 14,
    VERIFYEMAIL = 18,
    RESKINUNLOCK = 23,
    PASSWORDPROMPT = 38,
    QUESTFETCH_ASK = 60,
    QUESTREDEEM = 27,
    QUESTFETCH_RESPONSE = 66,
    QUESTREDEEM_RESPONSE = 58,
    PETCHANGE_FORM_MSG = 98,
    KEYINFO_REQUEST = 87,
    KEYINFO_RESPONSE = 74,
    CLAIMLOGIN_REWARD_MSG = 63,
    LOGINREWARD_MSG = 45,
    QUESTROOM_MSG = 82
}