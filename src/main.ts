import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SpelunkerModule } from 'nestjs-spelunker';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const tree = SpelunkerModule.explore(app);
  const root = SpelunkerModule.graph(tree);
  const edges = SpelunkerModule.findGraphEdges(root);
  console.log('-'.repeat(20));
  const mermaidEdges = edges.map(
    ({ from, to }) => `  ${from.module.name}-->${to.module.name}`,
  );
  console.log(mermaidEdges.join('\n'));
  console.log('-'.repeat(20));

  global.appRoot = path.resolve(__dirname);

  await app.listen(3000);
}
bootstrap();
