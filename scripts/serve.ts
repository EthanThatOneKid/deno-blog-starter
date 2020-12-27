import { BufReader } from "https://deno.land/std@0.82.0/io/bufio.ts";
import { serve, serveFile } from "../deps.ts";

const port = 8000;
const server = serve({ port });
console.log(`Listening on http://localhost:${port}/`);

const checkFileExists = async (path: string): Promise<boolean> => {
  try {
    const { isFile } = await Deno.lstat(path);
    return isFile;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    }
    throw error;
  }
};

for await (const request of server) {
  const path = `./site/${request.url}`;
  if (await checkFileExists(path)) {
    const response = await serveFile(request, path);
    request.respond(response);
    continue;
  }
  request.respond({ status: 404 });
}
