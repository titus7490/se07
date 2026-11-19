# Try a port change

You are editing two stops on a voyage. Stop 42 has an assigned berth and stop 57 has a berth request on file. Both stops are moving to different ports. See which confirmations let the edit proceed.

1. Open this repository on GitHub and choose **Code → Download ZIP**. Unzip it and open a terminal in the folder containing `README.md`. The example was tested with Node.js 22 without using external packages.
2. In that Folder:

   ```sh
   node example.mjs 42
   ```

   ```text
   Affected stops: 42, 57.
   Still awaiting approval to remove berth data for: 57.
   ```

   Stop 42 already has approval. The edit pauses until you also approve removal for stop 57.
3. Now confirm both stops:

   ```sh
   node example.mjs 42 57
   ```

   Expected output: `All affected stops confirmed. The edit may proceed.`

To see why the *identity* of each stop matters, try `node example.mjs 42 99`. You supplied two IDs, but stop 57 is still missing. The edit should pause again.
