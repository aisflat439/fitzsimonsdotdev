## Notes about running MCP on VSCode

1 - make sure you make `mcp` discoverable

```json
// settings.json
"chat.mcp.discovery.enabled": true
// or this link
// vscode://settings/chat.mcp.enabled
```

2 - create a `.vscode/mcp.json`

this is just like your `settings.json` or `extensions.json`. You can do this at the workspace level or user level. All depends on your own needs.

3 - Build a simple MCP server.

Something like:

```ts
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

const server = new McpServer(
  {
    name: "Hello World server!",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
    instructions: "This just replies with Hello World.",
  }
);

server.tool("Hello World", "this responds to Hello world", async () => {
  return {
    content: [
      {
        type: "text",
        text: `You have triggered the MCP server.`,
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Example MCP Server running on stdio");
}

main().catch((error) => {
  console.error("Fatal error in main():", error);
  process.exit(1);
});
```

### TIP

The run the `mcp inspector`. You can install that and see if you can figure it out but you should payalso notice the command box and the arguments box. That's where you pass the path to the server.

I put this in my `package.json` because I can't remember that sort of stuff.

```json
  "scripts": {
    "dev": "tsx src/index.ts",
    "dev:mcp": "tsx src/index.ts",
    "test": "echo \"Error: no test specified\" && exit 1",
    "inspect": "npx @modelcontextprotocol/inspector tsx src/index.ts"
  },
```

4 - Add a server

You can do this with the command pallet or manually.
