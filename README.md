# How to set up and run a Mincemeat 2 server

Last updated for v0.4.16 (April 2025)

These instructions are specifically for those wanting to self-host. You need Java 17 (21 might work but untested) to run the server. You'll need to port-forward for others to join you - there are plenty of videos online to help with this.

If you're using a hosting service, steps 1-5 can be followed as-is, but skip step 6 and instead put the server pack contents in a zip file and upload it to the service. Each service is different and you should refer to their instructions - I can't help you with that.

## Running the server
1. Open the Forge installer and click Install server. Select the Server-0.x.x folder, the same directory this file is in. Make sure you're connected to the Internet, then begin the installation.
2. Copy your `mods` folder from your Mincemeat 2 v0.x.x installation into this server folder. They are not provided with the server pack since some mods' licenses don't allow redistribution.
   Before doing this, turn OFF the "Show hidden files/folders" setting in the File Explorer/Finder so results from the `.index` folder don't confound your search results later on.
   Also copy the `.connector` folder if you've already launched the client version, this saves time on the first server launch since it won't need to transform Fabric mod files.
3. Delete the following files from the `mods` folder on the server (the new one in this folder). These are client-side mods that do not disable themselves on the server and therefore crash the server if left untouched:
   Mods in **bold** are newly-added mods in the most recent version of the pack.

   -   continuity
   -   EuphoriaPatcher
   -   LegendaryTooltips
   -   make_bubbles_pop
   -   NekosEnchantedBooks
   -   nolijium
   -   oculus
   -   YungsMenuTweaks

4. Set the JVM arguments in `user_jvm_args.txt` as desired, you will probably need more RAM than the amount I set. `-Xmx`_(NUMBER GOES HERE)_`G` to set maximum allocated memory.
5. Open `server.properties` and change the query port so it's different from the main port (it doesn't matter what you set it to). This allows Simple Voice Chat to work on your server. This step can be ignored if you don't plan on using this mod.
6. Double click `run.bat` if you're on Windows, or `run.sh` if you're on Mac or Linux. You may be prompted to type "true" to accept the Mojang EULA if you didn't do that before.

## Tips for server hosts
- If you're experiencing lag on a server, you or another player might be loading new chunks. Using Chunky (`/chunky`) to pregenerate chunks can combat this.
- I'd allocate 6-8 GB as a starting point. You can go lower if you only have 1-2 players, but you should increase this if it's consistently using >90% of the allocated RAM.
- The performance statistics window that opens while the server is starting can be disabled safely by adding `nogui` to the end of your arguments.
- If players get an "invalid player data" error when joining, they will be able to join after trying again, but will need to restart their game and join a third time to get advancements. I know this is annoying, but I know the cause of this and am working on a fix for it.
