@echo off
pushd "%~dp0mods" || (
  echo ERROR: mods\ folder not found.
  exit /b 1
)

set patterns=BadOptimizations better_smithing_ui colorwheel continuity EuphoriaPatcher LegendaryTooltips make_bubbles_pop NekosEnchantedBooks oculus screenshot_viewer YungsMenuTweaks

for %%P in (%patterns%) do (
  for %%F in (*%%P*.jar) do (
    echo Deleting "%%F"
    del /q "%%F"
  )
)

popd

echo.
echo Done.
pause