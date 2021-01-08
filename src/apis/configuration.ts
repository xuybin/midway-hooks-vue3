import { Configuration } from '@midwayjs/decorator';

@Configuration({
  importConfigs: ['./configs/'],
  imports: ['@midwayjs/faas-middleware-static-file'],
})
export class ContainerConfiguration {}
