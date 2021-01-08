
import { invoke } from '@midwayjs/fcli-plugin-invoke'



export function createInvoker(cwd: string) {
  process.env.MIDWAY_TS_MODE = 'false'
  return (functionName: string) => {
    return invoke({
      functionDir: cwd,
      functionName,
      clean: false,
      trigger: 'http',
      data: [
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          path: '/api/sendMessage',
          body: {
            args: ['【POST SUCCESS】'],
          },
        },
      ],
    })
  }
}
