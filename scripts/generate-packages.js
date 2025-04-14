import { write } from '@kubb/fs';
import { build, getSource } from '@kubb/core';
import { pluginOas } from '@kubb/plugin-oas';
import { pluginClient } from '@kubb/plugin-client';
import { pluginReactQuery } from '@kubb/plugin-react-query';
import { pluginTs } from '@kubb/plugin-ts';

async function buildLettaReact() {
  const { files } = await build({
    config: {
      root: '.',
      input: {
        path: './openapi.json',
      },
      output: {
        path: './packages/letta-react/src',
      },
      plugins: [
        pluginOas(),
        pluginTs(),
        pluginReactQuery({
          output: {
            path: './hooks',
          },
          group: {
            type: 'tag',
            name: ({ group }) => `${group}Hooks`,
          },
          client: {
            dataReturnType: 'full',
          },
          mutation: {
            methods: ['post', 'put', 'delete'],
          },
          infinite: {
            queryParam: 'next_page',
            initialPageParam: 0,
            cursorParam: 'nextCursor',
          },
          query: {
            methods: ['get'],
            importPath: '@tanstack/react-query',
          },
          suspense: {},
        }),
      ],
    },
  });

  for (const file of files) {
    const source = await getSource(file);

    await write(source, file.path);
  }
}

buildLettaReact();
