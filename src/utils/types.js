export function NewGame() {
    return {
        id: Math.floor(Math.random() * 10000),
        p1score: 0,
        p2score: 0,
        winner: null,
        startDate: new Date(),
        startTime: Date.now(),
        endTime: null,
        tableStatus: [],
        innings: {},
    };
}

export function Inning() {
    return {
        '9S': false,
        BR: false,
        timeout: false,
        count: 0,
    };
}
