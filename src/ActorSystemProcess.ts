import { IMessage } from "./Actor";

export class ActorSystemProcess {
    private readonly worker: Worker;

    constructor(private readonly url: string){
        this.worker = new Worker(url);
    }

    send(message: IMessage): void{
        this.worker.postMessage(message);
    }

    listen(callback: (data: any) => void): void{
        this.worker.addEventListener('message', ({data}) => {
            callback(data);
        });
    }
}