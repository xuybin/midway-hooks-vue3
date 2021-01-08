
// import { invoke } from '@midwayjs/serverless-invoke';
import path from 'path'
// import { invoke } from '@midwayjs/fcli-plugin-invoke'
import { invoke as invoke1 } from '@midwayjs/fcli-plugin-invoke'
import  assert   from 'assert';
import { join } from 'path';
const fixture = path.resolve(__dirname, '../../')
import { createInvoker } from './util'
const invoke = createInvoker(fixture)

describe('/api/lambda/index.ts', () => {
  it('invoke lambda-index-sendMessage', async () => {
    const result = await invoke('lambda-index-sendmessage')
    expect(result.body).toEqual('{\"answer\":\"Your message is 【POST SUCCESS】\",\"method\":\"POST\"}')
    //console.log(`result.body:${result.body}`)
    //expect(result.data).toEqual('Your message is 【POST SUCCESS】')
  })

  it('should POST /api/sendMessage', async () => {
    const result = await invoke1({
      functionDir: join(__dirname, '../../'),
      functionName: 'lambda-index-sendmessage',
      clean: false,
      trigger: 'http',
      data: [
        {
          headers: { 'Content-Type': 'application/json' },
          method: 'POST',
          path: '/api/sendMessage',
          body:  {args:["【POST SUCCESS】"]},
        }
      ],
    });
    expect(result.body).toEqual('{\"answer\":\"Your message is 【POST SUCCESS】\",\"method\":\"POST\"}')
  });
});