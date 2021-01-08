
// import { invoke } from '@midwayjs/serverless-invoke';
import { invoke } from '@midwayjs/fcli-plugin-invoke'
import  assert   from 'assert';
import { join } from 'path';

describe('/api/lambda/index.test.ts', () => {
  it('should POST /api/sendMessage', async () => {
    const result = await invoke({
      functionDir: join(__dirname, '../../../'),
      //functionName: 'lambda-index-sendMessage',
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
    expect(result.body).toEqual('Your message is 【POST SUCCESS】')
    //assert(result.data === 'Your message is 【POST SUCCESS】');
  });
});