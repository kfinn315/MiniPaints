import PaintResponse from './Models/PaintResponse';

export interface IPaintAPI {
    search: (hexColor: string, deltaRange: number) => Promise<PaintResponse[]>;
}

export default class PaintAPI implements IPaintAPI {
    constructor(private readonly baseUrl: string) { }

    search(hexColor: string, deltaRange: number): Promise<PaintResponse[]> {
        return fetch(this.baseUrl + "/paint_search",
            {
                method: "POST",
                body: JSON.stringify({ hex: hexColor, range: deltaRange }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            } as RequestInit
        )
            .then(response => {
                if (!response.ok) {
                    return Promise.reject('response not ok');
                }
                return response.json();
            }).then((jsonResponse) => {
                return jsonResponse.message;
            });
    }
}
