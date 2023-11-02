
export interface TelemetryLive {
    rocket_name: string;
    rocket_code: string;
    stage_name: string;
    stage_code: string;
    engine_code: string;
    engine_name: string;
    speed: number;
    altitude: number;
    temperature: number;
    thrust: number;
    isp: number;
    timestamp: string;
}
