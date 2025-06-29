import {BaseUrl} from "../client";
import axios from "axios";

const sessionId = 1

enum sessionState {
    selecting_tops,
    ready_to_roll,
    wait_for_payment,
    finished,
    abandoned
}

type Session = {
    id: number
    state: sessionState
}

interface GameRequest {
    games: number[];
}

const rouletteApi = {
    async createSession(gameIds: number[]) {
        const requestData: GameRequest = {
            games: gameIds
        };

        const response = await axios.post(`${BaseUrl}/roulette/session`, requestData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    getSessionStateTest(): Session {
        return {
            id: 11,
            state: sessionState.selecting_tops
        }
    },
    async getSessionState(id: number): Promise<Session> {
        const result = await axios.get<Session>(`${BaseUrl}/roulette/session`)
        return result.data
    }
}

export default rouletteApi