import { handler } from '../src'

describe('My First CDK App Tests', () => {
    it("returns name and list", async()=>{
        const output = await handler({name: 'Faruk'});
        expect(output).toStrictEqual('Good Job Munish');
    })

    it("returns no name and list", async()=>{
        const output = await handler({name: ''});
        expect(output).toStrictEqual('Good job without event1');
    })
});